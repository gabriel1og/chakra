import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButton } from '@chakra-ui/button';
import { FaMoon, FaSun} from "react-icons/fa";


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.800");

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . icon'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
      background="gray.400"
    >

      <IconButton
        gridArea="icon"
        icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
        id="modos"
        aria-label="icone"
        onClick={toggleColorMode}
        flexDirection="column"
        alignSelf="flex-start"
        p={2}
        mb={6}
        mt={4}
        w="10%"
        display="flex"
        
      />

      <Flex gridArea="logo" flexDir="column" alignItems="center" >
        <img src="/Logo-Monograma (PRETO).png" alt="logomarca" width="80%"/>
        <Divider />
        <img src="Ícone (Preto).png" alt="logomarca" width="15%"/>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
        ml={12}
      >
        <Heading
         display="flex"
         alignSelf="center"
         lineHeight="shorter"
         mb={-2}
         color="gray.300">
          Faça seu login
        </Heading>
        <Text color="purple.600" mb={4} ml={10}>__________________________________</Text>



        <Input
          placeholder="E-mail"
          type="email"
          color="gray.400"
        />

        <Input
          placeholder="Senha"
          type="password"
          color="gray.400"
          marginTop={1.5}
        />

        <Link
          alignSelf="flex-start"
          marginTop={1}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: 'purple.500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={4}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="md"
          color="gray.300"
          marginTop={2}
        >
          Não tem uma conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="md" fontWeight="600" color="gray.300">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'blue.700' }}
            color="gray.300"
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
