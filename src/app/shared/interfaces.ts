export interface IUser {
    id:number;
    avatar: string;
    name: string;
    email: string;
    learnings: ILearning[];
}
export interface ILearning {
    id: number,
    name: string;
    status: number
}

