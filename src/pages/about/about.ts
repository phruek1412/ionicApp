import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Broadcaster } from '@ionic-native/broadcaster';
                         
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  // constructor(private broadcaster: Broadcaster) { }
  constructor(public navCtrl: NavController,private broadcaster: Broadcaster) {

  }
  callBack(){
    
    // this.broadcaster.fireNativeEvent("test.event",{item:'test data'},function(){

    // });
    this.broadcaster.fireNativeEvent('eventName', {item:'test data'}).then(()=>console.log('success'));
    // this.broadcaster.fireNativeEvent( "test.event", { item:'test data' }, function() {
    //   console.log( "event fired!" );
    //   } );
      
  }

}
