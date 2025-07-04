// Database Integration with MySQL
// 1. Install the MySQL driver: npm install mysql2
// 2. Create connection to database
// 3. Execute queries and handle results
// 4. Close connection when done

const mysql = require("mysql2");

// Configure database connection
const connection = mysql.createConnection({
  host: "localhost", // Database server location
  user: "root", // MySQL username
  password: "", // MySQL password (empty for local dev)
  database: "sql_store", // Target database name
});

// Establish connection to MySQL server
connection.connect();

// Execute SQL query
// Callback receives: (error, results, fields)
// - results: actual data rows returned from query
// - fields: metadata about columns (names, types, constraints)
connection.query("SELECT * FROM customers ", (err, results, fields) => {
  if (err) throw err;

  console.log(results); // Display query results
});

// Close database connection
connection.end();
