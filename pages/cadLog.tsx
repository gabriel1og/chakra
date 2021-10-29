import { Heading, Grid, Flex, Link, Button, Text, InputGroup, InputRightElement, InputLeftElement } from '@chakra-ui/react'
import Divider from '../components/Divider'
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButton } from '@chakra-ui/button';
import { FaCalendar, FaCalendarAlt, FaMailchimp, FaMoon, FaUserCheck, FaUserPlus} from "react-icons/fa";
import React from 'react';
import { EmailIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import CadF from '../components/Cadastro'
import LogF from '../components/Login'
import { Badge } from "@chakra-ui/react"


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.800");
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    
    <Flex
      as="main"
      direction="row"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgPosition="center"
      position="fixed"
      width="100%"
      top="0"
      left="0"
      background={formBackground}
    >
        <Flex
          w={["50%", "50%", "60%", "40%"]}
          display={["none", "none", "flex", "flex"]}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="55%" />
            <Divider />
            <img src="Ícone (Branco).png" alt="logomarca" width="8%" />
          </Flex>
        </Flex>

        <Flex
          w={["80%", "80%", "50%", "35%"]}
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          flexDir="column"
          alignItems="stretch"
          pt={[4, 6, 32, 32]}
          pb={8}
          pl={[8, 12, 12, 14]}
          pr={[8, 12, 12, 14]}
          ml={[0, 0, 4, 12]}
        >
          <Flex
            pt={10}
            pb={14}
            display={["flex", "flex", "none", "none"]}
            flexDir="column"
            alignItems="center"
          >
            <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="60%" />
            <Divider />
            <img src="Ícone (Branco).png" alt="logomarca" width="10%" />
          </Flex>

          <Divider />

          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab
                w={['55%', '50%', '50%', '50%']}
                _selected={{ color: "white", bg: "blue.200" }}
                _hover={{ transform: "scale(1.1)" }}>
                <Text as="i"
                  fontWeight="600"
                >
                  Cadastro
                </Text>
                <Badge ml={1} p={2} colorScheme="black"><FaUserPlus /></Badge>
              </Tab>

              <Tab
                w={['45%', '50%', '50%', '50%']}
                _selected={{ color: "white", bg: "green.200" }}
                _hover={{ transform: "scale(1.1)" }}>
                <Text as="i" //italico
                  fontWeight="600"
                >
                  Login
                </Text>
                <Badge ml={1} p={2} colorScheme="black"><FaUserCheck /></Badge>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CadF />
              </TabPanel>
              <TabPanel>
                <LogF />
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Flex>
      </Flex>
  );
}