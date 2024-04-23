/*
1. 요일 계산 -> year년과 month월을 주면,
year년 month월 1일의 요일이 나오면서 달력의 공백 -> 7일의 1줄

2. 윤년을 계산
    4로 나눠 떨어지고 그중(&&) 100으로 나눠 떨어지지 않으면서 다만(||) 400으로 나눠 떨어지는 해.

https://12716.tistory.com/entry/Java-%EB%8B%AC%EB%A0%A5calendar-%EB%A7%8C%EB%93%A4%EA%B8%B0

https://gist.github.com/BoyunC/185ca82d19831f45dc3f8ed6a2ee237d
 */


import java.time.LocalDate;
import java.util.Scanner;

class Assignment5
{

    public static void makeCalender(int year, int month)
    {

        int date = 1;       // 일
        int day;            // 요일

        LocalDate firstDate = LocalDate.of(year, month, date); // 해당월 1일 설정
        // of() 메서드는 주어진 값으로 해당 클래스의 인스턴스를 생성
        // of() 메서드는 해당 클래스의 인스턴스를 생성하는 가장 일반적인 방법 중 하나이며,
        // 코드의 가독성과 사용 편의성을 높이는 데 사용
        // LocalDate.of(year, month, dayOfMonth)는 주어진 연도, 월, 일로 LocalDate 객체를 생성

        day = firstDate.getDayOfWeek().getValue();
        // getDayOfWeek() : 무슨 요일인지?
        //getValue() : 월요일 = 1, 화요일 = 2, ... 일요일 = 7

        // 달력 출력
        System.out.println(month >= 10 ?
                String.format("[%d년 %d월]", year, month) : String.format("[%d년 %02d월]", year, month));

        System.out.println("일\t월\t화\t수\t목\t금\t토\t");

        // 1일 전까지의 공백 생성
        for (int i = 0; i < day % 7; i++)
        {
            System.out.print("\t");
        }

        // 달력 일 출력
        for (int i = 1; i <= firstDate.lengthOfMonth(); i++) // lengthOfMonth() : 30, 31, 28, 29 출력
        {
            System.out.printf("%02d\t", date++);
            day++;

            if (day % 7 == 0)
            {                // 다음 주로 줄 바꿈
                System.out.println();
            }
        }
    }

    public static void main(String[] args)
    {
        int year;
        int month;

        Scanner kb = new Scanner(System.in);

        while (true)
        {
            System.out.println("[달력 출력 프로그램]");
            System.out.print("달력의 년도를 입력해 주세요. (yyyy) : ");
            year = kb.nextInt();
            // 년도 음수 입력 방지
            if (year < 0)
            {
                System.out.println("년도 입력이 잘못되었습니다. 다시 시작합니다.\n");
                continue;
            }

            System.out.print("달력의 월을 입력해 주세요. (mm) : ");
            month = kb.nextInt();
            // 월 1~12 외 입력 방지
            if (month <= 0 || month > 12)
            {
                System.out.println("월 입력이 잘못되었습니다. 다시 시작합니다.\n");
                continue;
            }
            break;
        }

        System.out.println();
        makeCalender(year, month);
    }
}