"use strict";

const superagent = require("superagent");

class API {
  getUserFiles(userName) {
    var returnArray = [];
    superagent.get("http://localhost/files/" + userName, function(err, res) {
      if (err) throw err;
      returnArray = res.body;
    }
    );
    return returnArray;
  }
  getFile(userName, fileName) {
    var returnObject = [];
    superagent.get("http://localhost/files/" + userName + "/" + fileName,
      function(err, res) {
        if (err) throw err;
        returnObject = res.body;
      }
    );
    return returnObject;
  }
  addUserFile(userName, fileObject) {
    var returnObject = [];
    superagent
      .post("http://localhost/files/" + userName + "/" + fileObject.name)
      .send({ content: fileObject.content })
      .then(
        function(err, res) {
          if (err) throw err;
          returnObject = res.body;
        }
      );
    return returnObject;
  }
  updateUserFile(userName, fileObject) {
    var returnObject = [];
    superagent
      .put("http://localhost/files/" + userName + "/" + fileObject.name)
      .send({ content: fileObject.content })
      .then(
        function(err, res) {
          if (err) throw err;
          returnObject = res.body;
        }
      );
    return returnObject;    }
}

const api = new API();

module.exports = api;
