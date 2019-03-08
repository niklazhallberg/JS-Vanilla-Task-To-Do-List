//demo-printed to-do activities
var toDo = ['Kööööp in mer kaffe', 'Laga linssoppa', 'Städa skåpen', 'Göra massor av smörgåsar'];


// onLoad function
function toDoList() {

  //when refreshing, get new updated item from to-do localstorage.
  var fromLocalStorage_ToDo = localStorage.getItem("todo");
  if(fromLocalStorage_ToDo) {
    toDo = JSON.parse(fromLocalStorage_ToDo);
  }

  //print to-do list activities
  document.getElementById("to-do-list").innerHTML = "";
  for(var i = 0; i < toDo.length; i++) {
    document.getElementById("to-do-list").innerHTML += "<li>" + "<input type='checkbox' onchange='itemDone(" + i + ")'>" + " " + toDo[i] + "</li>";
  }

  //when refreshing, get new updated items from done activities localstorage.
  document.getElementById("done-activities").innerHTML = "";
  var fromLocalStorage_Done = localStorage.getItem("done");
  if(fromLocalStorage_Done) {
    doneArray = JSON.parse(fromLocalStorage_Done);
    for(var i = 0; i < doneArray.length; i++) {
  document.getElementById("done-activities").innerHTML += "<li>" + "<i class='fas fa-check'></i>" + doneArray[i] + "</li>";
  }
  }

} 



  //add new items to to-do list.
  function addToDo() {
    var empty;
    empty = document.getElementById("addbox").value;

    if (empty == "") {
      var error = "Oups! Du glömde ge aktiviteten ett namn.";
      document.getElementById("error-msg").innerHTML = (error);
      return false;

    } else {

      var addValue = document.getElementById('addbox').value;
      toDo.unshift(addValue);
      localStorage.setItem('todo', JSON.stringify(toDo));
      toDoList();


      //clear input-field and error-message.
      document.getElementById('addbox').value=null;
      document.getElementById("error-msg").innerHTML = null;

    }

  }


//add items to done-array and erase from to-do list.
doneArray = [];
function itemDone(i) {
  doneArray.unshift(toDo[i]);
  localStorage.setItem('done', JSON.stringify(doneArray));  
  var x = localStorage.getItem('done');
  var listFormStorage = JSON.parse(x);
  document.getElementById("done-activities").innerHTML += "<li>" + "<i class='fas fa-check'></i>" + listFormStorage[0] + "</li>";
  deleteItem(i);
}

    //delete chosen to-do activity from to-do array.
  function deleteItem(i){
    toDo.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(toDo)); 
    toDoList();
  }

//clear button - then clear doneArray list.
function clearArray(){
 doneArray = [];
 document.getElementById("done-activities").innerHTML = "";
 localStorage.setItem('done', JSON.stringify(doneArray));
}

