//get movies button
const getMovies = document.getElementById('viewMovies')

//response section
let response = document.getElementsByClassName('response')

let movieTitle = document.getElementById('to-do-movie-title').textContent
let movieYear = document.getElementById('to-do-movie-year').textContent
let moviePlat = document.getElementById('to-do-movie-plat').textContent

const baseURL = `http://localhost:4000`;


function addToView(data) {
    //removes everything there
    //response.innerHTML = null;
    console.log(data)
    //movieTitle = data[0]['movie_title']
}

const findAllMovies = () => {
    const userId = sessionStorage.getItem("userId")
    axios.get(`${baseURL}/api/getMovies/${userId}`)
    // the request is being made and being sent back but not recieved?
        .then((res) => { 
          // console.log(res)
          addToView(res.data)
        })
        .catch(err => console.log(err))
}

getMovies.addEventListener('click', findAllMovies)


//example
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }