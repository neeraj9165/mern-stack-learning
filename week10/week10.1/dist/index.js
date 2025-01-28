"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://test_owner:npg_uVrlcTPg6y3j@ep-misty-shadow-a50scvg0.us-east-2.aws.neon.tech/neeraj?sslmode=require"
});
async function createUsersTable() {
    await client.connect();
    const result = await client.query(`CREATE TABLE users{
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR (150) UNIQUE NOT NULL
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        };
        `);
    console.log(result);
}
createUsersTable();
