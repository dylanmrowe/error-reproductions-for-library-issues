import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

// allow ENV vars to work when isBrowser is true
// window.__APP_ENV_VARS__ = process.env;

// fail a test if console error is called.
let error = console.error;

console.error = function (message) {
  // Note: when this errors out in tests, look to additional clues.
  error.apply(console, arguments); // keep default behaviour
  throw message instanceof Error ? message : new Error(message);
};

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
