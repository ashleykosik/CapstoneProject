// make buttons work
// make the form work
// display requests from database

// utils 
const baseURL = `http://localhost:5500`;
// add querys for front end elements

// buttons from index
const userLogin = document.getElementById('userLogin')
const newUserSubmit = document.getElementById('newUserSubmit')

// inputs from index
const username = document.getElementById('username')
const newUser = document.getElementById('newUser')
const password = document.getElementById('password')
const newPassword = document.getElementById('newPassword')


const login = () => {
  let body = { username: username.value, password: password.value }
  axios.post(`${baseURL}/api/login`, body)
    .then((res) => {
      console.log(res.data);
      let token = res.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", res.data.id);
      //window.location.href = `/`;
    })
    .catch((err) => console.log(err));
  }

const signUp = () => {
  let body = { username: newUser.value, password: newPassword.value }
  axios
    .post(`${baseURL}/api/signUp`, body)
    .then(async (res) => {
      // console.log("hit signup");
      let token = await res.data.token;
      console.log(res.data);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", res.data.id);
      //window.location.href = `/`;
    })
    .catch((err) => console.log(err));
  }

userLogin.addEventListener('click', login)
newUserSubmit.addEventListener('click', signUp)












// create display - turn form entry into container-li inside specific list
// const createLi = (x) => {

//     let displayLi = document.createElement("li")
//     displayLi.classList.add()

//     displayLi.innerHTML = `
//     <li class="">
//         <h class="card-title">${result.title}</h>
//         <p class="card-text overflow-hidden">${result.overview}</p>
//         <a href="#" onclick='addToList(${resultObj})' class="btn btn-primary">Add to list</a>
//         </div>
//         `;
//     displaySection.appendChild(displayDiv)
// }

// const addToList = (movieObj) => {
//     console.log(movieObj);
//     let token = sessionStorage.getItem("token");
//     let userId = sessionStorage.getItem("userId");
//     token == null
//       ? alert("Please login to add to list")
//       : axios
//           .post(`${baseURL}/api/list/${userId}`,movieObj, {
//             headers: {
//               authorization: token,
//             },
//           })
//           .then((res) => alert(res.data))
//           .catch((err) => console.log(err));
//   };
  
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const userInput = searchInput.value;
  //   displaySection.innerHTML = "";
  //   searchInput.value = ``;
  //   axios
  //     .get(`${baseURL}/api/query/?search=${userInput}`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       createCard(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };



//searchForm.addEventListener("submit", handleSearch);
