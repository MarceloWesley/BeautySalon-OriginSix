/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('.header nav')
const toggle = document.querySelectorAll('nav .toggle')
const menu = document.querySelector('.menu')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    menu.classList.add('cob')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    menu.classList.remove('cob')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('.header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    757: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cards,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector('.pin')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*menu ativo conforme a seção visivel na pagina*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const Section of sections) {
    const SectionTop = Section.offsetTop
    const SectionHeight = Section.offsetHeight
    const SectionId = Section.getAttribute('id')

    const checkpointStart = checkpoint >= SectionTop
    const checkpointEnd = checkpoint <= SectionTop + SectionHeight

    if (checkpointStart && checkpointEnd) {
    document.querySelector('nav ul li a[href*=' + SectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + SectionId + ']')
        .classList.remove('active')
    }
  }
}
/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
