const { gql } = require('apollo-server-express');
//
const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    firstname: String!
    lastname: String!
    phone: String
    headshot: String
    aboutMe: String
    devSkills: [String]
    projects: [Project]
    socialMedia: [socialMedia]
  }

  type Project {
    _id: ID!
    title: String!
    thumbnail: String
    repoLink: String
    deployedLink: String
    videoLink: String
    organization: String
    blurb: String
    projectSkills: String    
  }

  type SocialMedia {
    _id: ID!
    platform: String!
    icon: String
    accountLink: String!
  }
 
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    createUser(
      email: String!
      password:String!
      firstname: String!
      lastname: String!
      phone: String
      ): Auth

    updateUser(
      userId:ID!
      email: String
      firstname: String
      lastname: String
      phone: String
      headshot: String
      aboutMe: String
      devSkills: [String]
      projects: [Project]
      socialMedia: [socialMedia]
      ): Auth
`;

module.exports = typeDefs;

// ********* moved temporarily ************
// addSocialMedia (
//   linkName: String!
//   linkIcon: String
//   linkAddress: String!
// ): Portfolio

// addProjects (
//   title: String!
//   organization: String
//   blurb: String
//   imgLink: String
//   deployedLink: String
//   skillList: [String]
// ): Portfolio

// createPortfolio(
//   colorScheme: Int
//   font: Int
//   template: Int!
//   projects: [Project]
//   socialMedia: [SocialMedia]
//   ): Portfolio

// editSocialMedia (socialMediaId: ID!): Portfolio

// editProject (projectId: ID!): Portfolio

// editPortfolio(username: String!): Portfolio
// }