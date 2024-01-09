import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import React from "react";

function Sorting() {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            background="none"
            fontSize="smaller"
          >
            Sort By: Featured
          </MenuButton>
          <MenuList>
            <MenuItem>Price: ASC</MenuItem>
            <MenuItem>Price: DSC</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default Sorting;
