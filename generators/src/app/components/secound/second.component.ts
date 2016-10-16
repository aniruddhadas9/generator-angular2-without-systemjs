import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";
import {GlobalVariable} from "../../services/global-variable";

@Component({
  selector: 'second',
  templateUrl: '../../views/secound.component.html',
})
export class SecondComponent {

  constructor(public appService: AppService) {
  }

}
