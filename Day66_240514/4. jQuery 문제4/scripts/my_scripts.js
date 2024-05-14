$(document).ready(function() {
    
    let originalItems = []; // 제거된 메뉴 항목을 저장할 배열

    // Go Vegetarian 버튼 클릭 이벤트
    $("#vegOn").on("click", function(){
        $(".menu_list").each(function(){

            // 1. 생선류 없어져야 한다.
            $('.fish').each(function() {
                let parentLi = $(this).closest('li');
                let menuItem = parentLi.parent().attr('class');
                originalItems[menuItem] 
                = (originalItems[menuItem] || []).concat(parentLi.detach());
                $(this).text('Tofu');
            });

            // 2. 햄버거 대신 포토벨로 버섯이 들어간다.
            $("#restoreMe").on("click", function(){
                $(".hamburger").each(function(){
                    $(this).text('Portobello Mushroom')
                })
            })

            // 3. 햄버거를 제외한 고기나 계란 요리에는 두부가 대신 들어간다.
            $(".meet").not(".hamburger").each(function(){
                $(this).text('Tofu');
            })

            // Restore Menu 버튼 클릭 이벤트
            $('#restoreMe').click(function() {
                $.each(originalItems, function(menuItem, items) {
                    $('.' + menuItem).append(items);
                });
        // 초기화
        originalItems = {};
    });
        })
    })





})