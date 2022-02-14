const container = document.querySelector(".container");

const url = "https://api.themoviedb.org/3/movie/550?api_key=595fc99816e61ee831a329518c68b00c"

fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.title);
        console.log(data.overview);
        let year = new Date(data.release_date).getFullYear();
        console.log(year);
        let imagePath = data.poster_path;
        let imageUr1 = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+imagePath
        console.log(imageUr1);

        let movieTitle = document.createElement("h1");
        movieTitle.textContent = data.title + " " +year;
        container.appendChild(movieTitle);

        let overview = document.createElement("p");
        overview.textContent = data.overview ;
        container.appendChild(overview);

        let moviePoster = document.createElement("img");
        moviePoster.src = imageUr1;
        container.appendChild(moviePoster);

        });
