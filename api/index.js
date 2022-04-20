var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var meta = () => {
  return {
    title: "CZ Editorial",
    description: "Professional Copyediting and Proofreading"
  };
};
function App() {
  console.log("%c Hey there \u{1F44B}", "font-size: 30px;");
  console.log(`%c If you're reading this, you probably know a thing or two about web development. 
    My name is Zack Zboncak, and I built this site for my wife, who is a boss copyeditor and proofreader. 
    If you ever want to talk web development, or have any web development needs, feel free to reach out to me at zachary.zboncak@gmail.com.
    You can find me on Twitter at @zzdevelops, and on GitHub at https://github.com/zzboncak.`, "line-height: 1.5; font-size: 16px;");
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#d9e8e6",
    media: "(prefers-color-scheme: dark)"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#d9e8e6",
    media: "(prefers-color-scheme: light)"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader
});
init_react();
function loader() {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.czeditorial.com/</loc>
      <priority>1.0</priority>
      <changefreq>daily</changefreq>
    </url>
    </urlset>`, { headers: { "Content-Type": "text/xml" } });
}

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  links: () => links
});
init_react();

// app/components/Topbar.tsx
init_react();

// app/utils/scrollToElement.ts
init_react();
function scrollToElement(elementId) {
  var _a;
  (_a = document.getElementById(elementId)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
}

// app/components/Topbar.tsx
function Topbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "site-header"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "link",
    onClick: () => scrollToElement("skills")
  }, "Services"), /* @__PURE__ */ React.createElement("li", {
    className: "link",
    onClick: () => scrollToElement("about")
  }, "About"), /* @__PURE__ */ React.createElement("li", {
    className: "link",
    onClick: () => scrollToElement("contact")
  }, "Contact")));
}

// app/styles/global.css
var global_default = "/build/_assets/global-AAQA4Q6G.css";

// app/styles/topbar.css
var topbar_default = "/build/_assets/topbar-ZZJL7OFN.css";

// app/styles/landing.css
var landing_default = "/build/_assets/landing-ONBW6KS5.css";

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/routes/index.tsx
var import_remix4 = __toESM(require_remix());

// app/images/cz-editorial.svg
var cz_editorial_default = "/build/_assets/cz-editorial-67AFHMDG.svg";

// app/components/ContactForm.tsx
init_react();
var import_react = require("react");
var import_remix3 = __toESM(require_remix());
function ContactForm({
  transitionState
}) {
  (0, import_react.useEffect)(() => {
    if (transitionState === "idle") {
      document.getElementById("email").value = "";
      document.getElementById("message-body").value = "";
    }
  }, [transitionState]);
  return /* @__PURE__ */ React.createElement(import_remix3.Form, {
    className: "contact-form",
    id: "contact",
    method: "post"
  }, /* @__PURE__ */ React.createElement("h2", null, "Let's get in touch"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Your Email",
    required: true
  }), /* @__PURE__ */ React.createElement("textarea", {
    name: "messageBody",
    id: "message-body",
    placeholder: "Dear Courtney...",
    spellCheck: "true",
    autoCapitalize: "sentences",
    required: true
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: transitionState === "loading" || transitionState === "submitting"
  }, "Email Me"));
}

// app/utils/mailer.ts
init_react();
var import_nodemailer = __toESM(require("nodemailer"));
var import_xss = __toESM(require("xss"));
function generateEmailHtml(email, messageBody) {
  return `
    <h1>Someone submitted the form on your website</h1>
    <p>Their email is: <a href="mailto:${(0, import_xss.default)(email)}">${(0, import_xss.default)(email)}</a></p>

    <h3>Their message</h3>
    <p>${(0, import_xss.default)(messageBody)}</p>
  `;
}
async function sendEmail(options) {
  const testAccount = await import_nodemailer.default.createTestAccount();
  const account = true ? import_nodemailer.default.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  }) : import_nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  return await account.sendMail({
    to: process.env.SMTP_USER,
    from: process.env.SMTP_USER,
    html: generateEmailHtml(options.email, options.messageBody),
    subject: "Your web form has been submitted"
  });
}

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/routes/index.tsx
var import_react4 = require("react");

// app/components/Notification.tsx
init_react();
var import_react2 = require("react");
function Notification({
  message,
  type,
  setDisplayNotification,
  timeout = 3e3
}) {
  (0, import_react2.useEffect)(() => {
    setTimeout(() => {
      setDisplayNotification(false);
    }, timeout);
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "notification-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `notification-message ${type}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "exit-container",
    onClick: () => setDisplayNotification(false)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "x-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "x-2"
  })), /* @__PURE__ */ React.createElement("p", null, message)));
}

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/routes/index.tsx
var import_react_visibility_sensor = __toESM(require("react-visibility-sensor"));

