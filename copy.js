function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const ul = document.querySelector("#repos");
  const url = "https://api.github.com/users/marveloper-8/repos";
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
    let repo = data;
    return repo.slice(0, 20).map(function(repo) {
      let li = createNode("li"),
          span = createNode("span");
      span.innerHTML = `${repo.name}`;
      append(li, span);
      append(ul, li);
    });
  })
    .catch(function(error) {
    console.log(error);
  });
  