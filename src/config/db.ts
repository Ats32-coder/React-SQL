import sql from "mssql"; // Toob sisse mssql paketi (sellega ühendume andmebaasiga)

export const dbConfig: sql.config = { // Siin määrame andmebaasi ühenduse seaded
  user: "sa", // kasutajanimi (nt SQL Serveri admin)
  password: "123", // parool
  server: "localhost", // kus andmebaas asub (siin samas arvutis)
  database: "ReactData", // andmebaasi nimi
  options: {
    encrypt: false, // kas kasutada krüpteerimist (false = ei)
    trustServerCertificate: true // usaldab serveri sertifikaati
  },
  port: 1433 // SQL Serveri port
};

export const poolPromise = new sql.ConnectionPool(dbConfig) // Loome ühenduse andmebaasiga
  .connect() // proovib ühendust luua
  .then((pool) => {
    // Kui õnnestub, siis näitab konsoolis sõnumit
    console.log("Ühendus MS SQL-iga loodud!");
    return pool; // tagastab ühenduse, et seda mujal kasutada
  })
  .catch((err) => {
    // Kui tekib viga, siis näitab errorit
    console.error("Ühenduse viga:", err);
    throw err; // viskab vea edasi
  });
