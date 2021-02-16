function loadData(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then( res=> res.json())
    .then( data => {
        displayData(data)
    })
}
function displayData(data){
    const parentNode =document.getElementById("myList");
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const createItems = document.createElement("li");
        createItems.innerText =user.name;
        parentNode.appendChild(createItems)
        
    }
}
loadData();



