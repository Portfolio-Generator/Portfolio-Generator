const { gql } = require('apollo-server-express');
//vll:?? How do you assign a proj to a user or do
// other stuff ? Doesn't need a mutation?
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    headshot: String
    bio: String
    portfolio: [Portfolio]
    friends: [User]
    friendCount: Int
  }

  type Portfolio {
    _id: ID!
    username: String!
    colorScheme: Int
    font: Int
    template: Int!
    projects: [Project]
    socialMedia: [SocialMedia]
  }

  type Project {
    _id: ID!
    title: String!
    organization: String
    blurb: String
    imgLink String
    deployedLink: String
    skillList: String    
  }

  type SocialMedia {
    _id: ID!
    linkName: String!
    linkIcon: String
    linkAddress: String!
  }
 
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    portfolio(username: String): Portfolio

  }

  type Mutation {
    login(email: String!, password: String!): Auth

    createUser(
      username: String!
      email: String!
      password: String!
      headshot: String
      bio: String
      portfolio: Portfolio
      friends: [User]
      friendCount: Int
      ): Auth

    addSocialMedia (
      linkName: String!
      linkIcon: String
      linkAddress: String!
    ): Portfolio

    addProjects (
      title: String!
      organization: String
      blurb: String
      imgLink: String
      deployedLink: String
      skillList: [String]
    ): Portfolio

    createPortfolio(
      colorScheme: Int
      font: Int
      template: Int!
      projects: [Project]
      socialMedia: [SocialMedia]
      ): Portfolio

    editSocialMedia (socialMediaId: ID!): Portfolio

    editProject (projectId: ID!): Portfolio

    editPortfolio(username: String!): Portfolio
  }
`;

module.exports = typeDefs;
