let files = [
  {
    name: "",
    content: "",
    date: "",
  },
];

function start() {
  if (sessionStorage.getItem("documents")) {
    files = JSON.parse(sessionStorage.getItem("documents"));

    files.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    //Add files to list
    let ul = document.querySelector("#file-list");
    for (let i = 1; i < files.length; i++) {
      let li = document.createElement("li");
      let name = files[i].name;
      let date = files[i].date;
      const file = `<img src="resources\\icon\\document.png" class="grid-img">
                          <span class="grid-title">${name}</span>
                          <span class="grid-date">Last edited: ${date}</span>`;

      li.insertAdjacentHTML("beforeend", file);
      li.addEventListener("click", function () {
        location.href = `writer.html?fileName=${files[i].name}`;
      });
      ul.appendChild(li);
    }
  }
}

start();
