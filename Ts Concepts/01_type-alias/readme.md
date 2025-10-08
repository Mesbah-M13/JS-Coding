# Defination :
-- In TypeScript, type aliases are used to assign a name for any type. It doesn't create a new type. Instead, it provides a name for the type.

# 🧩 1. Syntax of a Type Alias
type TypeName = typeDefinition;

. type → keyword

. TypeName → your custom name

. = → assignment

. typeDefinition → what shape/type it represents

# 💡 2. Example: Object Type Alias
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  name: "Mesbah",
  age: 22,
  isAdmin: true,
};

# 🧱 3. Example: Union Type Alias
type Status = "pending" | "success" | "error";

let apiStatus: Status = "pending"; // ✅ valid

# ⚙️ 4. Example: Function Type Alias
type Greet = (name: string) => string;

const sayHello: Greet = (name) => `Hello, ${name}!`;

# Does type alias create new type ?

❌ No, a Type Alias does not create a new type at runtime — it only gives a new name (an alias) to an existing type at compile time.