// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const accounts = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Courtroom Sciences, Inc.',
    email: 'courtroomsciences@gmail.com',
    password: 'dogdonthunt',
    address: 'Vinita, Oklahoma',
    phone_number: '88500',
    website: 'www.drphil.com'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Sober House',
    email: 'soberhouse@gmail.com',
    password: 'askdrdrew',
    address: 'Pasadena, California',
    phone_number: '111-1111',
    website: 'https://drdrew.com/',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Generic Therapy',
    email: 'generictherapy@gmail.com',
    password: '123',
    address: 'Edmonton, AB',
    phone_number: '123-4567',
    website: 'https://awebsite.com/',
  },
]; 


const therapists = [
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'McGraw, Phil',
    designation: 'DR',
    phone_number: '88500',
    email: 'p.mcgraw@gmail.com',
    website: 'www.drphil.com',
    company_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    accepting_clients: 't',
    price_min: 100,
    price_max: 200,
    therapies: 'clinical, forensic'
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Pinsky, Drew',
    designation: 'DR',
    phone_number: '111-1111',
    email: 'd.pinsky@gmail.com',
    website: 'https://drdrew.com/',
    company_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    accepting_clients: 'f',
    price_min: 1500,
    price_max: 2500,
    therapies: 'addiction'
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Doe, John',
    designation: 'MD',
    phone_number: '123-4567',
    email: 'doe.jo@gmail.com',
    website: 'https://generic.com/',
    company_id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    accepting_clients: 't',
    price_min: 500,
    price_max: 800,
    therapies: 'group, art'
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Doe, Jane',
    designation: 'PsyD',
    phone_number: '111-2222',
    email: 'doe.jane@gmail.com',
    website: 'https://generic.com/',
    company_id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    accepting_clients: 'f',
    price_min: 1100,
    price_max: 1500,
    therapies: 'cognitive behavioural'
  }
]; 

module.exports = {
  accounts,
  therapists
};
