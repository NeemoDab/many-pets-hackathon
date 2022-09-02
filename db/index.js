// DO NOT TOUCH 
//importing postgress Making query function and exporting it
import pg from "pg";
export const pool= new pg.Pool({
    USER:process.env.PGUSER,
    DATABASE:process.env.PGDATABASE,
    PASSWORD:process.env.PGPASSWORD,
    HOST:process.env.PGHOST,
    PORT:process.env.PORT,
    ssl:{ rejectUnauthorized: false}
});
// process.env.PGPORT
export function query(INT,params,callback){
    return pool.query(INT,params,callback);
};
