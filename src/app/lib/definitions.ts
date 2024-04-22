//  
export type Therapist = {
    id: string;
    name: string;
    designation: string;
    phone_number: string,
    email: string;
    website: string;
    company_id: string;
    accepting_clients: string;
    price_min: number;
    price_max: number;
    therapies: string | string[];
  };

  export type Account = {
    id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone_number: string,
    website: string;
  };
