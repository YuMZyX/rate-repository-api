import http from 'http';
import logger from './utils/logger';
import { API_PORT, APOLLO_PORT } from './config';
import createApolloServer from './apolloServer';
import app from './app';

const startServer = async () => {
  const httpServer = http.createServer(app);

  const apolloServer = createApolloServer();

  const apollo_port = Number.parseInt(APOLLO_PORT);
  const { url } = await apolloServer.listen({ port: apollo_port });

  httpServer.on('request', app.callback());

  await new Promise((resolve) =>
    httpServer.listen({ port: API_PORT }, resolve),
  );

  logger.info(`Apollo Server listening at: ${url}`);
};

startServer();
