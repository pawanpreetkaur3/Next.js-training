import db from "./db";

export function createUser(email, password) {
    const resullt = db
        .prepare('INSERT INTO users (email, password) VALUES (?, ?)')
        .run(email, password);
    return resullt.lastInsertRowid;
}

export function getUserByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email)
}