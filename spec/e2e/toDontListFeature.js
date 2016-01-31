describe("To Don't list", function() {

  var input = element(by.className("input")),
      btn =  element(by.className("btn")),
      complete = element(by.className("finished"));

  describe("When A task has been added", function(){

    beforeEach(function(){
      browser.get("http://localhost:8080");
      input.sendKeys("Test");
      btn.click();

    });


     it("Adds tasks that you want to not-do onto the list", function(){
       expect(element(by.className("task")).getText()).toEqual("Test");

     });

    it("Deletes tasks when they are complete", function() {
      complete.click();
      expect(page).not_to have_content("Test");
    });

  });


 });
