import React, { useEffect, useState } from "react";
import { Button,Modal,ModalCloseButton,ModalBody,Input,Select,RadioGroup,Radio, useDisclosure, StylesProvider } from '@chakra-ui/react'



const AddProduct = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
const [value, setValue] = React.useState('1')
const [send,setSend] = useState([])
const [form,setForm] =useState({})
     
    const onChange=(e) => {
         const {name,value} = e.target

         setForm({
           ...form,
           [name]:value
         })
    }
const onSubmit=()=>{
   fetch("http://localhost:8080/products",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
     title:form.title,
     category:form.category,
     imageSrc:"data:image/jpeg;base64,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",
     price:form.price
    })
   })
   .then((res)=>res.json())
   .then((data)=>{
       setSend([...send,data])
       setForm("")
       console.log(data)
   })
     
  
   
}
useEffect(()=>{
  fetch("http://localhost:8080/products")
  .then((res)=>res.json())
       .then((data)=>{
           setSend(data)
       })
},[])


  return (
    <>
    
      <Button margin="auto" onClick={onOpen} my={4} data-cy="add-product-button">Add New Products</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
     
        <ModalBody border="1px solid black" margin="auto" w="40%" pb={6}>
        <ModalCloseButton />
          <h3>Title</h3>
          <Input onChange={onChange} value={form.title} type="text" data-cy="add-product-title" placeholder="Title" />
          <h3>Category</h3>
          <Select value={form.category} onChange={onChange} data-cy="add-product-category">
            <option data-cy="add-product-category-shirt" value="Shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="Pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="Jeans">Jeans</option>
          </Select>
          <h3>Gender</h3>
          <RadioGroup  onChange={setValue} value={value} data-cy="add-product-gender">
            <Radio value="1" data-cy="add-product-gender-male">Male</Radio>
            <Radio value="2" data-cy="add-product-gender-female">Female</Radio>
            <Radio value="3" data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <h3>Price</h3>
          <Input value={form.price} onChange={onChange} type="number" data-cy="add-product-price" placeholder="Price" />
          <Button onClick={onSubmit} data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
