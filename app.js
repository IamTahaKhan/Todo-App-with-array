var list=[];
var inp = document.getElementById("inp");
var todolist = document.getElementById("todolist");





document.getElementById("btn").addEventListener("click",function(){
    list.push(inp.value);
    inp.value = "";
    showlist();


})

function showlist(){
    todolist.innerHTML = "";
    list.forEach(function(n,i){
        todolist.innerHTML += "<li>"+n+"<button onclick='deleteItem("+i+")'>&times;</button></li>";
    })
}
function deleteItem(){
    list.splice(i,1);
    showlist();
}
var span = document.createElement("SPAN")

    var delbtn = document.createElement("button")
    var del = document.createTextNode("Delete")
    delbtn.appendChild(del)
    delbtn.setAttribute("onclick","deltask(this)")
    delbtn.setAttribute("class","btn")
    
    
    var editbtn = document.createElement("button")
    var edit = document.createTextNode("Edit")
    editbtn.appendChild(edit)
    editbtn.setAttribute("onclick","edittask(this)")
    editbtn.setAttribute("class","btn")
    span.appendChild(editbtn)
    span.appendChild(delbtn)
    li.appendChild(span)
    tasklist.appendChild(li)

    
    
    
    
}

function deltask(a){
    a.parentNode.parentNode.remove()
}

function edittask(a){
    var newtask= prompt("Edit Task",a.parentNode.parentNode.firstChild.nodeValue);
    a.parentNode.parentNode.firstChild.nodeValue = newtask
}

function Deleteall(){
    tasklist.innerHTML=""
}