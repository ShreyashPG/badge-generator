import { Flex, Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function SiteFooter() {
  const { t } = useTranslation();

  return (
    <Flex
      direction="column"
      bgColor="lightgray"
      position="relative"
      width="100%"
      zIndex={1}
    >
      <Box
        height="150px"
        bg={useColorModeValue("black", "black")}
        color={useColorModeValue("white", "white")}
      >
        <HStack justifyContent="center" alignItems="center" mt="70px">
          <Text fontWeight={"extrabold"} fontSize="9" letterSpacing="2px">
           Badges Generator 
          </Text>
        </HStack>
        <HStack justifyContent="center" alignItems="center" mt="10px">
        <Text fontWeight={"extrabold"} fontSize="9" letterSpacing="2px">
           By Shreyash Ghanekar
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default SiteFooter;
