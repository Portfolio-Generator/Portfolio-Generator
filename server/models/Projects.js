const { Schema } = require('mongoose');

// PROJECT: projectTitle(required), organization, blurb, imgLink, deployedLink, skillList
//  projectTitle!
//  organization
//  blurb
//  imgLinkLink
//  deployedLink
//  skillList

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Each project needs a title',
      minlength: 1,
      maxlength: 280
    },
    organization: {
      type: String,
      required: false,
      maxlength: 280
    },
    blurb: {
      type: String,
      required: false,
      trim: true,
      default: 'Optional text description'
    },
    imgLink: {
      type: String,
      required: false,
      maxlength: 280,
      default: 'https://via.placeholder.com/300'

    },
    deployedLink: {
      type: String,
      required: false,
      maxlength: 280
    },
    skillList: [String]
  },

);

module.exports = projectSchema;