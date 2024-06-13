// Import required modules
const express = require('express');
const fetch = require('node-fetch'); // Use node-fetch for making HTTP requests

// Initialize Express app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// API Greeting function
function Greating(req, res){
    const greeting = 'Hello World';
    res.send(greeting);
}

//Endpoints
app.get('/greet', Greating);

// Define the GET endpoint for fetching Pokémon data
app.get('/pokemon/:nameOrId', async (req, res) => {
    // Get the Pokémon name or ID from the request parameters
    const { nameOrId } = req.params;

    // Construct the PokeAPI URL
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`;

    try {
        // Fetch data from the PokeAPI
        const response = await fetch(apiUrl);
        
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            return res.status(response.status).json({ error: `Error fetching data: ${response.statusText}` });
        }
        
        // Parse the JSON from the response
        const data = await response.json();
        
        // Send the Pokémon data as the response
        res.json(data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching Pokémon data:', error);
        res.status(500).json({ error: 'An error occurred while fetching Pokémon data.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


