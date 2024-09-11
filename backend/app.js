import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

// Use express
const app = express();
// Use body-parser to parse JSON bodies
app.use(bodyParser.json());
// Allow CORS
app.use(cors());
// Serve static files from the public directory
app.use(express.static("public"));

//////////// Route for CRUD operations ////////////

// Route to Get all products
app.get("/shoes", async (req, res) => {
  // Get the max and search query parameters
  const { max, search } = req.query;
  // Read the file content
  const shoesFileContent = await fs.readFile("./data/shoes.json");
  // Parse the JSON content
  let shoes = JSON.parse(shoesFileContent);

  // Searching logic
  if (search) {
    shoes = shoes.filter((shoe) => {
      const searchableText = `${shoe.name} ${shoe.price} ${shoe.category}`;
      return searchableText.toLowerCase().includes(search.toLowerCase());
    });
  }

  // Limit the number of results
  if (max) {
    shoes = shoes.slice(shoes.length - max, shoes.length);
  }

  // Return the response as
  res.json({ shoes });
});

// Route to Get product by id
app.get("/shoes/:id", async (req, res) => {
  // Get the id parameter
  const { id } = req.params;

  // Read the file content
  const shoesFileContent = await fs.readFile("./data/shoes.json");
  // Parse the JSON content
  let shoes = JSON.parse(shoesFileContent);

  // Find the product by id
  const shoe = shoes.find((shoe) => shoe.id === id);

  if (!shoe) {
    return res
      .status(404)
      .json({ message: `For the id ${id}, no event could be found.` });
  }

  // Return the respons
  res.json({ shoe });
});

// Route to Create a new product - CREATE
app.post("/shoes", async (req, res) => {
  const { shoe } = req.body;

  if (!shoe) {
    return res
      .status(400)
      .json({ message: "No product found in request body" });
  }

  // Validate the product when creating a new product
  if (
    !shoe.name?.trim() ||
    !shoe.price?.trim() ||
    !shoe.category?.trim() ||
    !shoe.image?.trim()
  ) {
    return res
      .status(400)
      .json({ message: "Product name, price and image are required" });
  }

  // Read the file content
  const shoesFileContent = await fs.readFile("./data/shoes.json");
  // Parse the JSON content
  const shoes = JSON.parse(shoesFileContent);

  // Create a new product
  const newShoe = {
    id: "sku" + String(shoes.length + 1), // Generate the id
    ...shoe,
  };
  // Add the new product to the array
  shoes.push(newShoe);

  await fs.writeFile("./data/shoes.json", JSON.stringify(shoes));
  res.json({ shoe: newShoe });
});

// Route to Update a product - CHANGE
app.put("/shoes/:id", async (req, res) => {
  const { id } = req.params;
  const { shoe } = req.body;

  if (!shoe) {
    return res
      .status(400)
      .json({ message: "No product found in request body" });
  }

  //
  if (
    !shoe.name?.trim() ||
    !shoe.price?.trim() ||
    !shoe.category?.trim() ||
    !shoe.image?.trim()
  ) {
    return res
      .status(400)
      .json({ message: "Product name, price and image are required" });
  }

  // Read the file content
  const shoesFileContent = await fs.readFile("./data/shoes.json");
  // Parse the JSON content
  const shoes = JSON.parse(shoesFileContent);

  // Find the product by id
  const shoeIndex = shoes.findIndex((shoe) => shoe.id === id);

  if (shoeIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Upadte the product
  shoes[shoeIndex] = {
    id,
    ...shoe,
  };

  // Write the updated products array to the file
  await fs.writeFile("./data/shoes.json", JSON.stringify(shoes));

  res.json({ shoe: shoes[shoeIndex] });
});

// Route to Delete a product - DELETE
app.delete("/shoes/:id", async (req, res) => {
  // Get the id parameter
  const { id } = req.params;

  // Read the file content
  const shoesFileContent = await fs.readFile("./data/shoes.json");
  const shoes = JSON.parse(shoesFileContent);

  const shoeIndex = shoes.findIndex((shoe) => shoe.id === id);

  if (shoeIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Delete the product
  shoes.splice(shoeIndex, 1);

  // Write the updated products array to the file
  await fs.writeFile("./data/shoes.json", JSON.stringify(shoes));

  res.json({ message: "Product deleted" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});