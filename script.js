// 스크롤 애니메이션
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)'
  } else {
    navbar.style.background = '#000'
  }
})

// 카드 클릭 시 이동 알림 (콘솔 확인용)
document.querySelectorAll('.card-link').forEach((link) => {
  link.addEventListener('click', () => {
    console.log('전시관으로 이동합니다.')
  })
})

// Intersection Observer API를 사용하여 스크롤 감지
document.addEventListener('DOMContentLoaded', function () {
  // 관찰자 설정
  const observerOptions = {
    root: null, // 브라우저 뷰포트 기준
    rootMargin: '0px',
    threshold: 0.2, // 요소가 화면에 20% 이상 보일 때 작동
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면에 들어오면 show 클래스 추가 (애니메이션 시작)
        entry.target.classList.add('show')
      } else {
        // 화면에서 나가면 show 클래스 제거 (애니메이션 초기화)
        entry.target.classList.remove('show')
      }
    })
  }, observerOptions)

  // .scroll-anim 클래스를 가진 모든 요소를 찾아서 관찰 시작
  const hiddenElements = document.querySelectorAll('.scroll-anim')
  hiddenElements.forEach((el) => observer.observe(el))
})

// 1. 에니그마 신호 흐름 애니메이션
function startEnigma() {
  const sequence = ['p1', 'p2', 'p3', 'p2', 'p4']
  let i = 0

  // 기존 실행 중인 애니메이션 초기화
  document
    .querySelectorAll('.part')
    .forEach((p) => p.classList.remove('active'))

  const interval = setInterval(() => {
    // 이전 불빛 끄기
    document
      .querySelectorAll('.part')
      .forEach((p) => p.classList.remove('active'))

    // 배열이 끝나면 타이머 종료
    if (i >= sequence.length) return clearInterval(interval)

    // 현재 순서에 불빛 켜기
    document.getElementById(sequence[i]).classList.add('active')
    i++
  }, 500)
}

// 2. 튜링 봄베 무차별 대입 시뮬레이션
function startBombe() {
  const log = document.getElementById('bombe-log')
  log.innerHTML = ''
  let count = 0

  const interval = setInterval(() => {
    // 무작위 8자리 영문/숫자 조합 생성
    const randomCode = Math.random().toString(36).substring(2, 10).toUpperCase()
    log.innerHTML =
      `> Testing Config: ${randomCode}... [FAIL]<br>` + log.innerHTML
    count++

    if (count > 12) {
      clearInterval(interval)
      log.innerHTML =
        `<span style="color:#ffe066; text-shadow:0 0 10px #c9a063;">> [SUCCESS] Found Key: HELLO_TURING</span><br>` +
        log.innerHTML
    }
  }, 120)
}
