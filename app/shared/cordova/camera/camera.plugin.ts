import {Page, Platform} from 'ionic-angular';
import {Camera} from 'ionic-native';
declare var navigator: any;

@Page({
  templateUrl: 'build/shared/plugins/camera/camera.plugin.html',
})
export class CameraPluginPage {
	imgSrc: string = 'https://jit-coupons.s3.amazonaws.com/coupons/bNcqJiMJwi74i8rBMy1lyZH3bu31Ho9b1OKA_zmlY1acny7roj-lRZGd1job';

	constructor() {

	}
	getPhoto() {
		// let options = {
		// 	quality: 100,
		// 	destinationType: navigator.camera.DestinationType.FILE_URI,
		// 	sourceType: navigator.camera.PictureSourceType.CAMERA,
		// 	allowEdit: true,
		// 	encodingType: navigator.camera.EncodingType.JPEG,
		// 	targetWidth: 100,
		// 	targetHeight: 100,
		// 	saveToPhotoAlbum: false,
		// 	correctOrientation:true
		// };

		// navigator.camera.getPicture(
		// 	function(imageData) {
		// 		this.imgSrc = imageData;
		// 	}, function(err) {
		// 		alert('Failed because: ' + err);
		// 	}, options);

		var options = {
            destinationType: 1,
            sourceType: 1,
            encodingType: 0,
            quality:100,
            allowEdit: false,
            saveToPhotoAlbum: true,            
            correctOrientation: true,
            targetWidth:1000,
            targetHeight: 800
        };   
 
        Camera.getPicture(options).then((imgPath) => {
            this.imgSrc = imgPath;
        }, (err) => {                
            if(err.error == "cordova_not_available") {
                alert('Cordova not available');           
            } else {
                alert(JSON.stringify(err));                
            }    
        });
	}
}
