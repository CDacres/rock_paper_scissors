alert('Let\'s play rock, paper, scissors!');
var option = parseFloat(prompt('Select your game option.\nSingle Play - Enter 1\nTwo Player - Enter 2'));
if (option === 1) {
	alert('You have selcected Single Player!');

} else if (option === 2) {
	alert('You have selected Two Player!');
	var player1 = choiceSelect(1);
	var player2 = choiceSelect(2);
	if (player1 === player2) {
		alert('It\'s a tie!');
	} else if (player1 === 'r') {
		if (player2 === 'p') {
			p1Win();
		} else {
			p2Win();
		}
	}

} else {
	alert('Error. \n Please select a valid game option.')
}

function choiceSelect (num) {
	var player = prompt('Player ' + num +', please select your choice: \nRock -  Enter r\nPaper - Enter p\nScissors - Enter s').toLowerCase();
	return player;
}

function p1Win () {
	alert('Player 1 wins!');
}

function p2Win () {
	alert('Player 2 wins!');
}