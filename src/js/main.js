import "focus-visible";
import lazyImages from "./modules/lazyImages";
import documentReady from "./helpers/documentReady";

documentReady(() => {
	lazyImages();
});

const { height: pageHeaderHeight } = document
	.querySelector(".page-header")
	.getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;

(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const mobileMenuRef = document.querySelector("[data-menu]");

	menuBtnRef.addEventListener("click", () => {
		const expanded =
			menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
	});
})();

(function (d, w, s) {
	var widgetHash = "twquddts1xbtvfbov07e",
		gcw = d.createElement(s);
	gcw.type = "text/javascript";
	gcw.async = true;
	gcw.src = "//widgets.binotel.com/getcall/widgets/" + widgetHash + ".js";
	var sn = d.getElementsByTagName(s)[0];
	sn.parentNode.insertBefore(gcw, sn);
})(document, window, "script");

$(".sliderhero").slick({
	infinite: true,
	dots: true, // Adds the dots on the bottom
	slidesToShow: 2, // Shows a three slides at a time
	slidesToScroll: 3, // When you click an arrow, it scrolls 1 slide at a time
	arrows: false, // Adds arrows to sides of slider

	autoplay: true,
	autoplaySpeed: 4500,
});

$(".slider").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 4500,
	arrows: false,
	dots: true,
});

$(".slider-sec2").slick({
	infinite: true,
	// Adds the dots on the bottom
	slidesToShow: 1, // Shows a three slides at a time
	slidesToScroll: 2, // When you click an arrow, it scrolls 1 slide at a time
	arrows: false, // Adds arrows to sides of slider
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 4500,
});

$(".helpslide").slick({
	infinite: true,
	dots: true, // Adds the dots on the bottom
	slidesToShow: 1, // Shows a three slides at a time
	slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
	arrows: false, // Adds arrows to sides of slider
	autoplay: true,
	autoplaySpeed: 4500,
});

$(".slidersec5").slick({
	infinite: true,
	dots: true, // Adds the dots on the bottom
	slidesToShow: 1, // Shows a three slides at a time
	slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
	arrows: false, // Adds arrows to sides of slider

	autoplay: true,
	autoplaySpeed: 4500,
});
