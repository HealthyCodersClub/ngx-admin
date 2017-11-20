import { Injectable } from '@angular/core';
import { Booking } from './entity/booking';

@Injectable()
export class BookingService {

  constructor() { }

  data: Booking[] = [
    {
      id: 1,
      reservationNumber: 'R123dsfs',
      name: 'Mahesh Kedari',
      arrivalDate: new Date('10/10/2017'),
      nights: 3,
      numberOfRooms: 1,
      roomType: 2,
      persons: {
        adults: 2,
        child: 1,
      },
      totalPrice: 20.78,
      depositAmount: 10.78,
      status: 0,
      commission: 2,
    }, {
      id: 2,
      reservationNumber: 'R123dsfs',
      name: 'Mahesh Kedari',
      arrivalDate: new Date('10/10/2017'),
      nights: 3,
      numberOfRooms: 1,
      roomType: 2,
      persons: {
        adults: 2,
        child: 1,
      },
      totalPrice: 20.78,
      depositAmount: 10.78,
      status: 0,
      commission: 2,
    }, {
      id: 3,
      reservationNumber: 'R123dsfs',
      name: 'Mahesh Kedari',
      arrivalDate: new Date('10/10/2017'),
      nights: 3,
      numberOfRooms: 1,
      roomType: 2,
      persons: {
        adults: 2,
        child: 1,
      },
      totalPrice: 20.78,
      depositAmount: 10.78,
      status: 0,
      commission: 2,
    }, {
      id: 4,
      reservationNumber: 'R123dsfs',
      name: 'Mahesh Kedari',
      arrivalDate: new Date('10/10/2017'),
      nights: 3,
      numberOfRooms: 1,
      roomType: 2,
      persons: {
        adults: 2,
        child: 1,
      },
      totalPrice: 20.78,
      depositAmount: 10.78,
      status: 0,
      commission: 2,
    },
  ];
  getArrivingToday(): Booking[] {
    return this.data;
  }

  getArrivingTomorrow(): Booking[] {
    return [];
  }

  getCancelledBookings(): Booking[] {
    return [];
  }

}
