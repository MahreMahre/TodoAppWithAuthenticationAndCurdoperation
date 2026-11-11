const app = require('./src/app');
require('dotenv').config(); 
const dns = require('node:dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
const ConnectDB = require('./src/db/db');



ConnectDB();



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})