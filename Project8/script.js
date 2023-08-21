const section = document.getElementById("main");
// const

document.getElementById("btn").addEventListener("click", async () => {
  const accessKey = "DQGvYlaiaTMdASe6-kYW17XFLeIuTVaHvKKNFgS1zZM";
  // const url0 = `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}&per_page=20`;
  const url1 = "https://api.unsplash.com/search/photos?page=1&query=office";
  const response = await fetch(url1).json;
  console.log(response);

  // console.log(section.childNodes[0]);
  // for (let index = 0; index < data.length; index++) {
  //   section.childNodes[index].src = response[index].urls.small;
  // }
  // image.src = data[0].urls.raw;
});
