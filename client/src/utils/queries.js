import gql from 'graphql-tag';

//put in whatever data you want to get back

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      firstname
      lastname
      phone
      headshot
      aboutMe
      devSkills
      colorPref
      fontPref
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
      socialMedia: {
        _id: ID!
        platform
        icon
        accountLink
      }
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
    _id
    email
    firstname
    lastname
    phone
    headshot
    aboutMe
    devSkill
    colorPref
    fontPref
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
    socialMedia: {
      _id: ID!
      platform
      icon
      accountLink
    }
  }
}
`;


export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      email
      firstname
      lastname
      phone
      headshot
      aboutMe
      devSkills
    }
  }
`;
// not sure what you pass into this one?
export const QUERY_USERS = gql`
  query users() {
    user(email: $email) {
      _id
      email
      firstname
      lastname
      phone
      headshot
      aboutMe
      devSkills
          }
  }
`;
