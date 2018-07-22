import {Action} from '@ngrx/store'

export const INCREMENT_NUMBER='INCREMENT_NUMBER'

export class IncrementNumberOfProductes implements Action{
   readonly type=INCREMENT_NUMBER;
   payload:number

   constructor(public payload:number) {}
   
}

export type ProductActions=IncrementNumberOfProductes;