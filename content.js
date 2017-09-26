
$('<button type="button" class="removecoverbuttons">Remove Buttons</button>').insertBefore( "body" );
$('<button type="button" class="highlightredbutton">Highlight: Red</button>').insertBefore( "body" );
$('<button type="button" class="highlightbluebutton">Highlight: Blue</button>').insertBefore( "body" );
$('<button type="button" class="highlightgreenbutton">Highlight: Green</button>').insertBefore( "body" );
$('<button type="button" class="highlightyellowbutton">Highlight: Yellow</button>').insertBefore( "body" );
$('<button type="button" class="coverbutton">Cover</button>').insertBefore( "body" );


// $("script").remove();

if(!$('style').length){
  $('head').append('<style></style>');
}
//add jQuery to top of html doc
$('style').append('.cover{color:black;background-color:black;z-index:1000;position:relative;}\
                   .cover:hover{background-color:white;z-index:1000;position:relative;}\
                   .removecoverbuttons{text-align:center;z-index:1000;position:fixed;top:40%;width:10%;height:2%}\
                   .coverbutton{background-color:rgb(0,0,0);color:rgb(200,200,200);position:fixed;top:15%;width:10%;height:5%}\
                   .highlightyellowbutton{background-color:rgb(255,255,100);position:fixed;top:20%;width:10%;height:5%;}\
                   .highlightyellow{background-color:rgb(255,255,100)}\
                   .highlightgreenbutton{background-color:rgb(200,255,200);position:fixed;top:25%;width:10%;height:5%;}\
                   .highlightgreen{background-color:rgb(200,255,200)}\
                   .highlightbluebutton{background-color:rgb(200,200,255);position:fixed;top:30%;width:10%;height:5%;}\
                   .highlightblue{background-color:rgb(200,200,255)}\
                   .highlightredbutton{background-color:rgb(255,200,200);position:fixed;top:35%;width:10%;height:5%;}\
                   .highlightred{background-color:rgb(255,200,200)}');

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

$('.highlightyellowbutton').click(function(){
  // $('img').hide();
  $('a').contents().unwrap();
  $('i').contents().unwrap();
  $('b').contents().unwrap();
  $('sup').contents().unwrap();
  var highlight = window.getSelection();
  pn = highlight.anchorNode.parentNode;
  var spn = '<span class="highlightyellow">' + highlight + '</span>';
  var text = $(pn).html();
  $(pn).html(text.replace(highlight, spn));
});

$('.highlightgreenbutton').click(function(){
  // $('img').hide();
  $('a').contents().unwrap();
  $('i').contents().unwrap();
  $('b').contents().unwrap();
  $('sup').contents().unwrap();
  var highlight = window.getSelection();
  pn = highlight.anchorNode.parentNode;
  var spn = '<span class="highlightgreen">' + highlight + '</span>';
  var text = $(pn).html();
  $(pn).html(text.replace(highlight, spn));
});

$('.highlightredbutton').click(function(){
  // $('img').hide();
  $('a').contents().unwrap();
  $('i').contents().unwrap();
  $('b').contents().unwrap();
  $('sup').contents().unwrap();
  var highlight = window.getSelection();
  pn = highlight.anchorNode.parentNode;
  var spn = '<span class="highlightred">' + highlight + '</span>';
  var text = $(pn).html();
  $(pn).html(text.replace(highlight, spn));
});

$('.highlightbluebutton').click(function(){
  // $('img').hide();
  $('a').contents().unwrap();
  $('i').contents().unwrap();
  $('b').contents().unwrap();
  $('sup').contents().unwrap();
  var highlight = window.getSelection();
  pn = highlight.anchorNode.parentNode;
  var spn = '<span class="highlightblue">' + highlight + '</span>';
  var text = $(pn).html();
  $(pn).html(text.replace(highlight, spn));
});

$(document).on('click','.cover',function(){
  $(this).contents().unwrap();
});
$(document).on('click','.highlightyellow',function(){
  $(this).contents().unwrap();
});
$(document).on('click','.highlightgreen',function(){
  $(this).contents().unwrap();
});
$(document).on('click','.highlightblue',function(){
  $(this).contents().unwrap();
});
$(document).on('click','.highlightred',function(){
  $(this).contents().unwrap();
});

$(document).on('click','.removecoverbuttons',function(){
  $('.removecoverbuttons').remove();
  $('.coverbutton').remove();
  $('.highlightyellowbutton').remove();
  $('.highlightgreenbutton').remove();
  $('.highlightredbutton').remove();
  $('.highlightbluebutton').remove();
  // $('img').hide();
});

// $('img').hide();
