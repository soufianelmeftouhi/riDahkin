import {Action} from '@ngrx/store'

export const SEARCH='SEARCH'

export class SearchOfProductes implements Action{
   readonly type=SEARCH;

   constructor(public payload:String) {}

}

export type ProductSearch=SearchOfProductes;
