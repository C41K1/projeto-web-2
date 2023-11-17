const db = require('../config/db');
module.exports = {
    async getList(req, res) {
        var usuarios = [];
        db.Usuario.findAll().then(n => { res.send(n) }).catch((err) => { console.log(err) });
    },

    async cadastro(req, res) {
        db.Usuario.create({
            nome: req.body.nome,
            apelido: req.body.apelido,
        }).then(() => {
            res.status(200).send("Usuario Cadastrado com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async deletar(req, res) {
        db.Usuario.destroy({
            where: { id: req.body.id }
        }).then(() => {
            res.status(204).send("Usuario deletado com Sucesso!");
        }).catch((err) => {
            console.log(err);
        });
    },

    async atualizar(req, res) {
        var valor;
        if (req.body.nome) {
            valor = req.query.nome;
            db.Usuario.update({ nome: req.body.nome }, { where: { id: req.body.id } }).then(() => { res.status(200).send("Usuario atualizado com Sucesso!") }).catch((err) => { console.log(err) });
        }
        else if (req.body.apelido) {
            valor = req.query.apelido;
            db.Usuario.update({ apelido: req.body.apelido }, { where: { id: req.body.id } }).then(() => { res.status(200).send("Usuario atualizado com Sucesso!") }).catch((err) => { console.log(err) });
        }
        else { res.status(400).send("Argumentos Invalidos") }
    },

    async getUsuario(req, res) {
        var valor;
        if (req.query.id) {
            valor = req.query.id;
            db.Usuario.findOne({ where: { id: valor } }).then(n => { res.status(200).send(n) }).catch((err) => { console.log(err) });
        }
        else if (req.query.nome) {
            valor = req.query.nome;
            db.Usuario.findAll({ where: { nome: valor } }).then(n => { res.status(200).send(n) }).catch((err) => { console.log(err) });
        }
        else if (req.query.apelido) {
            valor = req.query.apelido;
            db.Usuario.findAll({ where: { apelido: valor } }).then(n => { res.status(200).send(n) }).catch((err) => { console.log(err) });
        }
        else { res.status(400).send("Argumentos Invalidos") }
    },

    async getPopulares(req, res) {
        var curtidas = [];
        db.Usuario.findAll({
            attributes: ['id']
        }).then((n) => {
            for (let index = 0; index < n.length; index++) {
                curtidas.push({
                    id: n[index].id,
                    curtidas: 0
                });
                db.Post.findAll({
                    attributes: ['curtidas'],
                    where: { idUsuario: n[index].id }
                }).then(j => {
                    for (let index2 = 0; index2 < j.length; index2++) {
                        curtidas[index].curtidas += j[index2].dataValues.curtidas;
                    }
                }).catch((err) => { console.log(err) });
            }
        }).catch((err) => { console.log(err) });
        setTimeout(() => {
            curtidas.sort((a, b) => { return b.curtidas - a.curtidas })
            res.status(200).send(curtidas);
        }, 1000);
    }
}