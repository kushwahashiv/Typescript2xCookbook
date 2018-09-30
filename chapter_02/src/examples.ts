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
	'01_function_declaration_vs_expression.ts',
	'02_function_types.ts',
	'03_union_types.ts',
	'04_type_guards.ts',
	'05_function_overloading.ts',
	'06_specialized_overloading_signature.ts',
	'07_type_aliases.ts',
	'08_string_literal_types.ts',
	'09_tuple_types.ts',
	'10_optional_and_default_parameters.ts',
	'11_rest_parameters_and_spread_operator.ts',
	'12_function_scope.ts',
	'13_iife.ts',
	'14_closures.ts',
	'15_arrow_functions_and_polymorphic_this.ts',
	'16_access_modifiers.ts',
	'17_local_types.ts',
	'18_abstract_classes.ts',
	'19_mixins.ts',
	'20_intersection_types.ts',
	'21_class_expression_vs_delcaration.ts',
	'22_generic_constraints.ts',
	'23_tagged_functions_and_templates.ts',
	'24_destructuring.ts'
];

const $tsCode = $('#ts_code');
const $jsCode = $('#js_code');
const $snippetSelector = $('#snippet_selector');
const examplesNavigator = new ExamplesNavigator(files, $tsCode, $jsCode, $snippetSelector);
examplesNavigator.init();