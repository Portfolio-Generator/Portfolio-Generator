import gql from 'graphql-tag';



export const QUERY_ME = gql` {
  me {
    _id
    email
    firstname
    lastname
    phone
    headshot
    aboutMe
  devSkills
  projects {
    _id
    title
    thumbnail
    repoLink
    deployedLink
    videoLink
    organization
    blurb
    projectSkills
  }
  socialMedia {
    _id
    platform
    accountLink
  }
}
}
`;


// not sure what you pass into this one?
export const QUERY_USERS = gql` {
  users {
    _id
    firstname
    lastname
    email
    devSkills
    projects {
      _id
      title
      thumbnail
      repoLink
      deployedLink
      videoLink
      organization
      blurb
      projectSkills
  
    }
    socialMedia {
      _id
      platform
      accountLink
    }
  }
}
`;