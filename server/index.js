// Express
const express = require('express');
const app = express()
const port = 3001
// Database
const { db } = require('./db');
const dbObject = new db();
const { body, validationResult } = require('express-validator');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// dbObject.findProjects().then(result => console.log(result))


app.get('/users', (req, res) => {
  
    console.log(users);
    res.render('users', { data: users });
})
app.get('/form', (req, res) => {
  
    res.render('form');
})


// Each request
// app.get('/projects', (req, res) => {

//   dbObject.findProjects().then(result => res.status(200).json(result))
//   .catch(error => console.log(error))
// })

// On load...
dbObject.findProjects().then(result => {
  app.get('/projects', (req, res) => {

    res.status(200).json(result)
    
  })

}).catch(error => console.log(error))



app.get('/projectsView', (req, res) => {

  res.render('projects', { data: projects });

})

  

app.get('/json', (req, res) => {
  res.json(users)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api', (req, res) => {
  const user_id = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;
  console.log(req.body)
  // console.log(user_id, token, geo)
  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});

app.post('/formPost',
  body('name').not().isEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').not().isEmpty().trim().escape(),
 (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });   
  console.log(name, email, message)
  dbObject.createContact(name, email, message).catch(error => console.log(error));
  res.send({
    errors: {
      success: `Thank you ${name}, I've received your message`,
    }

  });
});


app.post('/formPost', (req, res) => {
  const name = req.body.name2;
  const email = req.body.email2;
  const message = req.body.message2;
  console.log(req.body)
  // console.log(user_id, token, geo)
  res.send({
    'name': name,
    'email': email,
    'message': message
  });
  dbObject.createContact(name, email, message);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})