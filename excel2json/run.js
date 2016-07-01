var xlsx = require('./xlsx-to-json.js');
var path = require('path');
var glob = require('glob');

glob("../excel/**/[^~$]*.xlsx", function (err, files) {

  files.forEach(function (element) {

    xlsx.toJson(
        path.join(__dirname, element),  //excell file
        path.join(__dirname, "../json"), //json dir
        1,  //excell head line number
        "," //array separator
    );

  });
});
