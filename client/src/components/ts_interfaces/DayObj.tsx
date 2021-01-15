import {
    ConditionsObj,
} from './Weather';

export interface DayObj {
    list: Array<ConditionsObj>;
    date: string;
}
