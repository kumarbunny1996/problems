const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("this is promise"), 10000);
});

const API_URL = "https://api.github.com/users";
const getData = async () => {
  // const res = await fetch(API_URL);
  // const data = await res.json();
  const data = await p1;
  console.log(data);
};

getData().catch((err) => console.log(err, "error"));
