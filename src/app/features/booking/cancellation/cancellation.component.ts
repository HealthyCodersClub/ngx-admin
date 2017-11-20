import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { BookingService } from '../booking.service';
import { Booking } from '../entity/booking';

@Component({
  selector: 'ngx-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.scss'],
})
export class CancellationComponent implements OnInit {

  cancelledBookingsSource: LocalDataSource = new LocalDataSource();

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
        editable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      arrivalDate: {
        title: 'Cancellation Date/Time',
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
        title: 'Room Type(Beds)',
        type: 'number',
      },
      totalPrice: {
        title: 'Total Price',
        type: 'number',
      },
      receivedAmount: {
        title: 'Received',
        type: 'number',
      },
      returnedAmount: {
        title: 'Returned',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'number',
      },
    },
  };

  constructor(private service: BookingService) { }

  ngOnInit() {
    const cancelledBookings: Booking[] = this.service.getCancelledBookings();
    this.cancelledBookingsSource.load(cancelledBookings);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
