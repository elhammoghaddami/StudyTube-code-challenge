import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PaginationData } from '../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  //#region : Properties
  @Output() action = new EventEmitter();
  @Input()
  data!: PaginationData;
  pagesDisplayedCount = 5;
  pageSize = [
    { id: 0, value: 10 },
    { id: 1, value: 50 },
    { id: 2, value: 100 },
    { id: 3, value: 200 },
  ];
  //#endregion

  //#region : Constructor/OnInit
  constructor() {}

  ngOnInit(): void {
  }
  //#endregion

  //#region : Pages Displayed
  get pagesDisplayed() {
    const pages:any = [];
    if (this.data.totalCount > this.pagesDisplayedCount) {
      if (this.data.pageNumber < 4) {
        for (let i = 0; i < this.pagesDisplayedCount; i++) {
          pages.push(i + 1);
        }
      } else {
        if (
          this.data.pageNumber <=
          this.data.totalCount - this.pagesDisplayedCount
        ) {
          for (
            let i = this.data.pageNumber - 2;
            i < this.data.pageNumber + 3;
            i++
          ) {
            pages.push(i + 1);
          }
        } else {
          for (
            let i = this.data.totalCount - this.pagesDisplayedCount;
            i < this.data.totalCount;
            i++
          ) {
            pages.push(i + 1);
          }
        }
      }
    } else {
      for (let i = 0; i < this.data.totalCount; i++) {
        pages.push(i + 1);
      }
    }
    return pages;
  }
  //#endregion

  //#region : Next/Prev/First/Last
  next() {
    if (this.data.pageNumber < this.data.totalCount) {
      this.data.prevPage = this.data.pageNumber;
      this.goPage(this.data.pageNumber + 1);
    }
  }

  last() {
    this.data.prevPage = this.data.pageNumber;
    this.goPage(this.data.totalCount);
  }

  prev() {
    if (this.data.pageNumber - 1 < 1) {
      return;
    }
    this.data.prevPage = this.data.pageNumber;
    this.goPage(this.data.pageNumber - 1);
  }

  first() {
    this.data.prevPage = this.data.pageNumber;
    this.goPage(1);
  }
  //#endregion

  //#region : Go Page

  selectPage(page) {
    this.data.prevPage = this.data.pageNumber;
    this.goPage(page);
  }

  goPage(page) {
    if (page >= 1 && page <= this.data.totalCount) {
      this.data.pageNumber = page;
      this.action.emit();
    } else {
      this.data.pageNumber = 1;
    }
   
  }
  selectPageSize(pageSize) {
    this.data.pageSize = pageSize;
    this.data.pageNumber = 1;
    this.action.emit();
  }

  //#endregion
}
