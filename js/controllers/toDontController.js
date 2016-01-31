toDontList.controller("toDontController", [function() {


  var self = this;
  self.dontList = [];
  self.editing = false;


  self.addTask = function() {
    self.dontList.push(self.task);
    self.task = "";
  }

  self.deleteTask = function(taskIndex) {
    self.dontList.splice(taskIndex, 1);
  }

  self.updateText = function(index) {
    self.dontList[index] = self.edit;
    self.edit = "";
  };

 // self.editTask = function(taskIndex){
   // self.edit.
 // }


}]);
