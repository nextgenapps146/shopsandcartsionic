import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-select-location',
    templateUrl: './select-location.component.html',
    styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {

    constructor(
        public popoverController: PopoverController,
        public util: UtilsService) { }

    ngOnInit() { }

    optionClick(item) {
        this.popoverController.dismiss(item);
    }

}
