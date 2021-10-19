import { Button, useColorMode, useColorModeValue, Input, Flex, Spacer, Heading } from "@chakra-ui/react";
import { MoonIcon } from '@chakra-ui/icons'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={10}>
        <Heading
          mb={8}
          display="flex"
          justifyContent="center">
          Log In
        </Heading>

        <Input
          placeholder="gabrielog@gmail.com"
          variant="filled"
          mb={3}
          type="email" />

        <Input
          placeholder="********"
          variant="filled"
          mb={6}
          type="password" />

        <Button
          mb={6}
          colorScheme="teal">
          Log In
        </Button>

        <Button onClick={toggleColorMode}>
          <MoonIcon w={7} h={7} color="dark" />
        </Button>
      
      </Flex>
    </Flex>
  )
}

export default IndexPage