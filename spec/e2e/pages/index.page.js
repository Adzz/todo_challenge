"use strict";

function IndexPage(){

    this.taskInputBox = element(by.className("input"));
    this.taskEditBox = element(by.model("edit"));
    this.toDontList =  element.all(by.repeater("task in dontList"));
    this.addTaskBtn = element(by.className("add-task"));
    this.editBtn = element.all(by.className("edit-btn")).get(0);
    this.deleteBtn = element.all(by.className("delete-btn")).get(0);

};


  IndexPage.prototype.taskX = function(index){
    return toDontList.get(index).getText();
  };


  IndexPage.prototype.get = function (){
    browser.get("http://localhost:8080");
  };


  IndexPage.prototype.deleteTask = function(){
    this.deleteBtn.click();
  };

  IndexPage.prototype.addToDont = function(toDontTask){
    this.taskInputBox.sendKeys(this.toDontTask);
    this.addTaskBtn.click();
  };


  IndexPage.prototype.editTask = function() {
    this.editBtn.click();
    this.taskEditBox.sendkeys("edited");
  };


