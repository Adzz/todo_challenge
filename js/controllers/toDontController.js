toDontList.controller("toDontController", [function() {


  var self = this;
  self.dontList = [];

  self.addTask = function() {
    self.dontList.push(self.task);
  }

  self.deleteTask = function(task) {
    self.dontList.splice(task, 1);
  }

  self.editTask = function(){
    self.task
  }


}]);
