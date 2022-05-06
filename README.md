# Eventfind
Welcome to Eventfind! This project is inspired by [Eventbrite](https://www.eventbrite.com/) where users can view and create their own desire events.

## Link to Livesite
[eventfind](https://eventfind.herokuapp.com/)

## Technologies Used
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=40/><img src="https://img.icons8.com/color/48/000000/css3.png"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height=40 />

## Getting Started
1. Clone this repistory

    ```https://github.com/jameschenn/PokeFlex.git```

2. Install the project's dependencies

    ```npm install```

3. Add an .env file containing the variables from the .env.example file

4. Create user and database based on what you setup in .env file

5. Use the Sequelize CLI to apply the provided database migrations and seeder.

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```

6. You can now test the application

    ```npm start```

7. You can sign in via Demo User or create an account yourself

## Database Schema
![drawSQL-export-2022-05-01_13_36](https://user-images.githubusercontent.com/94093737/166179917-82286b4b-ec00-44f7-8371-4b350260e8d3.png)

## Features
1. Users
* User can sign up, log in, and sign up of the site
* User can also choose to log in as a demo user.
2. Events
* All users can look at the events and their details
* Logged-in users can create, edit, and delete events
3. Ticket
* Logged-in users can register event.
* They can also cancel the registration that they just made


