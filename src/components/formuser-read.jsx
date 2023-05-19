/* eslint-disable react/react-in-jsx-scope */
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function FormUserRead () {
  const [showPassword, setShowPassword] = useState(false)

  return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Create a user
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={5}>
              <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="name" />
                </FormControl>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="username" />
                  <FormControl id="phone" isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <Input type="phone" />
                </FormControl>
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500'
                    }}>
                    Create
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}>Search Id</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
  )
}

(function () {
  // alert('Te ganaste un iphone');
  // Llamar funcion fetch para obtener datos.
  fetch('https://localhost:44348/user/2',
    {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response failed with status ${response.status}`)
      }
      console.log(response)
      return response.json()
    }).then(data => {
      console.log(data)
      document.getElementById('name').innerHTML = data.Name
    }).catch(error => {
      console.log('Error:', error)
    })
})()
