// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"items.json":[function(require,module,exports) {
module.exports = [{
  "id": 1,
  "name": "Red",
  "category": "Primary Color",
  "priceCents": 0,
  "imageColor": "F00",
  "publisher": "Epic Games",
  "maxBuyAmount": 5
}, {
  "id": 2,
  "name": "Yellow",
  "category": "Primary Color",
  "priceCents": 200,
  "imageColor": "FF0",
  "publisher": "Riot Games",
  "maxBuyAmount": 10
}, {
  "id": 3,
  "name": "Blue",
  "category": "Primary Color",
  "priceCents": 300,
  "imageColor": "00F"
}, {
  "id": 4,
  "name": "Orange",
  "category": "Secondary Color",
  "priceCents": 500,
  "imageColor": "F60"
}, {
  "id": 5,
  "name": "Green",
  "category": "Secondary Color",
  "priceCents": 500,
  "imageColor": "0F0"
}, {
  "id": 6,
  "name": "Purple",
  "category": "Secondary Color",
  "priceCents": 600,
  "imageColor": "60F"
}, {
  "id:": 7,
  "name": "Magenta",
  "category": "Exotic Color",
  "priceCents": 1100,
  "imageColor": "f745f1"
}, {
  "id": 8,
  "name": "Emerald",
  "category": "Exotic Color",
  "priceCents": 600,
  "imageColor": "1f851f"
}, {
  "id": 9,
  "name": "Ocean",
  "category": "Exotic Color",
  "priceCents": 800,
  "imageColor": "1862a8"
}, {
  "id": 10,
  "name": "Lime Green",
  "category": "Exotic Color",
  "priceCents": 1200,
  "imageColor": "2bed41"
}, {
  "id": 11,
  "name": "Mandarin",
  "category": "Exotic Color",
  "priceCents": 1000,
  "imageColor": "eb5e34"
}, {
  "id": 12,
  "name": "Cyan",
  "category": "Exotic Color",
  "priceCents": 900,
  "imageColor": "36ebc7"
}, {
  "id": 13,
  "name": "Sky Blue",
  "category": "Casual Color",
  "priceCents": 1300,
  "imageColor": "a3c2ff"
}, {
  "id": 14,
  "name": "Purple Night",
  "category": "Casual Color",
  "priceCents": 1500,
  "imageColor": "af6cd9"
}, {
  "id": 15,
  "name": "Morning Dew",
  "category": "Casual Color",
  "priceCents": 1400,
  "imageColor": "68d189"
}, {
  "id": 16,
  "name": "Teal",
  "category": "Casual Color",
  "priceCents": 1400,
  "imageColor": "39bfa9"
}, {
  "id": 17,
  "name": "Paradise Sand",
  "category": "Casual Color",
  "priceCents": 700,
  "imageColor": "cdd66b"
}, {
  "id": 18,
  "name": "Hot Love",
  "category": "Casual Color",
  "priceCents": 1400,
  "imageColor": "cc2b6c"
}, {
  "id": 19,
  "name": "Cheese",
  "category": "Casual Color",
  "priceCents": 900,
  "imageColor": "e8cc3f"
}, {
  "id": 20,
  "name": "Light Gray",
  "category": "Grayscale",
  "priceCents": 1100,
  "imageColor": "AAA"
}, {
  "id": 21,
  "name": "Dark Gray",
  "category": "Grayscale",
  "priceCents": 1100,
  "imageColor": "333"
}, {
  "id": 22,
  "name": "Dark White",
  "category": "Grayscale",
  "priceCents": 0,
  "imageColor": "e2e5eb",
  "maxBuyAmount": 3
}, {
  "id": 23,
  "name": "Black",
  "category": "Grayscale",
  "priceCents": 900,
  "imageColor": "000"
}, {
  "id": 24,
  "name": "Neo Purple",
  "category": "Ultimate",
  "priceCents": 100000000,
  "imageColor": "c8a6f5"
}];
},{}],"utilities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGlobalEventListener = addGlobalEventListener;
exports.formatCurrency = formatCurrency;

function formatCurrency(amount) {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD"
  });
  return formatter.format(amount);
}

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, function (e) {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}
},{}],"node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"node_modules/vary/index.js":[function(require,module,exports) {
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
'use strict';
/**
 * Module exports.
 */

module.exports = vary;
module.exports.append = append;
/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */

var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array} field
 * @return {String}
 * @public
 */

