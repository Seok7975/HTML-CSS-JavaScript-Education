//class calender3
//{
//    //알고리즘 1) 4로 나누어 떨어지면 우선 윤년으로 판단하고, 그 중 400이 아닌 100으로만 나누어 떨어지는 경우를 평년으로 판단한다.
//    public static boolean LeapYear(int a)
//    {
//        if (a % 4 == 0)
//        {
//            if ((a % 100 != 0) && (a % 400 == 0))
//            {
//                return true;
//            } else
//            {
//                return false;
//            }
//        } else
//            return false;
//    }
//
//    public static void main(String[] args)
//    {
//
//    }
//}

import java.util.Calendar;

class Main {
    public static void main(String[] args) {
        Calendar now = Calendar.getInstance();
        int curYear = now.get(Calendar.YEAR);
        int curMonth = now.get(Calendar.MONTH);
        int lastDay = getLastDayOfTheMonth(curYear, curMonth);
        Calendar nowTemp = Calendar.getInstance();
        nowTemp.set(curYear, curMonth, 1);
        int firstDayOfTheWeek = nowTemp.get(Calendar.DAY_OF_WEEK);
        int numOfWeeks = (int) Math.ceil((firstDayOfTheWeek + lastDay) / 7.0);
        int cell = 0;
        int date = 1;

        StringBuilder table = new StringBuilder("<table>");
        table.append("<caption>").append(curYear).append("년 ").append(curMonth + 1).append("월</caption>");
        String[] dayOfTheWeek = {"일", "월", "화", "수", "목", "금", "토"};
        table.append("<tr>");
        for (int i = 0; i < 7; i++) {
            table.append("<td>").append(dayOfTheWeek[i]).append("</td>");
        }
        table.append("</tr>");
        for (int i = 0; i < numOfWeeks; i++) {
            table.append("<tr>");
            for (int j = 0; j < 7; j++) {
                if (cell < firstDayOfTheWeek)
                    table.append("<td>&nbsp;</td>");
                else if (date <= lastDay)
                    table.append("<td>").append(date++).append("</td>");
                else
                    table.append("<td>&nbsp;</td>");
                cell++;
            }
            table.append("</tr>");
        }
        table.append("</table>");

        System.out.println(table.toString());
    }

    public static int getLastDayOfTheMonth(int year, int month) {
        int[] lastDayOfTheMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        boolean leapYear = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
        lastDayOfTheMonth[1] = leapYear ? 29 : 28;
        return lastDayOfTheMonth[month];
    }
}
