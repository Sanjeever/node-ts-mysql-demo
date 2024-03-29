import * as mysql from 'mysql'
import { MYSQL_CONFIG } from '@/config/db'
import type { Connection, MysqlError } from 'mysql'

const connection: Connection = mysql.createConnection(MYSQL_CONFIG)

connection.connect()

export const execSQL = (sql: string) => {
  return new Promise((resolve: (value: any) => void, reject) => {
    connection.query({ sql }, (err: MysqlError, result: unknown) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}
