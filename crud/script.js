var selectedRow=null;
function onFormSubmit(e)
{
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData()
{    
    var formData={};
    formData["platform"]=document.getElementById("platform").value;
    formData["accountname"]=document.getElementById("accountname").value;
    formData["password"]=document.getElementById("password").value;
    formData["notes"]=document.getElementById("notes").value;
    return formData;
}

    function insertNewRecord(data){
        var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        var cell1=newRow.insertCell(0);
            cell1.innerHTML=data.platform;
        var cell2=newRow.insertCell(1);
            cell2.innerHTML=data.accountname;
        var cell3=newRow.insertCell(2);
            cell3.innerHTML=data.password;
        var cell4=newRow.insertCell(3);
            cell4.innerHTML=data.notes;
        var cell5=newRow.insertCell(4);
            cell5.innerHTML=`<button onclick='onEdit(this)'>Edit</button><button onclick='onDelete(this)'>Delete</button>`
    }


function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('platform').value=selectedRow.cells[0].innerHTML;
    document.getElementById('accountname').value=selectedRow.cells[1].innerHTML;
    document.getElementById('password').value=selectedRow.cells[2].innerHTML;
    document.getElementById('notes').value=selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.platform;
    selectedRow.cells[1].innerHTML = formData.accountname;
    selectedRow.cells[2].innerHTML = formData.password;
    selectedRow.cells[3].innerHTML = formData.notes;
}

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById('platform').value='';
    document.getElementById('accountname').value='';
    document.getElementById('password').value='';
    document.getElementById('notes').value='';
}