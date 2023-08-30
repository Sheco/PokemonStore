# Pokemon Store

This is an example of a basic pokemon store using the PokeAPI.

To run this, clone the repo and run `npm install && npm run dev` and then open the app in the port that's displayed in the terminal

A running copy of this code is currently hosted at Vercel at [Pokemon Store](https://pokemon-store-sheco.vercel.app/)

## Interview tasks

### Task 1: Create a list of pokemon
- Create a view that lists all of the pokemon using the PokeAPI
  [https://pokeapi.co/api/v2/pokemon?limit=20](https://pokeapi.co/api/v2/pokemon?limit=20)
- Each pokemon should display the following properties:
  - default front image
	- name
	- every pokemon stat (hp, attack, defense, etc)

### Task 2: Add a price to the pokemon

Every pokemon should have a price, which is the average value of all of its stats.
Add this to the previous view.


### Task 3: Create a shopping cart

The user will get $250 credits to buy pokemon. 
Update the list of pokemons, adding a button to add it to the cart.

The user should only be able to add as many pokemon as he can afford.

Create a new view, to show the pokemon in the cart, each one of them
with a button to remove it from the cart.

### Task 4: Add a navigation bar

Create the user interface to switch between the main view and the cart.

### Task 5: Show the cart total and the available credit

These values can be displayed anywhere in the app.

### Task 6: Add a search field

Add an input field to filter the list of pokemon in the main view.

The PokeAPI does not have any support for searching, so you will need
to fetch the entire list of pokemon (?limit=1000) and filter it in the browser.

You might need to think about how to optimize the operation to reduce
the number of requests to the API.

