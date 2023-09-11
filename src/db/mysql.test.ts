import { test } from 'vitest'
import { execSQL } from './mysql'
import log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = 'debug'

test('execSQL()', async () => {
  const sql: string = `select host,user from user;`
  const result = await execSQL(sql)
  logger.info(result)
})
