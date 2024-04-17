/*
jdbcTest 라는 디비를 만들고 거기에 board 테이블을 적절하게 만드시오.
그리고 거기에 접속해서 다음 내용을 작업하는 프로그램을 작성하시오.

메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. test 테이블 생성
6. test 테이블 삭제
7. 종료
선택 : 1
이름을 입력하세요.
홍길동
제목을 입력하세요.
반갑습니다.
내용을 입력하세요.
안녕하세요.

1건 데이터 삽입성공
메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. test 테이블 생성
6. test 테이블 삭제
7. 종료
선택 : 2
번호 3
이름 원더우먼
제목 슈퍼맨 어디가?
내용 슈퍼맨 어디로 갈꺼야?
시간 2023-09-14 11:51:39
조회수 0

번호 2
이름 슈퍼맨
제목 슈퍼맨 날다
내용 오늘은 어디로 갈까요?
시간 2023-09-14 11:34:17
조회수 0

번호 1
이름 홍길동
제목 안녕하세요.
내용 날씨가 좋네요.
시간 2023-09-14 11:31:11
조회수 0

5. 다음 메뉴 수정, 삭제를 완성하시오.

메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. test 테이블 생성
6. test 테이블 삭제
7. 종료
선택 : 3
수정할 글 번호를 입력하세요.
4
수정할 글 내용을 입력하세요.
4번글내용 수정 테스트
1건 데이터 수정성공
메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. 종료
선택 : 2
번호 4
이름 둘리
제목 깐따삐야
내용 4번글내용 수정 테스트
시간 2023-09-14 11:57:00
조회수 0

번호 3
이름 원더우먼
제목 슈퍼맨 어디가?
내용 슈퍼맨 어디로 갈꺼야?
시간 2023-09-14 11:51:39
조회수 0

번호 2
이름 슈퍼맨
제목 슈퍼맨 날다
내용 오늘은 어디로 갈까요?
시간 2023-09-14 11:34:17
조회수 0

번호 1
이름 홍길동
제목 안녕하세요.
내용 날씨가 좋네요.
시간 2023-09-14 11:31:11
조회수 0

메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. test 테이블 생성
6. test 테이블 삭제
7. 종료
선택 : 4
삭제할 글 번호를 입력하세요.
4
1건 데이터 삭제성공
메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. test 테이블 생성
6. test 테이블 삭제
7. 종료
선택 : 2
번호 3
이름 원더우먼
제목 슈퍼맨 어디가?
내용 슈퍼맨 어디로 갈꺼야?
시간 2023-09-14 11:51:39
조회수 0

번호 2
이름 슈퍼맨
제목 슈퍼맨 날다
내용 오늘은 어디로 갈까요?
시간 2023-09-14 11:34:17
조회수 0

번호 1
이름 홍길동
제목 안녕하세요.
내용 날씨가 좋네요.
시간 2023-09-14 11:31:11
조회수 0

메뉴를 선택하세요.
1. 쓰기
2. 조회
3. 수정
4. 삭제
5. test 테이블 생성
6. test 테이블 삭제
7. 종료
선택 :
 */

/*
1. 드라이버 로드 : Class.forName()
2. 커넥션 객체 생성
DriverManager.getConnection() 메서드를 사용하여 Connection 객체를 생성합니다.
이때 데이터베이스의 URL, 사용자 이름 및 암호가 필요
3. 스테이트먼트 객체 생성
Statement 또는 PreparedStatement 객체를 생성합니다.
Statement 객체는 정적인 SQL 문장을 실행할 때 사용되며,
PreparedStatement 객체는 동적으로 바인딩된 매개변수를 가진 SQL 문장을
실행할 때 사용
4. 쿼리 날리기
생성된 Statement 또는 PreparedStatement 객체를 사용하여
SQL 쿼리를 데이터베이스로 전송.
executeQuery() 메서드를 사용하여 SELECT 문을 실행하고
결과를 받아올 수 있고, executeUpdate() 메서드를 사용하여
INSERT, UPDATE, DELETE와 같은 DML(데이터 조작 언어) 문을 실행
5. 리소스 해제
든 데이터베이스 리소스(커넥션, 스테이트먼트, 결과 집합 등)를 사용한 후에는
반드시 명시적으로 리소스를 해제해야 합니다.
이는 close() 메서드를 사용하여 수행됩니다.
주로 finally 블록이나 try-with-resources 구문을 사용하여 리소스를 안전하게 해제
 */
import java.sql.*;
import java.util.Scanner;

