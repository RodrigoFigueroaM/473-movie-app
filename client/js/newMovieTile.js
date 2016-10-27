var newMovieTile = function(object) {
    //    $photo = Movies[i].photo;
    var item;
    var $id;
    var votes = object.meta.votes;
    var likes = object.meta.likes;
    var progress; 
    if (likes == 0 && votes == 0)
        progress = 0;
    else
        progress = parseInt(likes / votes * 100);
    $item = $('<div class="five wide column">' + 
                  '<div class="ui special cards">' +
                      '<div class="ui card"id="' + object.movie.Title + '">' +// gives movie and id depending on the movie name, used to identify votes
                          '<div class="ui center aligned segment">' + object.movie.Title + '</div>' + // title
                              '<div class="blurring dimmable image"> <img src=' + object.movie.Poster + '>'+
                                  '<div class="ui dimmer">'+
                                      '<div class="content">'+
                                         '<div class="center">' +
                                            '<div class="ui inverted massive button">More info'+
                                             '</div>'+
                                         '</div>'+
                                      '</div>'+
                                   '</div>' +
                                '</div>' +
                            '<div class="extra center aligned content">' +
                                '<div class="ui two attached buttons">' +
                                    '<button class="ui green button"><i class="chevron up icon"></i></button>' +
                                    '<div class="or"> </div>' +
                                    '<button class="ui red button"><i class="chevron down icon"></i></button>' +
                                '</div>' +
                                '<div class="ui statistic" >' +
                                    '<div class="label">' +
                                        'Votes' + 
                                    '</div>' +
                                    '<div class="value" >' +
                                        votes + 
                                    '</div>'+ 
                                '</div>' +
                            '<div class="ui tiny progress"  data-percent = ' + progress + '>' +
                                '<div class="bar" style = " width : ' + progress + '%">' +
                                '</div>' +
                            '</div>' +
                        '</div>'+
                    '</div>'+
                '</div>');
    return $item;
};