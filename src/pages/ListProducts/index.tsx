import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import { Title, ScreenName, Container, Header } from '../ListCompanies/styles';
import {
  ProductContainer,
  ProductImage,
  ProductDelivery,
  ProductName,
  SeparatorSection,
  SeparatorTitle,
} from './styles';
import { useProduct, Product } from '../../hooks/ProductsContext';
import Placeholder from '../../assets/images/a.png';

const ProductItem = ({
  productImages,
  name,
  price,
  onPress = { onPress },
}: Product) => (
  <TouchableOpacity onPress={onPress}>
    <ProductContainer>
      <ProductImage
        source={
          productImages?.path ? { uri: productImages?.path } : Placeholder
        }
      />
      <ProductName>{name}</ProductName>
      <ProductDelivery>R$ {price}</ProductDelivery>
    </ProductContainer>
  </TouchableOpacity>
);

const ListCompanies: React.FC = ({ route }) => {
  const { getProducts, loading, products, categories } = useProduct();
  const { params } = route;

  useEffect(() => {
    if (params?.company?.id) {
      getProducts(params?.company?.id);
    }
  }, [params?.company]);

  return (
    <Container>
      <Header>
        <Title>Delivery</Title>
        <ScreenName>{`${params?.company?.trading_name}`}</ScreenName>
      </Header>

      {loading && <ActivityIndicator color="white" />}

      <SectionList
        data={products}
        sections={categories}
        style={{
          flex: 1,
        }}
        onRefresh={() => getProducts(params?.company?.id)}
        refreshing={loading}
        extraData={products}
        renderSectionHeader={({ section: { title } }) => (
          <SeparatorSection>
            <SeparatorTitle>{title}</SeparatorTitle>
          </SeparatorSection>
        )}
        renderItem={({ item }) => (
          <ProductItem {...item} onPress={() => console.log(item?.id)} />
        )}
        keyExtractor={item => String(item?.id)}
      />
    </Container>
  );
};

export default ListCompanies;
