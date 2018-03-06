import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Broadcaster } from '@ionic-native/broadcaster';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  // constructor(private broadcaster: Broadcaster) { }
  constructor(public navCtrl: NavController,private broadcaster: Broadcaster,private alertCtrl: AlertController) {

  }
  callBack(){
    
    // this.broadcaster.fireNativeEvent("test.event",{item:'test data'},function(){

    // });
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();

    this.broadcaster.fireNativeEvent('eventName', {item:'test data'});
    // this.broadcaster.fireNativeEvent( "test.event", { item:'test data' }, function() {
    //   console.log( "event fired!" );
    //   } );
      
  }

}
