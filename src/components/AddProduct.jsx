import React, { useEffect, useState } from "react";
import { Button,Modal,ModalCloseButton,ModalBody,Input,Select,RadioGroup,Radio, useDisclosure } from '@chakra-ui/react'



const AddProduct = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
const [value, setValue] = useState('1')
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
     imageSrc:"https://www.bing.com/th?id=OIP.goVLhaQ_zulVVIEGy2Tx1AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
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
