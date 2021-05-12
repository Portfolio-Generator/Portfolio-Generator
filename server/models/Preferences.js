const { Schema } = require('mongoose');

// PREFERENCES: 
// see assets/Functional-Spec for definitions

const preferenceSchema = new Schema(
  {
    colorScheme: {
      type: Number,
    },
    fonts: {
      type: Number,
    },
  }

);

module.exports = preferenceSchema;