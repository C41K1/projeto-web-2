const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerPostagem = require('../controllers/controllerPost');
const controllerComentarios = require('../controllers/controllerComentarios');
const controllerPost = require('../controllers/controllerPost');
const route = express.Router();

module.exports = route;

route.get("/", function (req, res) {
    (async () => {
        res.send("teste");
    })();
});

route.get("/usuariosList", controllerUsuario.getList);
route.post("/usuarioCadastrar", controllerUsuario.cadastro);
route.post("/usuarioDeletar", controllerUsuario.deletar);
route.post("/usuarioAtualizar", controllerUsuario.atualizar);
route.get("/getUsuario", controllerUsuario.getUsuario);
route.get("/getPopulares", controllerUsuario.getPopulares)
route.post("/postCriar", controllerPost.criar);
route.post("/postDeletar", controllerPost.deletar);
route.post("/postCurtir", controllerPost.curtir);
route.get("/getPost", controllerPost.getPost);
route.post("/comentarioCriar", controllerComentarios.criar);
route.post("/comentarioDeletar", controllerComentarios.deletar);
route.get("/getComentario", controllerComentarios.getComentarios);