function append(header, field) {
  if (typeof header !== 'string') {
    throw new TypeError('header argument is required');
  }

  if (!field) {
    throw new TypeError('field argument is required');
  } // get fields array


  var fields = !Array.isArray(field) ? parse(String(field)) : field; // assert on invalid field names

  for (var j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError('field argument contains an invalid header name');
    }
  } // existing, unspecified vary


  if (header === '*') {
    return header;
  } // enumerate current values


  var val = header;
  var vals = parse(header.toLowerCase()); // unspecified vary

  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
    return '*';
  }

  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase(); // append value (case-preserving)

    if (vals.indexOf(fld) === -1) {
      vals.push(fld);
      val = val ? val + ', ' + fields[i] : fields[i];
    }
  }

  return val;
}
/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array}
 * @private
 */


function parse(header) {
  var end = 0;
  var list = [];
  var start = 0; // gather tokens

  for (var i = 0, len = header.length; i < len; i++) {
    switch (header.charCodeAt(i)) {
      case 0x20:
        /*   */
        if (start === end) {
          start = end = i + 1;
        }

        break;

      case 0x2c:
        /* , */
        list.push(header.substring(start, end));
        start = end = i + 1;
        break;

      default:
        end = i + 1;
        break;
    }
  } // final token


  list.push(header.substring(start, end));
  return list;
}
/**
 * Mark that a request is varied on a header field.
 *
 * @param {Object} res
 * @param {String|Array} field
 * @public
 */


function vary(res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError('res argument is required');
  } // get existing header


  var val = res.getHeader('Vary') || '';
  var header = Array.isArray(val) ? val.join(', ') : String(val); // set new header

  if (val = append(header, field)) {
    res.setHeader('Vary', val);
  }
}
},{}],"node_modules/cors/lib/index.js":[function(require,module,exports) {
(function () {
  'use strict';

  var assign = require('object-assign');

  var vary = require('vary');

  var defaults = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }

      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
        headers = [],
        isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin); // reflect origin

      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;

    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }

    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }

    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers

      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }

    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;

    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }

    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }

    return null;
  }

  function configureMaxAge(options) {
    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString();

    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }

    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];

      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
        method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;

    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;

          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  } // can pass either an options hash, an options delegate, or nothing


  module.exports = middlewareWrapper;
})();
},{"object-assign":"node_modules/object-assign/index.js","vary":"node_modules/vary/index.js"}],"shoppingCart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;
exports.setupShoppingCart = setupShoppingCart;

var _cors = _interopRequireDefault(require("cors"));

var _items = _interopRequireDefault(require("./items.json"));

var _utilities = require("./utilities.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cartButton = document.querySelector("[data-cart-button]");
var cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
var cartItemTemplate = document.querySelector("#cart-item-template");
var cartItemContainer = document.querySelector("[data-cart-items-container]");
var cartQuantity = document.querySelector("[data-cart-quantity]");
var cartTotal = document.querySelector("[data-total]");
var cart = document.querySelector("[data-cart]");
var IMAGE_URL = "https://dummyimage.com/210x130/";
var SESSION_STORAGE_KEY = "SHOPPING_CART-key";
var shoppingCart = [];

function setupShoppingCart() {
  (0, _utilities.addGlobalEventListener)("click", "[data-remove-from-cart-button]", function (e) {
    var id = e.target.closest("[data-item]").dataset.itemId;
    removeFromCart(parseInt(id));
  });
  shoppingCart = loadCart();
  renderCart(); // Show/hide the cart when clicked

  cartButton.addEventListener("click", function () {
    cartItemsWrapper.classList.toggle("invisible");
  });
}

function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}

function loadCart() {
  var cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return JSON.parse(cart) || [];
} // Add items to cart


function addToCart(id) {
  // Handle multiple of the same item in cart
  var existingItem = shoppingCart.find(function (entry) {
    return entry.id === id;
  });

  if (existingItem) {
    var item = _items.default.find(function (entry) {
      return entry.id === existingItem.id;
    });

    console.log(item);

    if (item.priceCents === 0) {
      if (existingItem.quantity === item.maxBuyAmount || existingItem.quantity > item.maxBuyAmount) {
        window.alert("You have already exceeded the maximum buy rate of (".concat(item.maxBuyAmount, ")"));
      } else {
        existingItem.quantity++;
      }
    }
  } else {
    shoppingCart.push({
      id: id,
      quantity: 1
    });
  }

  renderCart();
  saveCart();
} // Remove items from cart


