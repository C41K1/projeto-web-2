const db = require('../config/db');
module.exports = {
    
    async criar(req, res) {
        db.Comentario.create({
            idPost: req.body.post,
            idUsuario: req.body.usuario,
            conteudo: req.body.conteudo,
        }).then(() => {
            res.status(200).send("Comentario criado com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async deletar(req, res) {
        db.Comentario.destroy({
            where: {id: req.body.id}
        }).then(() => {
            res.status(204).send("Comentario deletado com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async getComentarios(req, res) {
        var valor;
        if(req.query.id){
            valor = req.query.id;
            db.Comentario.findOne({where:{id:valor}}).then(n => {res.status(200).send(n)}).catch((err) => {console.log(err)});
        }
        else if(req.query.post){
            valor = req.query.post;
            db.Comentario.findAll({where:{idPost:valor}}).then(n => {res.status(200).send(n)}).catch((err) => {console.log(err)});
        }
        else{res.status(400).send("Argumentos Invalidos")}
    }
}