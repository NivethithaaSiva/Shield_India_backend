-- Shield India Database Setup Script
-- Run this script in PostgreSQL to create the database and user

-- Connect to PostgreSQL as superuser (usually postgres)
-- psql -U postgres

-- Create the database
CREATE DATABASE shield_india_db;

-- Create a dedicated user (optional but recommended)
CREATE USER shield_user WITH PASSWORD '2003';

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON DATABASE shield_india_db TO shield_user;

-- Connect to the new database
\c shield_india_db

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO shield_user;

-- Verify the database was created
\l

-- Exit psql
\q 