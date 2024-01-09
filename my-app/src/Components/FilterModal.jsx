import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ProductFilter from "../Components/ProductFilter";

const FilterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Product Filter</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* ProductFilter component here */}
          <ProductFilter />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
