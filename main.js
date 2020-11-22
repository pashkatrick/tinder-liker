var disabled = false;
var r = confirm('Start the Autolike on this page?');
var min_time_to_decide = 300;
var max_additional_time_to_decide = 1000;

var time_to_decide = function() {
  additional_time_to_decide = Math.floor(Math.random() * max_additional_time_to_decide);
  return min_time_to_decide + additional_time_to_decide; 
}

var like_that_ass = function() {
  if (!disabled) {

    if (r == true) {
      document.querySelector('[aria-label="Лайк"]').click();
      console.log('❤️ like');
    };
    
    setTimeout(like_that_ass, time_to_decide());
  };
}

setTimeout(like_that_ass, time_to_decide());
