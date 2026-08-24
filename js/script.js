// ==========================================
// CONNECTA - JAVASCRIPT
// ==========================================


// ================= MENU MOBILE =================

const menuToggle =
    document.querySelector(".menu-toggle");

const menu =
    document.querySelector(".menu");


menuToggle.addEventListener("click", () => {

    menu.classList.toggle("open");

});


// ================= FECHAR MENU =================
// quando clicar em algum link

document
    .querySelectorAll(".menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");

        });

    });


// ================= ANO AUTOMÁTICO =================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


// ================= BOTÃO VOLTAR AO TOPO =================

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "grid";

    } else {

        backTop.style.display = "none";

    }

});


// ================= VOLTAR AO TOPO =================

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= MENU ATIVO =================

window.addEventListener("scroll", () => {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    let current =
        "inicio";


    sections.forEach(section => {

        const top =
            section.offsetTop - 120;


        if (
            window.scrollY >= top
        ) {

            current =
                section.id;

        }

    });


    document
        .querySelectorAll(".menu a")
        .forEach(link => {

            link.classList.toggle(

                "active",

                link.getAttribute("href")
                    === `#${current}`

            );

        });

});