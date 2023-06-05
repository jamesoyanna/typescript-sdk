export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};
export type NewPost = Omit<Post, "id">;
