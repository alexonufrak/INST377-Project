let arrayShoes = [
{id: "0012345", colour: "red", size: 9},
{id: "0512346", colour: "blue", size: 10},
{id: "0876545", colour: "whit";, size: 7},
{id: "0987920", colour: "red", size: 8},
{id: "0997346", colour: "blue", size: 7},
{id: "0998545", colour: "whit";, size: 6},
{id: "0999350", colour: "blue", size: 9},
{id: "1001200", colour: "green", size: 7}];

function filterByColor(item){
	if(item.colour ="red"){
		return true;
	}
	return false
}

let newArr = arrayShoes.filter(filterByColor);
console.log(newArr);