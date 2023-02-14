// Import DB and Server
import server from './main/app';
import {connectDB} from './main/configs/database/database';

(async function initiateStart() {
  // Check connection to DB, if everything is fine then start the server
  try {
    await connectDB(); // try to connect
    // c.done(); // success, release connection
    console.log('Connection to database verified.');
    server.start();
  } catch (err) {
    console.error('Database error: ', err);
    return;
  }
})();
