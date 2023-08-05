const navOptionRecent = document.getElementById("navigation__option-recent");
const navOptionPopular = document.getElementById("navigation__option-popular");
const navOptionTrending = document.getElementById("navigation__option-trending");

const navContentRecent = document.getElementById("navigation__content-recent");
const navContentPopular = document.getElementById("navigation__content-popular");
const navContentTrending = document.getElementById("navigation__content-trending");


navOptionPopular.addEventListener("click", () => {
    navOptionRecent.classList.remove("bg-white", "text-blue-700", "outline");
    navOptionTrending.classList.remove("bg-white", "text-blue-700", "outline");
    navOptionPopular.classList.add("bg-white", "text-blue-700", "outline");

    navOptionPopular.classList.remove("hover:bg-white/10");
    navOptionRecent.classList.add("hover:bg-white/10");
    navOptionTrending.classList.add("hover:bg-white/10");

    navContentRecent.classList.add("hidden");
    navContentTrending.classList.add("hidden");
    navContentPopular.classList.remove("hidden");
    navContentPopular.classList.add("flex");
});

navOptionRecent.addEventListener("click", () => {
    navOptionPopular.classList.remove("bg-white", "text-blue-700", "outline");
    navOptionTrending.classList.remove("bg-white", "text-blue-700", "outline");
    navOptionRecent.classList.add("bg-white", "text-blue-700", "outline");

    navOptionRecent.classList.remove("hover:bg-white/10");
    navOptionPopular.classList.add("hover:bg-white/10");
    navOptionTrending.classList.add("hover:bg-white/10");

    navContentPopular.classList.add("hidden");
    navContentTrending.classList.add("hidden");
    navContentRecent.classList.remove("hidden");
    navContentRecent.classList.add("flex");
});

navOptionTrending.addEventListener("click", () => {
    navOptionPopular.classList.remove("bg-white", "text-blue-700", "outline");
    navOptionRecent.classList.remove("bg-white", "text-blue-700", "outline");
    navOptionTrending.classList.add("bg-white", "text-blue-700", "outline");

    navOptionTrending.classList.remove("hover:bg-white/10");
    navOptionRecent.classList.add("hover:bg-white/10");
    navOptionPopular.classList.add("hover:bg-white/10");

    navContentPopular.classList.add("hidden");
    navContentRecent.classList.add("hidden");
    navContentTrending.classList.remove("hidden");
    navContentTrending.classList.add("flex");
});