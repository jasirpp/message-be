const jsonServer = require('json-server')

const mediaPlayerServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()

const port = 4000 || process.env.PORT

mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player server started at port ${port}, and waiting for client request!!!`);
})
