class calender3
{
    //알고리즘 1) 4로 나누어 떨어지면 우선 윤년으로 판단하고, 그 중 400이 아닌 100으로만 나누어 떨어지는 경우를 평년으로 판단한다.
    public static boolean LeapYear(int a)
    {
        if(a%4 == 0)
        {
            if((a % 100 !=0) && (a % 400 == 0))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else return false;
    }
    public static void main(String[] args)
    {

    }
}