import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Title,
  OrderImage,
  OrderDelivery,
  OrderName,
  OrderContainer,
} from './styles';
import { useOrder, OrderProps } from '../../hooks/OrdersContext';

const OrderItem = (item: OrderProps) => {
  console.log(item);
  return <></>;
  return (
    <OrderContainer>
      <OrderName>{trading_name}</OrderName>
      <OrderDelivery>
        R$
        {delivery_price}
      </OrderDelivery>
    </OrderContainer>
  );
};

const ListOrder: React.FC = () => {
  const { getAll, loading, orders } = useOrder();
  console.log(orders);
  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Pedidos</Title>
      </Header>

      {loading && <ActivityIndicator color="white" />}

      <FlatList
        style={{ flexGrow: 1 }}
        data={orders}
        extraData={orders}
        renderItem={({ item }) => <OrderItem {...item} />}
        keyExtractor={item => String(item?.id)}
      />
    </Container>
  );
};

export default ListOrder;
