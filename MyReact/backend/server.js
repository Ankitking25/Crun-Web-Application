const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const app = express();
app.use(express.json());   //for data transfer in form to json format:

app.use(cors({
    origin: 'http://localhost:3000', // your frontend URL
    credentials: true
}));
app.use(express.json());
app.use(fileUpload());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // should be true in production with HTTPS
}));

// Create our database connection:
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "signup" // MySQL database name
});

// Check user admin or agent category:
app.get('/', (req, res) => {
    if (req.session.role) {
        return res.json({ valid: true, role: req.session.role });
    } else {
        return res.json({ valid: false });
    }
});

// Signup route:
// Signup route:
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login(`name`, `email`, `password`, `role`) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role 
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Error signing up" });
        }
        return res.json({ success: true });
    });
});





app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.json({ Message: "Error inside server" });
        }
        if (result.length > 0) {
            req.session.role = result[0].role;
            return res.json({ Login: true, role: result[0].role });
        } else {
            return res.json({ Login: false });
        }
    });
});


// //upload data csv file:
// // Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Route to handle file upload and database insertion
// Route to handle file upload and database insertion
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Access the uploaded file
    const csvFile = req.files.csvFile;

    // For simplicity, assuming csvFile is a Buffer object containing CSV data
    const csvData = csvFile.data.toString('utf8'); // Convert Buffer to string

    // Split CSV data into rows
    const rows = csvData.split('\n').map(row => row.trim()).filter(row => !!row);

    // Validate headers against database schema
    const headers = rows[0].split(',').map(header => header.trim());
    const expectedHeaders = ['username', 'product', 'msi_number', 'serial_Number', 'cost']; // Define expected headers

    if (!headers.every(header => expectedHeaders.includes(header))) {
        return res.status(400).json({
            message: 'Please upload a CSV file with headers: username, product, msi_number, serial_Number, cost'
        });
    }

    // Assuming the first row is headers and subsequent rows are data
    const values = rows.slice(1).map(row => row.split(',').map(col => col.trim()));
    const sql = `INSERT INTO csvdata (${headers.join(', ')}) VALUES ?`;

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error('Error inserting CSV data into MySQL:', err);
            return res.status(500).json({ error: 'Error inserting CSV data into MySQL' });
        }
        console.log('CSV data inserted into MySQL:', result);
        return res.json({ success: true });
    });
});


//new
app.get('/csvdata',(req,res)=>{
    const sql = "SELECT * FROM csvdata"
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message :"Error inside server"});
        return res.json(result);
    })
})

//sumbit data by form on mytable table name csvdata:
app.post('/csvdata',(req,res)=>{
    const sql = "INSERT INTO csvdata (username, product, msi_number, serial_Number, cost) VALUES (?)";
    const values = [
    req.body.username,
    req.body.product,
    req.body.msi_number,
    req.body.serial_Number,
    req.body.cost
  ];

  db.query(sql,[values],(err,result)=>{
    if(err) return res.json(err);
    return res.json(result);
  })
})




app.get('/read/:id',(req,res)=>{
    const sql = "SELECT * FROM csvdata WHERE ID = ?";
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message :"Error inside messsage"});
        return res.json(result);
    })
})


//update data via put call: By update button:
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE csvdata SET `username`=?, `product`=?, `msi_number`=?, `serial_Number`=?, `cost`=? WHERE ID=?";
    const id = req.params.id;

    const values = [
        req.body.username,
        req.body.product,
        req.body.msi_number,
        req.body.serial_Number,
        req.body.cost
    ];

    db.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});



//for delete query in database name as csvdata:
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM csvdata WHERE ID=?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});



app.listen(8080, () => {
    console.log("Listening on port 8080");
});


