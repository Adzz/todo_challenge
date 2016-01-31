//"use strict";
describe("To Don't list", function() {

  var page,
      indexPage;

  describe("When tasks have been added", function(){

    beforeEach(function(){
      indexPage = require('./pages/index.page.js');
      page = new indexPage;
      page.get();
      page.addToDont("test");
    });

     it("Lists tasks that you want to not-do", function(){
        expect(page.taskX(0)).toEqual("test\nDelete Edit");
     });

   // it("Deletes the correct task when the delete button is clicked", function() {
     // page.addToDont("Test 2");
    //  page.deleteTask();
   //   expect(page.taskX(0)).toEqual("Test 2");
    //  expect(page.toDontList.count()).toEqual(1);
  //  });


  });


});
