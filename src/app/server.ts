import { execSQL } from '@/db/mysql'

const sql: string = `select host,user from user;`

const main = async () => {
  const result = await execSQL(sql)
  console.log(result)
  process.exit()
}

main()
