import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { ModalController } from '@ionic/angular';
import { IssuePage } from '../issue/issue.page';
import { Router } from '@angular/router';
import { SearchPage } from '../search/search.page';

@Component({
    selector: 'app-need-help',
    templateUrl: './need-help.page.html',
    styleUrls: ['./need-help.page.scss'],
})
export class NeedHelpPage implements OnInit {

    public questions: any;
    public faqs;

    constructor(
        public dataServ: DataService,
        private modalController: ModalController,
        private route: Router
    ) {

        this.faqs = dataServ.needHelp;
        this.questions = Object.keys(dataServ.needHelp);
    }

    ngOnInit() {}

    async openIssue(i, question) {
        const modal = await this.modalController.create({
            component: IssuePage,
            componentProps: { value: Object.values(this.faqs)[i], title: question }
        });
        return await modal.present();
    }

}
