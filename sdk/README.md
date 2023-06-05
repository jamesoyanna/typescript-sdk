
### TypeScript SDK

This SDK connects to the JSON Placeholder API for fetching posts, creating and retrieving a particular post from the API
### Installation

   ### Package manager
   npm install axios

### Example

   import Typicode from "@oyanna/typescript-sdk";

const client: Typicode = new Typicode({
  apiKey: "sdfd",
});

// Get Posts
client.getPosts().then((p) => {
  console.log(p);
});

// Crearing a post 
client.createPost({
    title: "test",
    body: "test",
    userId: 1,
  })
  .then((p) => {
    console.log(`Created new post with id ${p.id}`);
  });

### Contributing

If you wish to contribute to this project, feel free to submit a pull request.
License

This project is licensed under the MIT license.
