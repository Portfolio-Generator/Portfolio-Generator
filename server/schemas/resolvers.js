const { AuthenticationError } = require('apollo-server-express');
const { User, Project, SocialMedia } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('projects')
          .populate('socialMedia');
        
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    //vll: If you're getting all the users (as an admin, for example) you
    // probably don't want to see their portfolios
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('projects')
        .populate('socialMedia');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('projects')
        .populate('socialMedia');
    },
    projects: async () => {
      return Project.find()
        .select('-__v' );
    },


  },

  Mutation: {
  //--login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    
  //--createUser
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    //--updateUser  // where is the id?
    // updateUser: async (parent, args) => {
    //   const user = await User.findOneAndUpdate(args);
    //   const token = signToken(user);

    //   return { token, user };
    // },
    updateUser: async (parent, args , context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { user: args } },
          { new: true, runValidators: true }
        );

        return  updatedUser ;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    // updateProjects: async (parent, args , context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $set: { user: args } },
    //       { new: true, runValidators: true }
    //     );

    //     return  updatedUser ;
    //   }
    
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    addProject: async (parent, args, context) => {
      if (context.user) {
        const newProject = await Project.create(args)
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: newProject._id } },
          { new: true }
        ).populate('projects')
        return  updatedUser ;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProject: async (parent, args , context) => {
      if (context.user) {
        const deleteProjectId = args._id;
        const deletedProject = await Project.findByIdAndDelete({_id: deleteProjectId})
        console.log("&&&&&&&");
        console.log("deletedProject", deletedProject)
        console.log("deleteProjectId", deleteProjectId)
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: {_id: deleteProjectId}} },
          { new: true }
          );
          console.log("!!!!!")
          console.log("updatedUser", updatedUser)
          return  updatedUser  ;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    addSocialMedia: async (parent, args, context) => {
      if (context.user) {
        const newSocialMedia = await SocialMedia.create(args)
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { socialMedia: newSocialMedia._id } },
          { new: true }
        ).populate('socialMedia')
        return  updatedUser ;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    // editProject: async (parent, args , context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       {$set: {projects: args.projects, title: args.title, }}
    //       // { $set: {name: args.name, dateUpdated: date}},
    //       // {  projects: { $elemMatch: {_id: args._id }}},
    //       { new: true }
    //       );
    //       return  updatedUser  ;
    //   }
    
    //   throw new AuthenticationError('You need to be logged in!');
    // },

    removeSocialMedia: async (parent, args , context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { socialMedia: {_id: args._id }} },
          { new: true }
          );
          return  updatedUser  ;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },



  //   addProject: async (parent, args, context) => {
  //     if (context.user) {
  //       const project = await Project.create({ ...args, username: context.user.username });

  //       await User.findByIdAndUpdate(
  //         { _id: context.user._id },
  //         { $push: { projects: project._id } },
  //         { new: true }
  //       );

  //       return project;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  //   addReaction: async (parent, { projectId, reactionBody }, context) => {
  //     if (context.user) {
  //       const updatedProject = await Project.findOneAndUpdate(
  //         { _id: projectId },
  //         { $push: { reactions: { reactionBody, username: context.user.username } } },
  //         { new: true, runValidators: true }
  //       );

  //       return updatedProject;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  //   addFriend: async (parent, { friendId }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $addToSet: { friends: friendId } },
  //         { new: true }
  //       ).populate('friends');

  //       return updatedUser;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   }
  }
};

module.exports = resolvers;
