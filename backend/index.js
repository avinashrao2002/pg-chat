const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const fs = require("fs");
const path = require("path");

const resolvers = {
  Query: {
    info: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.gql"), "utf8"),
  resolvers,
});

const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`server ready at http://localhost:3000${server.graphqlPath}`)
);
