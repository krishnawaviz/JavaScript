var player = document.querySelector("p");
player.addEventListener('click',updateName);
console.log()
function updateName() {
	 var name = prompt('Enter a new Name ');
	 player.textContent = 'Player 1 :'+name;
	
	
}
var player1 = document.querySelector("h1");
player1.addEventListener('click',updateName1);
function updateName1() {
	 var name1 = prompt('Enter a new in lowerCase:');
	 player1.textContent = 'Player 1 :'+name1;
	
}
