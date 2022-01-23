// Storing the id's from html to js within a variable.
var container = document.querySelector('.list');
var inputValue = document.querySelector('.input');
var add = document.querySelector('.submit');



// ------------------------------------------------------------------------
// Defining the elements
class item{
	constructor(name){
		this.createItem(name);
	}

    // This will create the item
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    // This will take the nput from the user
    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    // Item for editing the user data input
    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "Edit";
    	edit.addEventListener('click', () => this.edit(input, name));

    // Item for removing / deleting user data input
    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "Delete";
    	remove.addEventListener('click', () => this.remove(itemBox, name));
    	container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
    }


// Function for editing the user input
edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

// Function for deleting/ removing user input
remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

// Checking the user input if it contains null value or blank value
add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}
// Condition to add the inputs in a list form
for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

// -------------------------------------------------------------------------