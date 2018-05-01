const Sequelize =require('sequelize');
const sequelize = new Sequelize("sqlite:quizzes.sqlite");
 sequelize.define('quizzes',
	{
		question: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: ""}}
		},
		answer: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: ""}}
		}
	});
};

sequelize.sync()
.then(() => sequelize.models.quizzes.count())
.then(count => {
  if(!count){
    return sequelize.models.quizzes.bulkCreate([
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