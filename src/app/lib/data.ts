import { sql } from '@vercel/postgres';
import {
  Therapist,
  Account
} from './definitions';
// write dynamic 

export async function fetchTherapists() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

     console.log('Fetching therapist data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Therapist>`SELECT * FROM therapists`;

     console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
//DEFUNCT
export async function fetchSearchedTherapists({min_price, max_price}) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Therapist>`SELECT *
    FROM therapists
    WHERE price_min >= ${min_price} AND price_max <= ${max_price}`;

     console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}