import { Component, OnInit } from '@angular/core';
import { PlayListService } from '../services/play-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  playList = [];
  songsForm: FormGroup;

  constructor(private playService: PlayListService) { }

  ngOnInit() {

    this.songsForm = new FormGroup({
      title: new FormControl('')
    });

    this.getSongs();
  }


  getSongs() {
    this.playService.getList().subscribe(res => {
            // res[`data`].map(data => this.playList.push(data.title.map(word => {title += word.charAt(0).toUpperCase() + word.slice(1)+" "})));
      res["data"].map(data => {
        let str = " ";
        data.title.split(" ").map(word => {str += word.charAt(0).toUpperCase() + word.slice(1)+" "})
        data.title = str;
        this.playList.push(data)
      });
    });
  }

  addSong(songsForm) {
    console.log(songsForm.value.title.toLowerCase())
    const body =  {title : songsForm.value.title.toLowerCase()}
    console.log(body);
    this.playService.addList(body).subscribe(res => {
      this.playList = [];
      this.getSongs();
    });

    this.songsForm = new FormGroup({
      title: new FormControl('')
    });
  }

  deleteSong(songId) {
   this.playService.delList(songId).subscribe(res => {
      this.playList = [];
      this.getSongs();
    });
  }

  title;

  searchSong(){
    this.playService.searchList(this.title.toLowerCase()).subscribe(res=>{
      // console.log(res)
      this.playList = [];
      res["data"].map(data => {
        let str = " ";
        data.title.split(" ").map(word => {str += word.charAt(0).toUpperCase() + word.slice(1)+" "})
        data.title = str;
        this.playList.push(data)
      });
    })
  }

}
