// Defining our 'Comments' table
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    commentBody : {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  return Comments;
}