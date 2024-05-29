
import { useForm, Controller } from 'react-hook-form';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, Select } from '@chakra-ui/react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SaleOrderForm = ({ isOpen, onClose, defaultValues = {}, onSubmit }) => {
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create/Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Controller name="invoice_no" control={control} render={({ field }) => <Input {...field} placeholder="Invoice No" />} />
            <Controller name="invoice_date" control={control} render={({ field }) => <DatePicker {...field} />} />
            <Controller name="customer_id" control={control} render={({ field }) => <Select {...field} placeholder="Select Customer" />} />
            <Button type="submit">Submit</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;
