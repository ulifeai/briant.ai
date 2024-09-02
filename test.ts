// scripts/setupDatabase.js

const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbFilePath = path.resolve(__dirname, './files/db/sample.sqlite');

// Create or open the database
const db = new sqlite3.Database(dbFilePath, (err: any) => {
    if (err) {
        console.error('Error opening database:', err);
        process.exit(1);
    }
    console.log('Database created or opened successfully');
});

// Read the SQL file
const sql = `
CREATE TABLE IF NOT EXISTS Role (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role_id INTEGER NOT NULL,
    password VARCHAR(100) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Role(id)
);

CREATE TABLE IF NOT EXISTS Document (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(50) NOT NULL,
    filePath VARCHAR(255) NOT NULL,
    expirationDate DATE,
    uploadedBy INTEGER NOT NULL,
    FOREIGN KEY (uploadedBy) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Contract (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    signedBy INTEGER NOT NULL,
    signedOn DATE,
    FOREIGN KEY (signedBy) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Timesheet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    client VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    hoursWorked DECIMAL(5, 2) NOT NULL,
    signedByUser BOOLEAN DEFAULT FALSE,
    signedByClient BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS "Transaction" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    client VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS UniformRequest (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    size VARCHAR(10) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS InductionMaterial (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

-- Insert initial roles
INSERT INTO Role (name) VALUES ('Admin'), ('Staff'), ('Manager');

-- Sample permissions table structure (optional, to manage role-based actions)
CREATE TABLE IF NOT EXISTS Permission (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_id INTEGER NOT NULL,
    action VARCHAR(100) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Role(id)
);

-- Insert permissions based on JSON spec
INSERT INTO Permission (role_id, action) VALUES
    ((SELECT id FROM Role WHERE name='Admin'), 'RegisterUser'),
    ((SELECT id FROM Role WHERE name='Admin'), 'DeleteUser'),
    ((SELECT id FROM Role WHERE name='Admin'), 'ViewDashboard'),
    ((SELECT id FROM Role WHERE name='Admin'), 'ManageStaff'),
    ((SELECT id FROM Role WHERE name='Admin'), 'ManageDocuments'),
    ((SELECT id FROM Role WHERE name='Admin'), 'CheckCompliance'),
    ((SELECT id FROM Role WHERE name='Admin'), 'SignContract'),
    ((SELECT id FROM Role WHERE name='Admin'), 'GenerateInvoice'),
    ((SELECT id FROM Role WHERE name='Admin'), 'ViewTransactionHistory'),
    ((SELECT id FROM Role WHERE name='Manager'), 'ViewDashboard'),
    ((SELECT id FROM Role WHERE name='Manager'), 'ManageDocuments'),
    ((SELECT id FROM Role WHERE name='Manager'), 'CheckCompliance'),
    ((SELECT id FROM Role WHERE name='Manager'), 'ApproveInvoice'),
    ((SELECT id FROM Role WHERE name='Manager'), 'ViewTransactionHistory'),
    ((SELECT id FROM Role WHERE name='Staff'), 'ViewDashboard'),
    ((SELECT id FROM Role WHERE name='Staff'), 'SubmitTimesheet'),
    ((SELECT id FROM Role WHERE name='Staff'), 'SignContract'),
    ((SELECT id FROM Role WHERE name='Staff'), 'ViewInvoiceHistory'),
    ((SELECT id FROM Role WHERE name='Staff'), 'ViewTransactionHistory');
`

// Execute the SQL commands
db.exec(sql, (err: any) => {
    if (err) {
        console.error('Error executing SQL:', err);
        process.exit(1);
    }
    console.log('Database schema created successfully');
    db.close();
});
