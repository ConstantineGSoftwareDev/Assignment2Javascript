// constants for query selector
const customColourButton = document.querySelector(".custColor");
const randomColourButton = document.querySelector(".randColor");
const errorText = document.querySelector("#errorText");
const numberInput = document.getElementById("customNumber");
const dropDownSelector = document.getElementById("imageSelect");
const mainImage = document.getElementById("images");
const studentId  = document.getElementById("myStudentId");
//image data contains the ImageName as a key
//and alt / location as properties
const imageData = {
    "grass.jpg": {
        alt: "Grassy Pastures",
        location: "./img/grass.jpg"
    },
    "forest.jpg": {
        alt: "a beautiful forest",
        location: "./img/forest.jpg"
    },
    "sunsetTree.jpg": {
        alt: "A large tree at sunset",
        location: "./img/sunsetTree.jpg"
    },
    "mountain.jpg": {
        alt: "a beautiful rustic mountain view",
        location: "./img/mountain.jpg"
    },
    "deerAtSunset.jpg": {
        alt: "a male dear in the sunset",
        location: "./img/deerAtSunset.jpg"
    }
    // Add more images as needed
};
//this function sets the userid field dynamically
function setStudentId()
{
    studentId.textContent = "Lakehead ID: 1234197";
}
// function to change bg color from user input and add student id
function changeCustomColor() {
    var inputNumber= captureInputfromTextbox();
    setStudentId();
    if(inputNumber != "")
    {
        errorText.textContent= "";
        errorText.classList.remove("alert-warning");
        errorText.classList.remove("alert");
        console.log(inputNumber); 
        changeBackground(inputNumber);
    }
    else
    {
        errorText.textContent = "Please select a number";
        errorText.className="alert alert-warning";
    }
}
/*
This method takes the input value as a parameter
1. If user’s input is less that 0 or more than 100 – red color
2. If user's input is between 0 and 20 - green color
3. If user's input is between 20 and 40 - blue color
4. If user's input is between 40 and 60 - orange color
5. If user's input is between 60 and 80 - purple color
6. If user's input is between 80 and 100 - yellow color
*/
function changeBackground(inputNumber)
{
    if(inputNumber >=0 && inputNumber <20 )
    {
        document.body.style.backgroundColor = "green";
    }
    else if(inputNumber >=20 && inputNumber <40 )
    {
        document.body.style.backgroundColor = "blue";
    }
    else if(inputNumber >=40 && inputNumber < 60 )
    {
        document.body.style.backgroundColor = "orange";
    }
    else if(inputNumber >=60 && inputNumber <80 )
    {
        document.body.style.backgroundColor = "purple";
    }
    else if(inputNumber >=80 && inputNumber <=100 )
    {
        document.body.style.backgroundColor = "yellow";
    }
    else
    {
        document.body.style.backgroundColor = "red";
    }
}
//captures the input from the textbox mapped at the top
function captureInputfromTextbox()
{
    return numberInput.value;
}
//this function generates a random number from 0-100
function generateRandomNumber()
{
    return Math.floor(Math.random() * 101);
}
// function to change bg color from random no.
function changeRandomColor() {
    var value = generateRandomNumber();
    setStudentId();
    console.log(value);
    changeBackground(value);
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    // Get all the keys
    const keys = Object.keys(imageData);
// Iterate through keys
    keys.forEach(key => {
        var option = document.createElement("option");
        option.text = key;
        option.value = imageData[key].location;
        dropDownSelector.add(option);
    });
}

// function to change image
function changeImage() {
    const selectedImageName = dropDownSelector.selectedOptions[0].textContent ;
    console.log(selectedImageName)
    console.log(imageData[selectedImageName]);
    mainImage.alt = imageData[selectedImageName].alt;
    mainImage.src = imageData[selectedImageName].location;
    mainImage.style.height = "20%";
}
//calls the add list to populate the dropdown
addList();
// event listeners for on click event of buttons and select
customColourButton.addEventListener("click",changeCustomColor);
randomColourButton.addEventListener("click",changeRandomColor);

// event listeners for on change event of select
dropDownSelector.addEventListener("change",changeImage);