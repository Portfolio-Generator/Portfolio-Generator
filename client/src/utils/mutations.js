import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
      createUser(email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
          token
          user {
            _id
            firstname
            lastname
          }
      }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($firstname: String, $lastname: String,
  $phone: String, $headshot:String, $aboutMe: String, $devSkills: [String], $colorPref: Int, 
  $fontPref: Int) {
    updateUser(firstname: $firstname, lastname: $lastname,
      phone:$phone, headshot: $headshot, aboutMe: $aboutMe devSkills: $devSkills, colorPref: $colorPref,
      fontPref: $fontPref) {
          _id
          firstname
          lastname
          phone
          headshot
          aboutMe
          devSkills
          colorPref
          fontPref
          projects {
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
            platform
            icon
            accountLink
          }
      }
    
}
`;

export const ADD_PROJECT = gql`
mutation addProject($title: String, $thumbnail: String, $repoLink: String, $deployedLink: String,
  $videoLink: String, $organization: String, $blurb: String, $projectSkills: [String]) {
    addProject(title: $title, thumbnail: $thumbnail, repoLink: $repoLink, deployedLink: $deployedLink,
      videoLink: $videoLink, organization: $organization, blurb: $blurb, projectSkills: $projectSkills ) {
      _id
      firstname
      lastname
      projects{
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
    }
  
}
`;

export const ADD_SOCIAL_MEDIA = gql`
mutation addSocialMedia($platform: String, $icon: String, $accountLink: String) {
    addSocialMedia(platform: $platform, icon: $icon, accountLink: $accountLink) {
      _id
      firstname
      lastname
      socialMedia {
        _id
        platform
        icon
        accountLink
      }
    }
}
`;

export const UPDATE_PROJECT = gql`
mutation updateProject($_id: ID!, $title: String, $thumbnail: String, $repoLink: String, $deployedLink: String,
  $videoLink: String, $organization: String, $blurb: String, $projectSkills: [String]) {
    updateProject(_id: $_id, title: $title, thumbnail: $thumbnail, repoLink: $repolink, deployedLink: $deployedLink,
      videoLink: $videoLink, organization: $organization, blurb: $blurb, projectSkills: $projectSkills ) {
        _id
        title
        thumbnail
        repoLink
        deployedLink
        videoLink
        organization
        projectSkills
    }
}
`;

export const UPDATE_SOCIAL_MEDIA = gql`
mutation updateSocialMedia($_id: ID!, $platform: String, $icon: String, $accountLink: String) {
  updateSocialMedia(_id: $_id, platform: $platform, icon: $icon, accountLink: $accountLink) {
    _id
    platform
    icon
    accountLink
  }
}
`;

export const REMOVE_PROJECT = gql`
mutation removeProject($_id: ID!) {
    removeProject(_id: $_id) {
      _id
      firstname
      lastname
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
    }
}

`;

export const REMOVE_SOCIAL_MEDIA = gql`
mutation removeSocialMedia($_id: ID!) {
    removeSocialMedia(_id: $_id) {
      _id
      firstname
      lastname
      socialMedia {
        _id
        platform
        icon
        accountLink
      }
    }
}

`;




