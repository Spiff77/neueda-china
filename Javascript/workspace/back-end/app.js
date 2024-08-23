import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MySQL connection setup
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'music_db'
});


// Get all artists
app.get('/artists', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Artist');
        res.json(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get artist by ID
app.get('/artists/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Artist WHERE id = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Artist not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get albums by artist ID
app.get('/artists/:id/albums', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Album WHERE artistId = ?', [req.params.id]);
        res.json(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add a new artist
app.post('/artists', async (req, res) => {
    try {
        const { name, country, numberOfMembers, style } = req.body;
        const [result] = await pool.query('INSERT INTO Artist (name, country, numberOfMembers, style) VALUES (?, ?, ?, ?)', [name, country, numberOfMembers, style]);
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add a new album
app.post('/albums', async (req, res) => {
    try {
        const { name, numberOfTracks, releaseYear, artistId } = req.body;
        const [result] = await pool.query('INSERT INTO Album (name, numberOfTracks, releaseYear, artistId) VALUES (?, ?, ?, ?)', [name, numberOfTracks, releaseYear, artistId]);
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

