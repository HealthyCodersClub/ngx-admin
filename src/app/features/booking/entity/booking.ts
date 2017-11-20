/**
 * Booking Reference Entity
 */

export interface Booking {
    id: number;
    reservationNumber: string;
    name: string;
    arrivalDate: Date;
    nights: number;
    numberOfRooms: number;
    roomType: number;
    persons: {
        adults: number,
        child: number,
    };
    totalPrice: number;
    depositAmount: number;
    status: number;
    commission: number;
    referenceSource?: string;
}
