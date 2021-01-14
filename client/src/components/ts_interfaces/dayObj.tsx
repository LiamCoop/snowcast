import {
    conditionsObj,
} from './weather';

export interface dayObj {
    list: Array<conditionsObj>;
    date: string;
}
