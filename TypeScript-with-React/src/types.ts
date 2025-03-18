type Info = {
    id: number;
    name: string;
    email: string;
}

type AdminInfomation = Info & {
    role: string;
    lastLogin: Date;
}

export {type Info, type AdminInfomation}