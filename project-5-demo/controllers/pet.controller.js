const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const DB_PATH = "./api/pet.json"

/* 
endpoint: localhost:4000/pet/all
request type: GET
description: returns all pet posts
message: "All Pet Posts"
*/
router.get("/all", (req, res) => {
    let petArray = read();
    res.json({ message: "All Pet Posts", pet: petArray });
})



/* 
endpoint: localhost:4000/pet/:id
request type: GET
description: returns a single pet post by id
message: "Pet Post found" or "Pet Post not found"
*/
router.get("/:id", (req, res) => {
    const { id } = req.params;
    let petArray = read();
    const petPost = petArray.find(pet => pet.id === id);

    if (petPost) {
        res.json({ message: "Pet Post found", pet: petPost });
    } else {
        res.status(404).json({ message: "Pet Post not found" });
    }
})



/* 
endpoint: localhost:4000/pet/add
request type: POST
description: creates a new entry in pet DB
message: "Pet Post added successfully"
*/
router.post("/add", (req, res) => {
    const { name, description, type } = req.body;
    let petArray = read();
    let newPetPost = {
        id: uuidv4(),
        name: name,
        description: description,
        type: type
    };

    petArray.push(newPetPost);
    save(petArray)
    res.json({
        message: "Pet Post added successfully",
        pet: petArray,
        recordCount: petArray.length,
    })
})



/* 
endpoint: localhost:4000/pet/delete/:id
RequestType: DELETE
description: This will remove one Pet Post from the array list
message: post deleted
*/
router.delete("/delete/:id", (req, res) => {
    try {
        console.log(req.params.id);

        let petArray = read();

        let filteredPetArray = petArray.filter(
            (petObject) => petObject.id !== req.params.id
        );

        if (petArray.length === filteredPetArray.length) {
            throw new Error("Pet Post not found");
        }

        res.json({
            message: "post deleted",
            pet: filteredPetArray,
            recordCount: filteredPetArray.length,
        })

        save(filteredPetArray);
    } catch (error) {
        res.status(500).json({ message: "error", errorMessage: error.message})
    }
})



router.patch("/update/:id", async function (req, res) {
    try {
        const post_id = req.params.id;

        let petArray = read();

        let petIndex = petArray.findIndex((petObject) => petObject.id === post_id);

        if (petIndex === -1) {
            throw new Error("Pet Post not found");
        }

        let newObject = req.body;
        let originalObject = petArray[petIndex];

        // Merge the existing pet object with the new data from req.body
        petArray[petIndex] = { ...originalObject, ...newObject };

        // Log the updated array to verify changes before saving
        console.log("Updated pet array:", petArray);

        // Save the updated array back to the file
        save(petArray);

        // Verify the file content after saving
        const verifyArray = read();

        res.json({
            message: "Pet Post updated successfully",
            pet: petArray[petIndex] // Return the updated pet object
        });

    } catch (error) {
        console.error("Error updating pet post:", error);
        res.status(500).json({
            message: error.message,
        });
    }
});




//! Helper Functions
/* 
Read Function for reading a file.
*/
function read() {
    try {
        const file = fs.readFileSync(DB_PATH);
        if (file.length === 0) {
            return [];
        }
        return JSON.parse(file);
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
}

function save(data) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
        console.log("File saved successfully");
    } catch (err) {
        console.error("Error saving file:", err);
    }
}


// ! make sure to include export statement
module.exports = router;