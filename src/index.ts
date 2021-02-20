/**
 * @name personal-backend
 * @author cyntler <damian@cyntler.com>
 */
import { join } from 'path';
import { ApolloServer, gql } from 'apollo-server';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';

config({
  path: join(__dirname, '../.env'),
});

const port = process.env.APP_PORT || 4000;
const prisma = new PrismaClient();

console.log(prisma);

const typeDefs = gql`
  type Post {
    title: String!
    content: String
  }

  type Query {
    posts: [Post!]!
  }
`;

const resolvers = {
  Query: {
    posts: () => prisma.post.findMany(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({
  port,
});
