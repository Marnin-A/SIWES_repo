const section = document.getElementById("main");
const query = document.getElementById("search_box");
// const

document.getElementById("btn").addEventListener("click", async () => {
  const accessKey = "DQGvYlaiaTMdASe6-kYW17XFLeIuTVaHvKKNFgS1zZM";
  // const url0 = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=20`;
  const url1 = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${query.value}`;
  const response = await fetch(url1);
  const data = await response.json();
  console.log(data.results);
  console.log(query.value);
  const values = data.results;

  for (let i = 0; i < values.length; i++) {
    console.log("Man");
    const newImage = document.createElement("img");
    newImage.src = values[i].urls.small;
    console.log(values[i].urls.small);
    section.append(newImage);
    console.log(section.childNodes);
  }
  // data.forEach((element) => {
  //   console.log("Man");
  //   const newImage = document.createElement("img");
  //   newImage.src = element.urls.small;
  //   console.log(element.urls.small);
  //   section.append(newImage);
  //   console.log(section.childNodes);
  // });

  // console.log(section.childNodes[0]);
  // for (let index = 0; index < data.length; index++) {
  //   section.childNodes[index].src = response[index].urls.small;
  // }
  // image.src = data[0].urls.raw;
});
