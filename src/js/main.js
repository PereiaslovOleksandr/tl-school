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
