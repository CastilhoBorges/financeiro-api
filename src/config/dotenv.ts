import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = parseInt(process.env.DB_PORT || "5432", 10); 
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASS = process.env.DB_PASS || "12345678";
export const DB_NAME = process.env.DB_NAME || "crux";
