# Overstay Fee Calculator API

This API allows you to calaculate overstay fee for a customer.

## :four_leaf_clover:  Set up

1.  Clone the repo using this link: _https://github.com/Endowmissy/overstay-fees-calculator-api.git_
2.  cd into the project and run `npm install` to install the modules.
3.  Create a .env file and add the necessary variables using the `.env.example` format as a guide.
4.  Provided a postgres server is running, create a database
5.  Run `npm run migration` and `npm run seed:db` to migrate and seed in data for both dbs.
6.  Run `npm run dev` to start the development server.
 
## :sunrise:  Technologies Used

1. Node.js
2. Express.js
3. TypeScript
4. PostgreSQL
5. Sequelize ORM
6. Git

Deployed to - [Heroku](https://overstay-fee-calculator-api.herokuapp.com/)

API Documentation - [Postman](https://documenter.getpostman.com/view/8491094/VUxKTpZE)

## :cherry_blossom:  Sample test format

<h4>1. To calculate customer overstay fee:</h4>

  POST `https://overstay-fee-calculator-api.herokuapp.com/api/v1/reservation/calculate-overstay-fee`

   ```
   {
	"reservation_id": "12000",
	"actual_checkout_time": "22:00",
}
   ```

<h4>2. To view the welcome page </h4>
   
  GET `https://overstay-fee-calculator-api.herokuapp.com/`  
  
## Author:
Ayomikun Emmanuel  
