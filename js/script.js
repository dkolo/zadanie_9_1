var a1 = prompt('Enter "A1" value'),
	 h1 = prompt('Enter "H1" value');

function getTriangle1Area(a1, h1) {
	if ( (a1 <= 0) || (h1 <= 0) ) {
		alert('Nieprawidłowe dane A1 lub H1');
		console.log('Nieprawidłowe dane A1 lub H1. Nie można obliczyć pola trójkąta nr 1');
	} else {
		return a1 * h1 / 2;
	}
}
console.log(getTriangle1Area(a1, h1));

var a2 = prompt('Enter "A2" value'),
	 h2 = prompt('Enter "H2" value');

function getTriangle2Area(a2, h2) {
	if ( (a2 <= 0) || (h2 <= 0) ) {
		alert('Nieprawidłowe dane A2 lub H2');
		console.log('Nieprawidłowe dane A2 lub H2. Nie można obliczyć pola trójkąta nr 2');
	} else {
		return a2 * h2 / 2;
	}
}
console.log(getTriangle2Area(a2, h2));

var a3 = prompt('Enter "A3" value'),
	 h3 = prompt('Enter "H3" value');

function getTriangle3Area(a3, h3) {
	if ( (a3 <= 0) || (h3 <= 0) ) {
		alert('Nieprawidłowe dane A3 lub H3');
		console.log('Nieprawidłowe dane A3 lub H3. Nie można obliczyć pola trójkąta nr 3');
	} else {
		return a3 * h3 / 2;
	}
}
console.log(getTriangle3Area(a3, h3));

var triangle1Area = getTriangle1Area(a1, h1);
	 triangle2Area = getTriangle2Area(a2, h2);
	 triangle3Area = getTriangle3Area(a3, h3);

console.log('Pole trójkąta nr 1 wynosi ' + triangle1Area);
console.log('Pole trójkąta nr 2 wynosi ' + triangle2Area);
console.log('Pole trójkąta nr 3 wynosi ' + triangle3Area);