import { Component, OnInit} from '@angular/core';
import { ClearService } from '../../services/clear.service';



@Component({
  selector: 'app-search-clear',
  templateUrl: './search-clear.component.html',
  styleUrls: ['./search-clear.component.css']
})
export class SearchClearComponent implements OnInit {

  constructor(public clearObj:ClearService) {
    // let obj = this.clearObj.clear()
  }

  ngOnInit(): void {
  }
  
  // public doClear() {
  //   obj
  // }
}
