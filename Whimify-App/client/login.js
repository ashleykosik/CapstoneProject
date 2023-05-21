// utils 
const baseURL = `http://localhost:4000`;

// buttons from index
const userLogin = document.getElementById('userLogin')
const newUserSubmit = document.getElementById('newUserSubmit')

// inputs from index
const username = document.getElementById('username')
const newUser = document.getElementById('newUser')
const password = document.getElementById('password')
const newPassword = document.getElementById('newPassword')

//login
const login = (e) => {
  e.preventDefault()
  let body = { username: username.value, password: password.value }
  axios.post(`${baseURL}/api/login`, body)
    .then((res) => { 
    //   if (res.status(403)) {
    //   alert('Password does not match')
    // }
      //console.log(res.data);
      let token = res.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", res.data.id);
      window.location.href = `./home.html`;
    })
    .catch((err) => console.log(err));
      

}
//sign-up
const signUp = (e) => {
  e.preventDefault()
  let body = { username: newUser.value, password: newPassword.value }
  axios
    .post(`${baseURL}/api/signUp`, body)
    .then(async (res) => {
      // console.log("hit signup");
      let token = await res.data.token;
      //console.log(res.data);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", res.data.id);
      alert(`Thank you for signing up. Please login.`)
      window.location.href = `./index.html`;
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


