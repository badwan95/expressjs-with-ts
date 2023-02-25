// Import DB and Server
import server from './main/app';
import db from './main/configs/database/database';

(async function initiateStart() {
  // Check connection to DB, if everything is fine then start the server
  try {
    const c = await db.connect(); // try to connect
    c.done(); // success, release connection
    console.log('Connection to database verified.');
  } catch (err) {
    console.error('Database error: ', err);
    return;
  }
  server.start();
})();
