# SWAPI-Box

### Description

SWAPI-Box was a one week project during the third module at the Turing School of Software and Design. It uses the Star Wars API to retrieve and display data on people, planets, and vehicles of the Star Wars universe. The data is displayed individual cards that can be added to favorites.

<img src="https://raw.githubusercontent.com/quinhill/swapibox/master/src/assets/swapi-screenshot.png">

### Goals

Swapi Box was a practice in making API calls. To render the cards with the specific attributes for people, planets, and vehicles respectively, I had to make nested API calls. To give an example, getting the data for people, required an API fetch call to the people endpoint. However, to find information on a person's "homeworld", the response to the people's endpoint would contain another endpoint to the homeworld endpoint. So I would subsequently make that API, resolve that promise, before resolving the original promise, before cleaning those resolved responses and rendering the cards.

A personal area of focus for me was refactoring my code. I became very focused on making the functions I wrote dynamic. While I had originally gotten the buttons to make fetch calls, each with their own tailored function, I those three functions into one. Using the an ID attribute on the button, I passed different arguments into the function to trigger the appropriate API call(s). I have since tried to maintain that approach of writing cleaner, more reusable code.

### Tech Stack

* React
* Enzyme
* Jest

### Installation

to run Swapi-box on your machine, follow these steps in your command line:

`git clone git@github.com:quinhill/swapibox.git`

Then `cd swapibox` and inside that repository, run:

`npm install`

Once the dependencies have been install, this command will open the app in your browser:

`npm start`

### Author

Quinlan Hill 
