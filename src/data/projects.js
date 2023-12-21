const projects = [
  {
    id: 0,
    title: 'ToDo List',
    description:
      'Create a list with an input field and allow users to add and remove items from the list Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    difficulty: 1,
    optional: [
      'Allow editing list items',
      'Allow reordering items',
      'Allow users to check off completed list items without removing them',
    ],
  },
  {
    id: 1,
    title: 'Something Else',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    difficulty: 2,
    optional: ['Do a thing'],
  },
  {
    id: 2,
    title: 'Storefront',
    description:
      'Create a fake storefront, allowing users to add and remove items from a shopping cart Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    difficulty: 3,
    optional: [
      'Create a fake checkout page that allows the user to complete the purchase. Do not send any personal data to servers unless selling a real product',
      'Add a save for later option and/or a wishlist',
      'Sell a real product',
    ],
  },
];

export default projects;
