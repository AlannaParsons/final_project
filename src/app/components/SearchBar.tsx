"use client"
//https://v2.chakra-ui.com/docs/components/drawer

import {
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
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { allowedNodeEnvironmentFlags } from 'process'
  import { useState } from 'react';
  import { forwardRef, useRef } from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  
  export const SearchBar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //const btnRef = React.useRef()
    const [searchState, setSearchState] = useState({      
      min_price: 0,
      max_price: 1000,
      specialties: [],
      location: null
    })

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      const formParse = new FormData(e.target as HTMLFormElement);
      const searchParams = Object.fromEntries(formParse.entries())
      props.updateTherapists(searchParams)
    }
  
    return (
      <Drawer
      //isOpen={isOpen}
      isOpen={true}
      placement='right'
      onClose={onClose}
      //finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Search</DrawerHeader>
 

  
          <form onSubmit={handleSubmit}>

          <DrawerBody>
            <FormControl>
              <FormLabel>Min</FormLabel>
              <Input name='min_price' placeholder='min' />
            </FormControl>
            <FormControl >
              <FormLabel>Max</FormLabel>
              <Input name='max_price' placeholder='max' />
            </FormControl>

            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input name='location' placeholder='location' />
            </FormControl>

            <FormControl>
              <FormLabel>Specialties</FormLabel>
              <Input name='specialties' placeholder='specialties' />
            </FormControl>

            </DrawerBody>
            <DrawerFooter>

            <Button width="full" mt={4} type="submit">
            Searchies
            </Button>
            </DrawerFooter>



          </form>



        {/* <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue' onClick={() => props.updateTherapists(searchState)}
          >
            Save</Button>

        </DrawerFooter> */}
      </DrawerContent>
      </Drawer>
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
