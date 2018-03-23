var a1 = prompt('Enter "A1" value'),
	 h1 = prompt('Enter "H1" value'),
	 a2 = prompt('Enter "A2" value'),
	 h2 = prompt('Enter "H2" value'),
	 a3 = prompt('Enter "A3" value'),
	 h3 = prompt('Enter "H3" value');

function getTriangleArea(a, h) {
	if ( (a <= 0) || (h <= 0) ) {
		alert('Nieprawidłowe dane A1 lub H1');
		console.log('Nieprawidłowe dane A1 lub H1. Nie można obliczyć pola trójkąta nr 1');
	} else {
		return a * h / 2;
	}
}

var triangle1Area = getTriangleArea(a1, h1),
	 triangle2Area = getTriangleArea(a2, h2),
	 triangle3Area = getTriangleArea(a3, h3);

console.log('Pole trójkąta nr 1 wynosi ' + triangle1Area);
console.log('Pole trójkąta nr 2 wynosi ' + triangle2Area);
console.log('Pole trójkąta nr 3 wynosi ' + triangle3Area);