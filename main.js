// 예: 좋아요 토글(아이콘 교체는 파일 2종 쓰거나, 나중에 인라인 SVG로 색 변경)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-actions button[aria-label="좋아요"]');
  if(!btn) return;
  // 간단한 토글 표기(실제 카운트 변경은 생략)
  btn.classList.toggle('on');
});

/* on 상태 시 색 강조(아이콘이 검정 outline이면 약한 scale만) */
// CSS-in-JS가 아닌 전역 스타일을 추가하려면 styles.css에 두는 것이 일반적이지만,
// 데모 용도로 동적으로 삽입합니다.
(function appendLikeStyle(){
  const style = document.createElement('style');
  style.textContent = ".card-actions button.on{transform:scale(1.1)}";
  document.head.appendChild(style);
})();


