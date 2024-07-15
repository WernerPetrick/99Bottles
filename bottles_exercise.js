const lyricsContainer = document.getElementById('lyrics');
let lyricsDisplay = '';

for (let bottles = 99; bottles >= 0; bottles--) {
  let wordForm = bottles === 1 ? 'bottle' : 'bottles';
  let upcomingWordForm = (bottles - 1) === 1 ? 'bottle' : 'bottles'
  if (bottles != 0) {
    lyricsDisplay += (`<div class="p-8">${bottles} ${wordForm} of beer on the wall,<br>`);
    lyricsDisplay += (`${bottles} ${wordForm} of beer.<br>`);
    lyricsDisplay += (`Take one down and pass it around,<br>`);
    lyricsDisplay += (`${bottles - 1} ${upcomingWordForm} of beer on the wall.<br> </div>`);
    lyricsDisplay += (`<br>`);
  }
  else {
    lyricsDisplay += (`<p class="f-16 pb-15">No more bottles of beer on the wall,
      no more bottles of beer.
      Go to the store and buy some more,
      99 bottles of beer on the wall...<p>`)
    }
}

lyricsContainer.innerHTML = lyricsDisplay;

