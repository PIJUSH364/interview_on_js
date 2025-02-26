### **ACID in Databases**

ACID stands for **Atomicity, Consistency, Isolation, and Durability**—four key properties that ensure reliable **database transactions**.

---

### **1. Atomicity (All or Nothing)**

A transaction must be **fully completed** or **fully rolled back**—no partial execution.

✅ **Example:**  
Imagine transferring **₹500 from Account A to Account B**.

- **Step 1**: Debit ₹500 from A.
- **Step 2**: Credit ₹500 to B.

If the system crashes after Step 1 but before Step 2, **Atomicity** ensures the transaction is rolled back, keeping the data consistent.

🚨 **Without Atomicity:**  
Money gets deducted from A, but B doesn’t receive it—causing **data inconsistency**.

---

### **2. Consistency (Valid State Before & After)**

A transaction **must maintain database rules** before and after execution.

✅ **Example:**

- If an account **must always have a non-negative balance**, a transaction trying to **withdraw ₹1000 from ₹500** should **fail** to maintain consistency.

🚨 **Without Consistency:**

- The database could allow invalid data, like negative balances.

---

### **3. Isolation (Transactions Don’t Interfere)**

Multiple transactions **executing simultaneously** should **not** affect each other.

✅ **Example:**

- **Transaction 1**: Transfers ₹500 from A to B.
- **Transaction 2**: Reads A’s balance **at the same time**.

If **Transaction 2** sees an **intermediate balance** before Transaction 1 commits, it can cause incorrect calculations. **Isolation** ensures that each transaction runs independently.

🚨 **Without Isolation:**

- One transaction reads incomplete data, leading to **dirty reads** or **race conditions**.

---

### **4. Durability (Changes are Permanent)**

Once a transaction is **committed**, the changes must **persist**, even if the system crashes.

✅ **Example:**

- After a successful ₹500 transfer, the changes are **written to disk** so they aren’t lost after a power failure.

🚨 **Without Durability:**

- A system crash could wipe out committed transactions, causing **data loss**.

---

### **Why is ACID Important?**

- Ensures **data integrity** in banking, e-commerce, and enterprise applications.
- Prevents **corrupt or inconsistent data** in concurrent environments.
- Provides **reliable transactions**, making databases trustworthy.

Would you like a real-world example in PostgreSQL using transactions? 🚀

### **Dirty Reads & Race Conditions in Transactions**

When multiple transactions execute concurrently, **data inconsistency** can arise if proper isolation levels are not maintained. Two common issues are **dirty reads** and **race conditions**.

---

## **1. Dirty Reads (Reading Uncommitted Data)**

A **dirty read** occurs when **one transaction reads data that another transaction has modified but not yet committed**. If the second transaction rolls back, the first transaction ends up with incorrect data.

### **Example of Dirty Read**

#### **Scenario: Bank Account Balance Update**

Let's say we have an account balance of ₹10,000.

- **Transaction 1 (T1):** Withdraws ₹5,000, updating the balance to ₹5,000 but does not commit immediately.
- **Transaction 2 (T2):** Reads the balance while T1 is still running and sees ₹5,000.
- **T1 then ROLLS BACK** (meaning the balance remains ₹10,000).
- **T2 had already read the incorrect ₹5,000 balance** and may make incorrect decisions based on that.

#### **SQL Example of Dirty Read**

```sql
-- Transaction 1: Modify balance but don't commit
BEGIN;
UPDATE accounts SET balance = 5000 WHERE id = 1;
-- Transaction not committed yet

-- Transaction 2: Reads the balance (Dirty Read)
SELECT balance FROM accounts WHERE id = 1; -- Returns ₹5000 (Incorrect)

-- Transaction 1: Rolls back
ROLLBACK;
```

✅ **Solution:** Use **higher isolation levels** like **Read Committed** or **Serializable** to prevent dirty reads.

---

## **2. Race Conditions (Concurrent Access Issues)**

A **race condition** occurs when **two or more transactions modify the same data simultaneously** without proper isolation, leading to unexpected behavior.

### **Example of a Race Condition**

#### **Scenario: Two Users Buying the Last Item in Stock**

