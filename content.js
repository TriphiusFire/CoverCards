$('<button type="button" class="removecoverbuttons">Remove Button</button>').insertBefore( "body" );
$('<button type="button" class="coverbutton">Cover</button>').insertBefore( "body" );


// $("script").remove();

if(!$('style').length){
  $('head').append('<style></style>');
}
//add jQuery to top of html doc
$('style').append('.cover{color:black;background-color:black;z-index:1000;position:relative;}\
                   .cover:hover{background-color:white;z-index:1000;position:relative;}\
                   .removecoverbuttons{text-align:center;z-index:1000;position:fixed;top:20%;width:10%;height:2%}\
                   .coverbutton{position:fixed;top:15%;width:10%;height:5%}');

$('.coverbutton').click(function(){
  // $('img').hide();
  $('a').contents().unwrap();
  $('i').contents().unwrap();
  $('b').contents().unwrap();
  $('sup').contents().unwrap();
  var highlight = window.getSelection();
  pn = highlight.anchorNode.parentNode;
  var spn = '<span class="cover">' + highlight + '</span>';
  var text = $(pn).html();
  $(pn).html(text.replace(highlight, spn));
});

$(document).on('click','.cover',function(){
  $(this).contents().unwrap();
});

$(document).on('click','.removecoverbuttons',function(){
  $('.removecoverbuttons').remove();
  $('.coverbutton').remove();
  // $('img').hide();
});

// $('img').hide();
