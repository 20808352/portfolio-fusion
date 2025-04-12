const apiKey = "d439d481"; 
const movieTitle = "Interstellar";
const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
  movieTitle
)}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const dataDiv = document.getElementById("data");

    if (data.Response === "True") {
      dataDiv.innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <img src="${data.Poster}" alt="Movie Poster">
          `;
    } else {
      dataDiv.innerHTML = `<p>Movie not found: ${data.Error}</p>`;
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("data").innerHTML =
      "<p>There was an error fetching the movie data.</p>";
  });
