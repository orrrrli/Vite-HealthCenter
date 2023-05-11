/* eslint-disable react/prop-types */
import React from 'react'
import { Center, Box, Stack, Text, Heading, Image, useColorModeValue, Container, SimpleGrid } from '@chakra-ui/react'

function ProductSimple (props) {
  const { brand, name, price, image, salePrice } = props
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
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
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
            <Text fontWeight={800} fontSize={'xl'}>
              {salePrice}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

function ProductList () {
  const products = [
    {
      brand: 'Nike',
      name: 'Air Jordan 1 Mid',
      price: '$ 110.00',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzEoZmjki8qfm8VqoRx4G8t7fNGCHpd2n9A_T7Tt8YaCmwQL9OqCr2Ug3C0Q98QxWHojNlNGLiRAww1-zDyHXlt9orLvvBkkRLHWJMbRRJ&usqp=CAE',
      salePrice: '$ 90.00'
    },
    {
      brand: 'Adidas',
      name: 'Adidas Response',
      price: '$ 90.00',
      image: 'https://img01.ztat.net/article/spp-media-p1/bf338944e1ab44f5b6e973da47833886/4e63d3a610454020aab4e5cc0a073500.jpg?imwidth=762&filter=packshot',
      salePrice: '$ 70.00'
    },
    {
      brand: 'Nike',
      name: 'Nike Air Max 270',
      price: '$ 150.00',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/11228d96-14b8-4c3d-a74e-f2646c840999/calzado-blazer-low-77-jumbo-gRBtmC.png',
      salePrice: '$ 120.00'
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
