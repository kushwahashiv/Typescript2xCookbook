class ExamplesNavigator {
	private _tsFiles: string[];
	private _$tsCode: JQuery;
	private _$jsCode: JQuery;
	private _$snippetSelector: JQuery;
	
	constructor(
		tsFiles: string[], 
		tsCode: JQuery, 
		jsCode: JQuery, 
		snippetSelector: JQuery) {
		this._tsFiles = tsFiles;
		this._$tsCode = tsCode;
		this._$jsCode = jsCode;
		this._$snippetSelector = snippetSelector;
	}
	
	public init() {
		this.renderSnippets();
		this.initializeEvents();
		this._$snippetSelector.trigger('change');
	}
	
	private renderSnippets() {
		const template = this._tsFiles.reduce((previousValue, currentValue, currentIndex, array) => {
		  if(currentIndex === 1) {
		    	previousValue = `<option value='0'>${previousValue}</option>`;
			}
			
			return `${previousValue}<option value=${currentIndex}>${currentValue}</option>`;
		});
		
		this._$snippetSelector.html(template);
	}
	
	private initializeEvents() {
		this._$snippetSelector.on('change', (e) => {
			const $target = $(e.currentTarget);
			const selectedSnippetIndex = $target.val();
			this.renderSnippet(selectedSnippetIndex);
		});
	}
	
	private renderSnippet(selectedSnippetIndex: number) {
		const file = this._tsFiles[selectedSnippetIndex];
		const tsUrl = `../src/${file}`;
		const jsUrl = tsUrl.replace('.ts', '.js');
		
		// Render TS
		$.ajax({
			method: 'GET',
			url: tsUrl,
			dataType: 'text',
			success: (tsCode) => {
				this._$tsCode.text(tsCode);
			}
		});
		
		// Render JS
		$.ajax({
			method: 'GET',
			url: jsUrl,
			dataType: 'text',
			success: (jsCode) => {
				this._$jsCode.text(jsCode);
			}
		});
	}
}

const files = [
	'01_iife.ts'
];

const $tsCode = $('#ts_code');
const $jsCode = $('#js_code');
const $snippetSelector = $('#snippet_selector');
const examplesNavigator = new ExamplesNavigator(files, $tsCode, $jsCode, $snippetSelector);
examplesNavigator.init();