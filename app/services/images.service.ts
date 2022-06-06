import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/image.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  //baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    //return this.http.get<Image[]>('https://picsum.photos/v2/list');
    return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/users');
    // return this.http.get<Image[]>(
    // 'https://api.pokemontcg.io/v2/cards?pageSize=100'
    // );
  }
  getImageById(id: string): Observable<Image[]> {
    //return this.http.get<Image>('https://picsum.photos/id/' + id + '/info');
    return this.http.get<Image[]>(
      'https://jsonplaceholder.typicode.com/users?id=' + id
    );
    // return this.http.get<Image>('https://api.pokemontcg.io/v2/cards/' + id);
  }
}
