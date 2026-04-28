export interface Route {
  from: string;
  to: string;
  direction: string;
  notes: string;
}

export const routes: Route[] = [
  {
    from: '1',
    to: '2',
    direction: 'Uptown',
    notes: 'Direct express service available during peak hours.',
  },
  {
    from: '2',
    to: '3',
    direction: 'Downtown',
    notes: 'Local stops at all stations.',
  },
  {
    from: '4',
    to: '5',
    direction: 'Uptown',
    notes: 'Express service to Manhattan.',
  },
  {
    from: 'L',
    to: 'A',
    direction: 'Eastbound',
    notes: 'Transfer at 8th Ave for A train.',
  },
  {
    from: 'L',
    to: 'R',
    direction: 'Downtown',
    notes: 'get in on the 4rd car for the best transfer to R train.',
  },
  {
    from: 'L',
    to: 'R',
    direction: 'Uptown',
    notes: 'get in on the 5th car for the best transfer to R train.',
  },
  // Add more routes as needed
];
