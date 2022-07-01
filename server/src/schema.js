import { gql } from "apollo-server";

const typeDef = gql`
  "Query to get tracks array for the homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author af a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export default typeDef;