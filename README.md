# Pokemon Store

This is an example of a basic pokemon store using the PokeAPI.

To run this, clone the repo and run `npm install && npm run dev` and then open the app in the port that's displayed in the terminal

A running copy of this code is currently hosted at Vercel at [Pokemon Store](https://pokemon-store-sheco.vercel.app/)

## Interview tasks

### Task 1: Create a list of pokemon

[ ] Create a view that shows a list of pokemon using the PokeAPI
[https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon)

Each pokemon should display the following properties:
- default front image
- name
- every one of its stats (hp, attack, defense, etc)

[ ] Add a loading message or animation

### Task 2: Add a price to the pokemon

[ ] Every pokemon should have a price, which will be the average value of all of its stats.
Add this to the previous view.

### Task 3: Create a shopping cart

[ ] The user will get $250 credits to buy pokemon. 

[ ] Update the list of pokemon, adding a button to add it to the cart.

[ ] The user should only be able to add as many pokemon as he can afford.

[ ] Create a new view to show the pokemon in the cart, each one of them
with a button to remove it from the cart.

### Task 4: Add a navigation bar

[ ] Create the user interface to switch between the main view and the cart.

### Task 5: Show the cart total and the available credit

[ ] Show the total and the available credit somewhere in the interface

### Task 6: Add a search field

[ ] Add an input field to filter the list of pokemon in the main view.

The PokeAPI does not have any support for searching, so you will need
to fetch the entire list of pokemon and filter it in the frontend.

To fetch the full list, use [https://pokeapi.co/api/v2/pokemon?limit=2000](https://pokeapi.co/api/v2/pokemon?limit=2000)

You might need to think about how to optimize the operation to reduce
the number of requests to the API.

### Task 7: Add documentation

[ ] Add documentation to the code, using comments to describe your
ideas around functions and blocks of code.

### Task 8: Create a deployment plan

[ ] Talk about the deployment plan, initially the app can be run 
locally, but you need to consider the hosting options.
