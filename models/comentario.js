module.exports = (sequelize, Sequelize) => {
    const Comentario = sequelize.define("comentario", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        conteudo: {
            type: Sequelize.STRING, allowNull: false
        },
    });
    return Comentario;
}