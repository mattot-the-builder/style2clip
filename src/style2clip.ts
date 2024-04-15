import html2canvas from 'html2canvas';

export class Style2Clip {

	/**
	 * Convert html and css block into image and put it into clipboard
	 * @param {string} buttonClassName
	 */

	private static instance: Style2Clip;
	private buttonClassName: string = "";
	private copyButtons: HTMLElement[] = [];


	private constructor() {
	}

	public static getInstance() {
		if (!Style2Clip.instance) {
			Style2Clip.instance = new Style2Clip();
		}
		return Style2Clip.instance;
	}

	handleClick(event: MouseEvent) {
		this.convertParentElementToImage(event);
	}

	/**
	 * Set button class namethis
	 * @param {string} buttonClassName
	 */

	setButtonClassName(buttonClassName: string) {

		// const copyButtons = document.querySelectorAll(Style2Clip._buttonClassName);

		this.buttonClassName = buttonClassName;

		this.copyButtons = document.querySelectorAll(this.buttonClassName) as unknown as HTMLElement[];

		this.copyButtons.forEach((button) => {
			button.addEventListener("click", ((event: MouseEvent) => {
				this.handleClick.bind(this)(event);
			}) as EventListener);
		});
	}

	/**
	 * Get button class name
	 */

	getButtonClassName() {
		return this.buttonClassName;
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
