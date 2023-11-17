const db = require('../config/db');
module.exports = {

    async criar(req, res) {
        db.Post.create({
            idUsuario: req.body.usuario,
            conteudo: req.body.conteudo,
            curtidas: 0,
        }).then(() => {
            res.status(200).send("Post criado com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async deletar(req, res) {
        db.Post.destroy({
            where: {id: req.body.id}
        }).then(() => {
            res.status(204).send("Post deletado com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async curtir(req, res) {
        db.Post.increment(
            'curtidas',
            {where: {id: req.body.id}}
        ).then(() => {
            res.status(200).send("Post curtido com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async getPost(req, res) {
        var valor;
        if(req.query.id){
            valor = req.query.id;
            db.Post.findOne({where:{id:valor}}).then(n => {res.status(200).send(n)}).catch((err) => {console.log(err)});
        }
        else if(req.query.usuario){
            valor = req.query.usuario;
            db.Post.findAll({where:{idUsuario:valor}}).then(n => {res.status(200).send(n)}).catch((err) => {console.log(err)});
        }
        else{res.status(400).send("Argumentos Invalidos")}
    }
}