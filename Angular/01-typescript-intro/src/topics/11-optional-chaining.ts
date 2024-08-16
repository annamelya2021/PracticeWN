export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger ={
    name: 'Anna'
}
const passenger2: Passenger ={
    name: 'Fernando',
    children: ['Natalia', 'Elizabet'],
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0
    console.log(passenger.name, howManyChildren)

}

printChildren(passenger2)
printChildren(passenger1)