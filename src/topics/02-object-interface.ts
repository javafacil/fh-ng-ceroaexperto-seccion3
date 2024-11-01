const skills: string[] = ['Hola', 'abc', 'third'];

interface CharacterCustom {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // Acá no es necesario definir la variable
}

interface CharacterCustomB {
  name: string;
  hp: number;
  skills: string[];
  hometown: string | undefined; // Acá SI es necesario definir la variable
}

const striderA: CharacterCustom = {
  name: 'Strider',
  hp: 100,
  skills: skills
}

const striderB: CharacterCustomB = {
  name: 'Strider',
  hp: 100,
  skills: skills,
  hometown: undefined
}

console.log(striderA);
console.log(striderB);

export {};