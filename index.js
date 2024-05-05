console.log("App is alive");
// index.js

const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");

const targetURL = "https://brightdata.com";

const scrapBot = async () => {
  const retrievedData = [];
  // downloading the target web page by performing an HTTP GET request in Axios
  const axiosResponse = await axios.request({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
    method: "GET",
    url: targetURL,
  });
  // parsing the HTML source of the target web page with Cheerio
  const $ = cheerio.load(axiosResponse.data);
  const htmlElement = $(".repeater .row")
    .find(".product-card")
    .each((index, element) => {
      retrievedData.push(element);
    });
  console.log(retrievedData);
  // Write JSON data to a file
  //   fs.writeFile("retrievedData.js", retrievedData, (err) => {
  //     if (err) throw err;
  //     console.log("Data has been saved to retrievedData.json");
  //   });
};
scrapBot();
