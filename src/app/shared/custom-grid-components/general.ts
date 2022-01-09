import { PaginationData } from './models';

export class CustomGrid {
  //#region : Properties
  panelMap = [];
  paginationData = new PaginationData();
  filterData: any = {};
  searchData = {
    q: '',
  };
  //#endregion

  //#region : Constructor
  constructor() { }
  //#endregion

  //#region : Request

  getFirstPage() {
    this.paginationData.pageNumber = 1;
    if (this['getItems']) {
      this['getItems']();
    }
  }

  getParams() {
    this.paginationData.loading = true;
    const params: any = {
      pageSize:  this.paginationData.pageSize,
      page: this.paginationData.pageNumber,
    };

    if (this.searchData.q) {
      params.q = this.searchData.q;
    }

    for (const key in this.filterData) {
      if (this.filterData.hasOwnProperty(key)) {
        params[key] = this.filterData[key];
      }
    }

    return params;
  }

  setAfterResponse(resp) {
    this.paginationData.totalCount = Math.ceil(
      resp.total / this.paginationData.pageSize
    );
    this.paginationData.loading = false;

  }

  hendleError(err) {
    if (err.status === 404) {
      this.paginationData.pageNumber = 1;
      location.reload();
    }
    this.paginationData.loading = false;
  }

}
