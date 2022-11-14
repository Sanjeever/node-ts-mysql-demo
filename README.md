# Node.ts - mysql - demo

> 一个运行在 Node.js 上的使用 TypeScript 编写的连接 MySQL 数据库的例子

## 测试环境

|   Variable   |                  Value                   |
| :----------: | :--------------------------------------: |
|      OS      | Microsoft Windows [版本 10.0.19043.1466] |
|   Terminal   |             PowerShell 7.2.7             |
|   Node.js    |                 v16.13.1                 |
|     npm      |                  8.5.5                   |
| MySQL Server |   8.0.27 MySQL Community Server - GPL    |

仅在以上环境测试，其他环境不保证可用性

## 快速开始

安装依赖

```bash
npm install
# yarn install
```

进入 `src/config/db.ts` 填写相关配置

```typescript
const MYSQL_CONFIG: ConnectionConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "mysql",
};
```

若使用 MySQL 8.0+ 需要在 MySQL 中执行以下命令，因为 MySQL 8.0+ 的 root 账户使用新密码哈希方法。使用 MySQL 8.0 以前的版本则不需要

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
# 或
CREATE USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

# '123456' 是用户密码，可自由定义
```

运行

```bash
npm run dev
# yarn dev
```

如果不出意外将在 `console` 中输出类似如下内容：

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
- [dividab/tsconfig-paths](https://github.com/dividab/tsconfig-paths)

## LICENSE

[MIT](LICENSE)
