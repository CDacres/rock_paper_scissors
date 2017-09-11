alert('Let\'s play rock, paper, scissors!');
var option = parseFloat(prompt('Select your game option.\nSingle Play - Enter 1\nTwo Player - Enter 2'));
if (option === 1) {
	alert('You have selcected Single Player!\n The computer is player 2.');
	var player1 = choiceSelect(1);
	var randomNum = Math.floor(Math.random() * 3);
	if (randomNum === 0) {
		var player2 = 'r';
	} else if (randomNum === 1) {
		var player2 = 's';
	} else {
		var player2 = 'p';
	}
	if (player1 === player2) {
		pcOut();
		alert('It\'s a tie!');
	} else if (player1 === 'r') {
		if (player2 === 'p') {
			pcOut();
			p2Win();
		} else {
			pcOut();
			p1Win();
		}
	} else if (player1 === 'p') {
		if (player2 === 'r') {
			pcOut();
			p1Win();
		} else {
			pcOut();
			p2Win();
		}
	} else if (player1 === 's') {
		if (player2 === 'r') {
			pcOut();
			p2Win();
		} else {
			pcOut();
			p1Win();
		}
	} else {
		cheat();
	}

} else if (option === 2) {
	alert('You have selected Two Player!');
	var player1 = choiceSelect(1);
	var player2 = choiceSelect(2);
	if (player1 === player2) {
		alert('It\'s a tie!');
	} else if (player1 === 'r') {
		if (player2 === 'p') {
			p2Win();
		} else if (player2 === 's') {
			p1Win();
		} else {
			cheat();
		}
	} else if (player1 === 'p') {
		if (player2 === 'r') {
			p1Win();
		} else if (player2 === 's') {
			p2Win();
		} else {
			cheat();
		}
	} else if (player1 === 's') {
		if (player2 === 'r') {
			p2Win();
		} else if (player2 === 'p') {
			p1Win();
		} else {
			cheat();
		}
	} else {
		cheat();
	}
} else {
	alert('Error. \n Please select a valid game option.')
}

function choiceSelect(num) {
	var player = prompt('Player ' + num +', please select your choice: \nRock -  Enter r\nPaper - Enter p\nScissors - Enter s').toLowerCase();
	return player;
}

function p1Win() {
	alert('Player 1 wins!');
}

function p2Win() {
	alert('Player 2 wins!');
}

function pcOut() {
	alert('Player 2 (the computer) selected ' + player2 + '.');
}

function cheat() {
	alert('Error! \nPlayers need to select a valid option.');
}