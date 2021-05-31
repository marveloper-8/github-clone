function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }

const input = document.querySelector(".username")
var popup = document.getElementById("popup");

input.addEventListener('change', updateValue);

let username;
let url

function updateValue(e) {
    username = e.target.value;
    url = `https://api.github.com/users/${username}`;
    console.log(username, url)
}
  
const container = document.querySelector("#repos");
// url = `https://api.github.com/users/${username}`;
const info = document.querySelector("#info");
const button = document.querySelector(".button");
const profilePicture = document.querySelector(".profile-picture");

  button.onclick = function(){
    // alert(username)
    console.log(username, url, input)

    popup.classList.add("none")

    fetch(`${url}/repos`)
        .then(resp => resp.json())
        .then(function(data) {
        let repo = data;
        return repo.slice(0, 20).map(function(repo) {
        let item = createNode("div")

            let date_value = new Date(repo.updated_at)

            item.innerHTML = `<div class="item ${repo.language}"><div>
                <div class="top">
                    <div class="name">${repo.name}</div>
                    <button><svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> Star</button>
                </div>
                <div class="details">
                    ${repo.description ? `<div class="description">${repo.description}</div>` : ``}
                    ${repo.language ? `<span class="language">
                        <span class="dot"></span> <span class="language-name">${repo.language}</span>
                    </span>` : ``}
                    ${repo.stargazers_count > 1 ? `<span class="language"><svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> <span class="language-name">${repo.stargazers_count}</span>
                    </span>` : ``}
                    ${repo.forks_count > 1 ? `<span class="language"><svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> <span class="language-name">${repo.forks_count}</span>
                    </span>` : ``}
                    <span>Updated at ${date_value.toDateString()}</span>
                </div>
            </div></div>`

            append(container, item);
        });
    })
        .catch(function(error) {
        console.log(error);
    });

    
    
    fetch(`${url}`)
        .then(resp => resp.json())
        .then(function(data) {
        let div = createNode("div");

            div.innerHTML = `
                <div class="image" style="background-image:url(${data.avatar_url})">
                    <div class="status"></div>
                </div>
                <div class="name">${data.name}</div>
                <div class="username">${data.login}</div>
                <div class="description">${data.bio}</div>
            `

            profilePicture.style.backgroundImage = `url(${data.avatar_url})`
            
            append(info, div);
    })
        .catch(function(error) {
        console.log(error);
    });
  }




  
window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var bigProfile = document.getElementById("info");
var userInfo = document.getElementById("userInfo");
var sticky = navbar.offsetTop;
var stickyProfile = bigProfile.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    userInfo.classList.add("display")
  } else{
    navbar.classList.remove("sticky");
    userInfo.classList.remove("display")
  }
}


