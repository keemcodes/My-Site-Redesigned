// Express
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express()
const port = process.env.PORT || 3001

// Routes
const routes = require('./routes')

// Configs
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Express session middleware
// =============================================
app.use(session({ secret: 'notsuuch a secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Database testing
// const { dbObject } = require('./config/dbObject')
// dbObject.dropTables();
// dbObject.sync()
// dbObject.forceSync()
// dbObject.addInitialProjects();



//  Routing...
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})