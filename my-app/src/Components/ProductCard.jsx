import React from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";

const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  description,
  isBestseller,
}) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      margin={{
        base: "10px",
        sm: "4px",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
      }}
    >
      <Image src={image} alt={title} objectFit="cover" />

      {isBestseller && (
        <Badge
          position="absolute"
          top="1"
          left="1"
          background="yellow.400"
          color="black"
        >
          BESTSELLER
        </Badge>
      )}

      <Box p="4" textAlign="start">
        <Box display="flex">
          <Text fontWeight="semibold">₹{price}</Text>
          {oldPrice && (
            <Text as="s" color="gray.500" marginLeft="2">
              ₹{oldPrice}
            </Text>
          )}
        </Box>
        <Text fontSize="10px" fontWeight="semibold" color="pink.500">
          {title}
        </Text>
        <Text fontSize="9px" color="GrayText">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
