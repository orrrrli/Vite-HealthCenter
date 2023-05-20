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

import { useForm } from 'react-hook-form'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function FormUser () {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit } = useForm() // esta variables inicializan el formulario y el submit

  // Esta es mi funcion para enviar los datos al backend
  const onSubmit = (data) => {
    fetch('https://localhost:44348/user',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'default'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Response failed with status ${response.status}`)
        }
        console.log(response)
        return response.json()
      }).catch(error => {
        console.log('Error:', error)
      })
  }
  return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Create for a user
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={5}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="name" {...register('name')} />
                  </FormControl>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="username" {...register('username')}/>
                    <FormControl id="phone" isRequired>
                    <FormLabel>Phone number</FormLabel>
                    <Input type="phone" {...register('phone')}/>
                  </FormControl>
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" {...register('email')} />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input type={showPassword ? 'text' : 'password'} {...register('password')}/>
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
                      type='submit'
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
                </form>
                </Stack>
            </Box>
          </Stack>
        </Flex>
  )
}
