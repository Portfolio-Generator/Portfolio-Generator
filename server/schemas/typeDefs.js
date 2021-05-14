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
    colorPref: Int
    fontPref:Int
    projects: [Project]
    socialMedia: [SocialMedia]
  }

  type Project {
    _id: ID!
    title: String
    thumbnail: String
    repoLink: String
    deployedLink: String
    videoLink: String
    organization: String
    blurb: String
    projectSkills: [String]    
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

  input UserInput {
    email: String
    firstname: String
    lastname: String
    phone: String
    headshot: String
    aboutMe: String
    devSkills: [String]
    colorPref: Int
    fontPref:Int
   }

   input ProjectInput {
    title: String!
    thumbnail: String
    repoLink: String
    deployedLink: String
    videoLink: String
    organization: String
    blurb: String
    projectSkills: [String]    
   }

   input SocialMediaInput {
    platform: String
    icon: String
    accountLink: String

   }

  type Mutation {
    
    login(
      email: String!, 
      password: String!
      ): Auth

    createUser(
      email: String!
      password:String!
      firstname: String!
      lastname: String!
      ): Auth

      updateUser(input: UserInput): User

      updateProjects(
        _id: ID!
        projectData: ProjectInput
        ): User

      updateSocialMedia(
        _id: ID!
        socialMediaData: SocialMediaInput
        ): User

      addProject(
        title: String
        thumbnail: String
        repoLink: String
        deployedLink: String
        videoLink: String
        organization: String
        blurb: String
        projectSkills: [String]         
      ): User

      addSocialMedia(
        platform: String
        icon: String
        accountLink: String
      ): User

      removeProject(_id:ID!): User     

      removeSocialMedia(_id:ID!): User      
    }
  `;


module.exports = typeDefs;


// input UserInput {
//   email: String!
//   firstname: String!
//   lastname: String!
//   phone: String
//   headshot: String
//   aboutMe: String
//   devSkills: [String]
//   colorPref: Int
//   fontPref:Int
//  }


// editProject(
//   title: String!
//   thumbnail: String
//   repoLink: String
//   deployedLink: String
//   videoLink: String
//   organization: String
//   blurb: String
//   projectSkills:[String]
// ): User

// deleteSocialMedia(_id:ID!
//   platform: String!
//   icon: String
//   accountLink: String!
// ): User


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