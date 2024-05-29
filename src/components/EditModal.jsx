import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const EditModal = ({ isOpen, onClose, order, onSave }) => {
  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    id: order?.id || "",
    customer_name: order?.customer_name || "",
    price: order?.price || "",
    invoice_date: order?.invoice_date ? formatDate(order.invoice_date) : "",
    items: order?.items || [],
    last_modified: order?.last_modified || "",
  });

  useEffect(() => {
    setFormData({
      id: order?.id || "",
      customer_name: order?.customer_name || "",
      price: order?.price || "",
      invoice_date: order?.invoice_date ? formatDate(order.invoice_date) : "",
      items: order?.items || [],
      last_modified: order?.last_modified || "",
    });
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const updatedFormData = {
      ...formData,
      last_modified: new Date().toISOString(), // Set last_modified to current date and time
    };
    onSave(updatedFormData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Order ID: {formData.id}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Invoice Date</FormLabel>
            <Input
              type="date"
              name="invoice_date"
              value={formData.invoice_date}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>All products</FormLabel>
            <Accordion allowToggle mt={4}>
              {formData.items.map((item, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Item SKU: {item.sku_id}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <FormControl>
                      <FormLabel>Price</FormLabel>
                      <Input
                        name={`items[${index}].price`}
                        value={item.price}
                        onChange={(e) => {
                          const newItems = formData.items.map((itm, idx) =>
                            idx === index
                              ? { ...itm, price: e.target.value }
                              : itm
                          );
                          setFormData({ ...formData, items: newItems });
                        }}
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Quantity</FormLabel>
                      <Input
                        name={`items[${index}].quantity`}
                        value={item.quantity}
                        onChange={(e) => {
                          const newItems = formData.items.map((itm, idx) =>
                            idx === index
                              ? { ...itm, quantity: e.target.value }
                              : itm
                          );
                          setFormData({ ...formData, items: newItems });
                        }}
                      />
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
