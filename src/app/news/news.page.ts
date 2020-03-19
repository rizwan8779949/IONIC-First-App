import { Component, OnInit } from "@angular/core";
import { APIService } from "../Services/API/api.service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"]
})
export class NewsPage implements OnInit {
  constructor(private api: APIService, private router: Router) {}
  articles = new Array();
  ngOnInit() {
    this.getNewsData();
  }

  getNewsData() {
    this.api
      .getNewsApi("top-headlines?country=us&apiKey=" + environment.apiKey)
      .subscribe((res: any) => {
        this.articles = res.articles;
      });
  }
  singleNewView(data) {
    this.api.setEditData(data);
    this.router.navigateByUrl("/tabs/single-news");
  }
}
