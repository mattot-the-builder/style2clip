import html2canvas from 'html2canvas';

class Style2Clip {

	/**
	 * Convert html and css block into image and put it into clipboard
	 * @param {string} buttonClassName
	 */

	private static _buttonClassName: string = ".button-copy";

	constructor(buttonClassName: string = ".button-copy") {
		Style2Clip._buttonClassName = buttonClassName;
	}

	handleClick(event: MouseEvent) {
		this.convertParentElementToImage(event);
	}

	/**
	 * Set button class name
	 * @param {string} buttonClassName
	 */

	setButtonClassName(buttonClassName: string) {

		const copyButtons = document.querySelectorAll(Style2Clip._buttonClassName);

		Style2Clip._buttonClassName = buttonClassName;

		/**
		 * Add event listener to all copy buttons
		 * @param {MouseEvent} event
		 */

		copyButtons.forEach((button) => {
			button.addEventListener("click", ((event: MouseEvent) => {
				style2clip.handleClick.bind(style2clip)(event);
			}) as EventListener);
		});
	}

	/**
	 * Get button class name
	 */

	getButtonClassName() {
		return Style2Clip._buttonClassName;
	}

	/**
	 * Convert all html and css elements into image blob
	 * @param {HTMLElement} element
	 */

	convertToImage(element: HTMLElement) {
		html2canvas(element).then(function(canvas: HTMLCanvasElement) {

			canvas.toBlob((blob) => {
				if (blob) {
					// convert canvas to Blob
					const clipboardItem = new ClipboardItem({ 'image/png': blob });

					// writing image to clipboard
					navigator.clipboard.write([clipboardItem]).then(() => {
						alert("Image copied to clipboard!");
					}).catch(err => {
						console.error('Unable to write to clipboard:', err);
					});
				} else {
					console.error('Unable to convert canvas to Blob');
				}
			}, 'image/png');
		});
	}

	/**
	 * Get the parent element and convert it to image
	 * @param {MouseEvent} event
	 */

	convertParentElementToImage(event: MouseEvent) {
		const callingElement = event.target as HTMLElement;
		const callingParent = callingElement.parentNode;

		this.convertToImage(callingParent as HTMLElement);
	}
}

const style2clip = new Style2Clip();
style2clip.setButtonClassName(".button-copy");
