/*  const mysql= require('mysql');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'M@h@k@l12'
})
module.exports=pool.promise();  */

const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','M@h@k@l12',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;

