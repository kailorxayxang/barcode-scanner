import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannerCode = null;
  constructor(public navCtrl: NavController,private barcode:BarcodeScanner) {
    
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannerCode = barcodeData.text;
    }, (err) => {
      console.log("ERR", err);
    });
  }

}
