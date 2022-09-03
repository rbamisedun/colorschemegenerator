// Accessing the div to inject the color into 
let colorOne =  document.getElementById("color-1")
let colorTwo =  document.getElementById("color-2")
let colorThree = document.getElementById("color-3")
let colorFour = document.getElementById("color-4")
let colorFive = document.getElementById("color-5")

// Accessing the div to inject the hex code into
let hexOne =  document.getElementById("color-11")
let hexTwo =  document.getElementById("color-22")
let hexThree = document.getElementById("color-33")
let hexFour = document.getElementById("color-44")
let hexFive = document.getElementById("color-55")

// Array of DOM Manipulation
let colorDivArray = [colorOne, colorTwo, colorThree, colorFour, colorFive,]
let hexDivArray = [hexOne, hexTwo, hexThree, hexFour, hexFive]


// Accessing the value of your choice 
let chosenColorScheme = document.getElementById("selected-scheme")

// Accesing the value of chosen color 
let chosenColor = document.getElementById("selected-color")

// Accessing the button
let btn = document.getElementById("btn")

// Adding an event listener to the button - on click , get info from the API
btn.addEventListener("click", getColors)

// Accessing the API  
    function getColors () {
          fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor.value.substr(1,7)}&mode=${chosenColorScheme.value.toLowerCase()}&count=5`)
         .then((response)=> (response.json()))
        .then((data)=>    
          {for (let i = 0; i< data.colors.length; i++){
          colorDivArray[i].innerHTML = `<img src="${data.colors[i].image.bare}"/>`
          }
          for(let i = 0; i< data.colors.length; i++){
            hexDivArray[i].innerHTML = `<h3>${data.colors[i].hex.value}</h3>`
          }
              
      }
        
        )}
        
        
        

    
        

    