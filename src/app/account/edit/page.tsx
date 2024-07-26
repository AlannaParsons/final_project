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
  import { LoginUI } from '../components/LoginUI'
  import { NavBar } from '../components/NavBar'
export default function AccountHome() {
    // if user is logged in ??? where to redirect

    return (
        // <> login or register </>
      <Container>
        <NavBar />
        <LoginUI />
      </Container>
  //https://chakra-ui.com/docs/components/form-control/usage

  );
}