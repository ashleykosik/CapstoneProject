
let arr = [ 
    {
    movie_id: 4,
    movie_title: 'Ready Player One',
    year: 2018,
    user_id: 7,
    platform: 'DVD'
  },
  {
    movie_id: 5,
    movie_title: 'The Great Robot',
    year: 2015,
    user_id: 7,
    platform: 'DVD'
  }
]

const displayMessage = function (message) {
    message.forEach(item => {
        console.log(item.movie_title)
        console.log(item.year)
        console.log(item.platform)
    //document.querySelector('.message').textContent = message;
    //movieTitle = message[0]
    })
  };

displayMessage(arr)
