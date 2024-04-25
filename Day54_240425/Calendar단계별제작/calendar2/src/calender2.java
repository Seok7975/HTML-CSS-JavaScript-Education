import java.util.Calendar;
import java.util.Scanner;
//import com.cal01.DayOfCalendar;

class MTest
{
    public static void main(String[] args)
    {

        Scanner sc = new Scanner(System.in);

        System.out.print("연도 입력 : ");
        int year = sc.nextInt();
        System.out.print("월 입력 : ");
        int month = sc.nextInt();

        CalendarUseApi cal = new CalendarUseApi();
        cal.prn(year, month);

    }
}

class CalendarUseApi
{

    public void prn(int year, int month)
    {

        Calendar cal = Calendar.getInstance();

        System.out.printf("\t\t%d년 %d월\n", year, month);
        System.out.printf("일\t월\t화\t수\t목\t금\t토\n");

        cal.set(year, month - 1, 1);

        int start = cal.get(Calendar.DAY_OF_WEEK);

        for (int i = 1; i < start; i++)
        {
            System.out.print("\t");
        }

        for (int i = 1; i <= cal.getActualMaximum(Calendar.DATE); i++)
        {
            System.out.printf("%d\t", i);
            if (start % 7 == 0)
            {
                System.out.println();
            }
            start++;
        }
    }
}
