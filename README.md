FroggerClone: a clone of the frogger game
===============================

Try to get accross the street, or get run over.

To run the app:

To use the node/express hosting, just download the entire app and do an npm install from the root directory.
Run the command: node server.js

If you just want to run the game on your computer, simply point your browser to public/index.html
It might be cleaner to pull everyting from the public directory and put it in its own directory.

Resources for game dev:

Principles of Object Oriented JavaScript - Nicholas Zakas
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://leanpub.com/javascript-allonge/
http://www.w3schools.com/js

todo:

- add game object to display proper points, keep track of levels/games/etc
- make collision detection more precise.
- make water reset happen when player is completely on the water.
- make enemies run more far apart

- add splash screen
- add require.js
- add DB to keep points