import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() newSearchItemEvent = new EventEmitter<string>();
  searchValue:string='';

constructor(){}

searchByName(val:any){
  console.log(val)
  this.searchValue = val;
  this.newSearchItemEvent.emit(val);
}


}
