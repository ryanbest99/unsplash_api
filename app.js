const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const value = input.value;
  console.log(value);
  // const url = `https://api.unsplash.com/photos?page=1/client_id=${yes}&query=${value}&per_page=4`;
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
    });
});
