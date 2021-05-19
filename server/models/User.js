const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//USER: 
// for data definitions, 
// See assets/Functional-Spec

// email will be unique identifier
// saving first and last name instead of username
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: false,
      trim: true
    },
    headshot: {
      type: String,
      required: false
    },
    aboutMe: {
      type: String,
      required: false,
      trim: true
    },
    devSkills: {
      type: [String]
    },
    colorPref: {
      type: Number,
    },
    fontPref: {
      type: Number,
    },    
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project'
      }
    ],
    socialMedia: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SocialMedia'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
