class MenuMobile {
    constructor(menuMobile, menu, links) {
        this.menuMobile = document.querySelector(menuMobile);
        this.menu = document.querySelector(menu);
        this.links = document.querySelectorAll(links);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.links.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `menuFade 0.5s ease forwards 0.3s`)
        })
    }

    handleClick() {
        this.menu.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
    }
}

const menuMobile = new MenuMobile (
    ".menu-mobile",
    ".menu",
    ".menu li",
);

menuMobile.init();