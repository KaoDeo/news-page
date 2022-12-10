import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  uuid = '9803606d-a324-3864-83a8-2bd621e6ccbd';
  region = 'US';

  constructor(private http: HttpClient) {}

  getWeatherData() {
    return this.http.get(environment.NewsApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue),

      //these two params will be like: https://www.example.com/api/resource?param1=value1&param2=value2
      params: new HttpParams()
        .set('uuid', this.uuid)
        .set('region', this.region),
    });
  }
}
