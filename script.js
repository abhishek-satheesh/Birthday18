function dates() {
    var x = new Date("Aug 2 2000 15:30:00");
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('days').innerHTML = parseInt(day);
    document.getElementById('hours').innerHTML = parseInt(hour);
    document.getElementById('minutes').innerHTML = parseInt(minutes);
    document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });
}
const cake = document.getElementById("cake");
const sound = document.getElementById("cut-sound");

cake.addEventListener("click", () => {
  // Trigger slice animation
  cake.classList.add("slice-out");

  // Play sound
  sound.currentTime = 0;
  sound.play();

  // Reset after 2s if needed
  setTimeout(() => {
    cake.classList.remove("slice-out");
  }, 2000);
});


