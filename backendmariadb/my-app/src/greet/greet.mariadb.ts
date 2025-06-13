import { createConnection } from "mariadb";
import type { Connection, ConnectionConfig } from "mariadb";
import * as dotenv from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env') });






const dbConfig: ConnectionConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
}

console.log("CONFIGURACIÓN DE BASE DE DATOS:", dbConfig);

let connection: Connection;

async function getConnection(): Promise<Connection> {
    if (!connection) {
        try {
            connection = await createConnection(dbConfig);
            console.log("Database connection established successfully.");

        } catch (error) {

            console.error("Error connecting to the database:", error);
            throw error;
        }
    }
    return connection;
}

getConnection()

export type param = {
    greet: String
    language: String
}

export class Greet {
    static async findAll() {
        const conn = await getConnection()
        return await conn.query('SELECT * FROM saludos')
    }

    static async findByID(id: number) {
        const conn = await getConnection()
        const result = await conn.query('SELECT * FROM saludos WHERE id = ?', [id]);
        return result[0]
    }

    static async create(param: param) {
        const conn = await getConnection();

        // Validación por si acaso
        if (!param.greet || !param.language) {
            throw new Error("Faltan datos");
        }

        const res = await conn.query(
            'INSERT INTO saludos (saludo, idioma) VALUES (?, ?)',
            [param.greet, param.language]
        );

        const result = await conn.query(
            'SELECT * FROM saludos WHERE id = ?',
            [res.insertId]
        );

        return result[0];
    }


    static async delete(id: number) {


        const conn = await getConnection()
        const result = await conn.query('DELETE FROM saludos WHERE id = ?', [id]);
        return result.affectedRows > 0;


    }

    static async update(id: number, param: param) {
        const conn = await getConnection()
        const result = await conn.query('UPDATE saludos SET saludo = ?, idioma = ? WHERE id = ?', [param.greet, param.language, id]);
        return result.affectedRows > 0;
    }
}