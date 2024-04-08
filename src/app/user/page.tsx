import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react';


export default function Register() {
    return (

    <form onSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' />
        </FormControl>

        <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
        </FormControl>

        <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="*******" />
        </FormControl>

        <Button width="full" mt={4} type="submit">
            Sign In
        </Button>
    </form>

  //https://chakra-ui.com/docs/components/form-control/usage

  );
}