import * as mysql from "mysql";
import { Connection, MysqlError } from "mysql";
import { MYSQL_CONFIG } from "@/config/db";

const connection: Connection = mysql.createConnection(MYSQL_CONFIG);

connection.connect();

export function execSQL(sql: string) {
  return new Promise((resolve: (value: any) => void, reject) => {
    connection.query({ sql: sql }, (err: MysqlError, result: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
