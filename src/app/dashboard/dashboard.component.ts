import { Component, OnInit } from '@angular/core';
import { PlayListService } from '../services/play-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playList = [];
 
  constructor(private playService:PlayListService) { }

  ngOnInit() {

    //  this.playService.addList().subscribe(res=>{
    //     console.log(res)
    //   })
   this.playService.getList().subscribe(res=>{
          res["data"].map(data => this.playList.push(data))
        })
     
  }


}
