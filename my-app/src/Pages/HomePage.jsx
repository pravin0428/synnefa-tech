import React, { useEffect, useState } from "react";
import ProductFilter from "../Components/ProductFilter";
import {
  Box,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import ButtonSection from "../Components/ButtonSection";
import Sorting from "../Components/Sorting";

//this function is created to fetch dynamic data form api if api is provided or asked to some modification
// const getProduct = async() => {
//   let res = await fetch("https://fakestoreapi.com/products/category/jewelery")
//   let data  = await res.json()
//   return data
// }

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  //   const [products , setProducts] = useState([])
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  // Attach the handleResize function to window resize event
  window.addEventListener("resize", handleResize);

  //   useEffect(()=>{
  //    getProduct().then((res)=>{
  //     setProducts(res)
  //    })
  //   },[])

  const products = [
    {
      id: 1,
      title: "check delivery date",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81wKQPB5wpL._UL1500_.jpg",
      price: 71354,
      oldPrice: 76471,
      description: "Shiny bangles with a touch of sparkle.",
      isBestseller: true,
    },
    {
      id: 1,
      title: "check delivery date",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81wKQPB5wpL._UL1500_.jpg",
      price: 71354,
      oldPrice: 76471,
      description: "Shiny bangles with a touch of sparkle.",
      isBestseller: true,
    },
    {
      id: 1,
      title: "check delivery date",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81wKQPB5wpL._UL1500_.jpg",
      price: 71354,
      oldPrice: 76471,
      description: "Shiny bangles with a touch of sparkle.",
      isBestseller: true,
    },
    {
      id: 1,
      title: "check delivery date",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81wKQPB5wpL._UL1500_.jpg",
      price: 71354,
      oldPrice: 76471,
      description: "Shiny bangles with a touch of sparkle.",
      isBestseller: true,
    },
    {
      id: 1,
      title: "check delivery date",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81wKQPB5wpL._UL1500_.jpg",
      price: 71354,
      oldPrice: 76471,
      description: "Shiny bangles with a touch of sparkle.",
      isBestseller: true,
    },
    {
      id: 1,
      title: "check delivery date",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81wKQPB5wpL._UL1500_.jpg",
      price: 71354,
      oldPrice: 76471,
      description: "Shiny bangles with a touch of sparkle.",
      isBestseller: true,
    },
    // Add more products as needed with unique ids
  ];

  return (
    <>
      <Box mt={-12} textAlign="start" p={4} backgroundColor="#E9D8FD">
        <Text fontSize="12px" fontWeight="500">
          Diamond Bangles 111 Design
        </Text>
      </Box>
      <ButtonSection />
      <Box display="flex" justifyContent="flex-end" pr={2}>
        <Sorting />
      </Box>
      <Box display="flex">
        {isMobileView ? (
          <Modal isOpen={isOpen} onClose={onClose} size="70%">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Product Filter</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* ProductFilter component */}
                <ProductFilter isMobile={true} />
              </ModalBody>
            </ModalContent>
          </Modal>
        ) : (
          <ProductFilter />
        )}
        <Flex
          direction="column"
          flex="1"
          marginLeft={isMobileView ? 0 : 4}
          marginTop={isMobileView ? 4 : 10}
        >
          {isMobileView && (
            <Button
              onClick={onOpen}
              mb={2}
              ml={2}
              mr={2}
              backgroundColor="purple.100"
            >
              Filter
            </Button>
          )}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
}

export default HomePage;
