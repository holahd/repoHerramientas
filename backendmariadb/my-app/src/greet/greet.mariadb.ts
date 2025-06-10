import {createConnection} from "mariadb";
import type {Connection, ConnectionConfig} from "mariadb";
import  * as dotenv from "dotenv";

dotenv.config();

const dbConfig: ConnectionConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
}

let connection: Connection | null = null;

async function getConnection(): Promise<Connection> {
    if (!connection){
        try{
            connection = await createConnection(dbConfig);
            console.log("Database connection established successfully.");

        } catch (error) {

            console.error("Error connecting to the database:", error);
            throw error;
        }
    }
    return connection;
}

export type param = {
    greet: String   
    Language: String
}

export class Greet {
    static async findAll(){
        const conn = await getConnection()
        return await conn.query('SELECT * FROM regards')
    }

    static async findByID (id: number) {
        const conn = await getConnection()
        const result = await conn.query('SELECT * FROM regards WHERE id = ?', [id]);
        return result[0]
    }

    static async create(param: param) {
    
        const conn = await getConnection()
        const res = await conn.query('INSERT INTO regards (greet, Language) VALUES (?, ?)', [param.greet, param.Language]);
        const result = await conn.query('SELECT * FROM regards WHERE id = ?', [res.insertId]);
        return result[0];
    }

    static async delete (id: number) {


        const conn = await getConnection()
        const result = await conn.query('DELETE FROM regards WHERE id = ?', [id]);
        return result.affectedRows > 0;


    }

    static async update (id: number, param: param) {
        const conn = await getConnection()
        const result = await conn.query('UPDATE regards SET greet = ?, Language = ? WHERE id = ?', [param.greet, param.Language, id]);
        return result.affectedRows > 0;
    }
}