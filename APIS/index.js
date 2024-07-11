console.log("Apis");

const API_LINK = "https://restcountries.com/v3.1/all";

/**
 * GET
 * POST
 * DELETE
 * PUT
 * PATCH
 */

function getCountries() {
  //call the api
  fetch(API_LINK, { method: "GET" })
    .then(async (response) => {
      //any logic we what to do with the server reponse
      //all API responses are objects
      const data = await response.json();
      console.log(data);
    })
    .catch((error) => {
      //handle the errors
      console.log("An error occured");
    });
}

getCountries();
