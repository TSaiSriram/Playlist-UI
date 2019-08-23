import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject,BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  constructor(public httpClient: HttpClient) { }

  public addList(body){
    return this.httpClient.post('https://playlist.cfapps.io/addPlaylist',body);
  }

  public getList(){
    return this.httpClient.get('https://playlist.cfapps.io/getPlaylist');
  }

 public delList(id){
   return this.httpClient.delete('https://playlist.cfapps.io/removePlaylist' + "?id=" + `${id}`)
 }

 public searchList(search){
   return this.httpClient.get('https://playlist.cfapps.io/searchPlaylist'+"?title="+`${search}`)
 }

}