- The inventory shows **1 item left**.
- **User A** and **User B** both place orders at the same time.
- Both transactions check the stock and see **1 item available**.
- Both proceed to purchase, reducing the stock to **-1 (invalid state!)**.

#### **SQL Example of Race Condition**

```sql
-- Transaction 1 (User A)
BEGIN;
SELECT stock FROM products WHERE id = 101; -- Returns 1
-- User A decides to buy

-- Transaction 2 (User B)
BEGIN;
SELECT stock FROM products WHERE id = 101; -- Returns 1
-- User B also decides to buy

-- Both Users Reduce Stock to 0
UPDATE products SET stock = stock - 1 WHERE id = 101;

-- Both transactions COMMIT, but stock is now -1 (Invalid!)
COMMIT;
```

✅ **Solution:**

- Use **locking mechanisms** (`SELECT ... FOR UPDATE`).
- Use **higher isolation levels** like **Serializable** to prevent concurrent modifications.

---

## **How to Prevent These Issues?**

- **Dirty Reads** → Use `READ COMMITTED` isolation level.
- **Race Conditions** → Use `SERIALIZABLE` isolation level or explicit locks.
- **Locking Rows Explicitly** → Use `SELECT ... FOR UPDATE` to prevent changes by other transactions.

Would you like an example using PostgreSQL transactions in Node.js? 🚀

### **Transactions in PostgreSQL**

A **transaction** in PostgreSQL is a sequence of one or more database operations that are executed **as a single unit of work**. Transactions follow **ACID** properties (Atomicity, Consistency, Isolation, Durability) to ensure data integrity.

### **Why Use Transactions?**

- Prevent **partial updates** in case of failures.
- Ensure **data consistency** when multiple operations depend on each other.
- Handle **concurrent modifications** safely.

---

## **Implementing Transactions in PostgreSQL using Sequelize**

Sequelize provides built-in support for transactions. Here’s how you can use it:

### **1. Basic Transaction Example**

```javascript
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("postgres://user:password@localhost:5432/mydb");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  balance: DataTypes.INTEGER,
});

async function transferFunds(senderId, receiverId, amount) {
  const t = await sequelize.transaction(); // Start a transaction

  try {
    // Deduct amount from sender
    const sender = await User.findByPk(senderId, { transaction: t });
    if (sender.balance < amount) {
      throw new Error("Insufficient balance");
    }
    sender.balance -= amount;
    await sender.save({ transaction: t });

    // Add amount to receiver
    const receiver = await User.findByPk(receiverId, { transaction: t });
    receiver.balance += amount;
    await receiver.save({ transaction: t });

    // Commit transaction
    await t.commit();
    console.log("Transaction successful");
  } catch (error) {
    // Rollback in case of error
    await t.rollback();
    console.error("Transaction failed:", error.message);
  }
}

// Example usage
transferFunds(1, 2, 500);
```

### **How It Works:**

1. Starts a **transaction** using `sequelize.transaction()`.
2. Performs **multiple database operations** inside the transaction.
3. **Commits the transaction** if all operations succeed.
4. **Rolls back the transaction** if any operation fails.

---

### **2. Using Managed Transactions (Auto-handling Commit/Rollback)**

Sequelize also allows a **simplified approach** using the managed transaction API.

```javascript
await sequelize.transaction(async (t) => {
  const sender = await User.findByPk(1, { transaction: t });
  sender.balance -= 500;
  await sender.save({ transaction: t });

  const receiver = await User.findByPk(2, { transaction: t });
  receiver.balance += 500;
  await receiver.save({ transaction: t });

  // No need to manually commit; Sequelize handles it.
});
```

### **Benefits of Managed Transactions:**

- Less boilerplate code.
- Sequelize **automatically commits** on success and **rolls back** on failure.

---

### **Best Practices for Transactions in Sequelize**

✅ Always **handle errors properly** to ensure rollback.  
✅ Use **`SELECT ... FOR UPDATE`** to prevent race conditions.  
✅ Avoid **long-running transactions** to prevent locking issues.  
✅ Prefer **managed transactions** unless you need fine-grained control.

Would you like an example with **nested transactions** or **savepoints**? 🚀
