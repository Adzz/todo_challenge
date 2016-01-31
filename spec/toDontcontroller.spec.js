describe("toDontController", function(){
 beforeEach(module("ToDont"));

 var ctrl;

 beforeEach(inject(function($controller){
   ctrl = $controller("toDontController");
 }));

  it("initialises with an empty to dont list and an empty task", function() {
   expect(ctrl.dontList).toEqual([]);
   expect(ctrl.task).toBeUndefined();
  });

  it("Adds items to the list", function(){
    ctrl.task = "test"
    ctrl.addTask();
    expect(ctrl.dontList[0]).toEqual("test");
  });

  it("Is possible to delete tasks from the list", function(){
    ctrl.task = "test";
    ctrl.addTask();
    ctrl.deleteTask();
    expect(ctrl.dontList).toEqual([]);
  });


});
