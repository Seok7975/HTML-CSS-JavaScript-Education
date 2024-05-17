// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('introVideo');
//     const container = document.querySelector('.container');
//     const videoWrapper = document.querySelector('.video-wrapper');

//     // 비디오 종료 함수
//     function closeVideo() {
//         video.pause(); // 비디오 정지
//         videoWrapper.style.display = 'none'; // 비디오 숨기기
//         container.style.display = 'block'; // 영화 추천 사이트 보이기
//     }

//     // ESC 키 이벤트 핸들러
//     document.addEventListener('keydown', function(event) {
//         if (event.key === "Escape") {
//             closeVideo();
//         }
//     });

//     // 마우스 클릭 이벤트 핸들러
//     document.addEventListener('click', function() {
//         closeVideo();
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('introVideo');
    const container = document.querySelector('.container');
    const videoWrapper = document.querySelector('.video-wrapper');

    // 비디오 종료 함수
    function closeVideo() {
        video.pause(); // 비디오 정지
        videoWrapper.style.display = 'none'; // 비디오 숨기기
        container.style.display = 'block'; // 영화 추천 사이트 보이기
    }

    // ESC 키 이벤트 핸들러
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeVideo();
        }
    });

    // 마우스 클릭 이벤트 핸들러
    document.addEventListener('click', function() {
        closeVideo();
    });
});
