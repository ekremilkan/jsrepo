const axios = require("axios");

axios.get("https://dummyjson.com/users").then((response) => {
  console.log(response.data);
});
