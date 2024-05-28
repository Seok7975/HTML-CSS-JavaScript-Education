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
    const videoWrapper = document.querySelector('.video-wrapper');
    const container = document.querySelector('.container');
    const nextButton = document.getElementById('nextButton');

    nextButton.addEventListener('click', function() {
        videoWrapper.style.display = 'none';
        container.style.display = 'block';
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            videoWrapper.style.display = 'none';
            container.style.display = 'block';
        }
    });
});


function showSection(sectionId) {
    // 모든 섹션을 숨깁니다.
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 선택한 섹션을 표시합니다.
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
