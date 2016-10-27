var initializeTiles = function(movies)
{
    var array=[],
        totalNumberOfMovies = movies.length;
    
    var i = 0;
    
    //generate all movies and put into arrayOfTiles
    for (i; i < totalNumberOfMovies; i++)
    {
        var $element = newMovieTile(movies[i]);
        array.push($element);
    }
    return array;
};