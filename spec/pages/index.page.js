"use strict";

  var IndexPage = function(){
    browser.get("http://localhost:8080");
  };


  IndexPage.prototype = Object.create({}, {
    taskInputBox:{ get: function() { return element(by.className("input"));               }},
    taskEditBox: { get: function() { return element(by.model("edit"));                    }},
    toDontList: { get: function() { return element.all(by.repeater("task in dontList"));  }},
    addTaskBtn: { get: function() { return element(by.className("add-task"));             }},
    editBtn:    { get: function() { return element.all(by.className("edit-btn")).get(0);  }},
    deleteBtn:  { get: function() { return element.all(by.className("delete-btn")).get(0);}},
    addTask:    { value: function(){ return this.task.sendKeys(keys);                     }},
    taskX:      { value: function(index){ return this.toDontList.get(index).getText();    }},
    deleteTask: { value: function() {     this.deleteBtn.click();                         }},
    addToDont:  { value: function(toDontTask){
      this.taskInputBox.sendKeys(toDontTask);
      this.addTaskBtn.click();
    }},
    editTask:   { value: function() {
      this.editBtn.click();
      this.taskEditBox.sendkeys("edited");
    }}
  });

  module.exports= IndexPage;
