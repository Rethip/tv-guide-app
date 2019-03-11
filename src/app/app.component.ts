import { Component } from '@angular/core';
import { Ishowdetail } from './ishowdetail';
import {GuideService} from './guide.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tv-guide-app';
  currentShow: Ishowdetail;

  constructor(private guideservice: GuideService) 
  {}


  doSearch(searchValue){
    const userInput = searchValue;
    this.guideservice.getShowName(userInput).subscribe(data => this.currentShow=data);
    
    
  }

}