// app/components/Skill.tsx
init_react();
var import_react3 = require("react");
function reducer(state, action2) {
  switch (action2.type) {
    case "START_TYPING":
      return __spreadProps(__spreadValues({}, state), {
        typing: true
      });
    case "STOP_TYPING":
      return __spreadProps(__spreadValues({}, state), {
        typing: false
      });
    case "SET_TEXT":
      return __spreadProps(__spreadValues({}, state), {
        textToDisplay: action2.payload
      });
    case "SET_NEXT_INDEX":
      return __spreadProps(__spreadValues({}, state), {
        nextIndex: action2.payload
      });
    case "SET_STATE":
      return action2.payload;
    case "SET_STARTED":
      return __spreadProps(__spreadValues({}, state), {
        started: action2.payload
      });
    default:
      return state;
  }
}
function Skill({
  text,
  delay,
  isVisible
}) {
  const textArray = text.split("");
  const initialState = {
    textToDisplay: "",
    nextIndex: 1,
    typing: false,
    started: false
  };
  const [state, dispatch] = (0, import_react3.useReducer)(reducer, initialState);
  (0, import_react3.useEffect)(() => {
    if (state.nextIndex === 1 && isVisible && !state.started) {
      dispatch({ type: "SET_STARTED", payload: true });
      for (let i = 0; i <= textArray.length; i++) {
        setTimeout(() => {
          if (i !== textArray.length) {
            dispatch({
              type: "SET_STATE",
              payload: {
                textToDisplay: textArray.slice(0, i).join(""),
                nextIndex: state.nextIndex + 1,
                typing: true
              }
            });
          } else if (i === textArray.length) {
            dispatch({
              type: "SET_STATE",
              payload: {
                textToDisplay: textArray.slice(0, i).join(""),
                nextIndex: state.nextIndex + 1,
                typing: false
              }
            });
          }
        }, delay + i * 110);
      }
    }
  }, [isVisible, state.nextIndex, textArray, delay, state.started]);
  return /* @__PURE__ */ React.createElement("p", {
    className: `skill${state.typing ? " typing" : ""}`
  }, state.textToDisplay);
}

// app/images/LI-In-Bug.png
var LI_In_Bug_default = "/build/_assets/LI-In-Bug-KDAURRRT.png";

// app/images/email.png
var email_default = "/build/_assets/email-3EXVHIS4.png";

// route:/Users/zacharyzboncak/Desktop/Projects/cz-editorial/app/routes/index.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: topbar_default
    },
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: landing_default
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "/site.webmanifest"
    }
  ];
};
var action = async ({ request }) => {
  let body = await request.formData();
  const email = body.get("email");
  const messageBody = body.get("messageBody");
  try {
    const result = await sendEmail({
      email,
      messageBody
    });
    return result;
  } catch (error) {
    return error;
  }
};
function Index() {
  const [displayNotification, setDisplayNotification] = (0, import_react4.useState)(false);
  const [notificationMessage, setNotificationMessage] = (0, import_react4.useState)({
    type: "success",
    message: "Your email was sent!"
  });
  const transition = (0, import_remix4.useTransition)();
  const data = (0, import_remix4.useActionData)();
  (0, import_react4.useEffect)(() => {
    if (data && data.accepted) {
      setDisplayNotification(true);
    } else if (data && !data.accepted) {
      setDisplayNotification(true);
      setNotificationMessage({
        type: "error",
        message: "There was an error when attempting to submit the form, please try again."
      });
    }
  }, [data]);
  return /* @__PURE__ */ React.createElement("main", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, displayNotification && /* @__PURE__ */ React.createElement(Notification, __spreadProps(__spreadValues({}, notificationMessage), {
    setDisplayNotification
  })), /* @__PURE__ */ React.createElement(Topbar, null), /* @__PURE__ */ React.createElement("img", {
    src: cz_editorial_default,
    alt: "CZ Editorial Logo",
    className: "cz-logo"
  }), /* @__PURE__ */ React.createElement(import_react_visibility_sensor.default, null, ({ isVisible }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
      className: "skills",
      id: "skills"
    }, /* @__PURE__ */ React.createElement(Skill, {
      text: "Proofreading",
      delay: 0,
      isVisible
    }), /* @__PURE__ */ React.createElement(Skill, {
      text: "Copyediting",
      delay: 1600,
      isVisible
    }), /* @__PURE__ */ React.createElement(Skill, {
      text: "Researching",
      delay: 3400,
      isVisible
    }), /* @__PURE__ */ React.createElement("div", {
      className: "cursor"
    })));
  }), /* @__PURE__ */ React.createElement("section", {
    className: "about-me",
    id: "about"
  }, /* @__PURE__ */ React.createElement("h2", null, "Hi, my name is Courtney Zboncak."), /* @__PURE__ */ React.createElement("p", null, "I'm here to make sure your work looks its best."), /* @__PURE__ */ React.createElement("p", null, "Whether your work needs copyediting, proofreading, or indexing, I can help. Maybe you need help researching a topic? I can do that, too."), /* @__PURE__ */ React.createElement("p", null, "I specialize in the subjects of biblical & theological studies, with a B.A. from Wheaton College and a M.A. in Theology from Biola University's Talbot School of Theology."), /* @__PURE__ */ React.createElement("p", null, "I have several years of experience working with biblical scholars in higher education, and I bring a detailed eye to written work at any stage of the publication process."), /* @__PURE__ */ React.createElement("p", null, "Contact me for pricing and details.")), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(ContactForm, {
    transitionState: transition.state
  })), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/courtney-zboncak-721431206/",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: LI_In_Bug_default,
    alt: "Linked In Logo"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:courtney@czeditorial.com"
  }, /* @__PURE__ */ React.createElement("img", {
    src: email_default,
    alt: "Email Icon"
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3cab226f", "entry": { "module": "/build/entry.client-LE2DIIAM.js", "imports": ["/build/_shared/chunk-SXNYENQH.js", "/build/_shared/chunk-ERMYNWJS.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ILCSDJUS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/[sitemap.xml]": { "id": "routes/[sitemap.xml]", "parentId": "root", "path": "sitemap.xml", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/[sitemap.xml]-WA7EUYXI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J3C7KQJY.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3CAB226F.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
