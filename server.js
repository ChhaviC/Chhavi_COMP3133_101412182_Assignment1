require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers/resolvers");

console.log("Loaded MongoDB URI:", process.env.MONGO_URI);

connectDB(); // Ensure DB connection before starting server

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("✅ Server running at http://localhost:4000/graphql");
  });
}

startServer();
