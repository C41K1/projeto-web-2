const Sequelize = require("sequelize");
const sequelize = new Sequelize("Projeto2_web2", "postgres", "1234", {
    host: 'localhost',
    dialect: 'postgres'
});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require("../models/usuario")(sequelize, Sequelize);
db.Post = require("../models/post")(sequelize, Sequelize);
db.Comentario = require("../models/comentario")(sequelize, Sequelize);

db.Post.hasMany(db.Comentario, {foreignKey: "idPost"});
db.Post.belongsTo(db.Usuario, {foreignKey: "idUsuario"});
db.Comentario.belongsTo(db.Usuario, {foreignKey: "idUsuario"});

module.exports = db;