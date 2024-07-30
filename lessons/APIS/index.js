/**
 * GET getting a resource(retrieving)
 * POST saving something (sending someting to the backend)
 * DELETE deleting something
 * PUT updating(some fields)
 * PATCH replacing
 */

// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

const url = "https://workout-buddy-0qcu.onrender.com/api/workouts";

async function getData() {
  try {
    const response = await fetch(url, { method: "GET" });

    const data = await response.json();
    console.log(data, "Data is fetched");
  } catch (error) {
    //hanle errors
    console.log(error, "Error");
  }
}

async function saveData(requestBody) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log("Data is saved");
    getData();
  } catch (error) {
    //hanle errors
    console.log(error, "Error");
  }
}

const exercise = {
  load: 10, //number
  title: "Test data", //string
  reps: 3, //number
};

getData();

saveData(exercise);
