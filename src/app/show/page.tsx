// Show, show all therapists page 

import { fetchTherapists } from '@/app/lib/data';



export default async function Page() {
    const therapists = await fetchTherapists();
    
    return (

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* {therapists} */}
            
        </div>

   
  //https://chakra-ui.com/docs/components/form-control/usage

  );
}