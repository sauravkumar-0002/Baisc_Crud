const mysql=require("mysql2");

const conn=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"9852",
    database:"crudmysql"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB Connected");
})


module.exports=conn;