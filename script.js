/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});


/* ==========================================
   COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const runCounters = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 120;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText =
                    Math.floor(count).toLocaleString();

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText =
                    target.toLocaleString();
            }
        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const trigger =
        stats.getBoundingClientRect().top;

    if (
        trigger < window.innerHeight - 100 &&
        !counterStarted
    ) {

        counterStarted = true;

        runCounters();
    }

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const reveals =
    document.querySelectorAll(".reveal");

const revealElements = () => {

    reveals.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 100;

        if (top < visible) {

            element.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");
    }
});

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");
    }

});


/* ==========================================
   SMOOTH SCROLL LINKS
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", e => {

        const targetId =
            link.getAttribute("href");

        if (targetId === "#") return;

        e.preventDefault();

        document
        .querySelector(targetId)
        ?.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ==========================================
   MOUSE SPOTLIGHT
========================================== */

const glow =
    document.querySelector(".mouse-glow");

document.addEventListener(
    "mousemove",
    e => {

        if (!glow) return;

        glow.style.left =
            e.clientX + "px";

        glow.style.top =
            e.clientY + "px";
    }
);


/* ==========================================
   FLOATING BUY PULSE
========================================== */

const floatingBuy =
    document.querySelector(".floating-buy");

setInterval(() => {

    if (!floatingBuy) return;

    floatingBuy.animate(

        [

            {
                transform:
                "scale(1)"
            },

            {
                transform:
                "scale(1.08)"
            },

            {
                transform:
                "scale(1)"
            }

        ],

        {

            duration: 1000

        }

    );

}, 5000);


/* ==========================================
   MOBILE MENU
========================================== */

const mobileBtn =
    document.querySelector(".mobile-menu");

const navLinks =
    document.querySelector(".nav-links");

mobileBtn?.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-active"
        );

    }
);


/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question?.addEventListener(
        "click",
        () => {

            item.classList.toggle("active");

        }
    );

});


/* ==========================================
   COPY CONTRACT
========================================== */

const copyBtn =
    document.getElementById("copyContract");

const contractInput =
    document.getElementById("contractAddress");

copyBtn?.addEventListener(
    "click",
    () => {

        navigator.clipboard.writeText(
            contractInput.value
        );

        copyBtn.innerText =
            "Copied!";

        setTimeout(() => {

            copyBtn.innerText =
                "Copy";

        }, 2000);

    }
);


/* ==========================================
   LIVE MATCH TIMER
========================================== */

const matchTimer =
    document.querySelector(".match-status");

let minute = 89;
let second = 26;

setInterval(() => {

    second++;

    if (second >= 60) {

        second = 0;
        minute++;
    }

    if (matchTimer) {

        matchTimer.innerHTML =

        `<span class="live-dot"></span>
         LIVE • ${minute}:${String(second)
         .padStart(2, "0")}`;

    }

}, 1000);


/* ==========================================
   HERO PARALLAX
========================================== */

const mascot =
    document.querySelector(".hero-mascot");

window.addEventListener("mousemove", e => {

    if (!mascot) return;

    const x =
        (window.innerWidth / 2 - e.clientX)
        / 40;

    const y =
        (window.innerHeight / 2 - e.clientY)
        / 40;

    mascot.style.transform =

        `translate(${x}px, ${y}px)`;

});


/* ==========================================
   RANDOM BALL FLOAT
========================================== */

const balls =
    document.querySelectorAll(".floating-ball");

balls.forEach(ball => {

    setInterval(() => {

        const x =
            Math.random() * 50 - 25;

        const y =
            Math.random() * 50 - 25;

        ball.style.transform =

            `translate(${x}px, ${y}px)`;

    }, 4000);

});


/* ==========================================
   ROADMAP GLOW EFFECT
========================================== */

const roadmapCards =
    document.querySelectorAll(
        ".timeline-step"
    );

roadmapCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
            "0 0 40px rgba(247,201,72,.25)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow =
            "none";
        }
    );

});


/* ==========================================
   HERO TEXT ENTRANCE
========================================== */

const heroTitle =
    document.querySelector(".hero h1");

if (heroTitle) {

    heroTitle.animate(

        [

            {
                opacity: 0,
                transform:
                "translateY(80px)"
            },

            {
                opacity: 1,
                transform:
                "translateY(0)"
            }

        ],

        {

            duration: 1200,

            easing: "ease-out"

        }

    );

}