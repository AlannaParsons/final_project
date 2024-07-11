// Show, show all therapists page 
"use client"
import { fetchTherapists, fetchSearchedTherapists } from '@/app/lib/data';
import { SearchBar } from '../components/SearchBar'
import { useEffect, useState } from 'react';
import {
    Box,
    SimpleGrid,
  } from '@chakra-ui/react';



export default function Page(props) {
    
    const updateTherapists = async (formData) => {

        try {
          const res = await fetch('/api/search',{
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'content-type': 'application/json'
            }
          })
          if(res.ok){
            let response = await res.json()
            setTherapists(response);
            
            console.log("Yeai!",response)
          }else{
            console.log("Oops! Something is wrong.")
          }
        } catch (error) {
            console.log(error)
        }
      }

    //const [therapists, setTherapists] = useState([])
   
    const [therapists, setTherapists] = useState([])
    console.log('PAGE LOADED')
    useEffect(() => {
        updateTherapists({min_price: '0', max_price: '10000', location: '', specialties: ''})
      },[]);
    //updateTherapists({min_price: '0', max_price: '10000', location: '', specialties: ''})
    // const updateTherapists = async (form_data) => {
    //     const therapistData = await fetchSearchedTherapists(form_data);
    //     console.log('serached data', therapistData)
    //     //update page state w search state>?
    //     setTherapists(therapistData);
    //{min_price: '200', max_price: '800', location: '', specialties: ''}
    
    
    //   };


    
    return (
        <>

        <SearchBar updateTherapists={updateTherapists} ></SearchBar>

        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>

            {therapists.map((therapist) => (

                <Box key={therapist.id} bg='tomato' height='80px'>
                    
                    {therapist.name}
                    {therapist.price_max} 
                     - 
                    {therapist.price_min}

                </Box>
            ))}




        </SimpleGrid>
        </>


   
  //https://chakra-ui.com/docs/components/form-control/usage

  );
  
}




  