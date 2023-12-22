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
  {
    id: 3,
    title: 'Filler 0',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex vel metus tempus bibendum eu sit amet lorem. Sed vitae ligula at metus consequat efficitur vel non neque. Nullam id eros feugiat, maximus velit vitae, imperdiet elit. Ut ultrices eu metus et posuere. Vivamus commodo rhoncus leo, pellentesque gravida augue gravida egestas. Quisque vestibulum mi non metus varius, eu congue sapien porttitor. In hac habitasse platea dictumst. Proin in arcu quis mi euismod sollicitudin. Curabitur porttitor et felis ac faucibus. Proin et dui at massa semper tincidunt eget in neque.

Ut non massa nec est tristique dignissim. Cras ultricies tortor eu metus consectetur rutrum. Suspendisse scelerisque fringilla purus, id pellentesque ipsum mattis in. Nulla in purus eu nibh ornare iaculis. Sed vitae pretium nisi. Maecenas dignissim pulvinar nisl ac tristique. Vestibulum ipsum felis, dignissim et tristique in, tempor ac metus. Ut sem tortor, tempor et dolor vel, egestas posuere leo. Proin a sollicitudin diam. Ut imperdiet odio vel laoreet mattis.

Vestibulum non dictum justo, ac rutrum ante. Vestibulum varius tincidunt porta. Vestibulum consequat nulla eu mauris posuere ultrices. Vivamus ac nisl scelerisque, scelerisque tortor in, fermentum eros. Donec dapibus leo at elit tempus, sollicitudin scelerisque quam lobortis. Quisque volutpat at ligula sit amet malesuada. Cras vestibulum tortor a facilisis rutrum. Suspendisse luctus sodales est sit amet pellentesque. Suspendisse ullamcorper massa vitae consectetur ultrices. Nam scelerisque ex quis ante aliquet, a feugiat velit luctus. Vivamus laoreet dapibus sapien at feugiat. Vestibulum ultrices, nisi in vulputate hendrerit, ligula mi blandit nisl, sodales elementum dui metus eget orci. Etiam posuere dapibus hendrerit.

Nam nec neque sed elit vestibulum dignissim sed in est. Duis cursus elementum mi nec convallis. Maecenas ultrices rhoncus lorem, at iaculis odio sagittis eget. Nulla facilisis a elit eu congue. Phasellus efficitur et metus ut tincidunt. Nunc bibendum ultricies eros sit amet efficitur. Aliquam congue augue eu placerat suscipit. Donec iaculis lobortis dui, ac efficitur ex tempus id. Praesent a turpis ornare, congue orci non, hendrerit est. Vivamus ut cursus nunc. Maecenas condimentum ante nunc, sit amet tincidunt purus posuere sed. Nulla quam dolor, tempor eu justo a, vestibulum finibus diam. Integer ac orci metus. Maecenas tincidunt est non lorem eleifend, vel vehicula justo pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    difficulty: 3,
    optional: ['Lorem', 'Ipsum', 'Dolor'],
  },
  {
    id: 4,
    title: 'Filler 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex vel metus tempus bibendum eu sit amet lorem. Sed vitae ligula at metus consequat efficitur vel non neque. Nullam id eros feugiat, maximus velit vitae, imperdiet elit. Ut ultrices eu metus et posuere. Vivamus commodo rhoncus leo, pellentesque gravida augue gravida egestas. Quisque vestibulum mi non metus varius, eu congue sapien porttitor. In hac habitasse platea dictumst. Proin in arcu quis mi euismod sollicitudin. Curabitur porttitor et felis ac faucibus. Proin et dui at massa semper tincidunt eget in neque.

Ut non massa nec est tristique dignissim. Cras ultricies tortor eu metus consectetur rutrum. Suspendisse scelerisque fringilla purus, id pellentesque ipsum mattis in. Nulla in purus eu nibh ornare iaculis. Sed vitae pretium nisi. Maecenas dignissim pulvinar nisl ac tristique. Vestibulum ipsum felis, dignissim et tristique in, tempor ac metus. Ut sem tortor, tempor et dolor vel, egestas posuere leo. Proin a sollicitudin diam. Ut imperdiet odio vel laoreet mattis.

Vestibulum non dictum justo, ac rutrum ante. Vestibulum varius tincidunt porta. Vestibulum consequat nulla eu mauris posuere ultrices. Vivamus ac nisl scelerisque, scelerisque tortor in, fermentum eros. Donec dapibus leo at elit tempus, sollicitudin scelerisque quam lobortis. Quisque volutpat at ligula sit amet malesuada. Cras vestibulum tortor a facilisis rutrum. Suspendisse luctus sodales est sit amet pellentesque. Suspendisse ullamcorper massa vitae consectetur ultrices. Nam scelerisque ex quis ante aliquet, a feugiat velit luctus. Vivamus laoreet dapibus sapien at feugiat. Vestibulum ultrices, nisi in vulputate hendrerit, ligula mi blandit nisl, sodales elementum dui metus eget orci. Etiam posuere dapibus hendrerit.

Nam nec neque sed elit vestibulum dignissim sed in est. Duis cursus elementum mi nec convallis. Maecenas ultrices rhoncus lorem, at iaculis odio sagittis eget. Nulla facilisis a elit eu congue. Phasellus efficitur et metus ut tincidunt. Nunc bibendum ultricies eros sit amet efficitur. Aliquam congue augue eu placerat suscipit. Donec iaculis lobortis dui, ac efficitur ex tempus id. Praesent a turpis ornare, congue orci non, hendrerit est. Vivamus ut cursus nunc. Maecenas condimentum ante nunc, sit amet tincidunt purus posuere sed. Nulla quam dolor, tempor eu justo a, vestibulum finibus diam. Integer ac orci metus. Maecenas tincidunt est non lorem eleifend, vel vehicula justo pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    difficulty: 2,
    optional: ['Lorem', 'Ipsum', 'Dolor'],
  },
  {
    id: 5,
    title: 'Filler 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex vel metus tempus bibendum eu sit amet lorem. Sed vitae ligula at metus consequat efficitur vel non neque. Nullam id eros feugiat, maximus velit vitae, imperdiet elit. Ut ultrices eu metus et posuere. Vivamus commodo rhoncus leo, pellentesque gravida augue gravida egestas. Quisque vestibulum mi non metus varius, eu congue sapien porttitor. In hac habitasse platea dictumst. Proin in arcu quis mi euismod sollicitudin. Curabitur porttitor et felis ac faucibus. Proin et dui at massa semper tincidunt eget in neque.

Ut non massa nec est tristique dignissim. Cras ultricies tortor eu metus consectetur rutrum. Suspendisse scelerisque fringilla purus, id pellentesque ipsum mattis in. Nulla in purus eu nibh ornare iaculis. Sed vitae pretium nisi. Maecenas dignissim pulvinar nisl ac tristique. Vestibulum ipsum felis, dignissim et tristique in, tempor ac metus. Ut sem tortor, tempor et dolor vel, egestas posuere leo. Proin a sollicitudin diam. Ut imperdiet odio vel laoreet mattis.

Vestibulum non dictum justo, ac rutrum ante. Vestibulum varius tincidunt porta. Vestibulum consequat nulla eu mauris posuere ultrices. Vivamus ac nisl scelerisque, scelerisque tortor in, fermentum eros. Donec dapibus leo at elit tempus, sollicitudin scelerisque quam lobortis. Quisque volutpat at ligula sit amet malesuada. Cras vestibulum tortor a facilisis rutrum. Suspendisse luctus sodales est sit amet pellentesque. Suspendisse ullamcorper massa vitae consectetur ultrices. Nam scelerisque ex quis ante aliquet, a feugiat velit luctus. Vivamus laoreet dapibus sapien at feugiat. Vestibulum ultrices, nisi in vulputate hendrerit, ligula mi blandit nisl, sodales elementum dui metus eget orci. Etiam posuere dapibus hendrerit.

Nam nec neque sed elit vestibulum dignissim sed in est. Duis cursus elementum mi nec convallis. Maecenas ultrices rhoncus lorem, at iaculis odio sagittis eget. Nulla facilisis a elit eu congue. Phasellus efficitur et metus ut tincidunt. Nunc bibendum ultricies eros sit amet efficitur. Aliquam congue augue eu placerat suscipit. Donec iaculis lobortis dui, ac efficitur ex tempus id. Praesent a turpis ornare, congue orci non, hendrerit est. Vivamus ut cursus nunc. Maecenas condimentum ante nunc, sit amet tincidunt purus posuere sed. Nulla quam dolor, tempor eu justo a, vestibulum finibus diam. Integer ac orci metus. Maecenas tincidunt est non lorem eleifend, vel vehicula justo pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    difficulty: 1,
    optional: ['Lorem', 'Ipsum', 'Dolor'],
  },
];

export default projects;
