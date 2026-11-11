# My-First-Angular-Project

# API: PokéAPI
 - Documentation: https://pokeapi.co/docs/v2
 - Example Request: https://pokeapi.co/api/v2/pokemon?limit=20

I chose Option A HttpClient and an Observable because my service already keeps its data in a writable signal so I was able to request the data by using HttpClient and set the same signal when it arrives.

### Why local changes disappear on refresh
The methods add, edit and remove only change the signal in memory and are never actually sent to the API. So when the page reloads the application starts completely fresh and loadPokemon() fetches the original data from PokeAPI again which replaces the local changes.
