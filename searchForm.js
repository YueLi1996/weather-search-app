var streetDOM = document.getElementById("street")
var cityDOM = document.getElementById("city")
var stateDOM = document.getElementById("state")
var searchbtnDOM = document.getElementById("searchbtn")

// Enable submit button when info is filled
streetDOM.addEventListener('change', () => {
    if (streetDOM.value === "" || cityDOM.value === "" || stateDOM.value === "default") {
        searchbtnDOM.disabled = true
    }
    else {
        searchbtnDOM.disabled = false
    }
})

cityDOM.addEventListener('change', () => {
    if (streetDOM.value === "" || cityDOM.value === "" || stateDOM.value === "default") {
        searchbtnDOM.disabled = true
    }
    else {
        searchbtnDOM.disabled = false
    }
})

stateDOM.addEventListener('change', () => {
    if (streetDOM.value === "" || cityDOM.value === "" || stateDOM.value === "default") {
        searchbtnDOM.disabled = true
    }
    else {
        searchbtnDOM.disabled = false
    }
})

// handle checkbox of current location
var checkbox = document.querySelectorAll('input[type="checkbox"]')[0];
checkbox.addEventListener("click", () => {
    if(checkbox.checked) {
        if(streetDOM.value != "" || cityDOM.value != "") {
            streetDOM.value = ""
            cityDOM.value = ""
        }
        streetDOM.disabled = "true"
        cityDOM.disabled = "true"
        stateDOM.value = "default"
        stateDOM.disabled = "true"
    }
    else {
        streetDOM.disabled = ""
        cityDOM.disabled = ""
        stateDOM.disabled = ""
    }
})

// handle clear button
var clearButton = document.getElementById('clearbtn')
clearButton.addEventListener("click", () => {
    streetDOM.value = ""
    cityDOM.value = ""
    stateDOM.value = "default"
})


