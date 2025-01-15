Here’s a list of common TypeScript interview questions with concise answers:

### 1. **What is TypeScript?**
   **Answer:**  
   TypeScript is a superset of JavaScript that adds static typing and other features to the language. It compiles down to JavaScript and allows for better tooling, type safety, and scalability for large applications.

### 2. **What are the advantages of using TypeScript over JavaScript?**
   **Answer:**  
   - **Static Typing:** Provides type-checking at compile time, reducing runtime errors.
   - **Enhanced IDE support:** Better autocompletion, refactoring, and error detection.
   - **Object-Oriented Programming:** Supports classes, interfaces, and other OOP concepts more naturally.
   - **Scalability:** Ideal for large codebases and team collaboration.
   - **Compatibility:** It compiles to plain JavaScript, meaning it can run anywhere JavaScript does.

### 3. **What are types in TypeScript?**
   **Answer:**  
   Types in TypeScript are used to define the structure of variables, parameters, return values, and objects. Common types include:
   - **Primitive Types:** `string`, `number`, `boolean`, `void`, `null`, `undefined`.
   - **Object Types:** `object`, `Array<T>`, `Function`, etc.
   - **Custom Types:** Defined with `interface` or `type`.

### 4. **What is the difference between `interface` and `type` in TypeScript?**
   **Answer:**  
   - **`interface`:** Used for defining object shapes and can be extended or merged. It's ideal for defining contracts for objects.
   - **`type`:** More flexible; can define unions, intersections, and other complex types. Can also be used to define object shapes but does not support declaration merging like `interface` does.

### 5. **What are Union Types and Intersection Types in TypeScript?**
   **Answer:**
   - **Union Types:** Allow a variable to have multiple types, e.g., `let value: string | number;`.
   - **Intersection Types:** Combine multiple types into one, e.g., `type A = { name: string }; type B = { age: number }; type C = A & B;` results in a type that requires both `name` and `age`.

### 6. **What is `any` type in TypeScript?**
   **Answer:**  
   The `any` type allows a variable to be of any type, essentially opting out of type checking for that variable. It’s useful when migrating from JavaScript or dealing with dynamic content, but should be avoided for better type safety.

### 7. **What is `unknown` type in TypeScript?**
   **Answer:**  
   `unknown` is similar to `any`, but safer because you must perform some type checking before performing any operations on a variable of type `unknown`.

### 8. **What is the `void` type in TypeScript?**
   **Answer:**  
   `void` is used for functions that don’t return a value. It's the equivalent of `undefined` for function return types.

### 9. **What are generics in TypeScript?**
   **Answer:**  
   Generics allow functions, classes, and interfaces to work with any data type while maintaining type safety. For example, a generic function can be written as:
   ```typescript
   function identity<T>(arg: T): T {
       return arg;
   }
   ```
   This allows the function to be used with different types.

### 10. **Explain type inference in TypeScript.**
   **Answer:**  
   Type inference means that TypeScript can automatically deduce the type of a variable based on its value. For example, if you write `let x = 10;`, TypeScript infers that `x` is of type `number`.

### 11. **What is type assertion in TypeScript?**
   **Answer:**  
   Type assertion is a way to tell TypeScript to treat a value as a specific type. It does not perform any special checking or restructuring of the data. There are two forms of type assertion:
   ```typescript
   let value: any = "Hello";
   let strLength: number = (<string>value).length;  // Angle bracket syntax
   let strLength2: number = (value as string).length;  // "as" syntax
   ```

### 12. **What is `never` type in TypeScript?**
   **Answer:**  
   The `never` type represents a value that never occurs, such as functions that always throw errors or have infinite loops. It’s useful for functions that do not return a value or terminate.
   ```typescript
   function error(message: string): never {
       throw new Error(message);
   }
   ```

### 13. **How does TypeScript handle null and undefined?**
   **Answer:**  
   TypeScript has strict null checks which can be enabled by setting `strictNullChecks: true` in the `tsconfig.json`. With this setting:
   - `null` and `undefined` are not assignable to other types unless explicitly stated.
   - Use `null` and `undefined` with union types to allow variables to be `null` or `undefined`.

### 14. **What is a Tuple in TypeScript?**
   **Answer:**  
   A tuple is an array with a fixed number of elements where each element can have a different type. For example:
   ```typescript
   let person: [string, number] = ["John", 30];
   ```

### 15. **What is the purpose of `readonly` modifier in TypeScript?**
   **Answer:**  
   The `readonly` modifier makes properties of an object or elements of an array immutable. For example:
   ```typescript
   interface Person {
       readonly name: string;
   }
   ```
   In this case, the `name` property cannot be modified after initialization.

### 16. **What are decorators in TypeScript?**
   **Answer:**  
   Decorators are special functions used to modify classes, methods, properties, or parameters at runtime. They are prefixed with `@` and are widely used in frameworks like Angular. For example:
   ```typescript
   @Component
   class MyComponent {}
   ```

### 17. **What is the difference between `==` and `===` in TypeScript?**
   **Answer:**  
   In TypeScript (and JavaScript), `==` compares values with type coercion, whereas `===` compares values without type coercion. It’s recommended to use `===` to avoid unexpected behavior.

### 18. **What is the `as const` assertion in TypeScript?**
   **Answer:**  
   `as const` is used to tell TypeScript that a value is a literal and its type should be narrowed down to its exact value rather than a more general type. For example:
   ```typescript
   let x = 10;  // inferred as number
   let y = 10 as const;  // inferred as 10 (literal type)
   ```

These questions cover a range of topics in TypeScript. If you need deeper explanations or more advanced questions, let me know!
