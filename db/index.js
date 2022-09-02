// DO NOT TOUCH 
//importing postgress Making query function and exporting it
import pg from "pg";
export const pool= new pg.Pool({
    USER:process.env.PGUSER,
    DATABASE:process.env.PGDATABASE,
    PASSWORD:process.env.PGPASSWORD,
    HOST:process.env.PGHOST,
    PORT:process.env.PGPORT,
    ssl:{ rejectUnauthorized: false}
});
// process.env.PGPORT
export function query(text,params,callback){
    return pool.query(text,params,callback);
};
