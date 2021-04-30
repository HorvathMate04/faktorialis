var érték = 21;
var eredmény2 = 1;
for (i = 1; i < érték; i++) {
    let table = document.querySelector(".table");
    let newHeader = document.createElement("tr");
    eredmény2 = eredmény2*i;
    var eredmény = "<td>"+i+"</td><td>"+eredmény2+"</td>"; 
    newHeader.innerHTML = eredmény;
    table.appendChild(newHeader);
}