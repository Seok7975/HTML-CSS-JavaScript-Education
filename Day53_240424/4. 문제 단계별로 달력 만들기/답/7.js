// 윤년 구하는 방법
// 첫번째. 년을 4로 나누어 떨어지면 윤년이다.
// 두번째. 첫번째 중에서 100으로 나누어 떨어지는 년은 윤년이 아니다.
// 세번째. 년이 400으로 나누어 떨어지면 윤년이다.

const now = new Date(); // Date 객체를 만든다. 그러면 지금이 몇년도인지, 몇월, 며칠, 무슨 요일인지를 알 수가 있다.
const curYear = now.getFullYear();    // 올해 년도를 구한다.
const curMonth = now.getMonth();      // 현재 달을 구한다.
const lastDay = getLastDayOfMonth();
let date=1;
let table=``;

function getLastDayOfMonth() // 달이 며칠인지 구하는 함수.
{
    const lastDayOfMon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // 1월부터 12월까지의 날 수를 배열로 만든다.
    let leapYear;

    if ( (curYear % 4 == 0) && (curYear % 100 != 0) )
            leapYear = true;
    else if(curYear % 400 == 0)
        leapYear = true;
    else
        leapYear = false;

    lastDayOfMon[1] = (leapYear) ? 29 : 28;     // 윤년이면 2월에 29를 저장. 아니면 28을 저장.
    return lastDayOfMon[curMonth];          // 현재 달이 며칠인지 리턴
}


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