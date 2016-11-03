function drawTrunk(height, width) {
  var trunk = '';
  for (j=1; j <=height; j++) {
    trunk = '';
    for (i=1; i <=width/2; i++) {
      trunk += ' ';
    }
    trunk += '|||';
    console.log(trunk);
  }
}

function drawXmasTree(branches) {
  var star = '';
  var trunkHeight;
  for(var n = 0; n < branches; n++) {
    star = '';
    for (var x = 0; x <= branches-n; x++) {
      star += ' ';
    }
    for (var m = 0; m <= n*2; m++) {
      star += '*';
    }
    console.log(star);
  }
  // wysokość pnia choinki dostosowuje się automatycznie, w zależności ile "wyhodowaliśmy" poziomów gałęzi :)
  if (branches <=5) {
    trunkHeight = 3;
  } else if ((branches > 5) && (branches <=10)) {
    trunkHeight = 6;
  } else 
    trunkHeight = 10;
  drawTrunk(trunkHeight, star.length);
}

drawXmasTree(10);