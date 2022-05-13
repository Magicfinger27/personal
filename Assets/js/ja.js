/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabscontent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              const target = document.querySelector(tab.dataset.target)

              tabscontent.forEach(tabcontents => {
                  tabcontents.classList.remove("skills__active")
              })

              target.classList.add('skills__active')


              tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })

            tab.classList.add("skills__active")
          })
      })


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click",activeWork))

/*===== Work Popup =====*/
document.addEventListener("click",(e) => {
    if(e.target.classList.contains("work__button")) {
        toggleportfoliopopup();
        portfolioitemDetails(e.target.parentElement);
    }
})

function toggleportfoliopopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click",toggleportfoliopopup)

function portfolioitemDetails(portfolioitems) {
    document.querySelector(".pp__thumbnail img").src = portfolioitems.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioitems.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioitems.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new swiper(".testimonials__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        570: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentMode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentMode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll',navHighlighter);

function navHighlighter()
{

 let scrollY = window.pageYOffset;

    sections.ForEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else
        {
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/
