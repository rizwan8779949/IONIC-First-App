import { Component, OnInit } from "@angular/core";
import { APIService } from "../Services/API/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-single-news",
  templateUrl: "./single-news.page.html",
  styleUrls: ["./single-news.page.scss"]
})
export class SingleNewsPage implements OnInit {
  constructor(private api: APIService, private router: Router) {}
  articleData: any;
  ngOnInit() {
    this.api.editDto.subscribe((res: any) => {
      if (res) {
        this.articleData = res;
      } else this.router.navigateByUrl("tabs/news");
    });
  }
}
