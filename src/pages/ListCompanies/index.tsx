import React, { useEffect } from 'react';
import {
  Platform,
  TextInput,
  ScrollView,
  Alert,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  CompanyImage,
  CompanyDelivery,
  CompanyName,
  CompanyContainer,
} from './styles';
import { useCompany, Company } from '../../hooks/CompanyContext';
import { FlatList } from 'react-native-gesture-handler';

const CompanyItem = ({
  profileImages,
  trading_name,
  delivery_price,
}: Company) => (
  <CompanyContainer>
    <CompanyImage src={profileImages?.path} />
    <CompanyName>{trading_name}</CompanyName>
    <CompanyDelivery>R$ {delivery_price}</CompanyDelivery>
  </CompanyContainer>
);

const ListCompanies: React.FC = () => {
  const { get, loading, companies } = useCompany();

  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Delivery</Title>
      </Header>

      {loading && <ActivityIndicator color="white" />}

      <FlatList
        style={{ flexGrow: 1 }}
        data={companies}
        extraData={companies}
        renderItem={({ item }) => <CompanyItem {...item} />}
        keyExtractor={item => String(item?.id)}
      />
    </Container>
  );
};

export default ListCompanies;
