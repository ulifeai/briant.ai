// pages/api/users.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    const users = await db.all('SELECT * FROM users');
    res.status(200).json(users);
}
