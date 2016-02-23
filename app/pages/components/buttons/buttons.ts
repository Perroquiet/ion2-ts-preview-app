import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
  templateUrl: './build/pages/components/buttons/buttons.html',
  directives: [forwardRef(() => AndroidAttribute)],
  viewProviders: [HTTP_PROVIDERS]
})
export class ButtonPage {
    constructor(public http: Http) {

    }

    buttonBusy: boolean = false;
    getData() {
    	this.buttonBusy = true;

		this.http.get('http://jsonplaceholder.typicode.com/posts/1')
			.subscribe(
				data => this.jsonData = JSON.stringify(data),
				err => this.logError(err),
				() => this.buttonBusy = false
			);
    }

    logError(err) {
		console.error('There was an error: ' + err);
	}
}