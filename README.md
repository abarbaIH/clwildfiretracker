# PROJECT NAME
Music Events

## Description 
SPA thats show real-time information about the forest fires detected in Castilla y León (Spain)

## Tools
- Javascript
- HTML
- CSS (TailwindCSS)
- MongoDB
- React

## DEPENDENCIES
- axios
- react-dom
- react-router-dom
- react-modal
- react-paginate
- react-modal
- react-modal
- react-modal

## APIS
- Opendatasoft Explore API v2
- More info: https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/console

## PROJECT INFO

### ROUTES

| URL | Description     | Protected                |
| :-------- | :------- | :------------------------- |
| /| Index page |  |
| *| 404 page |  |

### PAGES
- HomePage: contains the page where all the content is rendered

### COMPONENTS
- ClearNearbyFiresButton: contains button to close the nearby fires table
- Filters: contains filters for the fire table
- Footer: contains the footer of the page
- Header: contains the page header
- Loader: contains a loader that is displayed while loading the API data
- Modal: contains modal window information
- NearbyFiresButton: contains the button to display the table of nearby fires
- NearbyFiresTable: contains the table of nearby fires
- Pagination: contains wildires table pagination
- WildfireTable: contains wildires table

### SERVICES
- wildfire.services: 