// MySQL class

import mysql from 'mysql2';

export default class MySQLDB {
  constructor (config) {
    this.connection = mysql.createPool(config);
  }

  query (sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      })
    })
  }

  async queryRow(sql, values) {
    let rows = await this.query(sql, values);
    if (rows.length > 0) {
        return rows[0];
    }
    return rows;
}

  async queryField(field, sql, values) {
      let row = await this.queryRow(sql, values);
      if (row !== undefined) {
          return row[field];
      }
      return row;
  }

  close() {
      return new Promise((resolve, reject) => {
          this.connection.end( error => {
              if (error) {
                  return reject(error);
              }
              resolve();
          })
      })
  }
}