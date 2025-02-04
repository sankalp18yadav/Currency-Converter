// Purpose: To fetch the data from the API and populate the table with the data
const populate = async (value, currency) => {
    // Fetching the data from the API
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_Ey4AYWEweFkn8T8actCncG2gFuZV9lGcwmfO5xFX&base_currency=" + currency
    let response = await fetch(url)
    // Converting the response to JSON
    let rJson = await response.json()
    // Displaying the table
    document.querySelector(".output").style.display = "block"
    // Populating the table
    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    // Displaying the table
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
// Event listener for the button
const btn = document.querySelector(".btn")
// When the button is clicked, the populate function is called
btn.addEventListener("click", (e) => {
    // Preventing the default behaviour of the button
    e.preventDefault()
    // Getting the value and currency from the input fields
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    // Getting the currency from the select field
    const currency = document.querySelector("select[name='currency']").value
    // Calling the populate function
    populate(value, currency)
})
// Function to update the clock
function updateClock() {
    // Getting the current date and time
    const now = new Date();
    // Formatting the date and time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Displaying the date and time
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString();
    // Updating the clock
    document.getElementById("clock").innerHTML = `${formattedDate} | ${formattedTime}`;
  }
  // Updating the clock every second
  setInterval(updateClock, 1000);
  // Calling the updateClock function
  updateClock();