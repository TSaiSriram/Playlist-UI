import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject,BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  songs;

  private songSubject = new BehaviorSubject(this.songs);
  sampleSong = this.songSubject.asObservable();

  constructor(public httpClient: HttpClient) { }

  public addList(body){
    return this.httpClient.post(' https://playlist.cfapps.io/addPlaylist',body);
    // this.songSubject.next()
  }

  public getList(){
    return this.httpClient.get(' https://playlist.cfapps.io/getPlaylist');
  }

}
