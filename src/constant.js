
export const cars = {
    color : 'red',
    seat : 4
}

export const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  export function myVehicle1({type, color, brand, model, party}) {
        console.log(type);
        console.log(color);
        console.log(brand);
        console.log(model);
        console.log(party);
  }

  export function myVehicle2(obj) {
    console.log(obj);
}

// export const color = 'red';
// export const seat = 4;


// export default typers = 4;
// export default mirrors = 4;