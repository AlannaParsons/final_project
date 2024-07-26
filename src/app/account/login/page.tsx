// User Account primary page 
// change based on user status/state???
// logged in then go to show or sign up
"use client"

import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { LoginUI } from '../../components/LoginUI'
  import { FormEvent } from 'react';
export default function AccountHome() {
    // if user is logged in ??? where to redirect
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      const formParse = new FormData(e.target as HTMLFormElement);
      console.log('handler login formdata', Object.fromEntries(formParse.entries()))
      try {
        const res = await fetch('/api/account/login',{
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
        // <> login or register </>
      <Container>
        <LoginUI />
      </Container>
  //https://chakra-ui.com/docs/components/form-control/usage

  );
}