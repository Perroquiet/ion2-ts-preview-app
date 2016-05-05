import {App, Platform, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

@App({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item>
            Home
          </button>
          <button ion-item>
            Signup
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav id="nav" [root]="rootPage" #content></ion-nav>`,
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = TabsPage;
  menu: MenuController;

  constructor(platform: Platform, menu: MenuController) {

    this.menu = menu;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.menu.swipeEnable(false);
      StatusBar.styleDefault();
    });
  }

  goToHome() {
    this.rootPage = TabsPage;
  }
}
