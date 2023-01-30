// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

console.log(movies)

/*const getAllDirectors = movies.map((moviesArray) => {
    return moviesArray.director;
    
  });*/

function getAllDirectors(moviesArray){
   /* let directores = moviesArray.map((movie) => {
        return movie.director;}
        )
        console.log(directores);
      
       */

        let directores = moviesArray.map(movie =>  movie.director)
        console.log(directores)
        const directorsClearList = [... new Set(directores)];
        console.log(directorsClearList)
        return directorsClearList;
       
    }
    




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => {
       return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return spielbergMovies.length
}
console.log(howManyMovies(moviesArray))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
        var averge = [];
        for(var i = 0; i < moviesArray.length; i++)
        var sum = moviesArray[i].score.length.reduce((a, b) => b += a);
        var avg = sum/ moviesArray.score.length; {
            if(sum / moviesArray[i].score.length);
        }{
            promedio.push(moviesArray[i].score);
        }
        console.log(promedio)
        return promedio;
    }
  
 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
