const axios = require('axios');


async function getip(){
    await axios
    .post("https://tmproxy.com/api/proxy/get-current-proxy", {
"api_key": "1b0ff1b292c001d4834d0197c5e74b77"
})
    .then((dataResponse) => {
      console.log(dataResponse.data.data.https);
    })
    .catch((error) => {
      console.log("Error", error);
    });

}


async function getnewip(){
var callproxy =  await axios
    .post("https://tmproxy.com/api/proxy/get-new-proxy", {
"api_key": "1b0ff1b292c001d4834d0197c5e74b77"
})

console.log(callproxy.data);

// var proxy = callproxy.data.data.https;
// console.log("proxy is", proxy);
// return proxy;
}

getnewip()