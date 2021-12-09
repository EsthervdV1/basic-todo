

const getUl = document.getElementById("taskList")
const getButton = document.getElementById("addButton")
const input = document.getElementById("input");
const getDeleteButton = document.getElementById("deleteButton");


// GET TODO


const getToDos = async () => {
    const tasks = await getData();
    //console.log(tasks);
    // console.log(tasks[1].description);

    const list = tasks.map((task) =>{

        const newLi = document.createElement("li");

        const listItem = document.createElement("INPUT");
        listItem.setAttribute("type", "text");
        listItem.setAttribute("id", "inputText");
        listItem.value = task.description;
    
        //console.log(listItem);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id","deleteButton");
        deleteButton.value = task._id;
        deleteButton.innerHTML = (`<i class="far fa-trash-alt"></i>`)
        deleteButton.addEventListener("click", () => deleteToDo(task._id));
        
        newLi.appendChild(listItem);
        getUl.appendChild(newLi);

        newLi.appendChild(deleteButton);
        
    }); 
    return list;
} 

// CLEAR DOM

const removeToDos = () => {
    while (getUl.hasChildNodes()) {
        getUl.removeChild(getUl.firstChild);
    };
};

// ADD TO DO

const addToDo = async() => {
    const newTodo = input.value;
    if(newTodo != " "){
        await postData(newTodo);
        getToDos();
    }else{
        console.log("error: empty string")
    }; 

    removeToDos();
};

getButton.addEventListener("click", addToDo);

// DELETE TODO

const deleteToDo = async(id) => {
    await deleteData(id);

    removeToDos();
    getToDos();

};

getToDos();

