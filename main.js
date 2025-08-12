// 예: 좋아요 토글로 쓰거나, 나중에 인라인 SVG로 색 변경할 것
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-actions button[aria-label="좋아요"]');
  if(!btn) return;
  // 간단한 토글 표기(실제 카운트 변경은 생략)
  btn.classList.toggle('on');
});

/* on 상태 시 색 강조 */
(function appendLikeStyle(){
  const style = document.createElement('style');
  style.textContent = ".card-actions button.on{transform:scale(1.1)}";
  document.head.appendChild(style);
})();


