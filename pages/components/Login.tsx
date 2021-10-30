import React from "react";
import {
  Box,
  FormControl,
  InputProps as ChakraInputProps,
  Spacer,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import {
  Heading,
  Grid,
  Flex,
  Link,
  Button,
  Text,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import Divider from "./Divider";
import Input from "./Input";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { FaEye, FaEyeSlash, FaLock, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Login = () => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <Heading
        display="flex"
        alignSelf="center"
        justifyContent="center"
        lineHeight="shorter"
        pt={12}
        mb={-2}
        color="gray.300"
      >
        Login
      </Heading>

      <Text color="#92f7b6" mb={4} display="flex" justifyContent="center">
        _________
      </Text>

      <InputGroup mt={8} _hover={{ borderColor: "green.600" }}>
        <InputLeftElement
          pointerEvents="none"
          mt={1.5}
          color="gray.400"
          children={<FaUser />}
        />
        <Input
          placeholder="Usuário *"
          pl={10}
          type="text"
          color="gray.400"
          _hover={{ borderColor: "green.400" }}
        />
      </InputGroup>

      <InputGroup mt={1.5} _hover={{ borderColor: "green.600" }}>
        <InputLeftElement
          pointerEvents="none"
          mt={1.5}
          color="gray.400"
          children={<FaLock />}
        />
        <Input
          placeholder="Senha *"
          pl={10}
          type={show ? "text" : "password"}
          color="gray.400"
          _hover={{ borderColor: "green.400" }}
        />
      </InputGroup>

      <Flex>
        <Box p="2">
          <Link
            display="flex"
            justifyContent="flex-start"
            alignSelf="flex-start"
            fontSize="sm"
            color="red.300"
            fontWeight="bold"
            _hover={{ color: "red.400", transform: "scale(1.02)" }}
          >
            Esqueci minha senha
          </Link>
        </Box>

        <Spacer />

        <Box>
         <Tooltip hasArrow label="Ver/ocultar senha" placement="left" mr={1} bg="gray.400">
          <Link
            display="flex"
            justifyContent="flex-end"
            fontSize="sm"
            color="gray.300"
            fontWeight="bold"
            mt={1}
            _hover={{ color: "blue.200", transform: "scale(1.02)" }}
          >
            <IconButton
              h="2rem"
              w="2rem" 
              onClick={handleClick}
              borderRadius="7.5px"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </Link>
         </Tooltip>

          {/*<Tooltip label="Right" placement="right">
             <Button>Right</Button>
  </Tooltip>*/}
        </Box>
      </Flex>

      <Divider />

      <Button
        backgroundColor="green.300"
        height="50px"
        width="100%"
        borderRadius="md"
        mt={4}
        _hover={{ backgroundColor: "green.400" }}
      >
        <Text _hover={{ transform: "scale(1.06)" }}>ENTRAR</Text>
      </Button>

      <Text
        textAlign="center"
        fontSize="md"
        fontWeight="medium"
        color="gray.300"
        marginTop={2}
      >
        Não tem uma conta?{" "}
        <Link
          color="green.200"
          fontWeight="bold"
          _hover={{ color: "green.300" }}
        >
          Registre-se
        </Link>
      </Text>

      <Divider />

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        <Text
          w={["51%", "40%", "35%", "30%"]}
          fontSize="lg"
          display="flex"
          justifyContent="center"
          fontWeight="600"
          color="gray.300"
        >
          Voltar para a
        </Text>

        <Button
          w={["49%", "60%", "65%", "70%"]}
          height="3.5rem"
          flex="1"
          backgroundColor="gray.600"
          marginLeft={[2, 2, 2, 6]}
          borderRadius="md"
          _hover={{ backgroundColor: "blue.700" }}
          color="gray.300"
        >
          <Link href="https://monocard.com.br/" _hover={{ listStyle: "none" }} isExternal>
            <Text
              fontSize={["sm", "sm", "md", "md"]}
              _hover={{ transform: "scale(1.06)" }}
            >
              HOME <ExternalLinkIcon mx="2px" mb={1} />
            </Text> 
          </Link>
        </Button>
      </Flex>
    </>
  );
};

export default Login;
