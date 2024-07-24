"use client"
//https://v2.chakra-ui.com/docs/components/drawer

import {
    Box,
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
    Button,
    HStack,
    Radio,
    RadioGroup,
    Stack,
    
  } from '@chakra-ui/react'
  import { allowedNodeEnvironmentFlags } from 'process'
  import { useState } from 'react';
  import { forwardRef, useRef } from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  import { useCheckbox } from '@chakra-ui/react'
  
  export const SearchBar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //const btnRef = React.useRef()
    const [searchState, setSearchState] = useState({      
      min_price: 0,
      max_price: 1000,
      specialties: [],
      location: null
    })

    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      const formParse = new FormData(e.target as HTMLFormElement);
      const searchParams = Object.fromEntries(formParse.entries())
      console.log('searchbar search params from form:', searchParams)
      props.updateTherapists(searchParams)
    }
  
    return (
      <Box>
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>

            <FormControl >
              <FormLabel>Max</FormLabel>
              <Input name='max_price' placeholder='max' />
            </FormControl>

            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input name='location' placeholder='location' />
            </FormControl>

            <Box>
              <FormLabel>Specialties</FormLabel>
              <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox value='ADHD'>ADHD</Checkbox>
                  <Checkbox value='Autism'>Autism</Checkbox>
                  <Checkbox value='PTSD'>PTSD</Checkbox>
                  <Checkbox value='Couples'>Couples</Checkbox>
                  <Checkbox value='ED'>Eating Disorders</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>

          <footer>
            <Button width="full" mt={4} type="submit">
            Searchies
            </Button>
          </footer>

        </form>
      </Box>
    )
  }


//split all to seperate file later

  const PriceSearch = (props) => {
    //props.searchSetState({min_price: '000'});
    function handlePriceChange(e) {
      props.setSearchState(prev => ({...prev,
        max_price: e.target.value}))

      console.log('check state:', props.searchState)
  
    }
    return ( 
      <>
        <Input placeholder='Min.' id="minPrice" />
        <Input 
          placeholder='Max.' 
          id="maxPrice"
          onInput={handlePriceChange}/>
      </>
    );
  };

  //integrate google maps api. get location??
  const LocationSearch = ({...props}) => {
    return (
      <Input placeholder='location...' />
    );
  };
  
  // make expandable list
  const SpecialtiesSearch = ({...props}) => {
    return (
      <Input placeholder='specialties...' />
    );
  };
