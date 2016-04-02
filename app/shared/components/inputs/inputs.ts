import {Page} from 'ionic-angular';
import {forwardRef, Component} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

import {
		FormBuilder,
		Validators,
		Control,
		ControlGroup,
		FORM_DIRECTIVES
	} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import { UsernameValidator } from './usernameValidator.ts'

@Page({
  templateUrl: './build/shared/components/inputs/inputs.html',
  directives: [forwardRef(() => AndroidAttribute)],
  providers: [HTTP_PROVIDERS]
})
export class InputPage {
	
	form: ControlGroup;
	username: Control;
	email: Control;
	asyncEmail: Control;

	constructor(public http: Http, private builder: FormBuilder) {
		this.username = new Control(
			"", 
			Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
			UsernameValidator.usernameTaken
		);
		
		this.form = builder.group({
			username:  this.username
		});
	}

	submitData(){
     	console.log(JSON.stringify(this.form.value))
    }
}
