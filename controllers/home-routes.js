const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Get all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['content', 'created_at', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    const formattedPosts = posts.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts: formattedPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other routes if needed for homepage

module.exports = router;