class JDBCTest_Step4
{
    public static void main(String[] args)
    {
        String url = "jdbc:mysql://localhost:3306/project?serverTimezone=UTC";
        String id = "root", pw = "1234", sql1 = null, sql2 = null, sql3 = null;
        String name = null, title = null, contents = null;

        int menu = 0, result = 0;
        int no = 0, rCnt = 0;
        String wTime = null;

        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch (ClassNotFoundException e1)
        {
            e1.printStackTrace();
        }

        sql1 = "INSERT INTO board(name, title, contents) VALUES(?, ?, ?)";
        sql3 = "UPDATE board SET contents=? WHERE no=?";
        try(Connection conn = DriverManager.getConnection(url, id, pw);
            PreparedStatement pstmt1 = conn.prepareStatement(sql1);
            Statement stmt = conn.createStatement();
            PreparedStatement pstmt2 = conn.prepareStatement(sql3))
        {
            Scanner sc = new Scanner(System.in);
            while(true)
            {
                System.out.println("메뉴를 선택하세요.");
                System.out.println("1. 쓰기");
                System.out.println("2. 조회");
                System.out.println("3. 수정");
                System.out.println("4. 삭제");
                System.out.println("5. 종료");
                System.out.print("선택 : ");
                menu = sc.nextInt();
                sc.nextLine();
                switch(menu)
                {
                    case 1:
                        System.out.println("이름을 입력하세요.");
                        name = sc.nextLine();
                        System.out.println("제목을 입력하세요.");
                        title = sc.nextLine();
                        System.out.println("내용을 입력하세요.");
                        contents = sc.nextLine();
                        pstmt1.setString(1, name);
                        pstmt1.setString(2, title);
                        pstmt1.setString(3, contents);
                        result = pstmt1.executeUpdate();
                        // 질의가 성공적으로 수행되면 삽입된 개수가 반환된다. 여기에서는 1이 반환.
                        if (result > 0)
                            System.out.println(result + "건 데이터 삽입성공");
                        break;

                    case 2:
                        sql2 = "SELECT * FROM BOARD ORDER BY no desc";
                        try (ResultSet rs = stmt.executeQuery(sql2))
                        {
                            while (rs.next())
                            {
                                no = rs.getInt("no"); // no칼럼값을 Int형으로
                                name = rs.getString("title"); //title칼럼값을 String형으로
                                contents = rs.getString("contents");
                                wTime = rs.getString("wTime");
                                rCnt = rs.getInt("rCnt");
                                System.out.println("번호 " + no);
                                System.out.println("이름 " + name);
                                System.out.println("제목 " + title);
                                System.out.println("내용 " + contents);
                                System.out.println("시간 " + wTime);
                                System.out.println("조회수 " + rCnt);
                            }
                        }
                        catch (SQLException e)
                        {
                            e.printStackTrace();
                        }
                        break;

                    case 3:
                        System.out.println("수정할 글 번호를 입력하세요.");
                        no = sc.nextInt();  // \n이 입력스트림에 남아져 있으므로
                        sc.nextLine();  // 스트림 버퍼를 지워 원치못하는 입력받지 못할 상황 방지
                        System.out.println("수정할 글 내용을 입력하세요.");
                        contents = sc.nextLine();
                        pstmt2.setString(1, contents);
                        pstmt2.setInt(2, no);
                        result = pstmt2.executeUpdate();

                        if (result > 0)
                            System.out.println(result + "건 데이터 수정성공");
                        break;

                    case 4:
                        System.out.println("삭제할 글 번호를 입력하세요.");
                        no = sc.nextInt();
                        sc.nextLine();
                        sql2 = "DELETE FROM board where no=" + no;
                        result = stmt.executeUpdate(sql2);
                        if (result > 0)
                            System.out.println(result + "건 데이터 삭제성공");
                        break;

                    case 5:
                        System.out.println("프로그램을 종료합니다.");
                        if (sc != null)
                            sc.close();
                        return;

                    case 6:
                        System.out.println("tset 테이블 만들기");
                        sql2 = "create table test(no int)";
                        result = stmt.executeUpdate(sql2);
                        System.out.println("테이블 생성 성공");
                        break;

                    case 7:
                        System.out.println("test 테이블 삭제");
                        sql2 = "drop table test";
                        result = stmt.executeUpdate(sql2);
                        System.out.println("테이블 삭제 성공");
                        break;

                }
            }
        }
        catch(SQLException e)
        {
            e.printStackTrace();
        }

    }
}