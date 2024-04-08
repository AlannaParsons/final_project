# Finder

A mock application that enables anonymous user to find (manually vetted) therapist resources.
Also provide information on forms of therapy that may be provided
Future development, may provide booking services, integration with therapist schedule? use g-calendar/apple calendar?
Users access information for free. Clients are therapists paying to gain access to user base


## Setup

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`
4. Run `bin/rails db:reset` to create, load and seed db
5. Create .env file based on .env.example
6. Sign up for a Stripe account
7. Put Stripe (test) keys into appropriate .env vars
8. Run `bin/rails s -b 0.0.0.0` to start the server
9. For testing server: `bin/rails s -e test`



## Stack


FE  
    - React
    - Next
    - Chakra UI? or bootstrap
BE
    - Next
    
DB
    - PostgreSQL 9.x
    

## Stories

User can sort therapists
    - organize sorting features (many sort features needed)
        - nearby - km from location. map?(eventually). 
        - price - scale 
        - style/type - list known. add from given therapists
        - education - vetting system?
    - how to set sort priority??
    - are items sorted out completely or just moved to bottom of results?
    -allow user to control search priority? moving search fields up and down..... ooooo

User is provided list or therapists based on sort

Client participates in registration
    -info needed?
        - nearby - km from location. map?(eventually). 
        - price - scale 
        - style/type - list known. add from given therapists
        - education - vetting system?

Client has editable user page
    - see amount of traffic???
    - you show up in searches due to which factors (possible)???

# Data

Client 
    - name (first last)
    - designation/education (?)
    - address (split for later map usage?)
    - email
    - company
    - accepting client toggle

Seperate searchable data?
connecting next and chakra
https://chakra-ui.com/getting-started/nextjs-app-guide

ooo
- sign up
- database
- presentation

