import type { ConnectionConfig } from 'mysql'
import { read } from 'rc9'

const MYSQL_CONFIG: ConnectionConfig = read()
export { MYSQL_CONFIG }
