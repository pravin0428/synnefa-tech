import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

const ProductFilter = ({ isMobile }) => {
  const toast = useToast();
  const [priceRanges, setPriceRanges] = useState([
    { label: "₹50,001 - ₹75,000", value: "50" },
    { label: "₹50,001 - ₹75,000", value: "100" },
    { label: "₹50,001 - ₹75,000", value: "200" },
  ]);

  const [productTypes, setProductTypes] = useState([
    "Earrings",
    "Rings",
    "Nackless",
    // Add more types as needed
  ]);

  const handlePriceRangeChange = (value) => {
    console.log("Selected Price Range:", value);
  };

  const handleProductTypeChange = (type) => {
    // Handling selected product type
    console.log("Selected Product Type:", type);
  };

  const handleClearAllFilters = () => {
    toast({
      title: "Clear Filters",
      description: "All Filter removed successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box
      width={isMobile ? "50%" : "20%"}
      paddingLeft="4"
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="4"
        borderBottom="1px solid grey"
        //  border="2px solid red"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          fontSize="13px"
          fontWeight="500"
          width="100%"
          p={1}
          mt={-7}
        >
          <span>FILTERS</span>
          <Button
            fontSize="13px"
            fontWeight="500"
            background="none"
            onClick={handleClearAllFilters}
            color="pink.500"
            height={6}
          >
            CLEAR ALL
          </Button>
        </Box>
      </Box>

      <FormControl borderBottom="1px solid grey">
        <FormLabel>Price</FormLabel>
        {priceRanges.map((range) => (
          <Box
            key={range.label}
            display="flex"
            gap={2}
            alignItems="center"
            fontSize="sm"
            mb={2}
          >
            <Checkbox onChange={() => handlePriceRangeChange(range.value)} />
            {range.label}
          </Box>
        ))}
        <Box textAlign="start">
          {" "}
          <Button marginTop="2" background="none" fontSize="sm">
            2 More...
          </Button>{" "}
        </Box>
        <Divider marginTop="2" />
      </FormControl>

      <FormControl marginTop="4" borderBottom="1px solid grey">
        <FormLabel>Product Type</FormLabel>
        {productTypes.map((type) => (
          <Box
            key={type}
            display="flex"
            gap={2}
            alignItems="center"
            fontSize="sm"
            mb={2}
          >
            <Checkbox onChange={() => handleProductTypeChange(type)} />
            {type}
          </Box>
        ))}
      </FormControl>
    </Box>
  );
};

export default ProductFilter;
