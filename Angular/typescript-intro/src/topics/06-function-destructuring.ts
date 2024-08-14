export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150

}
const tablet: Product = {
    description: "ipad Air",
    price: 250

}


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


// function taxCalculation(options: TaxCalculationOptions): [number, number] {
export function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
    
    let total =0;
    
    products.forEach(({price}) => {
        total += price;      
    })

    return [total, total*tax]
}

const shoppingCard = [phone,tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCard,
    tax: tax,
})

console.log('Total :>> ', total);
console.log('Tax :>> ', totalTax);



