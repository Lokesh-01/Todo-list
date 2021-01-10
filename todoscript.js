
function get_todos(){
    var todos =new Array;
    var todos_str=localStorage.getItem('todo');
    if (todos_str!=null){
        todos=JSON.parse(todos_str);
    }
    return todos;
    show();
}
function add(){
    var task=document.getElementById('task');
    var todos =get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));
    
    return false;
}
function clearDefault(){
    if(add.defaultValue==a.value)
    {a.value=""};
}
function remove(){
    var id =this.getAttribute('id');
    var todos=get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}
function show(){
    var todos=get_todos();
    var html='<ul>';
    for(var i=0;i<todos.length;i++){
        const listitem=document.createElement('li');
        listitem.innerHTML=`${todos[i]}'<button class="remove"id="'${i} '">Delete</button>`;
        document.append(listitem);
        

    }
    html =+'</ul>';
    document.getElementById('todos').innerHTML=html;
    var buttons=document.getElementsByClassName('remove');
    for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',remove());

    }
}
document.getElementById('add').addEventListener('click',add);
show();