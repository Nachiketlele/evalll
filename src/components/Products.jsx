import React from "react";
import AddProduct from "./AddProduct";
import { Flex } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import Product from "./Product";

const Products = () => {

  return (
    <>
     <AddProduct/>
    <Flex >
           <Grid templateRows="auto" gridtemplateColumns='repeat(3, 1fr)' gap={6} >
             <Product/>
          </Grid>
    </Flex>
    </>
   
 
   
  );
};

export default Products;
