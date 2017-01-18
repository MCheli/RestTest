var http = require("https");

var options = {
  "method": "GET",
  "hostname": "academic-dev2.cloud.thingworx.com",
  "port": null,
  "path": "/Thingworx/Things/SocratesChild/Properties/name",
  "headers": {
    "appkey": "53253c29-f4d4-4718-89dc-349941150dc4",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "Accept":"application/json",
    "postman-token": "f2b5a8fc-0fea-9926-b74c-86d42fc0c563"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();