const { User, Post, Comment } = require('../models');

const seedPosts = [
  {
    title: 'Getting Started with Tech Blogging',
    content: 'Something interesting is the works',
    user_id: 1,
  },
  {
    title: 'The Future of Artificial Intelligence',
    content: 'Where will AI take us next?',
    user_id: 2,
  },
  // can add more example posts here
];

const seedComments = [
  {
    content: 'insteresting opinion',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'I completely agree with your thoughts on AI.',
    user_id: 3,
    post_id: 2,
  },
  // can add more example comments here
];

const seedDatabase = async () => {
  await User.bulkCreate([
    {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
    },
    {
      username: 'jane_smith',
      email: 'jane@example.com',
      password: 'password456',
    },
    {
      username: 'bob_jones',
      email: 'bob@example.com',
      password: 'password789',
    },
    // can add more example users here
  ]);

  const users = await User.findAll();

  const posts = await Post.bulkCreate(seedPosts.map(post => ({ ...post, user_id: users[Math.floor(Math.random() * users.length)].id })));

  await Comment.bulkCreate(seedComments.map(comment => ({
    ...comment,
    user_id: users[Math.floor(Math.random() * users.length)].id,
    post_id: posts[Math.floor(Math.random() * posts.length)].id,
  })));
};

module.exports = seedDatabase;
