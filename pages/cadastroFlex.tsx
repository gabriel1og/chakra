import { Heading, Grid, Flex, Link, Button, Text, InputGroup, InputRightElement, InputLeftElement } from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButton } from '@chakra-ui/button';
import { FaCalendar, FaCalendarAlt, FaMailchimp, FaMoon, FaUserAlt, FaPhone, FaRegCalendarAlt, FaSun, FaVoicemail, FaUser } from "react-icons/fa";
import React from 'react';
import { EmailIcon } from '@chakra-ui/icons'


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
        display={["none", "flex", "flex", "flex"]}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="70%" />
          <Divider />
          <img src="Ícone (Branco).png" alt="logomarca" width="15%" />
        </Flex>
      </Flex>

      <Flex
        w={["80%", "80%", "50%", "35%"]}
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        flexDir="column"
        alignItems="stretch"
        pt={[4, 32, 32, 32]}
        pb={8}
        pl={[8, 12, 12, 14]}
        pr={[8, 12, 12, 14]}
        ml={[0, 0, 4, 12]}
      >
        <Flex
          pt={10}
          pb={6}
          display={["flex", "none", "none", "none"]}
          flexDir="column"
          alignItems="center"
        >
          <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="70%" />
          <Divider />
          <img src="Ícone (Branco).png" alt="logomarca" width="15%" />
        </Flex>

        <Divider />

        <Heading
          display="flex"
          alignSelf="center"
          lineHeight="shorter"
          pt={6}
          mb={-2}
          color="gray.300"
        >
          Cadastro
        </Heading>
        <Text color="#92f7b6" mb={4} display="flex" justifyContent="center">
          ___________
        </Text>

        <InputGroup mt={8} _hover={{ borderColor: "green.300" }}>
          <InputLeftElement
            pointerEvents="none"
            mt={1.5}
            color="gray.400"
            children={<FaUser/>}
          />
          <Input placeholder="Usuário *" pl={10} type="text" color="gray.400" _hover={{ borderColor: "green.400" }}/>
        </InputGroup>

        <InputGroup mt={1} _hover={{ borderColor: "green.300" }}>
          <InputLeftElement
            pointerEvents="none"
            mt={1.5}
            color="gray.400"
            children={<EmailIcon/>}
          />
          <Input placeholder="E-mail *" pl={10} type="email" color="gray.400" _hover={{ borderColor: "green.400" }}/>
        </InputGroup>

        <Input
         size="md" 
         mt={4}
         type={show ? "text" : "password"}
         placeholder="Senha *"
         _hover={{ borderColor: "green.400" }}
        />
        
        <Input
         size="md" 
         mt={1}
         fontSize="md"
         type={show ? "text" : "password"}
         placeholder="Confirmar senha *"
         _hover={{ borderColor: "green.400" }}
        />
    

        <Link
          alignSelf="flex-end"
          marginTop={1}
          fontSize="sm"
          color="gray.300"
          fontWeight="bold"
          _hover={{ color: "green.200", transform: "scale(1.02)" }}
        >
          <Button h="2rem" size="sm" onClick={handleClick}>
              {show ? "Ocultar Senha" : "Ver Senha"}
            </Button>
        </Link>

        <Button
          backgroundColor="green.400"
          height="50px"
          borderRadius="md"
          mt={6}
          _hover={{ backgroundColor: "green.500" }}
        >
          <Text _hover={{ transform: "scale(1.06)" }}>CADASTRAR</Text>
        </Button>

        <Text
          textAlign="center"
          fontSize="md"
          fontWeight="medium"
          color="gray.300"
          marginTop={2}
        >
          Já tem uma conta?{" "}
          <Link
            color="green.200"
            fontWeight="bold"
            _hover={{ color: "green.300" }}
          >
            Faça login
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          <Text
            w={["30%", "40%", "35%", "30%"]}
            fontSize="1.1rem"
            display="flex"
            justifyContent="center"
            fontWeight="600"
            color="gray.300"
          >
            Ou cadastre como
          </Text>

          <Button
            w={["70%", "60%", "65%", "70%"]}
            height="3.5rem"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={[2, 2, 2, 6]}
            borderRadius="md"
            _hover={{ backgroundColor: "orangered" }}
            color="gray.300"
          >
            <Link
              href="https://monocard.com.br/"
              _hover={{ listStyle: "none" }}
            >
              <Text
                fontSize={["sm", "sm", "md", "md"]}
                _hover={{ transform: "scale(1.06)" }}
              >
                ADMINISTRADOR
              </Text>
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}