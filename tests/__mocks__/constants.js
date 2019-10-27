const goalIcons = {
  'Build my network': 'network.svg',
  'Personal Growth': 'growth.svg',
  'Get a promotion': 'promotion.svg',
  'Be a better leader': 'leader.svg',
};

const emptyGoals = {
  data: [],
};

const selectedGoals = [
  '5dabeb9f4993401226b6076f',
  '5dabe9d14993401226b60764',
  '5dabeb304993401226b6076a',
  '5dabedd718ac42130fc75945',
];

const goals = {
  total: 4,
  limit: 30,
  skip: 0,
  data: [
      {
          _id: '5dabe9d14993401226b60764',
          title: 'Be a better leader',
          tasks: [
              {
                  _id: '5dabe9d14993401226b60769',
                  title: 'Have a career conversation with your direct reports',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 90,
              },
              {
                  _id: '5dabe9d14993401226b60768',
                  title: 'Solicit feedback from your direct reports',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 30,
              },
              {
                  _id: '5dabe9d14993401226b60767',
                  title: 'Meet with your skip-level reports',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 120,
              },
              {
                  _id: '5dabe9d14993401226b60766',
                  title: 'Schedule a regular 1:1 meeting with all your direct reports',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 30,
              },
              {
                  _id: '5dabe9d14993401226b60765',
                  title: 'Delegate something you currently do to your direct report',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
          ],
          createdAt: '2019-10-20T05:00:01.714Z',
          updatedAt: '2019-10-20T05:00:01.714Z',
          __v: 0,
      },
      {
          _id: '5dabeb304993401226b6076a',
          title: 'Build my network',
          tasks: [
              {
                  _id: '5dabeb304993401226b6076e',
                  title: 'Make a list of influential people in your field at your company, and outside of your company',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 30,
              },
              {
                  _id: '5dabeb304993401226b6076d',
                  title: 'Invite someone in a different department for a "Get To Know You" coffee or lunch',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
              {
                  _id: '5dabeb304993401226b6076c',
                  title: 'Attend an industry networking event',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 90,
              },
              {
                  _id: '5dabeb304993401226b6076b',
                  title: 'Join your local college/university alumni group',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 30,
              },
          ],
          createdAt: '2019-10-20T05:05:52.793Z',
          updatedAt: '2019-10-20T05:05:52.793Z',
          __v: 0,
      },
      {
          _id: '5dabeb9f4993401226b6076f',
          title: 'Get a promotion',
          tasks: [
              {
                  _id: '5dabeb9f4993401226b60773',
                  title: 'Have a career conversation with your manager',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
              {
                  _id: '5dabeb9f4993401226b60772',
                  title: 'Ask for peer feedback',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
              {
                  _id: '5dabeb9f4993401226b60771',
                  title: 'Set up a career lunch with someone at a higher level besides your manager',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
              {
                  _id: '5dabeb9f4993401226b60770',
                  title: 'Draft a list of OKRs for yourself for the next 3 months',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
          ],
          createdAt: '2019-10-20T05:07:43.844Z',
          updatedAt: '2019-10-20T05:07:43.844Z',
          __v: 0,
      },
      {
          _id: '5dabedd718ac42130fc75945',
          title: 'Personal Growth',
          tasks: [
              {
                  _id: '5dabedd718ac42130fc75948',
                  title: 'Write your personal brand statement',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 30,
              },
              {
                  _id: '5dabedd718ac42130fc75947',
                  title: 'Draft a blog post on an area of expertise',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 90,
              },
              {
                  _id: '5dabedd718ac42130fc75946',
                  title: 'Make a list of 5 books to read that will help you grow',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  duration: 60,
              },
          ],
          createdAt: '2019-10-20T05:17:11.335Z',
          updatedAt: '2019-10-20T05:17:11.335Z',
          __v: 0,
      },
  ],
};

const completedTasks = [
  '5dabeb9f4993401226b60773',
  '5dabe9d14993401226b60768',
  '5dabeb9f4993401226b60771',
  '5dabe9d14993401226b60767',
  '5dabeb9f4993401226b60772',
  '5dabeb9f4993401226b60770',
  '5dabe9d14993401226b60769',
];

const emptyTasks = [];

const tasks = [
  {
      goalId: '5dabe9d14993401226b60764',
      goalTitle: 'Be a better leader',
      _id: '5dabe9d14993401226b60769',
      title: 'Have a career conversation with your direct reports',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      duration: 90,
  },
  {
      goalId: '5dabe9d14993401226b60764',
      goalTitle: 'Be a better leader',
      _id: '5dabe9d14993401226b60768',
      title: 'Solicit feedback from your direct reports',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      duration: 30,
  },
];

const currentTask = {
  goalId: '5dabe9d14993401226b60764',
  goalTitle: 'Be a better leader',
  _id: '5dabe9d14993401226b60768',
  title: 'Solicit feedback from your direct reports',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  duration: 30,
};

const user = {
  _id: '5dab0b0311f86874e7b12345',
  completedTasks: [
    '5dabeb9f4993401226b60773',
    '5dabeb9f4993401226b60771',
    '5dabe9d14993401226b60767',
    '5dabeb9f4993401226b60772',
    '5dabeb9f4993401226b60770',
    '5dabe9d14993401226b60769',
    '5dabedd718ac42130fc75948',
    '5dabe9d14993401226b60766',
    '5dabe9d14993401226b60765',
    '5dabeb304993401226b6076e',
    '5dabeb304993401226b6076d',
    '5dabeb304993401226b6076c',
    '5dabeb304993401226b6076b',
    '5dabedd718ac42130fc75947',
    '5dabedd718ac42130fc75946',
  ],
  name: 'John Doe',
  email: 'test@test.com',
  createdAt: '2019-10-19T13:09:23.573Z',
  updatedAt: '2019-10-24T13:45:32.495Z',
  selectedGoals: [
    '5dabeb9f4993401226b6076f',
    '5dabe9d14993401226b60764',
    '5dabeb304993401226b6076a',
    '5dabedd718ac42130fc75945',
  ],
};

export {
  emptyGoals,
  goals,
  completedTasks,
  selectedGoals,
  goalIcons,
  emptyTasks,
  tasks,
  user,
  currentTask,
};
