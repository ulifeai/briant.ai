CREATE TABLE Role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role_id INT NOT NULL,
    password VARCHAR(100) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Role(id)
);

CREATE TABLE Document (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    filePath VARCHAR(255) NOT NULL,
    expirationDate DATE,
    uploadedBy INT NOT NULL,
    FOREIGN KEY (uploadedBy) REFERENCES User(id)
);

CREATE TABLE Contract (
    id SERIAL PRIMARY KEY,
    client VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    signedBy INT NOT NULL,
    signedOn DATE,
    FOREIGN KEY (signedBy) REFERENCES User(id)
);

CREATE TABLE Timesheet (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    client VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    hoursWorked DECIMAL(5, 2) NOT NULL,
    signedByUser BOOLEAN DEFAULT FALSE,
    signedByClient BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE Transaction (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    client VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE UniformRequest (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    size VARCHAR(10) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE InductionMaterial (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

-- Insert initial roles
INSERT INTO Role (name) VALUES ('Admin'), ('Staff'), ('Manager');

-- Sample permissions table structure (optional, to manage role-based actions)
CREATE TABLE Permission (
    id SERIAL PRIMARY KEY,
    role_id INT NOT NULL,
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
