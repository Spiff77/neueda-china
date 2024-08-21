-- Create the database
CREATE DATABASE music_db;

-- Use the created database
USE music_db;

-- Create the 'Artist' table
CREATE TABLE Artist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50),
    numberOfMembers INT,
    style VARCHAR(50)
);

-- Create the 'Album' table
CREATE TABLE Album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    numberOfTracks INT,
    releaseYear YEAR,
    artistId INT,
    FOREIGN KEY (artistId) REFERENCES Artist(id)
);

-- Insert sample data into the 'Artist' table
INSERT INTO Artist (name, country, numberOfMembers, style)
VALUES 
('The Beatles', 'UK', 4, 'Rock'),
('Daft Punk', 'France', 2, 'Electronic'),
('Nirvana', 'USA', 3, 'Grunge');

-- Insert sample data into the 'Album' table
INSERT INTO Album (name, numberOfTracks, releaseYear, artistId)
VALUES 
('Abbey Road', 17, 1969, 1),
('Discovery', 14, 2001, 2),
('Nevermind', 12, 1991, 3);

