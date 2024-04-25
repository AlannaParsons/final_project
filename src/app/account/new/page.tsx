// User/Therapist sign up page 
//eventual change to form component?
//change pricing to slider ui. change therapies to list and "other"
//handle success/failure in front end?
"use client"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
} from '@chakra-ui/react';

import { Card, CardHeader, Heading, HStack } from '@chakra-ui/react'
import { FormEvent } from 'react';

export default function Register() {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const formParse = new FormData(e.target as HTMLFormElement);
        console.log('handler formdata', Object.fromEntries(formParse.entries()))
        try {
          const res = await fetch('/api/account',{
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formParse.entries())),
            headers: {
              'content-type': 'application/json'
            }
          })
          console.log(res)
          if(res.ok){
            console.log("Yeai!")
          }else{
            console.log("Oops! Something is wrong.")
          }
        } catch (error) {
            console.log(error)
        }
      }


    return (

    <form onSubmit={handleSubmit}>
    {/* same line . drop down?*/}
        <Card>
            <CardHeader>
                <Heading size='md'>User</Heading>
            </CardHeader>

            <HStack spacing='24px'>
                <FormControl isRequired>
                    <FormLabel>Designation</FormLabel>
                    <Input name='des' placeholder='Des' />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input name='fn' placeholder='First name' />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input name='ln' placeholder='Last name' />
                </FormControl>
            </HStack>
        </Card>

        <Card>
            <CardHeader>
                <Heading size='md'>Account info</Heading>
            </CardHeader>

            <FormControl isRequired>
                <FormLabel>User Name</FormLabel>
                <Input name='user_name' placeholder='emai???' />
            </FormControl>

            <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input name='password' type="password" placeholder="*******" />
            </FormControl>
        </Card>

        <Card>
            <CardHeader>
                <Heading size='md'>Company info</Heading>
            </CardHeader>

            <FormControl isRequired>
                <FormLabel>Company Name</FormLabel>
                <Input name='company_name' placeholder='Inc.' />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Phone number</FormLabel>
                <Input name='phone_number' placeholder='Num' />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name='email' type='email' />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Website</FormLabel>
                <Input name='website' placeholder='www.' />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input name='address' placeholder='Add' />
            </FormControl>
        </Card>

        <Card>
            <CardHeader>
                <Heading size='md'>Therapy info</Heading>
            </CardHeader>

            <FormControl isRequired>
                <FormLabel>Pricing</FormLabel>
                <Input name='price' placeholder='$' />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Available Therapies</FormLabel>
                <Input name='therapies' placeholder='therapies?' />
            </FormControl>

        </Card>

        <Button width="full" mt={4} type="submit">
            Sign In
        </Button>
    </form>

  //https://chakra-ui.com/docs/components/form-control/usage

  );
}