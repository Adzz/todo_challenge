"use strict";

require('./pages/index.page.js');

describe("To Don't list", function() {

  var page;

  describe("When tasks have been added", function(){

    beforeEach(function(){
      page = new IndexPage;
      page.get();
      page.addToDont("test");
    });

     it("Lists tasks that you want to not-do", function(){
        expect(page.toDontList.count()).toEqual(1);
     });

   // it("Deletes the correct task when the delete button is clicked", function() {
     // page.addToDont("Test 2");
    //  page.deleteTask();
   //   expect(page.taskX(0)).toEqual("Test 2");
    //  expect(page.toDontList.count()).toEqual(1);
  //  });


  });


});
