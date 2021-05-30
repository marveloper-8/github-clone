function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const container = document.querySelector("#repos");
  const info = document.querySelector("#info");
  const url = "https://api.github.com/users/marveloper-8";


  fetch(`${url}/repos`)
    .then(resp => resp.json())
    .then(function(data) {
    let repo = data;
    return repo.slice(0, 20).map(function(repo) {
      let item = createNode("div"),
        div = createNode("div"),
        top = createNode("div"),
        name = createNode("div"),
        button = createNode("button"),
        buttonImage = createNode("span"),
        buttonText = createNode("span"),
        details = createNode("div");
        description = createNode("div");
        language = createNode("span");
        dot = createNode("span");
        languageName = createNode("span");
        date = createNode("span");

        let date_value = new Date(repo.updated_at)

        item.className = `item ${repo.language}`;
        top.className = "top";
        button.className = "button";
        name.className = "name";
        details.className = "details";
        language.className = "language";
        description.className = "description";
        dot.className = "dot";

        name.innerHTML = `${repo.name}`;
        buttonImage.innerHTML = `<svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>`;
        buttonText.innerHTML = `Star`;
        description.innerHTML = `${repo.description}`;
        languageName.innerHTML = `${repo.language}`;
        date.innerHTML = `Updated at ${date_value.toDateString()}`;

        append(language, dot);
        append(language, languageName);
        append(div, top);
        append(top, name);
        append(top, button);
        append(button, buttonImage);
        append(button, buttonText);
        append(div, details);
        {repo.description === null ? "" : append(details, description)}
        {repo.language === null ? "" : append(details, language)}
        append(details, date);
        append(item, div);
        append(container, item);
    });
  })
    .catch(function(error) {
    console.log(error);
  });
  
  fetch(`${url}`)
    .then(resp => resp.json())
    .then(function(data) {
      let name = createNode("div"),
      image = createNode("div"),
      username = createNode("div"),
      description = createNode("div");

        name.className = "name";
        image.className = "image";
        username.className = "username";
        description.className = "description";

        name.innerHTML = `${data.name}`;
        username.innerHTML = `${data.login}`;
        description.innerHTML = `${data.bio}`;
        
        image.style.backgroundImage = `url(${data.avatar_url})`;

        append(info, image);
        append(info, name);
        append(info, username);
        append(info, description);
  })
    .catch(function(error) {
    console.log(error);
  });