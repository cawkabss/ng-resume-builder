export class Message {
    name: string;
    email: string;
    subject: string;
    message: string;
    date = this.formatDateToyyyymmdd(new Date());
    showed = false;
    constructor(msg) {
        this.name = msg.name;
        this.email = msg.email;
        this.subject = msg.subject;
        this.message = msg.message;
    }
    formatDateToyyyymmdd(date) {
        const mm = date.getMonth() + 1; // getMonth() is zero-based
        const dd = date.getDate();

        return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
}