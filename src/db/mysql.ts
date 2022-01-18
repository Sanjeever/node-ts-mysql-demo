import * as mysql from 'mysql';
import {MYSQL_CONFIG} from '../config/db';

const connection = mysql.createConnection(MYSQL_CONFIG);

connection.connect();

function execSQL(sql): Promise<() => {}> {
    return new Promise(((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    }));
}

export {execSQL};
