// Show, show single selected therapist. add loading state?
"use client"
import { useEffect, useState } from 'react';
import Card from '../../components/profile/Card'
import {
    Box,
    SimpleGrid,
  } from '@chakra-ui/react';



export default function Page({ params }: { params: { id: string } }) {
  console.log('on search id page:', params.id)

    
    const getTherapist = async (id) => {
        try {
          const res = await fetch(`/api/search/${id}`,{
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
              'content-type': 'application/json'
            }
          })
          if(res.ok){
            let response = await res.json()
            setTherapist(response);
            
            console.log("Yeai!",response)
          }else{
            console.log("Oops! Something is wrong.")
          }
        } catch (error) {
            console.log(error)
        }
      }

      const [therapist, setTherapist] = useState(null)
      useEffect(() => {

        getTherapist(params.id)
        console.log('clicked therapist???',therapist)   
      },[]);

      

    
      
    return (
        <>



        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
        <Card therapist={therapist} ></Card>




        </SimpleGrid>
        </>


  );
  
}




  