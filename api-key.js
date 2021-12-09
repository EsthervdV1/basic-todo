
const url = `http://localhost:3000/`;

const getData = async () => {
  try{
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json"}
  })

    const data = await response.json();
    const allToDos = Object.values(data)
    //console.log(allTasks);

    return allToDos;
    
} catch (e){
  console.log(e);
};  
};

const postData = async (newToDo) => {
  const data = {description: newToDo, done: false}
  try{
    const response = await fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    return response;
  } catch(e){
    console.log(e)
  }; 
};

const deleteData = async (id) => {
  try {
    const result = await fetch(`${url}${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {"Content-Type": "application/json"}
    });
    return result;
  }catch(e){
    console.log(e)
  };  
};



