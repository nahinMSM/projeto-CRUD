const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Vercel usará isso para conectar
  ssl: {
    rejectUnauthorized: false // Necessário para rodar em produção
  }
});

app.use(cors());
app.use(express.json());

app.post('/api/intens', async (req, res) => {
  const { title, description } = req.body;
  try {
    await pool.query('INSERT INTO intens (title, description) VALUES ($1, $2)', [
      title,
      description,
    ]);
    res.status(201).send('Item criado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Servidor não encontrado')
  }
});

app.get('/intens', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM intens');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('server não encontrado');
  }
});

// Rota de busca: GET /items?search=texto
app.get('/api/intens', async (req, res) => {
  const { search } = req.query;
  try {
    let query = 'SELECT * FROM intens';
    const params = [];
    if (search) {
      query += ' WHERE title ILIKE $1 OR description ILIKE $1';
      params.push(`%${search}%`);
    }
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/intens/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    await pool.query(
      'UPDATE intens SET title = $1, description = $2 WHERE id = $3',
      [title, description, id]
    );
    res.status(200).send('Item atualizado');
  } catch (error) {
    console.error(error);
    res.status(500).send('server não encontrado');
  }
})

app.delete('/api/intens/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM intens WHERE id = $1', [id]);
    res.status(200).send('Item deletado');
  } catch (error) {
    console.error(error);
    res.status(500).send('server não encontrado');
  }
})

module.exports = app;