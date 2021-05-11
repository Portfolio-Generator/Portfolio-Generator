const { Schema } = require('mongoose');

//socialMediaSchema: linkName(required), LinkIcon, linkAddress(required)
const socialMediaSchema = new Schema(
  {
    linkName: {
      type: String,
      required: true,
      maxlength: 280
    },
    linkIcon: {
      type: String,
      required: false,
      maxlength: 280
    },
    linkAddress: {
      type: String,
      required: true,
      maxlength: 280
    }
  }
)

module.exports = socialMediaSchema;