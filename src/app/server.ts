import { execSQL } from "../db/mysql";

const sql: string = `select host,user from user;`;

execSQL(sql).then((tablesData) => {
  console.log(tablesData);
  process.exit();
});
