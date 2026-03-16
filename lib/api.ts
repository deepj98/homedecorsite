//This file is responsible for creating a connection pool to the MySQL database using the mysql2 library. It reads the database configuration from environment variables and exports the connection pool for use in other parts of the application.

import mysql from "mysql2/promise";

const db_config = mysql.createPool({
    host : process.env.Database_host,
    user : process.env.Database_user,
    password : process.env.Database_password,
    database : process.env.Database_name,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
});

export default db_config;