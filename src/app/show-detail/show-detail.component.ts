import { Component, OnInit,Input } from '@angular/core';
import {Ishowdetail} from '../ishowdetail'
import { timer } from 'rxjs';
import { getLocaleDateTimeFormat } from '@angular/common';
import { GuideService } from '../guide.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements 
OnInit {
  @Input() current: Ishowdetail
  constructor(){
   }

  ngOnInit() {
//this.guideservice.getShowName('good girls').subscribe(data => this.current= data)//
  }

}
