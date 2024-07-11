// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName = function () {
    console.log("Player Name:")
    console.log(player.name);
};

showPlayerHealth = function() {
    console.log("Player Health:");
    console.log(player.health);
};

showPlayerInfo = function () {
    showPlayerName();
    showPlayerHealth();
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */