const db = require("./config/db")

db.sequelize.sync({ force: true }).then(() => { console.log("Sincronizando Banco"); });