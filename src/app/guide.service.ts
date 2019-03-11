import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Time } from '@angular/common';
import {environment} from 'src/environments/environment';
import { Ishowdetail } from './ishowdetail';
import {map} from 'rxjs/operators';

interface IguideData {
  name:string,
  schedule:{time: number,days:Date},
  network:{name: string},
  image:{ medium:string},
  summary:string
  
  }

  


@Injectable({
  providedIn: 'root'
})
export class GuideService {


  constructor(private httpClient:HttpClient) { }

  getShowName(search:string)
  {
    return this.httpClient.get<IguideData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}&appId=${environment.appId}`).pipe(map(data =>this.transformtoishowdetail(data)))
  }

  private transformtoishowdetail(data:IguideData): Ishowdetail
  {
     return {
      showName: data.name,
      NetworkName: data.network.name,
      time: data.schedule.time,
      Image: data.image.medium,
      day: data.schedule.days,
      summary: data.summary

    }

    
  }

  
}