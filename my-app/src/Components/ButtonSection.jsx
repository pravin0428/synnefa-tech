import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";

const searchItems = [
  "All",
  "Try at Home",
  "Store Pickup",
  "Fast Delivery",
  "New In",
];

const ButtonSection = () => {
  return (
    <Box paddingLeft={4} margin="20px 5px 30px 0px">
      <Flex gap={3} whiteSpace="normal" flexWrap="wrap" overflowX="auto">
        {searchItems.map((item, index) => (
          <Button
            key={index}
            width="min-content"
            h={{ base: "9", md: "8" }}
            textAlign="center"
            // border="1px solid grey"
            backgroundColor="purple.100"
            _hover={{ backgroundColor: "purple.500", color: "white" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="sm"
          >
            {item}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default ButtonSection;
