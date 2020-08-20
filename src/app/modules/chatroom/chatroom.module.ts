import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatroomPageRoutingModule } from './chatroom-routing.module';
import { ChatroomPage } from './chatroom.page';
import { ComponentsModule } from '../../components/components.module';
import { DatePipe } from '@angular/common';

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        FormsModule,
        IonicModule,
        ChatroomPageRoutingModule
    ],
    declarations: [ChatroomPage],
    providers: [DatePipe]
})

export class ChatroomPageModule { }
