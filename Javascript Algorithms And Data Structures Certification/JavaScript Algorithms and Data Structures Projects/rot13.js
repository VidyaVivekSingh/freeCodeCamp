// One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the
// letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the
// letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and
// returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  let maxAscii=90;
  let minAscii=65;
  let rotate=13;

  return str.split('').map(letter => {
    let curLetter=letter.charCodeAt();
    if ((curLetter >= minAscii) && (curLetter <= maxAscii)) {
      curLetter-=13;
      if (curLetter<65) { curLetter+=26; }
    }
    return String.fromCharCode(curLetter);}).join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("SERR CVMMN!"); // FREE PIZZA!
rot13("SERR YBIR?"); // FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
