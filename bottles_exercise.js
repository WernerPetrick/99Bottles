const lyricsContainer = document.getElementById('lyrics');
let lyricsDisplay = '';

function multiVerse() {
  const startVerse = 47
  const endVerse = 18
  return { startVerse, endVerse }
}

function wholeSong() {
  const startVerse = 99
  const endVerse = 0
  return { startVerse, endVerse }
}

function oneVerse() {
  const startVerse = 77
  const endVerse = startVerse
  return { startVerse, endVerse }
}

function song(startVerse, endVerse) {
  for (let verse = startVerse; verse >= endVerse; verse--) {
    let wordForm = startVerse === 1 ? 'bottle' : 'bottles';
    let upcomingWordForm = (verse - 1) === 1 ? 'bottle' : 'bottles'
    if (verse != 0) {
      lyricsDisplay +=(`${verse} ${wordForm} of beer on the wall`);
      lyricsDisplay +=(`${verse} ${wordForm} of beer.`);
      lyricsDisplay +=(`Take one down and pass it around,`);
      lyricsDisplay += (`${verse - 1} ${upcomingWordForm} of beer on the wall.`);
      lyricsDisplay += (`<br>`);
    }
    else {
      lyricsDisplay += (`No more bottles of beer on the wall,
        no more bottles of beer.
        Go to the store and buy some more,
        99 bottles of beer on the wall...`)
      }
  }
}

lyricsContainer.innerHTML = lyricsDisplay;

const { startVerse, endVerse } = wholeSong();
// const { startVerse, endVerse } = oneVerse();
// const { startVerse, endVerse } = multiVerse();

song(startVerse, endVerse);



