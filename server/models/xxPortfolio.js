const { Schema, model } = require('mongoose');
const socialMediaSchema = require('./SocialMedia');
const projectSchema = require('./Project');


// vll: I have tentatively eliminated portfolio - 
// I think our MVP should NOT include preferences
// And then we can store them on the user or revisit?
//?? *** portfolioPreferences need to be an object or array ??? ***
const portfolioSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    colorScheme: {
      type: INT,
      required: false,
      default: 1
    },
    font: {
      type: INT,
      required: false,
      default: 1
    },
    template: {
      type: INT,
      required: true
    },
    projects: [projectSchema],
    socialMedia: [socialMediaSchema]
  }
);


const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;