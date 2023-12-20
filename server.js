const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET || 'supersecretsecrets',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Routes
app.use('/api', routes.api);
app.use('/', routes.home);

// Sync Sequelize models and start the Express app
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
