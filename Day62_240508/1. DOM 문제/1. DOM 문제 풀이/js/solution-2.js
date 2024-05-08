const bttn = document.querySelector('#bttn');
const notiBox = document.querySelector('#noti-box');

bttn.addEventListener('click', () => {
  const noti = document.createElement('div');  // <div class="noti"> </div> 추가
  noti.classList.add('noti');
  noti.innerText = "알림 내용이 표시됩니다.";
  notiBox.appendChild(noti);

  setTimeout(() => { //3초 후에 노티를 삭제
    noti.remove();
  }, 3000);
});
