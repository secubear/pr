(function () {
  'use strict';

  // ===== Coffee Chat 버튼: data-href 또는 href 사용 (구글 폼 URL은 한 곳만 교체)
  var coffeeBtn = document.getElementById('coffee-chat-btn');
  if (coffeeBtn) {
    coffeeBtn.addEventListener('click', function (e) {
      var url = coffeeBtn.getAttribute('data-href') || coffeeBtn.getAttribute('href');
      if (!url || url === '#') {
        e.preventDefault();
        // TODO: 구글 폼 URL을 index.html의 data-href 또는 href에 넣으면 여기서 자동으로 이동합니다.
        return;
      }
      // 외부 링크는 target="_blank"로 이미 열리므로 기본 동작 유지
    });
  }

  // ===== 스크롤 시 카드 페이드인 (선택 애니메이션)
  var cards = document.querySelectorAll('.topics .card');
  if (cards.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );
    cards.forEach(function (card) {
      observer.observe(card);
    });
  }
})();
