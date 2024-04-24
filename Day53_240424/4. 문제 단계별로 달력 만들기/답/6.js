let date=1;
let table = "";

table += `<table>`;
for(let i=0;i<5;i++)
{
    table += `<tr>`;
    for(let j=0;j<7;j++)
    {
        table += `<td>${date++}</td>`;
    }
    table += `</tr>`;
}
table += `</table>`
document.getElementById("calendar").innerHTML = table;
