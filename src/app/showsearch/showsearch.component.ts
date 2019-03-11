import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-showsearch',
  templateUrl: './showsearch.component.html',
  styleUrls: ['./showsearch.component.css']
})
export class ShowsearchComponent implements OnInit {
 
  search = new FormControl('',[Validators.minLength(3)]);
  @Output() searchEvent = new EventEmitter<string>();
  
  constructor() { }

  getErrorMessage(){
    return this.search.hasError ('minlength') ? 'Type more than 2 characters to search.': '';
  }
  

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).
    subscribe((searchValue:string) => {
    if (!this.search.invalid){
        this.searchEvent.emit(searchValue)
      }
    })
  }

}
