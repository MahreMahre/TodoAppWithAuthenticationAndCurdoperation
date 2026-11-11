const mongoose = require('mongoose');



async function ConnectDB(){

    try{
        await mongoose.connect("mongodb+srv://umairjahangir98_db_user:aar7nfn4IXGYtKsy@vantix.byciqkq.mongodb.net/TodoAppclear" );
        console.log("Database connected successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = ConnectDB;
