import { Injectable } from "@angular/core";
import { PageLink } from "../enums/page-link";
import { BehaviorSubject } from "rxjs";
import { PageName } from "../enums/page-name";

@Injectable({providedIn: "root"})
export class SystemValueService {
  currentPage = new BehaviorSubject<PageName>(PageName.MainPage);
}
