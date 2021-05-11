const { Schema } = require('mongoose');

//socialMediaSchema: see assets/FunctionalSpec

const socialMediaSchema = new Schema(
  {
    platform: {
      type: String,
      required: true,
      maxlength: 280
    },
    icon: {
      type: String,
      required: false,
      maxlength: 280
    },
    accountLink: {
      type: String,
      required: true,
      maxlength: 280
    }
  }
);

module.exports = socialMediaSchema;