import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
  templateUrl: './build/shared/components/buttons/buttons.html',
  directives: [forwardRef(() => AndroidAttribute)],
  providers: [HTTP_PROVIDERS]
})
export class ButtonPage {
    constructor(public http: Http) {

    }
    jsonData : Object;
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