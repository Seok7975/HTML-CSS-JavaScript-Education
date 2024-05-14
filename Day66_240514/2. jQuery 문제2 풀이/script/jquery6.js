$(function() {

  $(".guess_box").on("click", checkForCode );

  function getRandom(num){
    var my_num = Math.floor(Math.random()*num);
    return my_num;
  }

  var hideCode = function(){
    var numRand = getRandom(4);
    $(".guess_box").each(function(index, value) { 
      if(numRand == index){
        $(this).append("<span id='has_discount'></span>");
        return false;
      } 
    });
  }

  hideCode();

  function checkForCode(){
    var discount;
    if($.contains(this, document.getElementById("has_discount") ) )
    {
      var my_num = getRandom(100);
      discount = "<p>Your Code: CODE"+my_num +"</p>";
    }else{
      discount = "<hr>Sorry, no discount this time!" ;
    }
    $(".guess_box").each(function() { 
      if($.contains(this, document.getElementById("has_discount") ) )
      {
        $(this).addClass("discount");
      }else{
        $(this).addClass("no_discount");            
      }
      $(this).off();
    });
    $("#result").append(discount);   
  } // End checkForCode function 

  $(".guess_box").on("mouseenter", function () {
      $(this).addClass("my_hover");
    })
    .on("mouseleave", function () {
      $(this).removeClass("my_hover");
    }); 
     
  });

  /*
    DOM http://w3.org/dom

    Q:<script> 태그를 페이지 마지막 </body>태그 바로 앞에 쓴 이유가 뭐죠?
    <script> 태그는 <head>태그와 </head>태그 사이에 있어야 하는 줄 알았어요.

    A: 네.<script>태그는 <head> 태그와 </head>태그 사이에 쓰는 게 제일 좋다고들
    했었어요(일부는 지금도 그렇게 말해요). 하지만 <script> 태그는 다른 파일을
    동시에 내려받지 못하게 차단하는 문제가 있습니다. 원래 이미지 파일을 서로
    다른 서버에서 받을 때는 동시에 내려받을 수 있는데, <script> 태그가 있으면
    동시에 받을 수 없게 됩니다. <script> 태그를 페이지 맨 아래에 두면
    페이지를 좀 더 빨리 내려받을 수 있습니다.
  */

 /*
  $(this)는 문맥에 따라 다르다는 것을 잘 기억하세요. 즉$(this)를 언제, 어디에
  쓰느냐에 따라 $(this)의 의미가 달라집니다. jQuery 메서드를 호출했을 때 실행되는
  함수가 $(this)를 쓰기에 가장 적당한 장소 중 하나입니다.
 */

  /*
    this와 $(this)
    자바스크립테에서 this는 현재 다루고 있는 요소를 가리킵니다. this에 $()를 추가해서
    $(this)를 만들면 현재 다루고 있는 요소에 jQuery 메서드를 적용할 수 있게 됩니다.
  */

  /*
    jQuery 코드를 다른 파일로 분리하면 장점이 많아집니다.
    1. 다른 페이지에서도 쓸 수 있습니다.(코드 재활용)
    2. 페이지를 더 빨리 불러옵니다.
    3. HTML 파일이 더 깔끔해지고 읽기 편해집니다.
   */

  /*
    Q : jQuery 코드를 분리하면 페이지를 불러오는 속도가 왜 빨라지죠?
    A : js파일을 여러 HTML 파일에서 재활용하면 브라우저는 해당 파일을 단 한번만
    요청합니다. .js파일이 브라우저 캐시에 저장되므로 해당 파일을 사용하는 다른
    HTML 페이지를 부를 때 서버에 요청하지 않고 캐시에 있는 파일을 사용하기
    때문입니다.
  */

  /*
    Q : 함수 선언과 함수 표현식의 차이는 뭐죠?
    A : 제일 큰 차이는 타이밍입니다. 두 방식의 결과는 마찬가지지만 함수 표현식은
    자바스크립트 해석기가 해당 표현식을 만나기 전까지는 쓸 수 없습니다. 반면에
    함수 선언을 사용하면 페이지에서 아무 때나, 심지어 페이지를 불러오자마자
    쓸 수 있습니다.
  */

 /*
    Q : 함수를 만들 때마다 어떤 값을 반환하는지 명시해야 하나요?
    A : 꼭 그렇게 하지 않아도 됩니다. 함수에 반환값을 명시하든 하지 않든 모든 함수는
    반환값이 있습니다. 반환값을 명시하지 않으면 undefined라는 값을 반환합니다. 함수를
    호출한 코드에서 undefined를 처리할 수 없으면 에러가 납니다. 따라서 반환값을
    명시하는 편이 좋은데 애매하면 return false;처럼 써도 됩니다.

    Q : 함수에 넘기는 매개변수에 제한이 있나요?
    A : 아무 제한도 없습니다. 객체, 요소, 변수, 값 뭐든 넘길 수 있어요. 함수에서
    처리할 수 있는 매개변수보다 더 많이 넘겨도 되는데 이렇게 초과된 매개변수는 무시될
    거예요. 필요한 매개변수를 넘기지 않으면 모자라는 부분에는 자동으로 undefined가
    들어갑니다.

    Q : $.contain 메서드는 어떤 일을 하죠?
    A : .contain() 메서드는 매개변수를 두 개 받는 정적 메서드입니다. 이 메서드는
    첫번째 매개변수의 자식 요소를 모두 확인하면서 그 중에 두 번째 매개변수가 들어
    있는지 확인합니다. 예를 들어 $.contains(document.body, document.getElementById("header"))
    는 true이고, $.contain(document.getElementById("header"),document.body)는
    false입니다.

    Q : 정적 메서드라뇨?
    A : 정적 메서드란 다른 객체에는연결되지않고 jQuery 라이브러리에만 연결된 함수
    입니다. 정적 메서드를 호출할 때는 선택자를 쓰지 않고 jQuery 또는 $ 기호만
    쓰면 됩니다.

    Q : each() 메서드에서 index와 value는 무슨 뜻인가요?
    A : index는 루프에서 현재 어디에 있는지 나타내는 변수이고 선택자가 반환하는 배열의
    첫 번째 요소는 0입니다. value는 현재 요소를 나타내며, .each() 메서드 루프 안에서는
    this와 마찬가지입니다.

    Q : hideCode 함수의 .each() 메서드 루프에서 return false는 무슨 의미죠?
    A : each() 메서드 루프에서 return false는 루프에서 빠져나와 다음 단계로 이동하라는
    뜻입니다. 반환값이 false가 아니면 .each() 메서드 루프는 다음 항목으로 넘어가서
    루프를 계속 진행합니다. hideCode 함수에서는 이미 할인 코드를 배치했으므로 나머지 
    요소에서도 루프를 진행할 필요는 없습니다.
 */