/* eslint-disable react/react-in-jsx-scope */
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Input,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react'

export default function FormUserRead () {
  return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Look a user
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={5}>
              <form>
              <FormControl isRequired>
                    <FormLabel>Search user by ID</FormLabel>
                    <Input type="text" />
                  </FormControl>
                <FormControl >
                    <FormLabel>Name</FormLabel>
                    <FormLabel id="Name" size={'lg'} color={'blackAlpha.500'}></FormLabel>
                  </FormControl>
                  <FormControl >
                    <FormLabel>Username</FormLabel>
                    <FormLabel id="UserName" size={'lg'} color={'blackAlpha.500'}></FormLabel>
                  </FormControl>
                  <FormControl >
                    <FormLabel>Email</FormLabel>
                    <FormLabel id="Email" size={'lg'} color={'blackAlpha.500'}></FormLabel>
                  </FormControl>
                  <FormControl >
                    <FormLabel>Phone Number</FormLabel>
                    <FormLabel id="Phone" size={'lg'} color={'blackAlpha.500'}></FormLabel>
                  </FormControl>
                </form>
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
                    Search
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
      document.getElementById('Name').innerHTML = data.Name
      document.getElementById('UserName').innerHTML = data.UserName
      document.getElementById('Email').innerHTML = data.Email
      document.getElementById('Phone').innerHTML = data.Phone
    }).catch(error => {
      console.log('Error:', error)
    })
})()
