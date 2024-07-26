// Show, show all therapists page 
"use client"
import { fetchTherapists, fetchSearchedTherapists } from '@/app/lib/data';
import { SearchBar } from '../components/SearchBar'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import {
    Box,
    Flex, Spacer,
    SimpleGrid,
  } from '@chakra-ui/react';



export default function Page(props) {
  const router = useRouter()
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

   
    const [therapists, setTherapists] = useState([])
    useEffect(() => {
        updateTherapists({min_price: '0', max_price: '10000', location: '', specialties: ''})
      },[]);

      
    return (
        <Flex>

        <SearchBar updateTherapists={updateTherapists} ></SearchBar>

        <SimpleGrid flex='1' columns={1} spacingX='40px' spacingY='20px'>

            {therapists.map((therapist) => (

                <Box key={therapist.id} bg='tomato' height='80px' onClick={() => router.push(`/therapist/${therapist.id}`)}>
                    
                    {therapist.name}
                    {therapist.price_max} 
                     - 
                    {therapist.price_min}

                </Box>
            ))}




        </SimpleGrid>
        </Flex>


   
  //https://chakra-ui.com/docs/components/form-control/usage

  );
  
}




  