### **Difference Between CommonJS and ES Modules**

JavaScript has two major module systems: **CommonJS (CJS)** and **ES Modules (ESM)**. Understanding their differences is crucial when working with **Node.js** and **modern JavaScript frameworks**.

---

## **1. CommonJS (CJS)**

- Default module system in **Node.js** before ES Modules were introduced.
- Uses **`require()`** for importing modules.
- Uses **`module.exports`** or **`exports`** for exporting.

### **Example (CommonJS)**

#### **Exporting a module (`math.js`)**

```javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add }; // Exporting function
```

#### **Importing a module (`app.js`)**

```javascript
// app.js
const math = require("./math"); // Importing module

console.log(math.add(5, 3)); // Output: 8
```

### **Key Features**

✅ Synchronous execution (works well for smaller scripts).  
✅ Widely used in older Node.js projects.  
❌ **Not compatible with browser-based JavaScript** (without bundlers like Webpack).

---

## **2. ES Modules (ESM)**

- Introduced in **ECMAScript 2015 (ES6)** and now widely supported.
- Uses **`import`** and **`export`** instead of `require()`.
- Supports **asynchronous loading**.

### **Example (ES Modules)**

#### **Exporting (`math.js`)**

```javascript
// math.js
export function add(a, b) {
  return a + b;
}
```

#### **Importing (`app.js`)**

```javascript
// app.js
import { add } from "./math.js";

console.log(add(5, 3)); // Output: 8
```

### **Key Features**

✅ Works natively in browsers and Node.js (`"type": "module"` in `package.json`).  
✅ Supports **tree shaking** (removes unused code to optimize bundle size).  
✅ **Asynchronous loading** makes it efficient for modern applications.  
❌ **Cannot use `require()` and `import` in the same file**.

---

## **3. Key Differences Between CommonJS and ES Modules**

| Feature                    | CommonJS (CJS)                      | ES Modules (ESM)                                 |
| -------------------------- | ----------------------------------- | ------------------------------------------------ |
| **Syntax**                 | `require()` / `module.exports`      | `import` / `export`                              |
| **Execution**              | Synchronous (Blocking)              | Asynchronous (Non-blocking)                      |
| **Works in Browser?**      | ❌ No (Needs bundlers like Webpack) | ✅ Yes (Native Support)                          |
| **Supports Tree Shaking?** | ❌ No                               | ✅ Yes                                           |
| **Default in Node.js?**    | ✅ Yes (Pre-ES6)                    | ✅ Yes (If `"type": "module"` in `package.json`) |

---

## **4. When to Use What?**

- Use **CommonJS (CJS)** for **older Node.js projects** or if working with **legacy code**.
- Use **ES Modules (ESM)** for **modern JavaScript projects**, including **React, Vue, and modern Node.js applications**.

Would you like an example of **converting CJS to ESM** in your existing Node.js project? 🚀
