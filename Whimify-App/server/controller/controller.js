require('dotenv').config
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });


module.exports = {
 // show all movies

    userAddMovie: (req, res) => {
        const { title, year, userId, platform } = req.body;
        sequelize
        .query(`INSERT INTO movies(movie_title, year, user_id, platform) 
                VALUES('${title}', ${year}, ${userId}, '${platform}')
                `)
        .then(() => {
            res.status(200).send('movie added')
        })
        .catch((err) => console.log(err));
    },

    userAddTv: (req, res) => {
        const { title, seasons, episodes, minutes, userId } = req.body;
        sequelize
        .query(`INSERT INTO tv_shows(tv_title, number_of_seasons, total_episodes, average_episode_length_mins, user_id) 
                VALUES('${title}', ${seasons}, ${episodes}, ${minutes}, ${userId})
                `)
        .then(() => {
            res.status(200).send('tv show added')
        })
        .catch((err) => console.log(err));
    },

    userAddBook: (req, res) => {
      const { title, author, userId, pages } = req.body;
      sequelize
      .query(`INSERT INTO books(book_title, author, total_pages,  user_id) 
              VALUES('${title}', '${author}',  ${pages}, ${userId})
              `)
      .then(() => {
          res.status(200).send('book added')
      })
      .catch((err) => console.log(err));
    },

    userAddGame: (req, res) => {
      const { title, platform, userId } = req.body;
      sequelize
      .query(`INSERT INTO games(game_title, platform, user_id) 
              VALUES('${title}', '${platform}', ${userId})
              `)
      .then(() => {
          res.status(200).send('game added')
      })
      .catch((err) => console.log(err));
    },

    getMovies: (req, res) => {
      const {userId} = req.params
      sequelize.query(`SELECT * FROM movies WHERE user_id = ${userId}`)
        .then(dbRes => {
          res.status(200).send(dbRes[0]) 
          console.log(dbRes[0])
        })
      .catch((err) => console.log(err));
    },
    
    

   

}