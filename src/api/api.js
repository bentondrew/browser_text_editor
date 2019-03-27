"use strict";

const superagent = require("superagent");

class API {
  this.getUserFiles(userName) {
    var returnArray = [];
    superagent.get("http://localhost/files/" + userName, function(err, res) {
      if (err) throw err;
      returnArray = res.body;
    });
    return returnArray;
  }
  this.getFile(userName, fileName) {
    var returnObject = [];
    superagent.get(
      "http://localhost/files/" + userName + "/" + fileName,
      function(err, res) {
        if (err) throw err;
        returnObject = res.body;
      }
    );
    return returnObject;
  }
  this.addUserFile(userName, fileObject) {
    var returnObject = [];
    superagent
      .post("http://localhost/files/" + userName + "/" + fileObject.name)
      .send({ content: fileObject.content })
      .then(function(err, res) {
        if (err) throw err;
        returnObject = res.body;
      });
    return returnObject;
  }
  this.updateUserFile(userName, fileObject) {
    var returnObject = [];
    superagent
      .put("http://localhost/files/" + userName + "/" + fileObject.name)
      .send({ content: fileObject.content })
      .then(function(err, res) {
        if (err) throw err;
        returnObject = res.body;
      });
    return returnObject;
  }
}

export default new API();
