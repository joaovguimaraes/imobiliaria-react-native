import { useEffect } from 'react';
import { DatabaseConnection } from './database-connection';

const useDatabaseInit = () => {
  useEffect(() => {
    const db = DatabaseConnection.getConnection();
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );

    const createTableSql = `CREATE TABLE IF NOT EXISTS casa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            address TEXT,
            type TEXT,
            price REAL,
            condominiumPrice REAL,
            rooms INTEGER,
            bathrooms INTEGER,
            image TEXT,
            occupied BOOLEAN 
    );`;

    const insertDataSql = `INSERT INTO casa(address, type, price, condominiumPrice, rooms, bathrooms, image, occupied ) 
      VALUES('AAA','AAA', 'AAA', 999,999,99,99,'https://th.bing.com/th/id/OIP.ANbX-75zI_YlGZjuCrF7BQHaFj?pid=ImgDet&rs=1',FALSE );`;

    db.transaction(
      (tx) => {
        tx.executeSql(createTableSql);
        tx.executeSql(insertDataSql);
      },
      (error) => {
        console.log('error call back : ' + JSON.stringify(error));
        console.log(error);
      },
      () => {
        console.log('transaction complete call back ');
      }
    );
  }, []);
};

export default useDatabaseInit;
