import type {
  SortType, Item, ServerOptions, FilterOption,
  HeaderItemClassNameFunction, BodyItemClassNameFunction, BodyRowClassNameFunction,
  TextDirection,
} from './types/main';
import type { ClickEventType } from './types/internal';

export interface PropsWithDefault {
  alternating?: boolean;
  buttonsPagination?: boolean;
  checkboxColumnWidth?: number | null;
  currentPage?: number;
  emptyMessage?: string;
  expandColumnWidth?: number;
  filterOptions?: null | FilterOption[];
  fixedExpand?: boolean;
  fixedHeader?: boolean;
  fixedCheckbox?: boolean;
  fixedIndex?: boolean;
  headerTextDirection?: TextDirection;
  bodyTextDirection?: TextDirection;
  hideFooter?: boolean;
  hideRowsPerPage?: boolean;
  hideHeader?: boolean;
  indexColumnWidth?: number;
  itemsSelected?: null | Item[];
  loading?: boolean;
  rowsPerPage?: number;
  rowsItems?: number[];
  rowsPerPageMessage?: string;
  searchField?: string | string[],
  searchValue?: string,
  serverOptions?: null | ServerOptions,
  serverItemsLength?: number,
  showIndex?: boolean,
  sortBy?: string|string[],
  sortType?: SortType|SortType[],
  multiSort?: boolean,
  tableMinHeight?: number,
  tableHeight?: number|null,
  themeColor?: string,
  tableClassName?: string,
  headerClassName?: string,
  headerItemClassName?: HeaderItemClassNameFunction | string,
  bodyRowClassName?: BodyRowClassNameFunction | string,
  bodyExpandRowClassName?: BodyRowClassNameFunction | string,
  bodyItemClassName?: BodyItemClassNameFunction | string
  noHover?: boolean,
  borderCell?: boolean,
  mustSort?: boolean,
  rowsOfPageSeparatorMessage?: string,
  clickEventType?: ClickEventType,
  clickRowToExpand?: boolean,
  tableNodeId?: string,
  showIndexSymbol?: string,
  preventContextMenuRow?: boolean
}
