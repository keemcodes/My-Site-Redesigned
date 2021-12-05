const express = require('express')
const app = express()
const port = 3001
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sql_hr', 'newuser', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    // more settings here
});

const Employees = sequelize.define('employees', {
  // Model attributes are defined here
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  reports_to: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: "NULL"
    // allowNull defaults to true
  },
  office_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  timestamps: false
});
                        {/* 
                            Database Schema
                            Projects
                            * Name ()
                            * Date
                            * Title
                            * Body
                            * Github
                            * External
                            * Langs (foreign key to langs table)
                        */}
const Projects = sequelize.define('projects', {
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    date: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.NOW
      // allowNull defaults to true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    body: {
      type: DataTypes.STRING(1000)
      // allowNull defaults to true
    },
    github: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    external: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },  
  }, {
    timestamps: false
  });
const Languages = sequelize.define('langs', {
    lang: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: false
});


async function addEmployee() {
    try {
        const akeem = await Employees.create({ 
            employee_id: 32394,
            first_name: "Akeem",
            last_name: "Anderson", 
            job_title: "Coolest Guy",
            salary: 999999,
            reports_to: 37270,
            office_id: 3,
        });
        console.log("Akeems's auto-generated ID:", akeem.employee_id);

    }
    catch (error) {
        console.error('Unable to insert here is why:', error);

    }

}


function randomName() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}
async function addUser() {
    try {
        const akeem2 = await User.create({ 
            firstName: randomName(),
            lastName: randomName(), 
        });
        console.log("Random's auto-generated ID:", akeem2.id);

    }
    catch (error) {
        console.error('Unable to insert here is why:', error);

    }

}
var users;
async function findUsers() {
    try {
        users = await User.findAll({
            raw : true
        });
        console.table(users) ;

    }
    catch (error) {
        console.error('Unable to insert here is why:', error);

    }

}
var projectsBucket;
async function findProjects() {
    try {
        // projectsBucket = await Projects.findAll({
        //     include: Languages,
        //     raw : true,
            
        // });
        // console.log(projectsBucket) ;
        projectsBucket = await Projects.findAll({ include: Languages });
        console.log(JSON.stringify(projectsBucket, null, 2));

    }
    catch (error) {
        console.error('Unable to insert here is why:', error);

    }

}
async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
} 

async function sync() {
    await sequelize.sync({});
    console.log("All models were synchronized successfully.");
}

Projects.hasMany(Languages);
Languages.belongsTo(Projects);
sync();

findUsers();
findProjects();


app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/users', (req, res) => {
  
    console.log(users);
    res.render('users', { data: users });
})
app.get('/projectsView', (req, res) => {
  
    // res.render('projects', { data: projectsBucket });
  res.send(projectsBucket);

})
  

app.get('/json', (req, res) => {
  res.json(users)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})