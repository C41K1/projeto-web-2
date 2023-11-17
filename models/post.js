module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        conteudo: {
            type: Sequelize.STRING, allowNull: false
        },
        curtidas: {
            type: Sequelize.INTEGER, allowNull: false
        }
    });
    return Post;
}