import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

(async () => {
  await mongoose.connect(process.env.APP_MONGO_DB_URI, {
    useNewUrlParser: true,
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server
    .listen({
      port: process.env.APP_PORT || 4000,
    })
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
})();
