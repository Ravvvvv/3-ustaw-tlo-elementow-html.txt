console.log('ustaw tlo elementow ');

const setBackground = () => {
let p1 = document.querySelector('.first')
let p2 = document.querySelector('.last')

// p1.style.backgroundColor = 'red';
// p2.style.backgroundColor = 'yellow';

p1.classList.toggle('bg-red');
p2.classList.toggle('bg-yellow');

// toggle sprawdza czy klasa jest jak nie to dodaje i na odwrot





console.log('click :)' );
}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click',setBackground);

