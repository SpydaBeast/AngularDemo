export interface To {
    email: string;
    name: string;
}

export interface Personalization {
    to: To[];
    subject: string;
}

export interface From {
    email: string;
    name: string;
}

export interface ReplyTo {
    email: string;
    name: string;
}

export interface Content {
    type: string;
    value: string;
}

export interface IEmail {
    personalizations: Personalization[];
    from: From;
    reply_to: ReplyTo;
    content: Content[];
}
