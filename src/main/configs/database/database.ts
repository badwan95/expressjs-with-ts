import sql from 'mssql';
import 'dotenv/config';
const config = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || '',
  database: process.env.DB_NAME || '',
  options: {
    encrypt: true, // Use SSL encryption
    enableArithAbort: true, // Fix errors related to arithmetic operations
    // In production this should be false
    trustServerCertificate:
      process.env.TrustServerCertificate === 'true' || false,
  },
};

const pool = new sql.ConnectionPool(config);

export const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default {
  connectDB,
};

export {pool};
