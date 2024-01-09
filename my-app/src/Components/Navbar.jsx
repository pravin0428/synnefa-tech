import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
//   import ProductSearch from "./SearchBar";

const Links = [
  "Rings",
  "Earrings",
  "Bracelets & Bangles",
  "solitaires",
  "Mangalsutras",
  "Neckless",
  "Morejwellery",
  "Gifting",
  "Find Store",
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="white" boxShadow="lg">
        <Flex h={16} alignItems={"center"} gap={5}>
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon />
              ) : (
                <HamburgerIcon
                  width={{
                    base: "70px",
                    sm: "50px",
                    md: "50px",
                    lg: "50px",
                    xl: "50px",
                    "2xl": "50px",
                  }}
                />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"}>
            <Box>
              <Image
                width={{
                  base: "70px",
                  sm: "50px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                  "2xl": "50px",
                }}
                src="circle-logo-vector-templates.jpg"
                alt="logo"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link
                  fontSize="10px"
                  fontWeight="500"
                  key={link}
                  _hover={{ color: "purple.500" }}
                >
                  {link}
                </Link>
              ))}
            </HStack>
          </HStack>

          {/* second FlexBox  */}

          <Flex>
            {/* flex box for the serach bar */}

            <Box
              display="flex"
              gap="4px"
              //   border="2px solid green"
              alignItems="center"
            >
              <Flex
                border="1px solid purple"
                height="30px"
                borderRadius="6px"
                display={{
                  base: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  "2xl": "flex",
                }}
                alignItems="center"
                width={{
                  base: "200px",
                  sm: "100px",
                  md: "110px",
                  lg: "200px",
                  xl: "300px",
                  "2xl": "300px",
                }}
              >
                <Input
                  placeholder="Search by"
                  size="sm"
                  focusBorderColor="transparent"
                  border="none"
                />

                <Button
                  bgGradient="linear(to-r, pink.500, purple.600)"
                  color="white"
                  height="100%"
                  fontSize="sm"
                  borderLeftRadius="none"
                  _hover={{ bgGradient: "linear(to-r, pink.600, purple.700)" }}
                >
                  <FaSearch />
                </Button>
              </Flex>

              <Text
                display={{ base: "none", md: "none", lg: "flex" }}
                color="pink.500"
                fontSize="6px"
              >
                Enter pincode
              </Text>

              {/* flex for logos before avatar */}

              <Flex
                gap="8px"
                margin="auto"
                justifyContent="center"
                padding="10px"
              >
                <Box>
                  <Image
                    src="india-flag-icon-29.jpg"
                    style={{ width: "15px", height: "20px" }}
                  />
                </Box>

                <Box>
                  <FaUser style={{ width: "12px", height: "20px" }} />
                </Box>
                <Box>
                  <IoMdHeart style={{ width: "15px", height: "20px" }} />
                </Box>
                <Box>
                  <IoCart style={{ width: "15px", height: "20px" }} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} border="2px solid red">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link fontSize="smaller" fontWeight="bold" key={link}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
