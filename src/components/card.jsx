/* eslint-disable react/prop-types */
import React from 'react'
import { Center, Box, Stack, Text, Heading, Image, useColorModeValue, SimpleGrid, Button } from '@chakra-ui/react'

function ProductSimple (props) {
  const { brand, name, image, direction, readlink } = props
  return (
<Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'250px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 2,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(40px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(10px)'
            }
          }}>
          <Image
            rounded={'lg'}
            marginTop={6}
            height={285}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {brand}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <a href={direction}>
              <Button
                  /* flex={1} */
                  {...props}
                  px={4}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500'
                  }}
                  _focus={{
                    bg: 'blue.500'
                  }}>
                  New
                </Button>
              </a>
          </Stack>
        </Stack>
        <a href={readlink}>
          <Button
                    /* flex={1} */
                    {...props}
                    px={4}
                    margin={4}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'green.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'green.500'
                    }}
                    _focus={{
                      bg: 'blue.500'
                    }}>
                    Search
            </Button>
          </a>
      </Box>
    </Center>
  )
}

function ProductList () {
  const products = [
    {
      brand: 'Users',
      name: 'Create a user',
      image: 'https://cdn-icons-png.flaticon.com/512/3631/3631626.png',
      direction: 'user.html',
      readlink: 'user-read.html'
    },
    {
      brand: 'Medical Record',
      name: 'Create a record',
      image: 'https://cdn-icons-png.flaticon.com/512/3209/3209020.png',
      direction: 'medicalrecord.html',
      readlink: 'record-read.html'

    },
    {
      brand: 'Sheets',
      name: 'Create a sheet',
      image: 'https://cdn-icons-png.flaticon.com/512/2421/2421213.png',
      direction: 'sheet.html',
      readlink: 'sheet-read.html'
    }
  ]
  return (
            <SimpleGrid columns={{ base: 1, md: 3 }} textAlign={'center'} >
            {products.map((product, index) => (
                <ProductSimple key={index} {...product} />
            ))}
            </SimpleGrid>
  )
}
export default ProductList
