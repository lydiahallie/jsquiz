import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import fs from "fs";
import path from "path";

const typeDefs = [
  fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")
];

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

const options = {
  playground: process.env.NODE_ENV === "development" ? "/" : false
};

// @ts-ignore: Change options.playground type
server.start(options, ({ port }) => console.log(`Listening on  ${port}!`));
