// Import the necessary modules and classes
import { Base } from "./base";
import { Posts } from "./posts";
import { applyMixins } from "./utils";

// Define the Typicode class which extends Base and implements Posts
class Typicode extends Base {}
interface Typicode extends Posts {}

// Add the methods and properties of Posts class to Typicode using applyMixins
applyMixins(Typicode, [Posts]);

export default Typicode;
