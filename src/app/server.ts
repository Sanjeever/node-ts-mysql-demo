import { consola } from 'consola'
import { execSQL } from '@/db/mysql'

const sql: string = `select host,user from user;`

const main = async () => {
  const result = await execSQL(sql)
  consola.success(result, '\n')
  process.exit()
}

main()
