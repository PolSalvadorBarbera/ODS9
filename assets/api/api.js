// Obrir el servidor: node api.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const dbPath = path.join(__dirname, '../db/database.db');

const allowedTables = [
  "poblacio_comarques",
  "poblacio_sectors",
  "atur_comarca",
  "vab_comarques",
  "inversions_comarques",
  "inversions_liquidades_comarques"
];

// Endpoint per obtenir columnes d'una taula
app.get('/api/:table/columns', (req, res) => {
  const table = req.params.table;
  if (!allowedTables.includes(table)) {
    return res.json({ error: "Taula no vàlida." });
  }
  const db = new sqlite3.Database(dbPath);
  db.all(`PRAGMA table_info(${table})`, [], (err, rows) => {
    db.close();
    if (err) return res.json({ error: "Error accedint a la base de dades.", detall: err.message });
    res.json(rows.map(col => col.name));
  });
});

// Endpoint per obtenir dades d'una taula
app.get('/api/:table', (req, res) => {
  const table = req.params.table;
  if (!allowedTables.includes(table)) {
    return res.json({ error: "Taula no vàlida." });
  }
  let select = "*";
  let where = [];
  let params = [];

  if (req.query.comarca) {
    where.push("comarca = ?");
    params.push(req.query.comarca);
  }
  if (req.query.year) {
    const year = req.query.year.replace(/[^0-9]/g, '');
    select = `comarca, \`${year}\``;
  }

  const db = new sqlite3.Database(dbPath);
  let sql = `SELECT ${select} FROM ${table}`;
  if (where.length) sql += " WHERE " + where.join(" AND ");
  db.all(sql, params, (err, rows) => {
    db.close();
    if (err) return res.json({ error: "Error accedint a la base de dades.", detall: err.message });
    res.json(rows);
  });
});

// Inicia el servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API escoltant a http://localhost:${PORT}/api/{taula}`);
  console.log('Exemple: http://localhost:3001/api/poblacio_comarques');
});