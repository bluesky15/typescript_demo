const runIndexCode = () => {
    //array
    const array2: Array<number> = [7, 6, 5, 4, 3, 2]
    console.log(array2);

    const array: number[] = [1, 2, 3, 4, 5, 6]
    console.log(array);
    console.log("using map method to add +2 to the each element in an array");
    console.log(array.map(e => e + 2));

    //for loop
    console.log("Looping using traditional for loop");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);

    }
    //forEach
    console.log("Looping using forEach method");
    array.forEach(e => console.log(e));
    const inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'cherries', quantity: 5 }
    ];
    function findCherries(fruit: { name: string, quantity: number }) {
        return fruit.name === 'cherries';
    }
    console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
    /* OR */
    console.log(inventory.find(e => e.name === 'apples'));  // { name: 'apples', quantity: 2 } 

}

export default runIndexCode