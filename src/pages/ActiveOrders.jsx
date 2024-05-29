// src/pages/ActiveOrders.js
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import SaleOrderList from '../components/SaleOrderList';

const ActiveOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, invoice_no: 'Invoice-001', customer: 'Customer A' },
    { id: 2, invoice_no: 'Invoice-002', customer: 'Customer B' },
  ]);

  const handleEditOrder = (updatedOrder) => {
    setOrders((orders) =>
      orders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    );
  };

  return (
    <Box>
      <SaleOrderList orders={orders} onEdit={handleEditOrder} />
    </Box>
  );
};

export default ActiveOrders;
