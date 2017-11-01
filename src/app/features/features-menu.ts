import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/features/home',
    home: true,
  },
  /* {
    title: 'FEATURES',
    group: true,
  },*/
  {
    title: 'Booking',
    icon: 'nb-compose',
    link: '/features/booking',
    children: [
      {
        title: 'Arrival',
        link: '/features/booking/arrival',
      },
      {
        title: 'Cancellation',
        link: '/features/booking/cancellation',
      },
      {
        title: 'Manage Booking',
        link: '/features/booking/manage-booking',
      },
      {
        title: 'Submit Booking',
        link: '/features/booking/submit-booking',
      },
    ],
  },
  {
    title: 'Availability',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Short Term',
        link: '/features/availability/short-term',
      },
      {
        title: 'Long Term',
        link: '/features/availability/long-term',
      },
    ],
  },
  {
    title: 'Rooms Rate',
    icon: 'fa fa-bed',
    children: [
      {
        title: 'Add Room',
        link: '/features/rooms/add-room',
      }, {
        title: 'Edit Room',
        link: '/features/rooms/edit-room',
      }, {
        title: 'Manage Room Rates',
        link: '/features/rooms/manage-rates',
      }, {
        title: 'Manage Daily Rates',
        link: '/features/rooms/daily-rates',
      }, {
        title: 'Minimum Nights',
        link: '/features/rooms/min-night',
      }, {
        title: 'Maximum Nights',
        link: '/features/rooms/max-night',
      },
    ],
  }, {
    title: 'Email',
    icon: 'nb-email',
    children : [
      {
        title : 'Inbox',
        link : '/features/email/inbox',
      }, {
        title : 'Draft',
        link : '/features/email/draft',
      }, {
        title : 'Sent',
        link : '/features/email/sent',
      }, {
        title: 'Trash',
        link : '/features/email/trash',
      }, {
        title: 'Junk',
        link : '/features/email/junk',
      },
    ],
  }, {
    title: 'Revenue Management',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Manage Inventory',
        link: '/features/revenue/inventory',
      },
      {
        title: 'Yield Management',
        link: '/features/revenue/yield',
      },
    ],
  },
  {
    title: 'Property Setup',
    icon: 'nb-gear',
    children: [
      {
        title: 'Microsite Content',
        link: '/features/setup/microsite',
      },
      {
        title: 'Plot Category',
        link: '/features/setup/plot-category',
      },
      {
        title: 'Plot Location',
        link: '/features/setup/plot-location',
      },
      {
        title: 'GST Configuration',
        link: '/features/setup/tax',
      },
      {
        title: 'Settings',
        link: '/features/setup/settings',
      },
      {
        title: 'Contact Details',
        link: '/features/setup/contact',
      },
      {
        title: 'Extra',
        link: '/features/setup/extra',
      },
      {
        title: 'Coupon Management',
        link: '/features/setup/coupons',
      },
      {
        title: 'Branding',
        link: '/features/setup/branding',
      },
      {
        title: 'Translation',
        link: '/features/setup/translation',
      },
      {
        title: 'SEO',
        link: '/features/setup/seo',
      },
      {
        title: 'Channel Manager List',
        link: '/features/setup/channel-manager',
      },
    ],
  },
  {
    title: 'Reports',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Booking Analysis',
        link: '/features/reports/booking',
      },
      {
        title: 'Customer Analysis',
        link: '/features/reports/customer-analysis',
      },
      {
        title: 'Availability Analysis',
        link: '/features/reports/availability',
      },
      {
        title: 'Customer Ratings',
        link: '/features/reports/customer-ratings',
      },
      {
        title: 'Sales Analysis',
        link: '/features/reports/sales',
      },
    ],
  },
  {
    title: 'Channel Manager',
    icon: 'fa fa-globe',
    link : '/features/channel-manager',
  },
  {
    title: 'Account',
    icon: 'nb-locked',
    children: [
      {
        title: 'My Account',
        link: '/features/user/my-account',
      },
      {
        title: 'Manage Users',
        link: '/features/user/manage-users',
      },
      {
        title: 'Billing History',
        link: '/features/user/billing-history',
      },
      {
        title: 'Credit Update',
        link: '/features/user/credit-update',
      },
      {
        title: 'Membership information',
        link: '/features/user/membership',
      },
    ],
  }, {
    title: 'Sign Out',
    icon: 'ion-log-out',
    link : '/logout',
  },
];
