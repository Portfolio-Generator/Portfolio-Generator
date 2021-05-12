const { Schema } = require('mongoose');

// PROJECT: 
// see assets/Functional-Spec for definitions

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Each project needs a title',
      minlength: 1,
      maxlength: 280
    },
    thumbnail: {
      type: String,
      required: false,
      maxlength: 280,
      default: 'https://via.placeholder.com/300'
    },
    repoLink: {
      type: String,
      required: false,
      maxlength: 280
    },
    deployedLink: {
      type: String,
      required: false,
      maxlength: 280
    },
    videoLink: {
      type: String,
      required: false,
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
    projectSkills: [String]
  },

);

module.exports = projectSchema;