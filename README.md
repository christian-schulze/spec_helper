# Spec Helper

A private npm module, which you require in your mocka/chai specs, ala ruby/rspec. The following modules are integrated:

- *mocka-as-promised* - No more done callbacks!
- *chai-as-promised* - assertion chaining without callbacks
- *wd* - selenium webdriver client implementation

Before and after hooks are also implemented to tear up/down the webdriver client.

## Trivial Example

Clean, callback-free testing code, while driving a browser:

```javascript
SpecHelper = require('spec_helper');

describe('Run Selenium tests', function() {
  SpecHelper.usesBrowser('firefox');

  beforeEach(function() {
    return browser.get('http://localhost:3000');
  });

  it('should retrieve the page title', function() {
    return expect( browser.text() ).to.eventually.equal('Hello World');
  });

});
```

## Installation

Update your projects package.json dependancies as follows:

```javascript
{
  ...
  "Dependencies": {
    "spec_helper": "git://github.com/christian-schulze/spec_helper.git"
    ...
  }
  ...
}
```

**Important** - This module assumes your already using the *mocka*, *chai* and *wd* modules.

## Contributers

* [Christian Schulze](https://github.com/christian-schulze)

## License

Released under the MIT license. Please see the `LICENSE` file for more information.
