const section = document.getElementById("main");
const input = document.getElementById("search_box");

document.getElementById("btn").addEventListener("click", async function () {
  try {
    const accessKey = "DQGvYlaiaTMdASe6-kYW17XFLeIuTVaHvKKNFgS1zZM";
    const endpoint = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${input.value}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const values = data.results;
    console.log(input.value);
    console.log(data);

    if (data.results !== undefined) {
      for (let i = 0; i < values.length; i++) {
        console.log("Ok");
        const newImage = document.createElement("img");
        newImage.src = values[i].urls.small_s3;
        section.appendChild(newImage);
      }
    }
  } catch (error) {
    console.error(error);
  }
});
