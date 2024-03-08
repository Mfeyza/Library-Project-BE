'use strict'

/* -------------------------------------------------------------------------- */
/*                                 BOOK MODEL                                 */
/* -------------------------------------------------------------------------- */

const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize('postgres://default:6tWNCPBfmyZ0@ep-plain-bar-a4czbxuc.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require')

const Book = sequelize.define('books',{
 title: {
    type:DataTypes.STRING,
    allowNull: false
 },
 author:{
    type:DataTypes.STRING,
    allowNull:false

 },
 ISBN:{
    type:DataTypes.INTEGER,
    allowNull:false
    
 },
 genre:{
    type:DataTypes.STRING,
    allowNull:false

 },
 publicationYear:{
    type:DataTypes.INTEGER,
    allowNull:false
 },
 image: {
    type: DataTypes.TEXT,
    allowNull:false
 }




})
Syncronization:

// sequelize.sync() 
// sequelize.sync({ force: true }) 
// sequelize.sync({ alter: true }) 


sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

module.exports = Book