const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const server = restify.createServer();

const cors = corsMiddleware({
  origins: ['*']
});

server.use(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser());


server.listen(3000, () => {
  server.get(
    '/game1/*',
    restify.plugins.serveStaticFiles('./game1', {
      maxAge: 0,
      etag: false,
    })
  )
});
