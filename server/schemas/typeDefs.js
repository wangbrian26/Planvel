const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    password: String
    trips: [Trip]
  }

  type Trip {
    _id: ID
    name: String
    start: Date
    end: Date
    location: String
    description: String
    participants: [User]
    costs: [Budget]
    activities: [Activity]
  }

  type Budget {
    _id: ID
    name: String
    amount: String
    participants: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Activity {
    _id: ID
    name: String
    participants: [User]
    date: Date
    time: Date
  }

  type Chat {
    roomID: String
    messages: [Message]
  }

  input MessageInput {
    sender: String
    message: String
  }

  type Query {
    user: User
    pets: [Pet]
    myPets: [Pet]
    pet: Pet
    owner(ownerId: ID): User
    getChat(roomID: String): Chat
    getUserChats(userId: ID): User
  }

  type Mutation {
    register(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      location: String!
    ): Auth

    login(email: String!, password: String!): Auth

    addPet(
      name: String!
      species: String!
      birthday: Date!
      picturesURL: String!
      owner: ID
    ): Pet

    addMatch(pet1: String!, pet2: String!): Matches
    createChat(roomID: String): Chat
    addMessage(roomID: String, message: MessageInput): Chat
  }
`;

module.exports = typeDefs;
