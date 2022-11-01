import pgPromise from 'pg-promise';
const { PSQL_USERNAME, PSQL_USER_PASSWORD, PSQL_DB_NAME, PSQL_PORT, PSQL_HOST } = process.env;

const pgp = pgPromise();
const db = pgp(`postgres://${PSQL_USERNAME}:${PSQL_USER_PASSWORD}@${PSQL_HOST}:${PSQL_PORT}/${PSQL_DB_NAME}`);

export default db;