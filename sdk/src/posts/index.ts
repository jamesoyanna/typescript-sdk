import { Base } from "../base";
import { NewPost, Post } from "./types";

// Resource name for the Posts API
const resourceName = "posts";

// Class that extends the Base class and implements the Posts API
export class Posts extends Base {
  
  // Method to get a single post by its ID
  async getPostById(id: number): Promise<Post> {
    const post = await this.request<Post>(`/${resourceName}/${id}`);
    return post;
  }

  // Method to get all posts
  async getPosts(): Promise<Post[]> {
    const posts = await this.request<Post[]>(`/${resourceName}`);
    return posts;
  }

  // Method to create a new post
  async createPost(newPost: NewPost): Promise<Post> {
    const post = await this.request<Post>(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
    return post;
  }
}
