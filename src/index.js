import http from 'http';
//, APOLLO_PORT
import logger from './utils/logger';
import { API_PORT } from './config';
import createApolloServer from './apolloServer';
import app from './app';

const startServer = async () => {
  const httpServer = http.createServer(app);

  const apolloServer = createApolloServer();

  await apolloServer.listen().then(({ url }) => {
    logger.info(`🚀  Server ready at ${url}`);
  });

  httpServer.on('request', app.callback());

  await new Promise((resolve) =>
    httpServer.listen({ port: API_PORT }, resolve),
  );

  //logger.info(`Apollo Server ready to use, port: ${APOLLO_PORT}`);
};

startServer();
