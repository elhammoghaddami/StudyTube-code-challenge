export interface CustomGridStructure {
  items: Array<any>;
  getItems(callback?);
}

export class PaginationData {
  pageNumber = 1;
  prevPage = 1;
  pageSize = 10;
  totalCount = 0;
  loading = false;
}

export class SearchData {
  q = '';
}

export class FilterItem {
  id: any = 0;
  title = '';
}
