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
import { DownloadIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaTrash,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaTiktok, 
  FaFacebook,
  FaBlackberry,
  FaGratipay,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout";
import { Image, Icon } from "@chakra-ui/react"
import { MdSanitizer } from "react-icons/md"
import { BsFillBriefcaseFill } from "react-icons/bs";

const IndexPage = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const backSave = useColorModeValue("gray.300", "gray.900");

  return (
    
    <Flex
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
     /* css={{
        '&::-webkit-scrollbar': {
          width: "15px"
        },
        '&::-webkit-scrollbar-track': {
          background: `rgb(51, 51, 51)`
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `rgb(0, 0, 0)`, 
          borderRadius: '10px',     
          border: `3px solid rgb(48, 48, 48)` 
        },
      }}*/
    >
      {/*<Heading
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
          <Input w="70%" placeholder="Comentários adicionais..."></Input>
          <Button
            w="30%"
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
      <Divider />*/}

      <Divider />

      <IconButton
        icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
        id="modos"
        aria-label="icone"
        onClick={toggleColorMode}
        alignSelf="center"
        p={2}
        mb={6}
      />

      <Flex
        mt={2}
        mb={2}
        direction="row"
        background={formBackground}
        rounded={10}
        display="flex"
        width="500px"
        height="16vh"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="gray.500"
        borderBottomWidth="4px"
      >
        <Box>
          <Stack direction="row">
            <Image
              boxSize="150px"
              mt={1}
              height="16vh"
              objectFit="cover"
              borderRadius="10px"
              borderRightRadius="1px"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
            />
          </Stack>
        </Box>

        <Flex 
          direction="column" 
          p={6}
          display=" flex"
          justify-content="center" 
          flex-direction="column" 
          width="100%" >
          <Box direction="row" justifyContent="space-between">
            
            <Link 
              _hover={{transform: "scale(1.12)"}}
              direction="row" 
              float="right" 
              href="#" 
              p={2} 
              fontFamily="cursive"
              background={backSave}
              fontWeight="500"
              borderRadius="10px">
              Salvar  <DownloadIcon boxSize={4} />
            </Link>
            
            <Text fontFamily="arial">Gabriel Oliveira</Text>
            <Text fontSize="sm" mb={6} opacity={0.7}>@gabriel123</Text>
            
          </Box>

          <Spacer />

          <Box mr={2}
            mt={2} 
            display="flex" 
            flexDirection="row">
            <BsFillBriefcaseFill/>
            <Text ml={1} mt={-1}> Estágiario em Desenvolvimento</Text>
          
          </Box>
        </Flex>
      </Flex>

      <Flex
        mt={6}
        mb={2}
        w={[ 
         '80vw',
         '90vw',
         '90vw',
         '70vw',
          ]}
        height="8vh"
        direction="row"
        background={formBackground}
        p={2}
        rounded={10}
        justifyContent="space-between"
        alignItems="center"
        
        /* borderBottom="solid"
        borderBottomColor="green.400"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
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
          <Link
           justifyContent="flex-end"
           href="https://web.whatsapp.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
           >
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
        width="500px"
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="pink.400"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
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
          <Link
           justifyContent="flex-end"
           href="https://www.instagram.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
           >
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
        w={[300, 400, 500]}
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        
        /* borderBottom="solid"
        borderBottomColor="blue.400"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
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
          <Link
           justifyContent="flex-end"
           href="https://br.linkedin.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={[300, 400, 500]}
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="gray.900"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaTiktok size={30}></FaTiktok>
        </Box>

        <Box ml={2}>
          <Text>Tiktok</Text>
          <Text fontSize="sm">Tiktok</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://www.tiktok.com/pt-BR/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={[300, 400, 500]}
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="blue.500"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaFacebook size={30}></FaFacebook>
        </Box>

        <Box ml={2}>
          <Text>Facebook</Text>
          <Text fontSize="sm">Facebook</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://pt-br.facebook.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={[320, 400, 500]}
        height="8vh"
        justifyContent="space-center"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="yellow.400"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaSnapchat size={30}></FaSnapchat>
        </Box>

        <Box ml={2}>
          <Text>Snapchat</Text>
          <Text fontSize="sm">Snapchat</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://www.snapchat.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={['100%','100%','60%','35%']}
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="black"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaTiktok size={30}></FaTiktok>
        </Box>

        <Box ml={2}>
          <Text>Tiktok</Text>
          <Text fontSize="sm">Tiktok</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://www.tiktok.com/pt-BR/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={['100%','100%','60%','35%']}
        height="8vh"
        justifyContent="space-center"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="orange.600"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaSoundcloud size={30}></FaSoundcloud>
        </Box>

        <Box ml={2}>
          <Text>Soundcloud</Text>
          <Text fontSize="sm">Soundcloud</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://www.snapchat.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={['100%','100%','60%','35%']}
        height="8vh"
        justifyContent="space-between"
        alignItems="center"
        
        /* borderBottom="solid"
        borderBottomColor="blue.500"
        borderBottomWidth="3px" */

        borderLeft="solid"
        borderLeftColor="blue.500"
        borderLeftWidth="3px"
        
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaFacebook size={30}></FaFacebook>
        </Box>

        <Box ml={2}>
          <Text>Facebook</Text>
          <Text fontSize="sm">Facebook</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://pt-br.facebook.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
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
        w={['100%','100%','60%','35%']}
        height="8vh"
        justifyContent="space-center"
        alignItems="center"
        borderBottom="solid"
        borderBottomColor="yellow.400"
        borderBottomWidth="3px"
        boxShadow="0 0 10px #111, 0 0 40px #111, 0 0 10px #111"
        _hover={{transform: "scale(1.02)"}}
      >
        <Box ml={2}>
          <FaSnapchat size={30}></FaSnapchat>
        </Box>

        <Box ml={2}>
          <Text>Snapchat</Text>
          <Text fontSize="sm">Snapchat</Text>
        </Box>

        <Spacer />

        <Box mr={2}>
          <Link
           justifyContent="flex-end"
           href="https://www.snapchat.com/"
           _hover={{listStyle: "none"}}
           fontWeight="700"
          >
            Acessar
          </Link>
        </Box>
      </Flex>

      <Flex 
        flexDirection="row"
        alignItems="center"
        w={['100%','100%','60%','35%']}
        justifyContent="space-between"
        mb={4}
      >
      {/*<Button mt={4} mr={4}><FaUserLock/></Button>
      <Link mt={4} _hover={{listStyle: "none", transform: "scale(1.05)"}}>monocard.com.br</Link>
      <Button mt={4} onClick={onOpen} ml={4}><FaShareAlt/></Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="1.6rem">Compartilhe seu Monocard</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Flex flexWrap="wrap" mb={6}>
            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaWhatsapp size={22}></FaWhatsapp>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Whatsapp</Link> 
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaFacebook size={22}></FaFacebook>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Facebook</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaTwitter size={22}></FaTwitter>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Twitter</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaLinkedin size={22}></FaLinkedin>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Linkedin</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaPinterest size={22}></FaPinterest>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Pinterest</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaReddit size={22}></FaReddit>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Reddit</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaSkype size={22}></FaSkype>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Skype</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaTelegram size={22}></FaTelegram>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Telegram</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <BiMailSend size={22}></BiMailSend>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Email</Link>
            </Box>

            <Box p={3} mr={6} width="40%" display="flex" alignItems="center"  _hover={{transform: "scale(1.02)"}}>
              <FaInstagram size={22}></FaInstagram>
              <Link _hover={{listStyle: "none"}} ml={2} fontSize="1.3rem" fontWeight={600}>Instagram</Link>
            </Box>
           </Flex>
          </ModalBody>
        </ModalContent>
        </Modal>*/}
    </Flex>
    </Flex>
  );
};

export default IndexPage;