function removeFromCart(id) {
  var existingItem = shoppingCart.find(function (entry) {
    return entry.id === id;
  });
  if (existingItem == null) return;
  shoppingCart = shoppingCart.filter(function (entry) {
    return entry.id !== id;
  });
  renderCart();
  saveCart();
} // Show/hide the cart button when no items or when item count goes from 0 to 1


function renderCart() {
  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    showCart();
    renderCartItems();
  }
}

function hideCart() {
  cart.classList.add("invisible");
  cartItemsWrapper.classList.add("invisible");
}

function showCart() {
  cart.classList.remove("invisible");
}

function renderCartItems() {
  // Calculate an accurate total
  cartQuantity.innerText = shoppingCart.length;
  var totalCents = shoppingCart.reduce(function (sum, entry) {
    var item = _items.default.find(function (i) {
      return entry.id === i.id;
    });

    return sum + item.priceCents * entry.quantity;
  }, 0);
  cartTotal.innerText = (0, _utilities.formatCurrency)(totalCents / 100);
  cartItemContainer.innerHTML = "";
  shoppingCart.forEach(function (entry) {
    var item = _items.default.find(function (i) {
      return entry.id === i.id;
    });

    var cartItem = cartItemTemplate.content.cloneNode(true);
    var container = cartItem.querySelector("[data-item]");
    container.dataset.itemId = item.id;
    var name = cartItem.querySelector("[data-name]");
    name.innerText = item.name;
    var image = cartItem.querySelector("[data-image]");
    image.src = "".concat(IMAGE_URL).concat(item.imageColor, "/").concat(item.imageColor);
    var price = cartItem.querySelector("[data-price]");
    price.innerText = (0, _utilities.formatCurrency)(item.priceCents * entry.quantity / 100);

    if (entry.quantity > 1) {
      var quantity = cartItem.querySelector("[data-quantity]");
      quantity.innerText = "x".concat(entry.quantity);
    }

    cartItemContainer.appendChild(cartItem);
  });
} // Persist across mutiple pages
},{"cors":"node_modules/cors/lib/index.js","./items.json":"items.json","./utilities.js":"utilities.js"}],"store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupStore = setupStore;

var _items = _interopRequireDefault(require("./items.json"));

var _utilities = require("./utilities.js");

var _shoppingCart = require("./shoppingCart.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeItemTemplate = document.querySelector("#store-item-template");
var storeItemContainer = document.querySelector("[data-store-container]");
var IMAGE_URL = "https://dummyimage.com/210x130/";

function setupStore() {
  (0, _utilities.addGlobalEventListener)("click", "[data-add-to-cart]", function (e) {
    var id = e.target.closest("[data-store-item]").dataset.itemId;
    (0, _shoppingCart.addToCart)(parseInt(id));
  });

  _items.default.forEach(renderStoreItem);
}

function renderStoreItem(item) {
  var storeItem = storeItemTemplate.content.cloneNode(true);
  var container = storeItem.querySelector("[data-store-item]");
  container.dataset.itemId = item.id;
  var name = storeItem.querySelector("[data-name]");
  name.innerText = item.name;
  var category = storeItem.querySelector("[data-category]");
  category.innerText = item.category;
  var image = storeItem.querySelector("[data-image]");
  image.src = "".concat(IMAGE_URL).concat(item.imageColor, "/").concat(item.imageColor);
  var price = storeItem.querySelector("[data-price]");
  var priceResult = (0, _utilities.formatCurrency)(item.priceCents / 100);

  if (priceResult === "$0.00") {
    var price1 = "Free! (".concat(priceResult, ")");
    var price2 = "".concat(item.maxBuyAmount, " max");
    price.textContent = price1;
    var second = storeItem.querySelector("[data-price-2]");
    second.textContent = price2;
    second.style.fontWeight = "bold"; // price.textContent = `Free! (${priceResult}) ${item.maxBuyAmount} max`;
  } else {
    price.innerText = (0, _utilities.formatCurrency)(item.priceCents / 100);
  }

  storeItemContainer.appendChild(storeItem);
}
},{"./items.json":"items.json","./utilities.js":"utilities.js","./shoppingCart.js":"shoppingCart.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _store = require("./store.js");

var _shoppingCart = require("./shoppingCart.js");

(0, _shoppingCart.setupShoppingCart)();
(0, _store.setupStore)();
},{"./store.js":"store.js","./shoppingCart.js":"shoppingCart.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55306" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map