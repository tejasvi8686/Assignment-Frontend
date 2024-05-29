import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Avatar,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import EditModal from "./EditModal";
import { FaRupeeSign } from "react-icons/fa";

const OrderTable = ({ orders, setActiveOrders, onSave, isReadOnly }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditOrder = (editedOrder) => {
    setActiveOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === editedOrder.id ? editedOrder : order
      )
    );
    setIsModalOpen(false);
  };

  const formatDate = (timestamp) => {
    // Create a Date object from the timestamp
    const dateObject = new Date(timestamp);
  
    // Extract date and time components separately
    const date = dateObject.toLocaleDateString('en-US'); // Format the date only
    const time = dateObject.toLocaleTimeString('en-US', { // Format the time only
      hour: '2-digit',
      minute: '2-digit',
    });
  
    // Combine date and time with a space (no "at")
    return `${date} ${time}`;
  };
  

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified (Date & Time)</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>
                <HStack spacing="3">
                  <Avatar name={order.customer_name} src={order.profile_url} />
                  <span>{order.customer_name}</span>
                </HStack>
              </Td>
              <Td>
                <HStack spacing="2">
                  <Icon as={FaRupeeSign} />
                  <span>{order.price}</span>
                </HStack>
              </Td>
              {/* Display formatted date and time */}
              <Td>{formatDate(order.last_modified)}</Td>
              <Td>
                <IconButton
                  icon={<BiDotsHorizontalRounded />}
                  onClick={() => {
                    setSelectedOrder(order);
                    setIsModalOpen(true);
                  }}
                  isDisabled={isReadOnly}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        order={selectedOrder}
        setActiveOrders={setActiveOrders}
        onSave={onSave}
      />
    </>
  );
};

export default OrderTable;
