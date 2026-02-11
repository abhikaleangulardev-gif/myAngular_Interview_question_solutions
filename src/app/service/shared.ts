import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  myCommentDataApiUrls: string = 'https://dummyjson.com/comments';
  constructor(private http: HttpClient) { }

  getCommentDataList(limit: number) {
    return this.http.get(this.myCommentDataApiUrls).pipe(
      map((resp: any) => {
        return resp.comments.slice(0, limit);
      })
    )
  }
}
