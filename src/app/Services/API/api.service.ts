import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: HttpClient) {}
  getArticleDto = new BehaviorSubject<any>(null);
  editDto = this.getArticleDto.asObservable();
  setEditData(dto) {
    this.getArticleDto.next(dto);
  }
  getNewsApi(url) {
    return this.http.get(environment.apiUrl + url);
  }
}
