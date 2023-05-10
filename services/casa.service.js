import { DatabaseConnection } from '../database/database-connection';

const table = 'casa';
const db = DatabaseConnection.getConnection();

export function findAll() {
  return new Promise((resolve, reject) =>
    db.transaction(
      (tx) => {
        tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
          resolve(rows);
        }),
          (sqlError) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    )
  );
}
