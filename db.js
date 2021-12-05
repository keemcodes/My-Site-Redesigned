const { Sequelize, DataTypes } = require('sequelize');

function db() {

    this.sequelize = new Sequelize('sql_hr', 'newuser', 'password', {
        host: 'localhost',
        dialect: 'mysql'
    });

    
    Contacts = this.sequelize.define('contacts', {
        // name: {
        //   type: DataTypes.STRING,
        //   allowNull: false
        // },
        name: {
          type: DataTypes.STRING,
          // defaultValue: Sequelize.NOW
          // allowNull defaults to true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
          // allowNull defaults to true
        },
        message: {
          type: DataTypes.STRING(1000)
          // allowNull defaults to true
        }, 
      }, {
        timestamps: false
    });
    Projects = this.sequelize.define('projects', {
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
    Languages = this.sequelize.define('langs', {
        lang: {
          type: DataTypes.STRING,
          allowNull: false
        },
      }, {
        timestamps: false
    });
    
    
    // async function function addEmployee() {
    //     try {
    //         const akeem = await Employees.create({ 
    //             employee_id: 32394,
    //             first_name: "Akeem",
    //             last_name: "Anderson", 
    //             job_title: "Coolest Guy",
    //             salary: 999999,
    //             reports_to: 37270,
    //             office_id: 3,
    //         });
    //         console.log("Akeems's auto-generated ID:", akeem.employee_id);
    
    //     }
    //     catch (error) {
    //         console.error('Unable to insert here is why:', error);
    
    //     }
    
    // }
    
    
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
    async function addInitialProjects() {
      try {
          const initial = await Projects.create({ 
              date: 'Oct. 2021',
              title: 'Portfolio Site Redesign',
              body: 'Asynchronously load in data via frontend get request to backend. Content is rendered in as an endless scroll that switches between "pages" as a user scrolls. Next page is always preloaded to insure fast loading speed and improve user experience.',
              github: "https://github.com/keemcodes/My-Site-Redesigned",
              external: "https://github.com/keemcodes/My-Site-Redesigned",
              langs: [
                { lang: "React" },
                { lang: "JS" },
                { lang: "Node JS" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          //         date='July 2021'
          // title='Employee Initiatives App'
          // body={<p>Built a high utilization application supporting over <b>50,000 internal enterprise users</b> in submitting weekly initaitives and requesting co-worker support. Application integrates Microsoft Active Directory to offer SSO to our internal users.</p>}
          // langs={['PHP', 'JS']}
          // github="https://github.com/keemcodes/Employee-Initiatives-App-Official-Changelog"
          // external="https://github.com/keemcodes/Employee-Initiatives-App-Official-Changelog"
          const initial2 = await Projects.create({ 
              date : 'July 2021',
              title : 'Employee Initiatives App',
              body : 'Built a high utilization application supporting over <b>50,000 internal enterprise users</b> in submitting weekly initaitives and requesting co-worker support. Application integrates Microsoft Active Directory to offer SSO to our internal users.',
              github : "https://github.com/keemcodes/Employee-Initiatives-App-Official-Changelog",
              external : "https://github.com/keemcodes/Employee-Initiatives-App-Official-Changelog",
              langs: [
                { lang: "PHP" },
                { lang: "JS" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial3 = await Projects.create({ 
              date: 'June 2020',
              title: 'Press Releases API',
              body: 'Press Release data provided via API is ingested and parsed into a <b>readable HTML format</b>.',
              github: 'https://github.com/keemcodes/Press-Releases',
              external: 'https://github.com/keemcodes/Press-Releases',
              langs: [
                { lang: "PHP" },
                { lang: "JS" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial4 = await Projects.create({ 
              date: 'Mar. 2020',
              title: 'Security Wait Times App',
              body: 'Integrates proprietary API to consume <b>motion sensor data</b> for customer wait time calculation. Application features include web page integration for public view, web admin panel for manual input and closing / opening of different checkpoints, and email notifications of API status.',
              github: 'https://github.com/keemcodes/Security-Wait-Times-Public-Readme',
              external: 'https://github.com/keemcodes/Security-Wait-Times-Public-Readme',
              langs: [
                { lang: "PHP" },
                { lang: "JS" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial5 = await Projects.create({ 
              date: 'Feb. 2020',
              title: 'ASP.NET to PHP Code Migration',
              body: 'Creating content management API to migrate proprietary ASP.NET interactive pages to PHP web standard.',
              github: 'https://github.com/keemcodes/ASP.NET-to-PHP-Code-Migration',
              external: 'https://github.com/keemcodes/ASP.NET-to-PHP-Code-Migration',
              langs: [
                { lang: "ASP.NET" },
                { lang: "PHP" },
                { lang: "JS" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial6 = await Projects.create({ 
              date: 'Feb. 2019',
              title: 'Internet Relay Chat Bot',
              body: 'Developed an Interactive mSL IRC chatbox known as KeemBot. integrates Twitch chat and tracks user interactions for rewards and prizes.',
              github: 'https://github.com/keemcodes/keemBot',
              external: 'https://github.com/keemcodes/keemBot',
              langs: [
                { lang: "MSL (mIRC)" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial7 = await Projects.create({ 
              date: 'Jun. 2016',
              title: 'Image Search Autohotkey',
              body: 'Game focused automation using AutoHotkey Image Search. Custom API for user customizability.',
              github: 'https://github.com/keemcodes/Mabinogi-MA-Bot',
              external: 'https://github.com/keemcodes/Mabinogi-MA-Bot',
              langs: [
                { lang: "AUTOHOTKEY" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial8 = await Projects.create({ 
              date: 'Jan. 2014',
              title: 'SprunkGuard Detection (SA:MP)',
              body: 'Exploit detection code concept and implementation for a 3rd party invincibility hack/modification known as SprunkGuard. Code concept for detection was officially released to combat widespread use and is now utilized in thousands of SA:MP game server deployments.',
              github: 'https://github.com/keemcodes/SprunkGuard-Detection',
              external: 'https://github.com/keemcodes/SprunkGuard-Detection',
              langs: [
                { lang: "PAWN" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial9 = await Projects.create({ 
              date: 'Oct. 2013',
              title: 'Police Taser (SA:MP)',
              body: 'Custom full featured and interactive police taser. This feature was a redesign of previous command based taser feature. Redesign also includes embedding of roleplay rules as system features.',
              github: 'https://github.com/keemcodes/Anti-Rush-Taze',
              external: 'https://github.com/keemcodes/Anti-Rush-Taze',
              langs: [
                { lang: "PAWN" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          const initial10 = await Projects.create({ 
              date: 'Oct. 2012',
              title: 'Player Property API (SA:MP)',
              body: 'Creating a custom personalized property system for managing the ownership of homes, businesses, vehicles and misc. objects. Utilizing the in-game purchase business model, this system created the initial revenue for the game server.',
              github: 'https://github.com/keemcodes/Evolution-Roleplay',
              external: 'https://github.com/keemcodes/Evolution-Roleplay',
              langs: [
                { lang: "PAWN" },
              ]
          }, {
            include: [ {
                model: Languages,
                as: "langs",
            } ]
          });
          console.log("initial made");
    
      }
      catch (error) {
          console.error('Unable to insert here is why:', error);
    
      }
    }
    async function findProjects() {
    
        await Projects.findAll({ 
          include: [{
            model: Languages,
            as: "langs",
            attributes: ['lang']
          }]
        }).then(result => renderProjects(result) );
    
    
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
        await sequelize.sync({})
        .catch( error => {
          console.log(error);
        });
        console.log("All models were synchronized successfully.");
    }
    
    async function createContact(name, email, message) {
      await Contacts.create({ 
        name: name,
        email: email,
        message: message,
      });
    }
    
    async function dropTables() {
      await sequelize.drop();
      console.log("All tables dropped!");
    }
    // Projects.hasMany(Languages);
    // Languages.belongsTo(Projects);
    // Projects.belongsToMany(Languages, { 
    //   through: "project_lang",
    //   as: 'langs',
    //   // foreignKey: "project_id"
    // });
    // Languages.belongsToMany(Projects, { 
    //   through: "project_lang",
    //   as: 'projects', 
    //   // foreignKey: "lang_id"
    // });    
}

module.exports = {db}