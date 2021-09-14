# Error reproduction for jest timer issue
Command line commands to run:

`git clone https://github.com/dylanmrowe/error-reproductions-for-library-issues.git`

`cd error-reproductions-for-library-issues/jest-timers`

`npm i`

`npm run test`

Observe the console.error, which fails the test. That code should not have run.

```
  console.log
    I cancelled the timer

      at test.js:20:15

  console.error
    But it still got ran
```
