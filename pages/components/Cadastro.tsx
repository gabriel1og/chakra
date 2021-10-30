import { Heading, Grid, Flex, Link, Button, Text, InputGroup, InputRightElement, InputLeftElement, Tooltip } from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButtonProps, IconButton} from '@chakra-ui/button';
import { FaCalendar, FaCalendarAlt, FaMailchimp, FaMoon, FaUserAlt, FaPhone, FaRegCalendarAlt, FaSun, FaVoicemail, FaUser, FaLock, FaUnlock, FaEye, FaEyeDropper, FaEyeSlash } from "react-icons/fa";
import React from 'react';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const Cadastro = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.800");
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

    return (
        <>
        <Heading
          display="flex"
          alignSelf="center"
          justifyContent="center"
          lineHeight="shorter"
          pt={6}
          mb={-2}
          color="gray.300"
        >
          Cadastro
        </Heading>
        <Text color="blue.200" mb={4} display="flex" justifyContent="center">
          ___________
        </Text>

        <InputGroup mt={8} _hover={{ borderColor: "blue.600" }}>
          <InputLeftElement
            pointerEvents="none"
            mt={1.5}
            color="gray.400"
            isRequired
            children={<FaUser />}
          />
          <Input
            placeholder="Usuário *"
            pl={10}
            type="text"
            color="gray.400"
            _hover={{ borderColor: "blue.400" }}
            isRequired
          />
        </InputGroup>

        <InputGroup mt={1} _hover={{ borderColor: "blue.600" }}>
          <InputLeftElement
            pointerEvents="none"
            mt={1.5}
            color="gray.400"
            children={<EmailIcon />}
          />
          <Input
            placeholder="E-mail *"
            pl={10}
            type="email"
            color="gray.400"
            _hover={{ borderColor: "blue.400" }}
          />
        </InputGroup>

        <InputGroup mt={4} _hover={{ borderColor: "blue.600" }}>
          <InputLeftElement
            pointerEvents="none"
            mt={1.5}
            color="gray.400"
            children={<FaUnlock />}
          />
          <Input
            size="md"
            pl={10}
            type={show ? "text" : "password"}
            placeholder="Senha *"
            _hover={{ borderColor: "blue.400" }}
          />
        </InputGroup>

        <InputGroup mt={1} _hover={{ borderColor: "blue.600" }}>
          <InputLeftElement
            pointerEvents="none"
            mt={1.5}
            color="gray.400"
            children={<FaLock />}
          />
          <Input
            size="md"
            pl={10}
            type={show ? "text" : "password"}
            placeholder="Confirmar senha *"
            _hover={{ borderColor: "blue.400" }}
          />
        </InputGroup>
        
         <Link
          display="flex"
          justifyContent="flex-end"
          marginTop={1}
          fontSize="sm"
          color="gray.300"
          fontWeight="bold"
          _hover={{ color: "blue.200"}}
          
         >
         <Tooltip hasArrow label="Ver/ocultar senha" placement="left" mr={1} bg="gray.400">
          <IconButton 
            h="2rem"
            w="2rem" 
            onClick={handleClick} 
            borderRadius="7.5px"
          >
            {show ? <FaEyeSlash/> : <FaEye/>}
          </IconButton>
         </Tooltip>
         </Link>
        
        
        <Divider />

        <Button
          backgroundColor="blue.400"
          height="50px"
          width="100%"
          href="../pages/cadastroFlex"
          borderRadius="md"
          _hover={{ backgroundColor: "blue.500" }}
        >
          <Text  _hover={{ transform: "scale(1.06)" }}>CADASTRAR</Text>
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
            color="blue.300"
            fontWeight="bold"
            _hover={{ color: "blue.400" }}
          >
            Faça login
          </Link>
        </Text>

        <Divider />

        <Flex mb={8} alignItems="center" justifyContent="center" flexWrap="wrap">
          <Text
            w={["51%", "40%", "35%", "30%"]}
            fontSize={["0.7rem", "1.1rem", "1rem", "1.1rem"]}
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
            _hover={{ backgroundColor: "green.600" , transform: "scale(1.06)" }}
            /*_active={{ transform: "scale(1.08)" }}*/
            color="gray.300"
          >
            <Link
              href="https://monocard.com.br/"
              _hover={{ listStyle: "none" }}
            >
              <Text
                fontSize={["0.6rem", "sm", "0.9rem", "md"]}
                _hover={{ transform: "scale(1.06)" }}
                
              >
                HOME <ExternalLinkIcon mx="2px" mb={1} />
              </Text>
            </Link>
          </Button>
        </Flex>
        </>
    )
}

export default Cadastro;