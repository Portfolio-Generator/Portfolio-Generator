const { Schema, model } = require('mongoose');

// PROJECT: 
// see assets/Functional-Spec for definitions

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: '',
      minlength: 1,
      maxlength: 280
    },
    thumbnail: {
      type: String,
      required: false,
      maxlength: 280
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
      trim: true
    },
    projectSkills: [String]
  },

);

const Project = model('Project', projectSchema);

module.exports = Project;