
# CRUD WEB APPLICATION


## Documentation

Admin Functionality
Upload CSV File:

Admin users can log in and upload CSV files containing relevant data fields (e.g., user information, product details) through a dedicated interface.
The backend (Node.js) parses the uploaded CSV file and inserts its contents into a MySQL database.
Error handling ensures that the CSV file is properly parsed and that data insertion follows validation rules.

Agent Functionality
CRUD Operations Dashboard:

Upon logging in as an agent, users are presented with a dashboard that allows them to perform CRUD operations (Create, Read, Update, Delete) on the data stored in the MySQL database.
RESTful APIs implemented in Node.js handle these operations securely, interacting with the MySQL database.
The frontend (React.js) provides a user-friendly interface where agents can view, edit, and delete database records, ensuring seamless interaction with the data.


Requirements Implemented
Frontend (React.js):

Implemented a login page where users can choose between admin and agent roles.
Designed an admin interface for CSV file upload, ensuring a straightforward process for data input.
Developed an agent interface enabling CRUD operations, leveraging React.js components and appropriate state management techniques (e.g., React Hooks).
Backend (Node.js):

Created RESTful APIs to handle CSV file uploads and CRUD operations securely.
Implemented CSV file parsing and ensured robust data insertion into the MySQL database.


Designed and implemented a relational database schema optimized for storing CSV data and supporting efficient CRUD operations.
Ensured proper indexing and normalization of the database schema to enhance data retrieval and storage efficiency.
Additional Considerations
Security: Implemented secure practices throughout the application, including user authentication, data transmission encryption, and secure database interactions.
Error Handling: Provided robust error handling mechanisms to manage edge cases and validate data integrity, ensuring smooth application performance.
Scalability: Designed the application architecture to handle large CSV files and accommodate scalability needs as the database grows, focusing on performance optimization and resource efficiency.



## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
Clone the repository:

```
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:
```
bash
Copy code
# Install backend dependencies
```bash
cd backend
npm install
```
# Install frontend dependencies
```bash
cd ../frontend
npm install
/*Install very package.json dependency*/
```


# Mysql Database:

Use XAMPP Apache to make database locally to you system.
and Install Mysql in our personal computer.

1.Start xampp Apache and mysql:
2.Go to http://localhost/phpmyadmin/index.php
3.Create Database name as :
```
  Database----->          signup
                            |
                            |
  Table1                     --->login
  Table2                     --->csvdata
```

4.Make sure that database name signup and tables name login , csvdata as a above mention because otherwise change name also in server.js folder manually.
5.signup is my main database name and login and csvdata are table name.
6.login table is for admin and agent authentication and registration form.
7.csvdata table is for uploading .csv format data to this table.

# Frontend Run

start react as frontend D:\MyReact\frontend>npm start
```
npm start 
```

If You use vite@latest then

```
npm run dev
```
```
This project run on http://localhost:3000/ if your want to change port then go in server.js in backend folder and change localhost port according to our required:
```

```
ALL DEPENDENCY ALREADY INSTALL USING NPM INSTALL,

You may also manually install npm i bootstrap using terminal 
```

If You Face How can I fix the "BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default" error?

Because now a day npm package not directly install webpack so:

make a folder in root folder of you_project name as config-overrides.js

```
const webpack   = require('webpack');

module.exports = function override(config){
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback,{
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        fs:false,
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        vm: require.resolve("vm-browserify"),
        net:false,
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process:"process/browser",
        })
    ])
    return config;
};
```

Change all script for run to:

```

```

Now install all dependency:
```
npm install browserify-zlib querystring-es3 path-browserify crypto-browserify stream-browserify stream-http @emotion/react @emotion/styled
npm install node-polyfill-webpack-plugin
npm stream-http
```

replace old script with in package.json 
```
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired  build",
    "test": "react-app-rewired  test",
    "eject": "react-app-rewired  eject"
  },
```

```
npm run build
npm start
```


# Backend:

Check nodemon package in backend folder package.json
Now add nodemon in script to run server continuously:
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
```

start server in backend D:\MyReact\backend>npm start 
```
npm start
```


# Now it work

# Thank You



