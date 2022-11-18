# Node.js Express Boilerplate

Express.js boilerplate code for writing efficient web server.

## Folder structure 

    - index.js -> Entrypoint
    - Routes
    - Controllers 
    - Services 
    - Utils

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
```sh
npm run dev
```

#### For Prod Mode 
```sh
npm start
```


