export type Car = {
    carNumber: number;
    nameOwner: string;
    idOwner: number;
    adressOwner: string;
    emailOwner: string;
    parkingStartTime: Date;
    parkingEndTime: Date;
    isFine: number;
    
}
export function createCar(carNumber: number, nameOwner:string, idOwner:number, adressOwner: string, emailOwner: string,
    parkingStartTime: Date, parkingEndTime: Date, isFine:number): Car {
         return {carNumber, nameOwner, idOwner, adressOwner, emailOwner, parkingStartTime, parkingEndTime, isFine};
     }