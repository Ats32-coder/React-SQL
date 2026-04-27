import sql from "mssql";

export const dbConfig: sql.config = {
  user: "sa",
  password: "123",
  server: "localhost",
  database: "ReactData",
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  port: 1433
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log("Ühendus MS SQL-iga loodud!");
    return pool;
  })
  .catch((err) => {
    console.error("Ühenduse viga:", err);
    throw err;
  });
