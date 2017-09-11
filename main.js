alert('Let\'s play rock, paper, scissors!\nBest 2 out of 3.');
var playAgain = true;
while (playAgain) {
	var option = parseFloat(prompt('Select your game option.\nSingle Play - Enter 1\nTwo Player - Enter 2'));
	var winsP1 = 0;
	var winsP2 = 0;
	if (option === 1) {
		for (var i = 0; i < 3; i++) {
		game1();
		}
		if (winsP1 > winsP2)
		{
			p1WinFinal();
		} else if (winsP1 < winsP2) {
			p2WinFinal();
		} else {
			tieFinal();
		}
	} else if (option === 2) {
		for (var i = 0; i < 3; i++) {
		game2();
		}
		if (winsP1 > winsP2)
		{
			p1WinFinal();
		} else if (winsP1 < winsP2){
			p2WinFinal();
		} else {
			tieFinal();
		}
	} else {
		alert('Error.\nPlease select a valid game option.\nPlease refresh the page and try again.')
	}
	var repeat = prompt('Play again?\n(Enter y/n)').toLowerCase();
	if (repeat === 'n') {
		playAgain = false;
	}
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

function tie() {
	alert('It\'s a tie!');
}

function cheat() {
	alert('Error! \nPlayers need to select a valid option.\nPlease refresh the page and try again.');
}

function p1WinFinal () {
	alert('Final Score:\nPlayer 1: ' + winsP1 + ' wins. \nPlayer 2: ' + winsP2 + 'wins. \nPlayer 1 wins!');
}

function p2WinFinal () {
	alert('Final Score:\nPlayer 1: ' + winsP1 + ' wins. \nPlayer 2: ' + winsP2 + 'wins. \nPlayer 2 wins!');
}

function tieFinal () {
	alert('Final Score:\nPlayer 1: ' + winsP1 + ' wins. \nPlayer 2: ' + winsP2 + 'wins. \nIt\s a tie!');
}

function game1 () {
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
		tie();
	} else if (player1 === 'r') {
		if (player2 === 'p') {
			pcOut();
			p2Win();
			winsP2 ++;
		} else {
			pcOut();
			p1Win();
			winsP1 ++;
		}
	} else if (player1 === 'p') {
		if (player2 === 'r') {
			pcOut();
			p1Win();
			winsP1 ++;
		} else {
			pcOut();
			p2Win();
			winsP2 ++;
		}
	} else if (player1 === 's') {
		if (player2 === 'r') {
			pcOut();
			p2Win();
			winsP2 ++;
		} else {
			pcOut();
			p1Win();
			winsP1 ++;
		}
	} else {
		cheat();
	}

	function pcOut() {
	alert('Player 2 (the computer) selected ' + player2 + '.');
	}
}

function game2 () {
	alert('You have selected Two Player!');
	var player1 = choiceSelect(1);
	var player2 = choiceSelect(2);
	if (player1 === player2) {
		tie();
	} else if (player1 === 'r') {
		if (player2 === 'p') {
			p2Win();
			winsP2 ++;
		} else if (player2 === 's') {
			p1Win();
			winsP1 ++;
		} else {
			cheat();
		}
	} else if (player1 === 'p') {
		if (player2 === 'r') {
			p1Win();
			winsP1 ++;
		} else if (player2 === 's') {
			p2Win();
			winsP2 ++;
		} else {
			cheat();
		}
	} else if (player1 === 's') {
		if (player2 === 'r') {
			p2Win();
			winsP2 ++;
		} else if (player2 === 'p') {
			p1Win();
			winsP1 ++;
		} else {
			cheat();
		}
	} else {
		cheat();
	}
}