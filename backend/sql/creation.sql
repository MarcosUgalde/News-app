DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS searchs;
DROP TABLE IF EXISTS newspapers;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS searchs (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    words_searched TEXT NOT NULL,
    searched_id uuid NOT NULL REFERENCES users
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS newspapers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    newspapers_name TEXT NOT NULL,
    web_url TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS news (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    new_title TEXT NOT NULL,
    link TEXT NOT NULL UNIQUE,
    newspaper_id uuid NOT NULL REFERENCES newspapers
        ON UPDATE CASCADE
        ON DELETE CASCADE
    search_id uuid NOT NULL REFERENCES searchs
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    comment_text TEXT NOT NULL,
    search_id uuid NOT NULL REFERENCES searchs
        ON UPDATE CASCADE
        ON DELETE CASCADE
    user_id uuid NOT NULL REFERENCES users
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS replies (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    reply_text TEXT NOT NULL,
    comment_id uuid NOT NULL REFERENCES comments
        ON UPDATE CASCADE 
        ON DELETE CASCADE
    commented_by uuid NOT NULL REFERENCES users
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);