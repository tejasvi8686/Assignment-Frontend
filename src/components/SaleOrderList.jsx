
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';
import { useState } from 'react';

const SaleOrderList = ({ orders, onEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  return (
    <Box>
      {orders.map((order) => (
        <Box key={order.id} display="flex" justifyContent="space-between" p={2} borderBottom="1px solid #ccc">
          <span>{order.invoice_no}</span>
          <Button onClick={() => handleEdit(order)}>...</Button>
        </Box>
      ))}
      <SaleOrderForm isOpen={isOpen} onClose={onClose} defaultValues={selectedOrder} onSubmit={onEdit} />
    </Box>
  );
};

export default SaleOrderList;
