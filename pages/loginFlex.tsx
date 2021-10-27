import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButton } from '@chakra-ui/button';
import { FaMoon, FaSun } from "react-icons/fa";


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.800");

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

      <Flex w={["50%","50%","60%","40%"]} display={['none', 'flex', 'flex', 'flex']} justifyContent="flex-end" alignItems="center" >
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="70%"/>
          <Divider />
          <img src="Ícone (Branco).png"  alt="logomarca" width="15%"/>
        </Flex>
      </Flex>

      <Flex 
       w={["80%","80%","50%","35%"]}
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

        <Flex pt={10} pb={6} display={['flex', 'none', 'none', 'none']} flexDir="column" alignItems="center">
          <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="70%"/>
          <Divider />
          <img src="Ícone (Branco).png"  alt="logomarca" width="15%"/>
        </Flex>

        <Divider/>

        <Heading
         display="flex"
         alignSelf="center"
         lineHeight="shorter"
         pt={20}
         mb={-2}
         color="gray.300">
          Login
        </Heading>
        <Text color="#92f7b6" mb={4} display="flex" justifyContent="center">_________</Text>



        <Input
          placeholder="E-mail"
          type="email"
          color="gray.400"
          mt={8}
          _hover={{ borderColor: 'green.300'}}
        />

        <Input
          placeholder="Senha"
          type="password"
          color="gray.400"
          mt={1.5}
          _hover={{ borderColor: 'green.300'}}
     
        />

        <Link
          alignSelf="flex-start"
          marginTop={1}
          fontSize="sm"
          color="red.300"
          fontWeight="bold"
          _hover={{ color: 'red.400', transform: 'scale(1.02)' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="green.300"
          height="50px"
          borderRadius="md"
          mt={4}
          _hover={{ backgroundColor: 'green.400'}}
        >
         <Text _hover={{transform: 'scale(1.06)'}}>
            ENTRAR
         </Text>
          
        </Button>

        <Text
          textAlign="center"
          fontSize="md"
          fontWeight="medium"
          color="gray.300"
          marginTop={2}
        >
          Não tem uma conta? {" "}
          <Link
            color="green.200"
            fontWeight="bold"
            _hover={{ color: 'green.300' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          <Text w="45%" fontSize="lg" display="flex" justifyContent="center" fontWeight="600" color="gray.300">Voltar para a</Text>
          <Button
            w="55%"
            height="3.5rem"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={[2, 2, 2, 6]}
            borderRadius="md"
            _hover={{ backgroundColor: 'blue.700' }}
            color="gray.300"
          >
            <Link href="https://monocard.com.br/" _hover={{listStyle: "none"}}>
              <Text fontSize={["sm", "sm", "md", "md"]} _hover={{transform: "scale(1.06)"}}>
                HOME
              </Text>
            </Link>  
            
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}