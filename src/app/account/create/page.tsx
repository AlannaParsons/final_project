// User/Account new account page 
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
          const res = await fetch('/api/account/create',{
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

        <Button width="full" mt={4} type="submit">
            Sign In
        </Button>
    </form>

  //https://chakra-ui.com/docs/components/form-control/usage

  );
}