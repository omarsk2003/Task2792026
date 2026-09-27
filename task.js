let inputText=document.getElementById("inputText");
let addButton=document.getElementById("addButton");
let listTask=document.getElementById("listTask");
let arr=JSON.parse(localStorage.getItem("task"))||[];
for(let i=0;i<arr.length;i++)
{
    listTask.innerHTML+="<p>"+
    arr[i]+"<button onclick='deleteTask(this)'>Delete</button>"+"</p>";
    inputText.value="";

}




addButton.onclick=function()
{
    let task=inputText.value;
    arr.push(task);
    console.log(arr.length);
    localStorage.setItem("task",JSON.stringify(arr));
      //console.log(arr);
  //console.log(task);
    listTask.innerHTML+="<p>"+task+"<button onclick='deleteTask(this)'>Delete</button>"+"</p>";
    inputText.value="";
}

function deleteTask(text)
{

console.log(text);
let task = text.parentElement.textContent;
let index=arr.indexOf(task);
arr.splice(index, 1);
localStorage.setItem("task", JSON.stringify(arr));
console.log(index);
text.parentElement.remove();

}