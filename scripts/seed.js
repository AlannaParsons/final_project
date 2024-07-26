const { db } = require('@vercel/postgres');
const {
  therapists,
  accounts
} = require('../src/app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

//USERS UNUSED.
async function seedUsers(client) {
  try {
    //await client.sql`DROP TABLE users`
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        designation VARCHAR(10),
        address VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        website TEXT NOT NULL,
        accepting_clients BOOL DEFAULT 't',
        price_min INT NOT NULL,
        price_max INT NOT NULL,
        therapies TEXT
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, designation, address, email, password, company_name, website, accepting_clients, price_min, price_max, therapies)
        VALUES (${user.id}, ${user.name}, ${user.designation}, 
            ${user.address}, ${user.email}, ${hashedPassword},
            ${user.company_name}, ${user.website}, ${user.accepting_clients},
            ${user.price_min}, ${user.price_max}, ${user.therapies})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedAccounts(client) {
  try {

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "accounts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS accounts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        address VARCHAR(255) NOT NULL,
        phone_number TEXT NOT NULL,
        website TEXT NOT NULL
      );
    `;

    console.log(`Created "accounts" table`);

    // Insert data into the "accounts" table
    const insertedAccounts = await Promise.all(
      accounts.map(async (account) => {
        const hashedPassword = await bcrypt.hash(account.password, 10);
        return client.sql`
        INSERT INTO accounts (id, name, email, password, address, phone_number, website)
        VALUES (${account.id}, ${account.name}, ${account.email}, ${hashedPassword},
            ${account.address}, ${account.phone_number}, ${account.website})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedAccounts.length} accounts`);

    return {
      createTable,
      accounts: insertedAccounts,
    };
  } catch (error) {
    console.error('Error seeding accounts:', error);
    throw error;
  }
}

async function seedTherapists(client) {
  try {
    // Create the "therapists" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS therapists (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        designation VARCHAR(10),
        phone_number TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        website TEXT NOT NULL,
        accepting_clients BOOL DEFAULT 't',
        price_min INT NOT NULL,
        price_max INT NOT NULL,
        therapies TEXT NOT NULL,
        company_id UUID DEFAULT uuid_generate_v4(), 
         constraint fk_therapists_accounts
         foreign key (company_id) 
         REFERENCES accounts (id)
    
        
        


      );
    `;
    // 

    //company_id TEXT REFERENCES companies (id)

    console.log(`Created "therapists" table`);

    // Insert data into the "therapists" table
    const insertedTherapists = await Promise.all(
      therapists.map(
        (therapist) => client.sql`
        INSERT INTO therapists (id, account_id, name, designation, phone_number, email, website, company_id, accepting_clients, price_min, price_max, therapies)
        VALUES (${therapist.id}, ${therapist.account_id}, ${therapist.name}, ${therapist.designation}, 
            ${therapist.phone_number}, ${therapist.email}, ${therapist.website},
            ${therapist.company_id}, ${therapist.accepting_clients},
            ${therapist.price_min}, ${therapist.price_max}, ${therapist.therapies})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTherapists.length} therapists`);

    return {
      createTable,
      revenue: insertedTherapists,
    };
  } catch (error) {
    console.error('Error seeding therapists:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);

  await seedAccounts(client);
  await seedTherapists(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
