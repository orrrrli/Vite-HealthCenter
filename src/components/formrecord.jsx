/* eslint-disable react/react-in-jsx-scope */
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
export default function FormRecord () {
  return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Create a record
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'red.400'}
                    color={'white'}
                    _hover={{
                      bg: 'red.500'
                    }}>
                    Create
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
  )
}
