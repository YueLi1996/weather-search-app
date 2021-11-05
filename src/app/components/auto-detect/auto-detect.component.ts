import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-detect',
  templateUrl: './auto-detect.component.html',
  styleUrls: ['./auto-detect.component.css']
})
export class AutoDetectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  autoClick:any = false
  onClickFucntion()
  {
    if (this.autoClick == false)
    {
      console.log("this is false");
      this.autoClick = true;
    }
    else
    {
      this.autoClick = false;
    }
  }
}
