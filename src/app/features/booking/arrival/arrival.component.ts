import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { BookingService } from '../booking.service';
import { Booking } from '../entity/booking';

@Component({
  selector: 'ngx-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.scss'],
})
export class ArrivalComponent implements OnInit {
  model;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      reservationNumber: {
        title: 'Reservation No',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      arrivalDate: {
        title: 'Arriving on',
        type: 'Date',
      },
      nights: {
        title: 'Nights',
        type: 'number',
      },
      numberOfRooms: {
        title: 'Number of Rooms',
        type: 'number',
      },
      roomType: {
        title: 'Room Type',
        type: 'number',
      },
      totalPrice: {
        title: 'Total Price',
        type: 'number',
      },
      depositAmount: {
        title: 'Deposit',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'number',
      },
      commission: {
        title: 'commission',
        type: 'number',
      },
    },
  };

  arrivingTodaySource: LocalDataSource = new LocalDataSource();
  arrivingTomorrowSource: LocalDataSource = new LocalDataSource();

  constructor(private service: BookingService) {

  }

  ngOnInit() {
    const arrivingToday: Booking[] = this.service.getArrivingToday();

    this.arrivingTodaySource.load(arrivingToday);

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
