import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  CompanyImage,
  CompanyDelivery,
  CompanyName,
  CompanyContainer,
  ScreenName,
  CategoryName,
  CategoryContainer,
} from './styles';
import { useCompany, Company } from '../../hooks/CompanyContext';
import Placeholder from '../../assets/images/a.png';

const CompanyItem = ({
  profileImages,
  trading_name,
  delivery_price,
  onPress = { onPress },
}: Company) => (
  <TouchableOpacity onPress={onPress}>
    <CompanyContainer>
      <CompanyImage
        source={
          profileImages?.path ? { uri: profileImages?.path } : Placeholder
        }
      />
      <CompanyName>{trading_name}</CompanyName>
      <CompanyDelivery>
        R$
        {delivery_price}
      </CompanyDelivery>
    </CompanyContainer>
  </TouchableOpacity>
);

const CategoryItem = ({ name, isActive = false, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <CategoryContainer>
      <CategoryName isActive={isActive}>
        {`${String(name).toUpperCase()}`}
      </CategoryName>
    </CategoryContainer>
  </TouchableOpacity>
);

const ListCompanies: React.FC = ({ navigation }) => {
  const {
    get,
    loading,
    companies,
    getCategories,
    categories,
    loadingCategories,
    setSelected,
  } = useCompany();
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    get();
    getCategories();
  }, []);

  useEffect(() => {
    if (active > 0) {
      get(active);
    }
  }, [active]);

  return (
    <Container>
      <Header>
        <Title>Delivery</Title>
        <ScreenName>Estabelecimentos</ScreenName>
      </Header>

      {loading && <ActivityIndicator color="white" />}

      <FlatList
        data={categories}
        style={{
          flexGrow: 0,
          marginBottom: 20,
        }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        onRefresh={() => getCategories()}
        refreshing={loadingCategories}
        horizontal
        extraData={categories}
        renderItem={({ item }) => (
          <CategoryItem
            {...item}
            isActive={active === item?.id}
            onPress={() => setActive(item.id)}
          />
        )}
        keyExtractor={item => String(item?.id)}
      />

      <FlatList
        style={{ flex: 1 }}
        data={companies}
        onRefresh={() => get()}
        refreshing={loading}
        extraData={companies}
        renderItem={({ item }) => (
          <CompanyItem
            {...item}
            onPress={() =>
              navigation.navigate('ListProducts', {
                screen: 'ListProducts',
                params: { company: item },
              })
            }
          />
        )}
        keyExtractor={item => String(item?.id)}
      />
    </Container>
  );
};

export default ListCompanies;
