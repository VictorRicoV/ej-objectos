// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Suelo ${user.hobbies[0]} un libro de como ${user.hobbies[1]}, mientras paseo con mis mascotas ${user.pets[0].name} y ${user.pets[1].name}. Nosotros solemos estar en la calle ${user.address.street}. Si quieres más información sobre mí, aquí tienes una tarjeta con mi teléfono ${user.phone}, correo eletrónico ${user.email} y mi ocupación ${user.occupation}`
);

//- Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (let counter = 0; counter < data.numbers.length; counter++) {
  data.firstFloor.secondFloor.numbersPlus2.push(data.numbers[counter] + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(data.numbers[counter] * 2);
  data.fourthFloor.numbersDividedBy2.push(data.numbers[counter] / 2);
  if (data.numbers[counter] % 2 === 0) {
    data.fifthFloor.onlyEven.push(data.numbers[counter]);
  } else {
    data.fifthFloor.onlyOdd.push(data.numbers[counter]);
  }
}

console.log(data.firstFloor.secondFloor.numbersPlus2);
console.log(data.firstFloor.thirdFloor.numbersDouble);
console.log(data.fourthFloor.numbersDividedBy2);
console.log(data.fifthFloor.onlyOdd);
console.log(data.fifthFloor.onlyEven);

//- Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como  César", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    constants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};
const phrase = newPhrase => {
  for (let i = 0; i < newPhrase.length; i++) {}
};

phrase('Si no estudias acabarás como  César');
