function addNumbers( a: number, b: number){
return a+b
}

const addNubbersArrow = (a: number, b: number):string =>{
    return  `${ a + b}`
}

function multuply(firstNumber:number, secondNumber?:number, base: number = 2){
    return firstNumber*base
}

interface Character{
    name:string;
    hp: number;
    showHp: ()=>void;
}
// const result : number = addNumbers(1,2);
// const result2: string = addNubbersArrow(1,2);
// const multiplyResult :number = multuply(1,2);
// console.log({result, result2, multiplyResult})



const healCharacter = (character: Character, amount:number) =>{
    character.hp += amount;
}

const strider: Character ={
    name: "Strider",
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
strider.showHp();
export {}