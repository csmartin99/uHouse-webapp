export interface User {
    id: string;
    userid: string;
    useremail: string;
    username: string;
    like: number;
    dislike: number;
    report: number;
    comments?: string[];
  }
  