import * as lorem from 'lorem-ipsum';

export class TimeLineBox {
    title: string;
    yearStart: Number;
    yearEnd: Number;
    desc: string;
    constructor(
        title,
        yearStart = new Date().getFullYear(),
        yearEnd = new Date().getFullYear(),
        desc = lorem({ count: 10 })) {

        this.title = title ? title : 'Title';
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
        this.desc = desc;
    }
}
