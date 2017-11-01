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
    link: '/pages/ui-features',
    children: [
      {
        title: 'Arraival',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Cancellation',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Manage Booking',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Submit Booking',
        link: '/pages/ui-features/modals',
      }
    ],
  },
  {
    title: 'Availability',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Short Term',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Long Term',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Rooms Rate',
    icon: 'fa fa-bed',
    children: [
      {
        title: 'Add Room',
        link: '/pages/components/tree',
      }, {
        title: 'Edit Room',
        link: '/pages/components/notifications',
      }, {
        title: 'Manage Room Rates',
        link: '/pages/components/notifications',
      }, {
        title: 'Manage Daily Rates',
        link: '/pages/components/notifications',
      }, {
        title: 'Minimum Nights',
        link: '/pages/components/notifications',
      }, {
        title: 'Maximum Nights',
        link: '/pages/components/notifications',
      },
    ],
  },{
    title: 'Email',
    icon: 'nb-email',
    children : [
      {
        title : 'Inbox',
        link : '/features/email/inbox'
      }, {
        title : 'Draft',
        link : '/features/email/draft'
      }, {
        title : 'Sent',
        link : '/features/email/sent'
      }, {
        title: 'Trash',
        link : '/features/email/trash'
      }, {
        title: 'Junk',
        link : '/features/email/junk'
      }
    ]
  },{
    title: 'Revenue Management',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Manage Inventory',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Yield Management',
        link: '/pages/maps/leaflet',
      }
    ],
  },
  {
    title: 'Property Setup',
    icon: 'nb-gear',
    children: [
      {
        title: 'Microsite Content',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Plot Category',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Plot Location',
        link: '/pages/charts/d3',
      },
      {
        title: 'GST Configuration',
        link: '/pages/charts/d3',
      },
      {
        title: 'Settings',
        link: '/pages/charts/d3',
      },
      {
        title: 'Contact Details',
        link: '/pages/charts/d3',
      },
      {
        title: 'Extra',
        link: '/pages/charts/d3',
      },
      {
        title: 'Coupon Management',
        link: '/pages/charts/d3',
      },
      {
        title: 'Branding',
        link: '/pages/charts/d3',
      },
      {
        title: 'Translation',
        link: '/pages/charts/d3',
      },
      {
        title: 'SEO',
        link: '/pages/charts/d3',
      },
      {
        title: 'Channel Manager List',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Reports',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Booking Analysis',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'Customer Analysis',
        link: '/pages/editors/ckeditor',
      },
      {
        title: 'Availability Analysis',
        link: '/pages/editors/ckeditor',
      },
      {
        title: 'Customer Ratings',
        link: '/pages/editors/ckeditor',
      },
      {
        title: 'Sales Analysis',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Channel Manager',
    icon: 'fa fa-globe'
  },
  {
    title: 'Account',
    icon: 'nb-locked',
    children: [
      {
        title: 'My Account',
        link: '/auth/login',
      },
      {
        title: 'Manage Users',
        link: '/auth/register',
      },
      {
        title: 'Billing History',
        link: '/auth/request-password',
      },
      {
        title: 'Credit Update',
        link: '/auth/reset-password',
      },
      {
        title: 'Membership information',
        link: '/auth/reset-password',
      },
    ],
  }, {
    title: 'Sign Out',
    icon: 'ion-log-out'
  },
];
