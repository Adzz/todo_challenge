describe("toDontController", function(){
 beforeEach(module("ToDont"));

 var ctrl;

 beforeEach(inject(function($controller){
   ctrl = $controller("toDontController");
 }));

 it("initialises with an empty to dont list and an empty task", function() {
  expect(ctrl.dontList).toBeUndefined();
  expect(ctrl.task).toBeUndefined();
 });


});
