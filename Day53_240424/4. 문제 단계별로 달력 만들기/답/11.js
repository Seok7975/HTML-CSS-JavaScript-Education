const now = new Date(); // Date 객체를 만든다. 그러면 지금이 몇년도인지, 몇월, 며칠, 무슨 요일인지를 알 수가 있다.
const curYear = now.getFullYear();    // 올해 년도를 구한다.
const curMonth = now.getMonth();      // 현재 달을 구한다.
const lastDay = getLastDayOfMonth();
let date=1;
let table=``;
const firstDayOfTheWeekInst = new Date(curYear, curMonth, 1);     // 올해 이번달 1일이 무슨 요일인지 구하기 위한 날짜 객체를 만든다.
const firstDayOfTheWeek = firstDayOfTheWeekInst.getDay();         // 위에서 만든 날짜 객체를 통해 1일이 무슨요일이지 구한다. 요일은 0 일요일 1 월요일 2 화요일 ...
let cell = 0;
const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

let numOfWeeks = Math.ceil((firstDayOfTheWeek+lastDay)/7);

function getLastDayOfMonth()
{
    const lastDayOfMon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let leapYear;

    if ( (curYear % 4 == 0) && (curYear % 100 != 0) )
            leapYear = true;
    else if(curYear % 400 == 0)
        leapYear = true;
    else
        leapYear = false;

    lastDayOfMon[1] = (leapYear) ? 29 : 28;
    return lastDayOfMon[curMonth];
}

function getTime()      // 현재 시간을 구한다.
{
    let hour = now.getHours();
    let minute = now.getMinutes();
    let ampm;

    if (hour >= 12){
      hour -= 12;
      ampm = "오후";
    }
    else ampm = "오전";

    hour = (hour == 0) ? 12 : hour;     // 정오는 12시로 출력.
    if (minute < 10) minute = "0" + minute;

    return ampm + hour + ":" + minute;  // 시간을 문자열을 조합하여 리턴
}


table += `<table>`;
table += `<caption>`;   // 7열을 하나로 합친다.
table += `${curYear}년 ${curMonth + 1}월`;  // 년과 월을 출력한다. 월은 0부터 시작하니까 1을 추가한다.
table += `</caption>`;

table += `<tr>`;
for(let i=0;i<7;i++)
    table += `<th>${dayOfTheWeek[i]}</th>`;     // 일 월 화 수 목 금 토 문자열 추가
table += `</tr>`

for(let i=0;i<numOfWeeks;i++)
{
    table += `<tr>`;
    for(let j=0;j<7;j++)
    {
        if(cell<firstDayOfTheWeek)
            table += `<td>&nbsp;</td>`;              // 첫 날이 되기까지 빈칸으로 출력한다.
        else if(date <= lastDay)
        {
            table += `<td>${date}`;
            if(date == now.getDate())
            table += `<br>${getTime()}`;
            table += `</td>`;
            date++;
        }
        else
            table += `<td>&nbsp;</td>`;              // 마지막 날이 넘어가면 빈 칸 만을 출력한다.
        cell++;
    }
    table += `</tr>`
}
table += `</table>`
document.getElementById("calendar").innerHTML = table;