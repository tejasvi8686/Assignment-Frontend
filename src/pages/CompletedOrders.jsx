
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import SaleOrderList from '../components/SaleOrderList';

const CompletedOrders = () => {
  const [orders, setOrders] = useState([
    { id: 3, invoice_no: 'Invoice-003', customer: 'Customer C' },
    { id: 4, invoice_no: 'Invoice-004', customer: 'Customer D' },
  ]);

  return (
    <Box>
      <SaleOrderList orders={orders} onEdit={() => {}} />
    </Box>
  );
};

export default CompletedOrders;
