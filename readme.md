# Node.js Express MongoDB Boilerplate

### Description

> Express.js boilerplate code for writing efficient web server. This boiler plate contains 
> bare minimum code required for webserver with assoiciation of routes and contollers
> with specific services.

## Directory structure 

.
+-- package.json
+-- package-lock.json
+-- .gitignore
+-- src
|   +-- index.js
|   +-- controllers
        +-- index.js
        +-- user.controller.js
|   +-- services
        +-- index.js
        +-- user.service.js
|   +-- routes
        +-- index.js
        +-- user.routes.js
|   +-- models
        +-- index.js
        +-- user.model.js
+-- _utils
|   +-- dbConnect.js
|   +-- responseHandler.js

## Dependencies 

* Express -> Web server
* Dotenv -> Configure ENV variable
* Morgan -> Request logger
* CORS -> CORS policy configurations
* Mongoose -> MongoDB ORM

## Installation
    
1. Clone the Repo
2. Create `.env` fiile in root directory and put following variables in it 
```
PORT = 1234
DB_URL = yourdburl
```
3. Run command  ```  npm install ``` in order to install all the dependencies
4. Run one of the following script

#### For Dev Mode 

`$ npm run dev`

#### For Prod Mode 
`$ npm start`



Made with &nbsp; ❤️ &nbsp;  by &nbsp; <a href="https://github.com/jack-sparroow"> Jack </a>


# Contributions are hugely appreciated .....