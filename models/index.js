var quiz = require("./quiz");

exports.quiz = quiz;

const path = require('path');

//Load ORM
const Sequelize = require('sequelize');

//To use SQLite data base
const sequelize = new Sequelize("sqlite:quizzes.sqlite");

//Import the definitiion of the Quiz Table from quiz.js
sequelize.import(path.join(__dirname,'quiz'));

//Create tables
sequelize.sync()
.then(() => sequelize.models.quiz.count())
.then(count => {
  if(!count){
    return sequelize.models.quiz.bulkCreate([
      {question: "Capital de Italia",
       answer: "Roma"},
      {question: "Capital de Francia",
       answer: "París"},
      {question: "Capital de España",
       answer: "Madrid"},
      {question: "Capital de Portugal",
       answer: "Lisboa"}
    ]);
  }
})
.catch(error =>{
    console.log(error);
});

module.exports = sequelize;