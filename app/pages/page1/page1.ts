import {Page} from 'ionic-framework/ionic';
import {Type} from 'angular2/core'

import {Page2} from '../page2/page2';
import {ActionSheetComponent} from '../components/action-sheets/action-sheets';
import {AlertComponent} from '../components/alerts/alerts';
import {InputPage} from  '../components/inputs/inputs';
import {ButtonPage} from '../components/buttons/buttons';

@Page({
	templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {

	constructor() {
		this.items = [
			{ title: 'Action Sheet', page: ActionSheetComponent },
			{ title: 'Alerts', page: AlertComponent },
			{ title: 'Inputs', page: InputPage },
			{ title: 'Buttons', page: ButtonPage },
			{ title: 'Cards', page: Page2 },
			{ title: 'Menus', page: Page2 },
			{ title: 'Modals', page: Page2 },
			{ title: 'Navigation', page: Page2 },
			{ title: 'Searchbar', page: Page2 },
			{ title: 'Select', page: Page2 },
			{ title: 'Slides', page: Page2 },
			{ title: 'Toggle', page: Page2 },
		];
	}

	itemSelected(item) {
		console.log(item.title);
	}
}
