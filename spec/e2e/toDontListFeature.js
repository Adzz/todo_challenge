"use strict";
describe("To Don't list", function() {

  var page,
      indexPage;

  describe("When tasks have been added", function(){

    beforeEach(function(){
      indexPage = require('./pages/index.page.js');
      page = new indexPage;
      page.get();
      page.addToDont("test");
      page.addToDont("Test 2");

    });

    it("Lists tasks that you want to not-do", function(){
      expect(page.taskX(0)).toEqual("test");
    });

    it("Removes text from the text box after a task is added", function(){
      expect(page.taskX(1)).toEqual("Test 2");
    });

    it("Edits items on the list successfully", function(){
      page.editTask("edited");
      expect(page.taskX(0)).toEqual("edited");
    });


    it("Deletes the correct task when the delete button is clicked", function() {
      page.deleteTask();
      expect(page.taskX(0)).toEqual("Test 2");
      expect(page.toDontList.count()).toEqual(1);
    });


  });


});
