import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";
import {GlobalVariable} from "../../services/global-variable";

@Component({
  selector: 'message',
  templateUrl: '../../views/message.component.html',
})
export class MessageComponent {

  constructor(public appService: AppService) {
  }

}
