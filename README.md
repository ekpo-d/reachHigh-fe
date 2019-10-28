# ReachHigh Frontend
ReachHigh is building a personalized career plan to help early-stage Sales & Marketing professionals improve their skills, and advance in their careers.

## Current functionality
A user has the ability to:

1. Register for the platform.
1. Login if already registered.
2. Select personal goals
3. See a list of tasks based on selected goals
4. View a task
5. Indicate completed a task and see number of tasks left.

## Stack
* ReactJS (library for building user interfaces)
* NextJS (for Server-side rendering)
* MobX (for state management)
* Axios (http client)
* Eslint (For linting)
* Esdoc (full app wide documentation within 'documentation' folder).
* Jest.

## Code Documentation
Code documentation resides in the `/documentation` folder.

## Genral Setup For Development

Clone this repository, install dependencies and start application:

```bash
git clone git@github.com:ekpo-d/reachHigh-fe.git
cd reachHigh-fe
yarn
```
Create a file called `.env` in the project root and add the project's environment variables based on the sample file.

```bash
yarn dev # For development, starts up eslint, jest and next JS.
```

## Other useful commands
* `yarn docs` - generates documentation
* `yarn lint` - runs linter (eslint)
* `yarn lint-test` - runs eslint and jest in parallel
