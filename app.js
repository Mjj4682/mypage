const inputname = document.getElementById('inname');
const inputtext = document.getElementById('intext');
const newtable = document.getElementById('new_table');
function mainwrite(){
    const tr = document.createElement('tr');
    const tdname = document.createElement('td');
    const tdtext = document.createElement('td');
    const newname = inputname.value;
    const newtext = inputtext.value;
    tdname.innerText = newname;
    tdtext.innerText = newtext;
    tr.appendChild(tdname);
    tr.appendChild(tdtext);
    tr.appendChild(createupdbtn());
    tr.appendChild(createdelbtn());
    newtable.appendChild(tr);
    clear();
}
function createdelbtn(){
    const tdbtn = document.createElement('td');
    const btn = document.createElement('button');
    btn.innerText = 'delete';
    btn.onclick = function() {
        deletebtn(this);
        }
    tdbtn.appendChild(btn);
    return tdbtn;
}
function deletebtn(event) {
    if (confirm("delete?")) {
        const td2 = event.parentNode;
        const tr2 = td2.parentNode;
        const tbody2 = tr2.parentNode;
        tbody2.removeChild(tr2);
    }
}
function createupdbtn(){
    const tdbtn = document.createElement('td');
    const btn = document.createElement('button');
    btn.innerText = "update";
    btn.onclick = function() {
        updatebtn(this);
    }
    tdbtn.appendChild(btn);
    return tdbtn;
}
function updatebtn(event) {
    alert('미완성ㅠ');
}
function clear(){
    inputname.value = ""
    inputtext.value = ""
}
const writebtn = document.getElementById('mainbtn');
writebtn.addEventListener('click', mainwrite)