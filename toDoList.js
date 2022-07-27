var inputData=document.querySelector("#inputData");
var inputDate=document.querySelector(".inputDate");
var outputData=document.querySelector(".outputData");
var outputDat=document.querySelector(".outputDat");
let addButton=document.querySelector("#p1");
let saveButton=document.querySelector("#p2");
var num=0;
var nam=0;
var nem;
var nom;
var scor=true;
function getData()
{
    if(inputData.value==""||inputDate.value=="")
    {
        alert("Information Provided is incomplite")
    }
    else {
    num++;
    nam++;
    /*outputData.innerHTML+=`<tr id="${num}"><td>${num}</td><td>${inputData.value}</td><td>${inputDate.value}</td><td><button type="button" value="remove" onclick="removeData(${num})">delete</button></td><td><button type="button" value="remove" onclick="saveData(${num})">Save</button></td></tr>`;*/
    outputDat.innerHTML+=`<div class="card" style="width:290px; border:2px solid red" id="${num}"><div class="card-body" ><button  class="btn btn-outline-light text-dark" data-bs-toggle="tooltip" title="Save Card!" onclick="saveData(${num})" style="margin-left:220px; margin-top:-10px;" contentEditable=false><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
  </svg></button><h4 class="card-title" style="font-size:40px;margin-top:-10px;" contentEditable=false >${nam}</h4><p class="card-text"  style=" font-style: oblique;; font-size:20px" id="${num}">${inputData.value}</p><p class="card-date"  id="${num}">${inputDate.value}</p><button class="btn btn-outline-danger" data-bs-toggle="tooltip" title="Delete Card!" onclick="removeData(${num})" contentEditable=false ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg></button>
    <button  class="btn btn-outline-dark" data-bs-toggle="tooltip" title="Edit Info!"  onclick="editData(${num})" id="p1" contentEditable=false><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg></button></div></div>`;
    }
    inputData.value=inputDate.value="";
}
function removeData(inputCount)
{
    var inputState=confirm("Are shoure you want to delete the List ?");
    if(inputState)
    document.getElementById(inputCount).remove();
}
function editData(inputId)
{
       nem=document.getElementById(inputId);
       nem.contentEditable=true; 
       nem.style.backgroundColor="white";
       nem.style.backgroundImage="none";
        console.log(nem);
    
}
function saveData(editId)
{
    
    nom=document.getElementById(editId);
    nom.contentEditable=false;
    nom.style.backgroundColor="#00b712";
    nom.style.backgroundImage="linear-gradient(315deg, #00b712 0%, #5aff15 74%)";


}
