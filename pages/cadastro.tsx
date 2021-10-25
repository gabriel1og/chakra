import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
      background="gray.900"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/Logo-Monograma (Branco).png" alt="logomarca" width="80%"/>

        <Divider />

        <Heading 
          size="2xl"
          lineHeight="shorter" 
          mt={16} 
          ml={3.5} 
          p={4}
          /*borderBottom="solid 5px gray"*/
          border="solid 7px gray"
          borderRadius="10px"
          color="gray.300">
          Cadastre aqui
        </Heading>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >

        <Input
          placeholder="Usuário"
          type="text"
          color="gray.500"
          height="6vh"
        />

        <Input
          placeholder="E-mail"
          type="email"
          color="gray.500"
          marginTop={2}
          height="6vh"
        />

        <Input
          placeholder="Senha"
          type="password"
          color="gray.500"
          marginTop={3}
          height="6vh"
        />

        <Button
          backgroundColor="purple.500"
          height="8vh"
          borderRadius="sm"
          marginTop={5}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          CADASTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="md"
          color="gray.300"
          marginTop={5}
        >
          Já tem uma conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Faça Login
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="md" color="gray.300" fontWeight="medium">Ou cadastre como</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={4}
            borderRadius="sm"
            _hover={{ backgroundColor: 'green.500' }}
            color="gray.300"
          >
            ADMINISTRADOR
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}