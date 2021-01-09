var example = ['Designer', 'Photographer', 'Student', 'Cyclist', 'Developer'];

textSequence(0);

function textSequence(i) {

  if (example.length > i) {
    setTimeout(function() {
      document.getElementById("sequence").innerHTML = example[i];
      textSequence(++i);
    }, 2000); // 1 second (in milliseconds)

  } else if (example.length == i) { // Loop
    textSequence(0);
  }

}
