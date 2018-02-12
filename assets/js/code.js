$( document ).ready(function() {
    $("body").on("click",".menu",function(e){
        e.preventDefault();
        var id = $(this).data("id");
        $('.menu .active_h').remove().promise().done(function () {
            $('[data-id='+id+']').append(' <div class="active_h transform"><div class="circle transformx"></div></div>');
        });
    });

    $("body").on("click",".href",function(e){
        e.preventDefault();
        var id = $(this).data("id");
        $('a.href li').removeClass('active_li').promise().done(function () {
            $('a.href[data-id='+id+'] li').addClass('active_li');
        });
        if( id == 1 ) {
            $('.active_nav').css({height: '1.7em'});
        } else if( id == 2 ) {
            $('.active_nav').css({height: '4.2em'});
        } else if( id == 3 ) {
            $('.active_nav').css({height: '6.6em'});
        } else if( id == 4 ) {
             $('.active_nav').css({height: '9.1em'});
        } else if( id == 5 ) {
            $('.active_nav').css({height: '11.5em'});
        } else if( id == 6 ) {
            $('.active_nav').css({height: '14em'});
        } else if( id == 7 ) {
            $('.active_nav').css({height: '16.5em'});
        }

    });
    $("body").on("click","path",function(e){
      var id = $(this).attr('id');
      alert(id)
    });

});


