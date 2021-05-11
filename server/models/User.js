const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


//USER:
// username!
// email!
// password!
// headshot
// bio
// projects[Project]
// friends[User]

// this may need its own file

// ************************** ///


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    headshot: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/150'
    },
    bio: {
      type: String,
      required: false,
      trim: true,
      default: 'Enter a short bio for your portfolio'
    },

    //?? READ IN AS AN OJBECT WITH Schema.Types.ObjectId OR AS AN ARRAY??
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio'
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
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

//vll: not sure we need friendcount but leaving for now
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
