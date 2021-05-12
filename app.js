const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
const img2 = document.querySelector(".img2");

const list = document.querySelector(".grid");

btn.addEventListener("click", function () {
  const value = input.value;
  console.log(value);
  const url = `https://api.unsplash.com/search/photos/?client_id=${yes}&query=${value}`;
  console.log(url);

  //   Make a request to API
  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.ok) return response.json();
      else alert("Wrong url");
    })
    .then((data) => {
      console.log(data);
      console.log(data.results);
      console.log(data.results[0]);
      console.log(data.results[5].links.html);
      createImagesArray(data);
    });
});

function createImagesArray(data) {
  const imageNodes = [];
  for (let i = 6; i < 9; i++) {
    imageNodes[i] = document.createElement("div");
    imageNodes[i].className = "img";
    imageNodes[i].style.backgroundImage =
      "url(" + data.results[i].urls.regular + ")";
    imageNodes[i].addEventListener("dblclick", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    list.appendChild(imageNodes[i]);
  }
}
