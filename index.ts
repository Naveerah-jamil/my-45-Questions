function car_details (manufacture: string , modelName: string, ...additionalinfo)
 {
    const car = {manufacture, modelName, ...Object.fromEntries
        (additionalinfo)};
        return car;
};

let myCarDetails = car_details("Toyota", "Corola", ['color', 'blue'],
    ['year', '2024']
);

console.log(myCarDetails);