import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-select-location',
    templateUrl: './select-location.component.html',
    styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {

    availableCities = ['Naperville', 'Schaumberg', 'Chicago', 'Plainfield', 'Aurora', 'Bolingbrook'];

    constructor(
        public popoverController: PopoverController) { }

    ngOnInit() { }

    optionClick(item) {
        this.popoverController.dismiss(item);
    }

}
