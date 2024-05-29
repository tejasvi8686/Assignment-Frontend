import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  useColorModeValue,
  Heading
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import OrderTable from "./OrderTable";
import OrderModal from "./OrderModal";
import ThemeToggle from "./ThemeToggle";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

function Dashboard() {
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [productSchemes, setProductSchemes] = useState([]);

  useEffect(() => {
    // Fetch orders from the orders.json file
    fetch("/assets/orders.json")
      .then(response => response.json())
      .then(data => {
        const activeOrders = data.filter(order => !order.paid);
        const completedOrders = data.filter(order => order.paid);
        setActiveOrders(activeOrders);
        setCompletedOrders(completedOrders);
      })
      .catch(error => console.error("Error fetching orders:", error));

    // Fetch products from the products.json file
    fetch("/assets/products.json")
      .then(response => response.json())
      .then(data => setProductSchemes(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddOrder = (newOrder) => {
    setActiveOrders((prevOrders) => [...prevOrders, newOrder]);
    setIsModalOpen(false);
  };

  const handleEditOrder = (editedOrder) => {
    setActiveOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === editedOrder.id ? editedOrder : order
      )
    );
    setIsModalOpen(false);
  };

  const handleModalOpen = (order = null) => {
    setIsEdit(!!order);
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentOrder(null);
  };

  // Color mode dependent styles
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const tabColorScheme = useColorModeValue("teal", "blue"); 

  return (
    <Box p={4} className="container mx-auto" bg={bgColor} color={textColor} minH="100vh">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg">Dashboard</Heading>
        <ThemeToggle />
      </Flex>
      <Tabs variant="soft-rounded" colorScheme={tabColorScheme}>
        <Flex justify="space-between" align="center" mb={4}>
          <TabList>
            <Tab className="focus:outline-none">Active Sale Orders</Tab>
            <Tab className="focus:outline-none">Completed Sale Orders</Tab>
          </TabList>
          <Button
            leftIcon={<AddIcon />}
            colorScheme={tabColorScheme}
            onClick={() => handleModalOpen()}
            className="shadow-md hover:shadow-lg focus:outline-none"
          >
            Sale Order
          </Button>
        </Flex>
        <TabPanels>
          <TabPanel>
            <OrderTable
              orders={activeOrders}
              setActiveOrders={setActiveOrders}
              onEdit={handleModalOpen}
              onSave={handleEditOrder}
            />
          </TabPanel>
          <TabPanel>
            <OrderTable
              orders={completedOrders}
              setActiveOrders={setActiveOrders} 
              onEdit={handleModalOpen}
              isReadOnly
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <OrderModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={isEdit ? handleEditOrder : handleAddOrder}
        order={currentOrder}
        isEdit={isEdit}
        productSchemes={productSchemes}
      />
    </Box>
  );
}

export default Dashboard;
