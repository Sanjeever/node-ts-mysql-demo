import { test } from 'vitest'
import { execSQL } from './mysql'

test('execSQL()', async () => {
  const sql: string = `select host,user from user;`
  const result = await execSQL(sql)
  console.log(result)
})
