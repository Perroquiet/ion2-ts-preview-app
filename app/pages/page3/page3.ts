import {Page} from 'ionic-angular';

import {Page2} from '../page2/page2';
import {ActionSheetComponent} from '../../shared/components/action-sheets/action-sheets';
import {AlertComponent} from '../../shared/components/alerts/alerts';
import {InputPage} from  '../../shared/components/inputs/inputs';
import {ButtonPage} from '../../shared/components/buttons/buttons';

import {CameraPluginPage} from '../../shared/cordova/camera/camera.plugin';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
	items;
	constructor() {
		this.items = [
			{ title: 'Action Sheet', page: ActionSheetComponent },
			{ title: 'Alerts', page: AlertComponent },
			{ title: 'Inputs', page: InputPage },
			{ title: 'Buttons', page: ButtonPage },
			{ title: 'Camera', page: CameraPluginPage},
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
