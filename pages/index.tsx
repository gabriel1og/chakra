import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import {
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  Spacer
} from "@chakra-ui/layout";
import { MoonIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaTrash,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaDownload
} from "react-icons/fa";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout";

const IndexPage = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        mt={12}
        mb={12}
        bgGradient="linear(to-r, blue.200, blue.500, purple.300)"
        bgClip="text"
      >
        1º Teste em Chakra UI
      </Heading>
      <Flex
        mb={6}
        direction="column"
        background={formBackground}
        p={12}
        rounded={10}
      >
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          id="modos"
          aria-label="icone"
          onClick={toggleColorMode}
          alignSelf="flex-end"
          p={2}
          mt={-10}
          mr={-10}
        />

        <Heading mb={6} display="flex" justifyContent="center">
          Log In
        </Heading>

        <Input
          placeholder="eusouotal@email.com"
          variant="filled"
          mb={3}
          type="email"
        />

        <Input placeholder="********" variant="filled" mb={2} type="password" />

        <HStack mb={6}>
          <Input width="70%" placeholder="Comentários adicionais..."></Input>
          <Button
            width="30%"
            border="solid"
            borderColor="green.200"
            borderWidth="2px"
          >
            Confirmar
          </Button>
        </HStack>

        <Button colorScheme="teal">Log In</Button>

        <HStack mt={2} mb={-8} alignSelf="flex-end">
          <Text color="gray.400" fontWeight="bold" fontSize="sm">
            Deseja apagar os seus dados?
          </Text>
          <Button
            p={2}
            color="red.400"
            alignSelf="flex-end"
            border="solid"
            borderColor="red.400"
            borderWidth="2px"
          >
            <FaTrash></FaTrash>
          </Button>
        </HStack>
      </Flex>

      <Divider />

      <Flex
        mt={2}
        mb={2}
        direction="row"
        background={formBackground}
        p={2}
        rounded={10}
        display="flex"
        width="47.5%"
        height="16vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="gray.500"
        borderBottomWidth="6px"
      >
        <Box ml={2}>
          <Stack direction="row" spacing={4}>
            <Avatar src="https://bit.ly/sage-adebayo" >
              <AvatarBadge  boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Stack>
        </Box>

        <Box ml={2} display="flex" flexDirection="row">
          <Text>Nome</Text>
          <Text fontSize="sm">@usuario</Text>
          <Link justifyContent="flex-end" href="https://www.instagram.com/">
            Salvar <FaDownload />
          </Link>
        </Box>

        <Spacer />

        <Box mr={2}>
          
        </Box>
      </Flex>

      <Flex
        mt={6}
        mb={2}
        width="47.5%"
        height="8vh"
        direction="row"
        background={formBackground}
        p={2}
        rounded={10}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="green.400"
        borderBottomWidth="3px"
      >
        <Box ml={2}>
          <FaWhatsapp size={30}></FaWhatsapp>
        </Box>

        <Box ml={2}>
          <Text>Whatsapp</Text>
          <Text fontSize="sm">Whatsapp</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link justifyContent="flex-end" href="https://web.whatsapp.com/">
            Acessar
          </Link>
        </Box>
      </Flex>

      <Flex
        mt={2}
        mb={2}
        direction="row"
        background={formBackground}
        p={2}
        rounded={10}
        display="flex"
        width="47.5%"
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="pink.400"
        borderBottomWidth="3px"
      >
        <Box ml={2}>
          <FaInstagram size={30}></FaInstagram>
        </Box>

        <Box ml={2}>
          <Text>Instagram</Text>
          <Text fontSize="sm">Instagram</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link justifyContent="flex-end" href="https://www.instagram.com/">
            Acessar
          </Link>
        </Box>
      </Flex>

      <Flex
        mt={2}
        mb={2}
        direction="row"
        background={formBackground}
        p={2}
        rounded={10}
        display="flex"
        width="47.5%"
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="blue.400"
        borderBottomWidth="3px"
      >
        <Box ml={2}>
          <FaLinkedin size={30}></FaLinkedin>
        </Box>

        <Box ml={2}>
          <Text>Linkedin</Text>
          <Text fontSize="sm">Linkedin</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link justifyContent="flex-end" href="https://br.linkedin.com/">
            Acessar
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
