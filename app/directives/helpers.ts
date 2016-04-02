import {Directive, ElementRef, Renderer} from 'angular2/core';
import {Platform, Navbar} from 'ionic-angular';

@Directive({
	selector: '.android-attr',
})
export class AndroidAttribute {
	isAndroid: boolean;

	constructor(
		public platform: Platform,
		public elementRef: ElementRef,
		public renderer: Renderer) {
		this.isAndroid = platform.is('android');
		renderer.setElementAttribute(elementRef.nativeElement, 'primary', this.isAndroid ? '' : null);
	}

}

export function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

export function hasScrollbar() {

	if (typeof window.top.innerWidth === 'number') {
		return window.top.innerWidth > window.top.document.documentElement.clientWidth;
	}

	// rootElem for quirksmode
	var rootElem = window.top.document.documentElement || window.top.document.body;

	// Check overflow style property on body for fauxscrollbars
	var overflowStyle;

	if (typeof rootElem.style !== 'undefined') {
		overflowStyle = rootElem.style.overflow;
	}

	overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;

	// Also need to check the Y axis overflow
	var overflowYStyle;

	if (typeof rootElem.style !== 'undefined') {
		overflowYStyle = rootElem.style.overflowY;
	}

	overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;

	var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
	var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
	var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

	return (contentOverflows && overflowShown) || (alwaysShowScroll)
}