
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// certificate scroll js
const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')
cardsContainer.style.setProperty('--cards-count', cards.length)
cardsContainer.style.setProperty(
  '--card-height',
  `${cards[0].clientHeight}px`
)
Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20
  card.style.paddingTop = `${offsetTop}px`
  if (index === cards.length - 1) {
    return
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1
  const nextCard = cards[index + 1]
  const cardInner = card.querySelector('.card__inner')
  ScrollObserver.Element(nextCard, {
    offsetTop,
    offsetBottom: window.innerHeight - card.clientHeight
  }).onScroll(({ percentageY }) => {
    cardInner.style.scale = valueAtPercentage({
      from: 1,
      to: toScale,
      percentage: percentageY
    })
    cardInner.style.filter = `brightness(${valueAtPercentage({
      from: 1,
      to: 0.6,
      percentage: percentageY
    })})`
  })
})
        // When the user scrolls the page, execute myFunction 
