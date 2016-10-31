var updateVotes = function(object, votes)
{
  'use strict';
  	//find field for each movie
    var $field = $("div[id='" + object.movie.Title + "'] .ui.statistic");
    var $oldVote = $("div[id='" + object.movie.Title + "'] .value");
    var $updatetotalNumberOfMovies = '<div class="value" >' + votes + '</div></div>';

    $('<div class="value" id="' + object.movie.Title + ' " >'); //+votes +'</div>') ;
    $oldVote.remove();
    $($field).append($updatetotalNumberOfMovies);

};

var updateProgessbar = function(object, avg)
{
  	'use strict';
    var $field = $("div[id='" + object.movie.Title + "'] .extra.center.aligned.content");
    var $progressBar = $("div[id='" + object.movie.Title + "'] .ui.tiny.progress");
    var $updatedProgressBar = '<div class="ui tiny progress"  data-percent = ' + avg + '>' + '<div class="bar" style = "transition-duration : 300ms;  width : ' + avg + '%">';

    $progressBar.remove();
    $($field).append($updatedProgressBar);
};


var sendVoteToServer = function(input, index, parentNode, node)
{
  'use strict';
    $.post('/movie/title/vote', input, function(res) {
        var $temp = node.next();

        if (res.result === 'success') {
            //update votes on the movie
            Movies[index].meta.votes = res.newVotes;
            Movies[index].meta.likes = res.newLikes;
            var progressBar = (res.newLikes / res.newVotes) * 100;

            //Update rating
            $(parentNode).find('.rating').text('Likes: ' + res.newLikes + ' / totalNumberOfMovies Votes: ' + res.newVotes);

            //Update the width of progress bar
            var $temp1 = $temp.children();

            $temp1.width(progressBar + '%');

            var $temp2 = $temp1.children();
            $temp2.text(parseInt(progressBar) + '%');
            updateVotes(Movies[index], Movies[index].meta.votes);
            updateProgessbar(Movies[index], (Movies[index].meta.likes / Movies[index].meta.votes) * 100);
        }
    });
};
