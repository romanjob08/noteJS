// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Pqke":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "35aecb957d090087";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"k3sDT":[function(require,module,exports) {
var _headerRender = require("./partsJs/Render/headerRender/headerRender");
var _notesRender = require("./partsJs/Render/notesRender/notesRender");
var _statusRender = require("./partsJs/Render/statusRender/statusRender");
_headerRender.headerRender();
_notesRender.notesRender('notes');
_notesRender.notesRender('archive');
_statusRender.statusRender();

},{"./partsJs/Render/headerRender/headerRender":"2Iijk","./partsJs/Render/notesRender/notesRender":"bLrtb","./partsJs/Render/statusRender/statusRender":"dr8ij"}],"2Iijk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerRender", ()=>headerRender
);
var _headerCreator = require("./headerCreator");
const headerRender = ()=>{
    return document.querySelector('.header').append(_headerCreator.crateHeader());
};

},{"./headerCreator":"l02fx","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l02fx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crateHeader", ()=>crateHeader
);
var _constantsProj = require("../../NotesConstants/constantsProj");
var _buttonAdd = require("./buttonAdd");
const crateHeader = ()=>{
    const h1 = _constantsProj.createElement('h1', 'h1');
    h1.textContent = 'My Notes App';
    const contDiv = _constantsProj.createElement('div', 'container');
    contDiv.append(h1, formCreator());
    return contDiv;
};
const formCreator = ()=>{
    const formHeader = _constantsProj.createElement('form', 'header-form');
    formHeader.append(selectCreator(), inputCreator(), textareaCreator(), _buttonAdd.createHeaderBtnAdd());
    return formHeader;
};
const optionsForSelectHeader = (min)=>{
    const category = document.createElement('option');
    category.append(min);
    return category;
};
const selectCreator = ()=>{
    const selectHeader = _constantsProj.createElement('select', 'select-header');
    selectHeader.append(optionsForSelectHeader(_constantsProj.categoriesState.task), optionsForSelectHeader(_constantsProj.categoriesState.randomThought), optionsForSelectHeader(_constantsProj.categoriesState.idea));
    return selectHeader;
};
const inputCreator = ()=>{
    const inputForHeader = document.createElement('input');
    inputForHeader.setAttribute('type', 'text');
    inputForHeader.setAttribute('id', 'note-title');
    inputForHeader.setAttribute('placeholder', 'Give a name to your note');
    return inputForHeader;
};
const textareaCreator = ()=>{
    const textareaForHeader = _constantsProj.createElement('textarea', 'note-text');
    textareaForHeader.setAttribute('id', 'note-text');
    textareaForHeader.setAttribute('placeholder', "Write your note");
    return textareaForHeader;
};

},{"../../NotesConstants/constantsProj":"7FMs6","./buttonAdd":"gkJu8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7FMs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "categoriesNotes", ()=>categoriesNotes
);
parcelHelpers.export(exports, "statusCategories", ()=>statusCategories
);
parcelHelpers.export(exports, "categoriesState", ()=>categoriesState
);
parcelHelpers.export(exports, "createElement", ()=>createElement
);
parcelHelpers.export(exports, "iCreator", ()=>iCreator
);
parcelHelpers.export(exports, "dataAdd", ()=>dataAdd
);
parcelHelpers.export(exports, "imageShoppingCart", ()=>imageShoppingCart
);
parcelHelpers.export(exports, "imageLightBulb", ()=>imageLightBulb
);
parcelHelpers.export(exports, "imageExclamation", ()=>imageExclamation
);
parcelHelpers.export(exports, "getDateFromText", ()=>getDateFromText
);
parcelHelpers.export(exports, "randomID", ()=>randomID
);
const arrMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const categoriesNotes = {
    name: 'Name',
    created: 'Created',
    category: 'Category',
    content: 'Content',
    dates: 'Dates'
};
const statusCategories = {
    noteCategory: 'Note Category',
    active: 'Active',
    archived: 'Archived'
};
const categoriesState = {
    task: 'Task',
    randomThought: 'Random Thought',
    idea: 'Idea'
};
const createElement = (type = '', elClass = '')=>{
    const el = document.createElement(type);
    el.setAttribute('class', elClass);
    return el;
};
const iCreator = (link)=>{
    return createElement('i', link);
};
const dataAdd = ()=>{
    let t = new Date(Date.now());
    let Y = t.getFullYear();
    let M = arrMonths[t.getMonth() - 1];
    let D = addLeadingZero(t.getDay());
    return `${M} ${D},${Y}`;
};
const addLeadingZero = (d)=>{
    return d < 10 ? '0' + d : d;
};
const imageShoppingCart = "fa fa-shopping-cart";
const imageLightBulb = "fa fa-lightbulb-o";
const imageExclamation = "fa fa-exclamation-circle";
const getDateFromText = (content)=>{
    const regExp = /(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/\d{4}/g;
    const dates = content.match(regExp);
    if (dates && dates.length) {
        console.log(dates.join(', '));
        return dates.join(', ');
    } else return null;
};
const randomID = ()=>{
    return "id" + Math.random().toString(16).slice(2);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gkJu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHeaderBtnAdd", ()=>createHeaderBtnAdd
);
var _constantsProj = require("../../NotesConstants/constantsProj");
var _notesData = require("../../NotesData/notesData");
var _notesRender = require("../notesRender/notesRender");
var _tableStateData = require("../../NotesData/tableStateData");
const createHeaderBtnAdd = ()=>{
    const buttonForAdd = _constantsProj.createElement('button', 'add-btn');
    buttonForAdd.addEventListener('click', (e)=>{
        e.preventDefault();
        const textValue = document.querySelector('.note-text').value;
        const noteNameValue = document.getElementById('note-title').value;
        const notesCategoryValue = document.querySelector('.select-header').value;
        if (textValue === '' || noteNameValue === '') alert('Please add note title and details');
        else if (notesCategoryValue === 'Task') _notesData.notesData.push({
            id: _constantsProj.randomID(),
            image: 'fa fa-shopping-cart',
            name: noteNameValue,
            created: _constantsProj.dataAdd(),
            category: notesCategoryValue,
            content: textValue,
            active: true,
            archived: false,
            dates: _constantsProj.getDateFromText(textValue)
        });
        else if (notesCategoryValue === 'Random Thought') _notesData.notesData.push({
            id: _constantsProj.randomID(),
            image: 'fa fa-exclamation-circle',
            name: noteNameValue,
            created: _constantsProj.dataAdd(),
            category: notesCategoryValue,
            content: textValue,
            active: true,
            archived: false,
            dates: _constantsProj.getDateFromText(textValue)
        });
        else if (notesCategoryValue === 'Idea') _notesData.notesData.push({
            id: _constantsProj.randomID(),
            image: 'fa fa-lightbulb-o',
            name: noteNameValue,
            created: _constantsProj.dataAdd(),
            category: notesCategoryValue,
            content: textValue,
            active: true,
            archived: false,
            dates: _constantsProj.getDateFromText(textValue)
        });
        document.querySelector('.note-text').value = '';
        document.getElementById('note-title').value = '';
        document.querySelector('.select-header').value = 'Task';
        _tableStateData.rerenderPage();
    });
    buttonForAdd.textContent = 'Add Note';
    return buttonForAdd;
};

},{"../../NotesConstants/constantsProj":"7FMs6","../../NotesData/notesData":"fnf9E","../notesRender/notesRender":"bLrtb","../../NotesData/tableStateData":"8tfuH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fnf9E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "notesData", ()=>notesData
);
var _constantsProj = require("../NotesConstants/constantsProj");
const notesData = [
    {
        id: _constantsProj.randomID(),
        image: "fa fa-shopping-cart",
        name: 'Shopping list',
        created: 'April 20,2021',
        category: _constantsProj.categoriesState.task,
        content: 'Tomatoes, bread',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: _constantsProj.randomID(),
        image: "fa fa-exclamation-circle",
        name: 'The theory of evolution',
        created: 'April 27,2021',
        category: _constantsProj.categoriesState.randomThought,
        content: 'Human evolution',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: _constantsProj.randomID(),
        image: "fa fa-lightbulb-o",
        name: 'New Feature',
        created: 'May 05,2021',
        category: _constantsProj.categoriesState.idea,
        content: 'Implement updates',
        active: true,
        archived: false,
        dates: '3/5/2021, 5/5/2021'
    },
    {
        id: _constantsProj.randomID(),
        image: "fa fa-shopping-cart",
        name: "William Gabbi's",
        created: 'May 07,2021',
        category: _constantsProj.categoriesState.task,
        content: 'Power doesn\'t exist',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: _constantsProj.randomID(),
        image: "fa fa-shopping-cart",
        name: 'Books',
        created: 'May 15,2021',
        category: _constantsProj.categoriesState.task,
        content: 'The Lean Startup',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: _constantsProj.randomID(),
        image: "fa fa-lightbulb-o",
        name: 'Build',
        created: 'April 15,2021',
        category: _constantsProj.categoriesState.idea,
        content: 'Build a warehouse for firewood',
        active: false,
        archived: true,
        dates: ''
    }
];

},{"../NotesConstants/constantsProj":"7FMs6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bLrtb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "notesRender", ()=>notesRender
);
var _notesCreator = require("./notesCreator");
const notesRender = (tableName)=>{
    return document.querySelector('.container1').append(_notesCreator.createNotes(tableName));
};

},{"./notesCreator":"5uGkO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5uGkO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNotes", ()=>createNotes
);
var _constantsProj = require("../../NotesConstants/constantsProj");
var _tableCreator = require("./tableCreator/tableCreator");
var _tableStateData = require("../../NotesData/tableStateData");
const getTitle = (tableName)=>{
    switch(tableName){
        case _tableStateData.TableNames.NOTES:
            return 'Your Notes';
        case _tableStateData.TableNames.ARCHIVE:
            return 'Your Archived Notes';
        default:
            return 'Empty';
    }
};
const createNotes = (tableName)=>{
    const h2 = document.createElement('h2');
    h2.textContent = getTitle(tableName);
    const hr = document.createElement('hr');
    const divCont1 = _constantsProj.createElement('div', 'tableContent');
    divCont1.setAttribute('id', `tabCont!${tableName}`);
    divCont1.append(h2, hr, notesContent(tableName));
    return divCont1;
};
const notesContent = (tableName)=>{
    const notCont = _constantsProj.createElement('div', 'notes content');
    notCont.append(_tableCreator.tableCreator(tableName));
    return notCont;
};

},{"../../NotesConstants/constantsProj":"7FMs6","./tableCreator/tableCreator":"6o0WZ","../../NotesData/tableStateData":"8tfuH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6o0WZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tableCreator", ()=>tableCreator
);
var _tableHeader = require("./tableHeader");
var _tableBody = require("./tableBody");
const tableCreator = (tableName)=>{
    const table = document.createElement('table');
    table.setAttribute('id', tableName);
    table.append(_tableHeader.tableHeader(tableName), ..._tableBody.tableBody(tableName));
    return table;
};

},{"./tableHeader":"dkGwE","./tableBody":"7YRCY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dkGwE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tableHeader", ()=>tableHeader
);
var _constantsProj = require("../../../NotesConstants/constantsProj");
var _notesData = require("../../../NotesData/notesData");
var _tableStateData = require("../../../NotesData/tableStateData");
const tableHeader = (tableName)=>{
    const tHeadRou = document.createElement('tr');
    tHeadRou.append(th(), th(_constantsProj.categoriesNotes.name), th(_constantsProj.categoriesNotes.created), th(_constantsProj.categoriesNotes.category), th(_constantsProj.categoriesNotes.content), th(_constantsProj.categoriesNotes.dates), lastTh(tableName));
    return tHeadRou;
};
const th = (text = '')=>{
    const thCreator = document.createElement('th');
    if (text === '') return thCreator;
    else if (text) {
        thCreator.textContent = text;
        return thCreator;
    }
};
const lastTh = (tableName)=>{
    const laTh = _constantsProj.createElement('th', 'lasHeaderTh');
    laTh.append(btnHeaderTableArchiveAll(tableName), btnHeaderTableDeleteAll(tableName));
    return laTh;
};
const btnHeaderTableDeleteAll = (tableName)=>{
    const btnHeaderTableDelAll = _constantsProj.createElement('button', 'btnHeaderTableDeleteAll');
    btnHeaderTableDelAll.append(_constantsProj.iCreator('fa fa-trash'));
    btnHeaderTableDelAll.addEventListener("click", ()=>{
        let a;
        if (tableName === 'notes') a = _notesData.notesData.filter((e)=>{
            return !e.active;
        });
        else a = _notesData.notesData.filter((e)=>{
            return e.active;
        });
        _notesData.notesData.splice(0);
        _notesData.notesData.push(...a);
        document.getElementById(tableName).querySelectorAll('.tableRou').forEach((row)=>row.remove()
        );
        _tableStateData.rerenderPage();
    });
    return btnHeaderTableDelAll;
};
// All -> All
const btnHeaderTableArchiveAll = (tableName)=>{
    const btnHeaderTableArhAll = _constantsProj.createElement('button', 'btnHeaderTableArchiveAll');
    btnHeaderTableArhAll.append(_constantsProj.iCreator('fa fa-archive'));
    btnHeaderTableArhAll.addEventListener("click", ()=>{
        if (tableName === 'archive') _notesData.notesData.forEach((e)=>{
            e.active = true;
            e.archived = false;
        });
        else _notesData.notesData.forEach((e)=>{
            e.active = false;
            e.archived = true;
        });
        document.getElementById(tableName).querySelectorAll('.tableRou').forEach((row)=>row.remove()
        );
        _tableStateData.rerenderPage();
    });
    return btnHeaderTableArhAll;
};

},{"../../../NotesConstants/constantsProj":"7FMs6","../../../NotesData/notesData":"fnf9E","../../../NotesData/tableStateData":"8tfuH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8tfuH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rerenderTableStat", ()=>rerenderTableStat
);
parcelHelpers.export(exports, "rerenderNotes", ()=>rerenderNotes
);
parcelHelpers.export(exports, "rerenderPage", ()=>rerenderPage
);
parcelHelpers.export(exports, "TableNames", ()=>TableNames
);
parcelHelpers.export(exports, "catName", ()=>catName
);
var _notesData = require("./notesData");
var _statusRender = require("../Render/statusRender/statusRender");
var _notesRender = require("../Render/notesRender/notesRender");
const rerenderTableStat = ()=>{
    document.querySelector('.statisticTable').remove();
    _statusRender.statusRender();
};
const rerenderNotes = ()=>{
    document.getElementById('tabCont!notes').remove();
    document.getElementById('tabCont!archive').remove();
    _notesRender.notesRender(TableNames.NOTES);
    _notesRender.notesRender(TableNames.ARCHIVE);
};
const rerenderPage = ()=>{
    rerenderNotes();
    rerenderTableStat();
};
const TableNames = {
    ARCHIVE: 'archive',
    NOTES: 'notes'
};
const numTasks = (namCat, tableName)=>{
    if (tableName === TableNames.NOTES) return _notesData.notesData.filter((e)=>e.category === namCat && e.active
    ).length;
    else return _notesData.notesData.filter((e)=>e.category === namCat && !e.active
    ).length;
};
const catName = ()=>{
    return [
        {
            imageCat: 'fa fa-shopping-cart',
            nameCat: 'Task',
            active: numTasks('Task', TableNames.NOTES),
            archived: numTasks('Task', TableNames.ARCHIVE)
        },
        {
            imageCat: 'fa fa-exclamation-circle',
            nameCat: 'Random Thought',
            active: numTasks('Random Thought', TableNames.NOTES),
            archived: numTasks('Random Thought', TableNames.ARCHIVE)
        },
        {
            imageCat: 'fa fa-lightbulb-o',
            nameCat: 'Idea',
            active: numTasks('Idea', TableNames.NOTES),
            archived: numTasks('Idea', TableNames.ARCHIVE)
        }
    ];
};

},{"./notesData":"fnf9E","../Render/statusRender/statusRender":"dr8ij","../Render/notesRender/notesRender":"bLrtb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dr8ij":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "statusRender", ()=>statusRender
);
var _createStatus = require("./createStatus");
const statusRender = ()=>{
    return document.querySelector('.status').append(_createStatus.createStatus());
};

},{"./createStatus":"7WBzJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7WBzJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStatus", ()=>createStatus
);
var _tableStatusHeader = require("./statusCreator/tableStatusHeader");
var _tableStatusBody = require("./statusCreator/tableStatusBody");
const createStatus = ()=>{
    const table = document.createElement('table');
    table.setAttribute('class', 'statisticTable');
    table.append(_tableStatusHeader.tableStatusHeader(), ..._tableStatusBody.tableStatusBody());
    return table;
};

},{"./statusCreator/tableStatusHeader":"lnCHy","./statusCreator/tableStatusBody":"9U253","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lnCHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tableStatusHeader", ()=>tableStatusHeader
);
var _constantsProj = require("../../../NotesConstants/constantsProj");
const tableStatusHeader = ()=>{
    const tableStatHead = document.createElement('tr');
    tableStatHead.append(th(), th(_constantsProj.statusCategories.noteCategory), th(_constantsProj.statusCategories.active), th(_constantsProj.statusCategories.archived));
    return tableStatHead;
};
const th = (text = '')=>{
    const nevTh = document.createElement('th');
    nevTh.textContent = text;
    return nevTh;
};

},{"../../../NotesConstants/constantsProj":"7FMs6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9U253":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tableStatusBody", ()=>tableStatusBody
);
var _constantsProj = require("../../../NotesConstants/constantsProj");
var _tableStateData = require("../../../NotesData/tableStateData");
const tableStatusBody = ()=>{
    return _tableStateData.catName().map((e)=>{
        const statusTrCreator = document.createElement('tr');
        statusTrCreator.append(firstTd(e.imageCat), td(e.nameCat), td(e.active), td(e.archived));
        return statusTrCreator;
    });
};
const td = (content = '')=>{
    const tdCreator = document.createElement('td');
    tdCreator.textContent = content;
    return tdCreator;
};
const firstTd = (e)=>{
    const fTd = document.createElement('td');
    fTd.setAttribute('class', 'tdTableStat');
    fTd.append(_constantsProj.iCreator(e));
    return fTd;
};

},{"../../../NotesConstants/constantsProj":"7FMs6","../../../NotesData/tableStateData":"8tfuH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7YRCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tableBody", ()=>tableBody
);
var _constantsProj = require("../../../NotesConstants/constantsProj");
var _notesData = require("../../../NotesData/notesData");
var _tableStateData = require("../../../NotesData/tableStateData");
const tableBody = (tableName)=>{
    let filterData;
    if (tableName === 'notes') filterData = _notesData.notesData.filter((e)=>{
        return e.active;
    });
    else filterData = _notesData.notesData.filter((e)=>{
        return !e.active;
    });
    return filterData.map((e)=>{
        const tBodyRou = document.createElement('tr');
        tBodyRou.setAttribute('id', _constantsProj.randomID());
        tBodyRou.setAttribute('class', 'tableRou');
        tBodyRou.append(firstTd(e.image), td(e.name), td(e.created), tdCategory(e.category), td(e.content, 'contCl'), td(e.dates), lastTd(e.id, tableName));
        return tBodyRou;
    });
};
const firstTd = (e)=>{
    const fTd = document.createElement('td');
    fTd.append(_constantsProj.iCreator(e));
    return fTd;
};
const tdCategory = (cont = '')=>{
    const cat = document.createElement('td');
    cat.textContent = cont;
    return cat;
};
const td = (content = '', clas = '')=>{
    const tdCreator = document.createElement('td');
    tdCreator.setAttribute('class', clas);
    tdCreator.title = content;
    tdCreator.textContent = content;
    return tdCreator;
};
const lastTd = (e, tableName)=>{
    const laTd = _constantsProj.createElement('td', 'lasHeaderTh');
    laTd.append(btnTableRedact(e, tableName), btnTableArchive(e, tableName), btnTableDelete(e, tableName));
    return laTd;
};
const indexSearch = (id)=>{
    return _notesData.notesData.findIndex((el)=>el.id === id
    );
};
const btnTableDelete = (id)=>{
    const btnHeaderTableDel = _constantsProj.createElement('button', 'btnTableDelete');
    btnHeaderTableDel.append(_constantsProj.iCreator('fa fa-trash'));
    btnHeaderTableDel.addEventListener('click', ()=>{
        _notesData.notesData.splice(indexSearch(id), 1);
        _tableStateData.rerenderPage();
    });
    return btnHeaderTableDel;
};
const btnTableArchive = (id, tableName)=>{
    const btnHeaderTableArh = _constantsProj.createElement('button', 'btnTableArchive');
    btnHeaderTableArh.append(_constantsProj.iCreator('fa fa-archive'));
    btnHeaderTableArh.addEventListener('click', ()=>{
        const a = indexSearch(id);
        if (tableName === 'notes') {
            _notesData.notesData[a].active = true;
            _notesData.notesData[a].active = false;
        } else {
            _notesData.notesData[a].active = false;
            _notesData.notesData[a].active = true;
        }
        _tableStateData.rerenderPage();
    });
    return btnHeaderTableArh;
};
const btnTableRedact = (id)=>{
    const btnHeaderTableArh = _constantsProj.createElement('button', 'btnTableRedact');
    btnHeaderTableArh.append(_constantsProj.iCreator('fa fa-pencil'));
    btnHeaderTableArh.addEventListener('click', ()=>{
        document.querySelector('.note-text').value = _notesData.notesData.find((el)=>el.id === id
        ).content;
        document.querySelector('.select-header').value = _notesData.notesData.find((el)=>el.id === id
        ).category;
        document.getElementById('note-title').value = _notesData.notesData.find((el)=>el.id === id
        ).name;
        _notesData.notesData.splice(indexSearch(id), 1);
        _tableStateData.rerenderPage();
    });
    return btnHeaderTableArh;
};

},{"../../../NotesConstants/constantsProj":"7FMs6","../../../NotesData/notesData":"fnf9E","../../../NotesData/tableStateData":"8tfuH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2Pqke","k3sDT"], "k3sDT", "parcelRequire716c")

//# sourceMappingURL=index.7d090087.js.map
