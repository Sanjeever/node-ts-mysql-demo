# Node.ts - mysql - demo

> 一个运行在 Node.js 上的使用 TypeScript 编写的连接 MySQL 数据库的例子



## 测试环境

| OS           | Microsoft Windows [版本 10.0.19043.1466] |
| ------------ | ---------------------------------------- |
| Terminal     | PowerShell 7.2.1                         |
| Node.js      | v16.13.1                                 |
| npm          | 8.3.0                                    |
| tsc          | Version 4.5.4                            |
| MySQL Server | 8.0.27 MySQL Community Server - GPL      |

仅在以上环境测试，其他环境不保证可用性

## 快速开始

假设你已经安装了 Node.js

安装 TypeScript

```shell
npm install -g typescript
```

进入 `src/config/db.ts` 填写相关配置

```typescript
const MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'mysql'
}
```

若使用 MySQL 8.0+ 需要在 MySQL 中执行以下命令，因为 MySQL 8.0+ 的 root 账户使用新密码哈希方法。使用 MySQL 8.0 以前的版本则不需要

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
# 或
CREATE USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

## '123456' 是用户密码，可自由定义
```

运行

```shell
npm run build && npm run dev
```

如果不出以外将在 `console` 中输出类似如下内容：

```mysql
[
  RowDataPacket { host: 'localhost', user: 'mysql.infoschema' },
  RowDataPacket { host: 'localhost', user: 'mysql.session' },
  RowDataPacket { host: 'localhost', user: 'mysql.sys' },
  RowDataPacket { host: 'localhost', user: 'myuser' },
  RowDataPacket { host: 'localhost', user: 'root' }
]
```

## Thanks

- [mysqljs/mysql](https://github.com/mysqljs/mysql)
- [@types/mysql](https://www.npmjs.com/package/@types/mysql)
- [@types/node](https://www.npmjs.com/package/@types/node)

## LICENSE

[MIT](LICENSE)