function handleUpdate(){
	// dataset will put all elements in HTML with prefix 'data-' and put it into an object. In this case, we've created 'data-sizing' in some of the input elements so we can append the suffix 'px'
	const suffix = this.dataset.sizing || ''; // will return 'px' or empty string
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => {
	input.addEventListener('change', handleUpdate, false);
});

inputs.forEach(input => {
	input.addEventListener('mousemove', handleUpdate, false);
});