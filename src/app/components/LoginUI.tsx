"use client"
//move redirect?? onto login page
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text,
    InputProps,
    useDisclosure,
    useMergeRefs,
} from '@chakra-ui/react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { forwardRef, useRef } from 'react'
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'


export const LoginUI = forwardRef<HTMLInputElement, InputProps>((props, ref) => { 
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const formParse = new FormData(e.target as HTMLFormElement);
        console.log('handler login formdata', Object.fromEntries(formParse.entries()))
       
        try {
          const res = await fetch('../api/account/login',{
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formParse.entries())),
            headers: {
              'content-type': 'application/json'
            }
          })
          if(res.ok){
            let response = await res.json()
            console.log("Yeai!", response)
            router.push(`/show`)

          }else{
            console.log("Oops! Something is wrong.")
          }
        } catch (error) {
            console.log(error)
        }
      }

      const { isOpen, onToggle } = useDisclosure()
      const inputRef = useRef<HTMLInputElement>(null)
      const mergeRef = useMergeRefs(inputRef, ref)
      const onClickReveal = () => {
        onToggle()
        if (inputRef.current) {
          inputRef.current.focus({ preventScroll: true })
        }
      }
      const router = useRouter()
    
    return (
        
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
            <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                <Text color="fg.muted">
                Don't have an account? <Link href="#">Sign up</Link>
                </Text>
            </Stack>
            </Stack>
            <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg.surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            >
            <Stack spacing="6">
                <form onSubmit={handleSubmit}>

                    <Stack spacing="5">
                        
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" name="email" type="email" />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputGroup>
                        <InputRightElement>
                            <IconButton
                            variant="text"
                            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                            icon={isOpen ? <HiEyeOff /> : <HiEye />}
                            onClick={onClickReveal}
                            />
                        </InputRightElement>
                        <Input
                            id="password"
                            ref={mergeRef}
                            name="password"
                            type={isOpen ? 'text' : 'password'}
                            autoComplete="current-password"
                            required
                            {...props}
                        />
                        </InputGroup>
                    </FormControl>

                    <Stack spacing="6">
                    <Button type="submit">Sign in</Button>
                    </Stack>

                </Stack>
                <HStack justify="space-between"></HStack>
                </form>
            </Stack>
            </Box>
        </Stack>
    </Container>
    
    )
})

