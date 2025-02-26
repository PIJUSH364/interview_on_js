### **Best Practices for Securing a Node.js API**

When building a Node.js API, security is crucial to **protect sensitive data, prevent attacks, and ensure reliability**. Here are some **best practices** to secure your API:

---

## **1. Use HTTPS**

- Always use **HTTPS** instead of HTTP to encrypt data in transit.
- This prevents **man-in-the-middle (MITM) attacks** and data interception.
- Get an **SSL/TLS certificate** from Let's Encrypt or a trusted provider.

---

## **2. Secure Authentication & Authorization**

### **Use JWT for Authentication**

- Implement **JSON Web Tokens (JWT)** for secure user authentication.
- Store JWT **securely** (in `HttpOnly` cookies or memory, not local storage).
- **Example: Generating a JWT in Node.js**

  ```javascript
  const jwt = require("jsonwebtoken");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  ```

### **Use Role-Based Access Control (RBAC)**

- Restrict access based on user **roles and permissions**.
- Example: Only allow **admins** to delete users.
  ```javascript
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  ```

### **Enforce Strong Passwords & Hashing**

- Store passwords using **bcrypt** to prevent leaks.
  ```javascript
  const bcrypt = require("bcrypt");
  const hashedPassword = await bcrypt.hash(userPassword, 10);
  ```
- **Do not store passwords in plain text!**

---

## **3. Prevent SQL Injection & NoSQL Injection**

### **Use Parameterized Queries**

If using PostgreSQL/MySQL with Sequelize or Knex:

```javascript
const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
```

If using MongoDB (Mongoose):

```javascript
const user = await User.findOne({ email: req.body.email });
```

🔒 **Never concatenate user inputs in queries!**

---

## **4. Protect Against Cross-Site Scripting (XSS)**

- Sanitize user input using **DOMPurify** or **express-validator**:

  ```javascript
  const { body } = require("express-validator");

  app.post("/comment", [
    body("text").trim().escape()
  ], (req, res) => { ... });
  ```

- Set **Content Security Policy (CSP)** headers to block malicious scripts.

---

## **5. Prevent Cross-Site Request Forgery (CSRF)**

- Use **CSRF tokens** to prevent unauthorized actions.
- If using cookies for authentication, implement CSRF protection:
  ```javascript
  const csrf = require("csurf");
  app.use(csrf());
  ```
- **For APIs**, prefer using JWT in Authorization headers instead of cookies.

---

## **6. Rate Limiting & Brute Force Protection**

### **Use express-rate-limit to prevent API abuse**

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});

app.use(limiter);
```

🔒 **This helps prevent DDoS and brute-force attacks.**

---

## **7. Secure Your Headers with Helmet**

Helmet helps set **secure HTTP headers** to prevent attacks like **clickjacking, MIME sniffing, and XSS**.

```javascript
const helmet = require("helmet");
app.use(helmet());
```

---

## **8. Handle Errors & Hide Stack Traces**

- Never expose **detailed error messages** in production.
- Use a global error handler:
  ```javascript
  app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong!" });
  });
  ```
- Disable **Express error stack traces**:
  ```javascript
  app.set("env", "production");
  ```

---

## **9. Secure Environment Variables**

- Never **hardcode secrets** in the code.
- Store secrets in **.env files** and load them with dotenv:
  ```javascript
  require("dotenv").config();
  const dbPassword = process.env.DB_PASSWORD;
  ```
- **Do not push .env files to GitHub!** Add them to `.gitignore`.

---

## **10. Use Web Application Firewall (WAF)**

- Use a **firewall** like **Cloudflare** or **AWS WAF** to block malicious traffic.

---

## **Final Thoughts**

✅ **Use HTTPS**  
✅ **Secure authentication with JWT & bcrypt**  
✅ **Use parameterized queries to prevent SQL injection**  
✅ **Sanitize inputs to prevent XSS**  
✅ **Enable CSRF protection**  
✅ **Use rate limiting & Helmet for extra security**

Would you like a **practical example** of implementing security in a **Node.js + Express API**? 🚀
