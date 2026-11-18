# My-First-Angular-Project

# API: PokéAPI
 - Documentation: https://pokeapi.co/docs/v2
 - Example Request: https://pokeapi.co/api/v2/pokemon?limit=20

I chose Option A HttpClient and an Observable because my service already keeps its data in a writable signal so I was able to request the data by using HttpClient and set the same signal when it arrives.

### Why local changes disappear on refresh
The methods add, edit and remove only change the signal in memory and are never actually sent to the API. So when the page reloads the application starts completely fresh and loadPokemon() fetches the original data from PokeAPI again which replaces the local changes.


## Lazy Loading

### Before 
#### Initial chunk files
main-XVJY4TKH.js 
styles-5INURTSO.css

### After
#### Initial chunk files
chunk-UG2S44FY.js
chunk-Z5Z5RQPU.js
main-M5323PAL.js
styles-5INURTSO.css

#### Lazy chunk files
chunk-SFY2ENBV.js
chunk-54PUP7A2.js

### What changed: 
I converted every route except the landing page loadComponent with a dynamic import(), so now the detail and form page have their own lazy chunks that only load the first time a user actually visits them. The landing page will stay eager because it is the first thing every user sees when loading up the page.
