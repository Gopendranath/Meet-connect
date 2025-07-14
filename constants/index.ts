export const sidebarLinks = [
    {
        label: "Home",
        route: "/",
        icon: "/icons/Home.svg",
    },
    {
        label: "Upcomming",
        route: "/upcoming",
        icon: "/icons/upcoming.svg",
    },
    {
        label: "Previous",
        route: "/previous",
        icon: "/icons/previous.svg",
    },
    {
        label: "Recordings",
        route: "/recordings",
        icon: "/icons/recordings.svg",
    },
    {
        label: "Personal Room",
        route: "/personal-room",
        icon: "/icons/add-personal.svg",
    },
    {
        label: "Practice",
        route: "/practice",
        icon: "/icons/practice.svg",
    }
]

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];

export type QnAType = {
    topic: string;
    qa: {
        question: string;
        answer: string;
    }[];
};

export const QnA: QnAType[] = [
    {
        topic: "React",
        qa: [
            {
                question: "What is React?",
                answer: "React is an open-source JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components."
            },
            {
                question: "What is the Virtual DOM?",
                answer: "The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the 'real' DOM. This process, called reconciliation, allows React to update only the changed parts of the UI, improving performance."
            },
            {
                question: "What are React Hooks?",
                answer: "Hooks are functions (like `useState` and `useEffect`) that let you 'hook into' React state and lifecycle features from function components. They allow you to use state and other React features without writing a class."
            }
        ]
    },
    {
        topic: "Next.js",
        qa: [
            {
                question: "What is Next.js and how does it relate to React?",
                answer: "Next.js is a popular open-source framework built on top of React. It provides production-ready features like server-side rendering (SSR), static site generation (SSG), and file-system based routing out of the box."
            },
            {
                question: "What is the difference between Server-Side Rendering (SSR) and Static Site Generation (SSG)?",
                answer: "SSR generates the HTML for a page on the server for each request, which is great for dynamic data. SSG generates the HTML at build time, making it incredibly fast to serve from a CDN, which is ideal for content that doesn't change often."
            },
            {
                question: "What is the role of the `app` directory in modern Next.js?",
                answer: "The `app` directory is a new routing and rendering architecture in Next.js (13+) that introduces React Server Components, simplified data fetching, and nested layouts, allowing for more flexible and powerful application structures."
            }
        ]
    },
    {
        topic: "Tailwind CSS",
        qa: [
            {
                question: "What is Tailwind CSS?",
                answer: "Tailwind CSS is a utility-first CSS framework. Instead of providing pre-styled components, it provides low-level utility classes (e.g., `flex`, `pt-4`, `text-center`) that you compose directly in your HTML to build custom designs."
            },
            {
                question: "How does Tailwind CSS keep its final file size small?",
                answer: "It uses a Just-In-Time (JIT) compiler that scans your template files for class names and only generates the corresponding CSS. This means your final CSS bundle includes only the styles you are actually using, making it highly optimized."
            },
            {
                question: "What is the purpose of the `tailwind.config.js` file?",
                answer: "The `tailwind.config.js` file is the central place to customize your Tailwind installation. You can use it to define your own color palette, spacing scale, fonts, and extend the framework's default design system."
            }
        ]
    },
    {
        topic: "JavaScript",
        qa: [
            {
                question: "What is the difference between `==` and `===` in JavaScript?",
                answer: "`==` (loose equality) compares two values for equality after performing type conversion. `===` (strict equality) compares both the value and the type, without any type conversion. It is generally recommended to use `===`."
            },
            {
                question: "What is a closure?",
                answer: "A closure is a function that has access to its outer function's scope, even after the outer function has returned. This means it 'remembers' the environment in which it was created."
            },
            {
                question: "What do `async` and `await` do?",
                answer: "`async` and `await` are modern syntax for handling asynchronous operations, built on top of Promises. An `async` function always returns a Promise, and `await` pauses the execution of the function until that Promise is resolved or rejected, making async code look more synchronous."
            }
        ]
    },
    {
        topic: "HTML",
        qa: [
            {
                question: "What does HTML stand for?",
                answer: "HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure web pages and their content."
            },
            {
                question: "What is the difference between `<div>` and `<span>`?",
                answer: "`<div>` is a block-level element, meaning it starts on a new line and takes up the full width available. `<span>` is an inline-level element, meaning it does not start on a new line and only takes up as much width as necessary."
            },
            {
                question: "What is semantic HTML?",
                answer: "Semantic HTML uses tags that describe the meaning and structure of the content, rather than just its presentation. Examples include `<header>`, `<footer>`, `<article>`, and `<nav>`. This improves accessibility and SEO."
            }
        ]
    },
    {
        topic: "CSS",
        qa: [
            {
                question: "What does CSS stand for?",
                answer: "CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation (look and formatting) of a document written in HTML."
            },
            {
                question: "What is the CSS Box Model?",
                answer: "The CSS Box Model is a concept that describes how every HTML element is represented as a rectangular box. It consists of four parts: the content itself, padding, border, and margin."
            },
            {
                question: "What is the difference between `flexbox` and `grid`?",
                answer: "Flexbox is designed for one-dimensional layouts (either a row or a column). Grid is designed for two-dimensional layouts (rows and columns simultaneously), making it better suited for complex page layouts."
            }
        ]
    },
    {
        topic: "Python",
        qa: [
            {
                question: "What are the key features of Python?",
                answer: "Python is known for its simple, readable syntax, dynamic typing, and being an interpreted language. It has a large standard library and is widely used in web development, data science, automation, and AI."
            },
            {
                question: "What is the difference between a list and a tuple in Python?",
                answer: "The main difference is that lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed). Lists are defined with square brackets `[]` and tuples with parentheses `()`."
            },
            {
                question: "What does the `self` keyword mean in a Python class?",
                answer: "`self` represents the instance of the class. By using `self`, we can access the attributes and methods of the class in Python. It is the first argument passed to any method within a class."
            }
        ]
    },
    {
        topic: "Java",
        qa: [
            {
                question: "What is the JVM?",
                answer: "The JVM, or Java Virtual Machine, is an abstract machine that enables a computer to run a Java program. It interprets the compiled Java bytecode, allowing Java to be a 'write once, run anywhere' language."
            },
            {
                question: "What are the four main principles of Object-Oriented Programming (OOP)?",
                answer: "The four main principles of OOP are Encapsulation (bundling data and methods), Abstraction (hiding complex implementation details), Inheritance (allowing a new class to adopt properties of another), and Polymorphism (allowing an object to take many forms)."
            },
            {
                question: "What is the difference between `final`, `finally`, and `finalize`?",
                answer: "`final` is a keyword used to declare a constant variable, a method that cannot be overridden, or a class that cannot be inherited. `finally` is a block used in exception handling to execute code regardless of whether an exception is thrown. `finalize` is a method called by the garbage collector before an object is reclaimed."
            }
        ]
    },
    {
        topic: "C++",
        qa: [
            {
                question: "What is a major difference between C and C++?",
                answer: "The biggest difference is that C++ supports Object-Oriented Programming (OOP) concepts like classes, inheritance, and polymorphism, while C is a procedural programming language."
            },
            {
                question: "What is a pointer in C++?",
                answer: "A pointer is a variable that stores the memory address of another variable. It allows for direct memory manipulation, dynamic memory allocation, and efficient handling of data structures."
            },
            {
                question: "What is RAII (Resource Acquisition Is Initialization)?",
                answer: "RAII is a core C++ programming technique that binds the life cycle of a resource (like memory or a file handle) to the lifetime of an object. The resource is acquired in the object's constructor and released in its destructor, preventing resource leaks."
            }
        ]
    },
    {
        topic: "C#",
        qa: [
            {
                question: "What is the .NET framework?",
                answer: "The .NET Framework (and its modern successor, .NET) is a software development platform developed by Microsoft. It provides a large class library called the Framework Class Library (FCL) and a runtime environment called the Common Language Runtime (CLR) for building and running applications, with C# being the primary language."
            },
            {
                question: "What is the difference between a `struct` and a `class` in C#?",
                answer: "A `class` is a reference type, meaning it is stored on the heap and passed by reference. A `struct` is a value type, meaning it is stored on the stack and passed by value. Structs are generally used for small, simple data structures."
            },
            {
                question: "What is LINQ?",
                answer: "LINQ (Language Integrated Query) is a feature in C# that provides a unified, SQL-like syntax for querying data from different sources (like collections, databases, or XML) directly within the language."
            }
        ]
    },
    {
        topic: "PHP",
        qa: [
            {
                question: "What is PHP primarily used for?",
                answer: "PHP (Hypertext Preprocessor) is a server-side scripting language primarily used for web development. It can be embedded directly into HTML and is widely used to create dynamic web pages and manage databases."
            },
            {
                question: "What is Composer in the context of PHP?",
                answer: "Composer is a dependency manager for PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you, similar to npm for Node.js or pip for Python."
            },
            {
                question: "What is the difference between `include` and `require` in PHP?",
                answer: "Both are used to include a file in a PHP script. The key difference is error handling: `require` will produce a fatal error and stop the script if the file is not found, while `include` will only produce a warning and the script will continue."
            }
        ]
    },
    {
        topic: "Ruby",
        qa: [
            {
                question: "What is Ruby's programming philosophy?",
                answer: "Ruby's philosophy is centered on 'developer happiness' and simplicity. It aims to be a natural, intuitive language, often summarized by the principle of 'least surprise,' where the language behaves as a developer would expect."
            },
            {
                question: "What is a 'gem' in Ruby?",
                answer: "A 'gem' is a packaged library or application in the Ruby ecosystem. RubyGems is the package manager for Ruby that allows developers to easily find, install, and manage these gems."
            },
            {
                question: "What is Ruby on Rails?",
                answer: "Ruby on Rails (or just 'Rails') is a popular server-side web application framework written in Ruby. It follows conventions like 'Convention over Configuration' (CoC) and 'Don't Repeat Yourself' (DRY) to make web development faster and more efficient."
            }
        ]
    },
    {
        topic: "Go",
        qa: [
            {
                question: "Who created Go and what are its main goals?",
                answer: "Go (or Golang) was created by Google. Its main goals are simplicity, efficiency, and strong support for concurrency. It is statically typed and compiled, making it very performant."
            },
            {
                question: "What are goroutines?",
                answer: "A goroutine is a lightweight thread managed by the Go runtime. They allow for concurrent programming, making it easy to run many functions simultaneously without the high overhead of traditional OS threads."
            },
            {
                question: "What are channels in Go?",
                answer: "Channels are a typed conduit through which you can send and receive values with the `<-` operator. They are used to communicate and synchronize between goroutines, ensuring safe data sharing."
            }
        ]
    },
    {
        topic: "Swift",
        qa: [
            {
                question: "What is Swift primarily used for?",
                answer: "Swift is a general-purpose, compiled programming language developed by Apple. It is primarily used for developing applications for Apple's platforms: iOS, iPadOS, macOS, watchOS, and tvOS."
            },
            {
                question: "What does it mean that Swift is a 'type-safe' language?",
                answer: "Type safety means the language helps you be clear about the types of values your code can work with. If your code expects a `String`, you can't pass it an `Int` by mistake, which helps catch errors early in development."
            },
            {
                question: "What are optionals in Swift?",
                answer: "Optionals are a feature used to handle the absence of a value. An optional can either contain a value or be `nil` (no value). They force developers to safely handle cases where a value might be missing, preventing null-pointer errors."
            }
        ]
    },
    {
        topic: "Rust",
        qa: [
            {
                question: "What are Rust's main goals and selling points?",
                answer: "Rust's main goals are performance, reliability, and productivity. Its key selling points are memory safety without a garbage collector, fearless concurrency, and zero-cost abstractions."
            },
            {
                question: "What is the 'ownership' system in Rust?",
                answer: "Ownership is a set of rules that the Rust compiler checks at compile time to manage memory. Every value has a single owner, and when the owner goes out of scope, the value is dropped. This system prevents memory leaks and data races."
            },
            {
                question: "What is the purpose of the 'borrow checker'?",
                answer: "The borrow checker is the part of the Rust compiler that enforces the ownership and borrowing rules. It ensures that references to data do not outlive the data they point to, guaranteeing memory safety at compile time."
            }
        ]
    },
    {
        topic: "Kotlin",
        qa: [
            {
                question: "What is Kotlin and what is its relationship with Java?",
                answer: "Kotlin is a modern, statically typed programming language. It is 100% interoperable with Java, meaning you can have both Kotlin and Java code in the same project. Google has designated it as the preferred language for Android development."
            },
            {
                question: "What is 'null safety' in Kotlin?",
                answer: "Kotlin's type system aims to eliminate the risk of null pointer exceptions. It distinguishes between nullable references (which can hold `null`) and non-nullable references. You must explicitly handle potential nulls at compile time."
            },
            {
                question: "What are data classes in Kotlin?",
                answer: "A data class is a concise way to create a class that is primarily used to hold data. The compiler automatically generates standard methods like `equals()`, `hashCode()`, `toString()`, and `copy()` based on the properties in the primary constructor."
            }
        ]
    },
    {
        topic: "TypeScript",
        qa: [
            {
                question: "What is TypeScript?",
                answer: "TypeScript is a strongly typed programming language that builds on JavaScript. It is a 'superset' of JavaScript, meaning any valid JavaScript code is also valid TypeScript code. It adds static types, which helps catch errors during development."
            },
            {
                question: "Why use TypeScript over plain JavaScript?",
                answer: "The primary benefit is static type-checking. This allows developers to catch type-related errors at compile time rather than at runtime. It also improves code quality, readability, and provides better autocompletion and tooling in code editors."
            },
            {
                question: "What is a `.d.ts` file?",
                answer: "A `.d.ts` file is a 'declaration file' in TypeScript. It contains only type information and does not contain any implementation code. These files are used to provide type definitions for existing JavaScript libraries that were not written in TypeScript."
            }
        ]
    },
    {
        topic: "SQL",
        qa: [
            {
                question: "What does SQL stand for?",
                answer: "SQL stands for Structured Query Language. It is the standard language for managing and manipulating data in relational databases (like MySQL, PostgreSQL, and SQL Server)."
            },
            {
                question: "What is the difference between a `PRIMARY KEY` and a `FOREIGN KEY`?",
                answer: "A `PRIMARY KEY` is a constraint that uniquely identifies each record in a table. A `FOREIGN KEY` is a key used to link two tables together; it is a field in one table that refers to the `PRIMARY KEY` in another table."
            },
            {
                question: "What is the difference between `JOIN` and `UNION`?",
                answer: "`JOIN` combines columns from different tables based on a related column between them. `UNION` combines rows from two or more `SELECT` statements into a single result set, but the columns must be of the same number and have similar data types."
            }
        ]
    },
    {
        topic: "NoSQL",
        qa: [
            {
                question: "What is a NoSQL database?",
                answer: "A NoSQL (often interpreted as 'Not Only SQL') database is a database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. They are often more flexible and scalable."
            },
            {
                question: "What are the main types of NoSQL databases?",
                answer: "The four main types are: 1) Document databases (e.g., MongoDB), 2) Key-value stores (e.g., Redis), 3) Column-family stores (e.g., Cassandra), and 4) Graph databases (e.g., Neo4j)."
            },
            {
                question: "When would you choose a NoSQL database over a SQL database?",
                answer: "You might choose NoSQL for applications with large amounts of unstructured or semi-structured data, a need for high scalability and availability (horizontal scaling), or a flexible schema that may change frequently. SQL is often better for applications requiring complex queries and ACID-compliant transactions."
            }
        ]
    },
    {
        topic: "GraphQL",
        qa: [
            {
                question: "What is GraphQL?",
                answer: "GraphQL is a query language for your API and a server-side runtime for executing those queries with your existing data. It allows clients to request exactly the data they need, and nothing more."
            },
            {
                question: "How does GraphQL prevent over-fetching and under-fetching of data compared to REST?",
                answer: "In REST, an endpoint returns a fixed data structure, which can lead to over-fetching (getting more data than needed) or under-fetching (needing to make multiple API calls). With GraphQL, the client specifies the exact fields it needs, so the server returns only that data in a single request."
            },
            {
                question: "What are the three main operation types in GraphQL?",
                answer: "The three main operation types are: 1) `Query` for reading or fetching data, 2) `Mutation` for writing or changing data (create, update, delete), and 3) `Subscription` for receiving real-time data updates from the server."
            }
        ]
    },
    {
        topic: "RESTful API",
        qa: [
            {
                question: "What does REST stand for?",
                answer: "REST stands for Representational State Transfer. It is an architectural style for designing networked applications, relying on a stateless, client-server communication protocol, most commonly HTTP."
            },
            {
                question: "What are the main HTTP methods used in a RESTful API?",
                answer: "The main methods are: `GET` (to retrieve a resource), `POST` (to create a new resource), `PUT` (to update/replace an existing resource), `PATCH` (to partially update a resource), and `DELETE` (to remove a resource)."
            },
            {
                question: "What does it mean for a REST API to be 'stateless'?",
                answer: "Statelessness means that the server does not store any information about the client's state between requests. Each request from a client must contain all the information necessary for the server to understand and process it."
            }
        ]
    },
    {
        topic: "WebSocket",
        qa: [
            {
                question: "What is a WebSocket?",
                answer: "A WebSocket is a computer communications protocol that provides a full-duplex (two-way) communication channel over a single, long-lived TCP connection. It's designed to be implemented in web browsers and web servers."
            },
            {
                question: "How is a WebSocket different from traditional HTTP?",
                answer: "HTTP is a request-response protocol, where the client sends a request and the server sends a response. WebSocket establishes a persistent connection, allowing both the client and server to send data to each other at any time, which is ideal for real-time applications."
            },
            {
                question: "What are some common use cases for WebSockets?",
                answer: "Common use cases include real-time applications like chat apps, live notifications, online multiplayer games, and collaborative editing tools where low-latency, bidirectional communication is essential."
            }
        ]
    },
    {
        topic: "WebRTC",
        qa: [
            {
                question: "What does WebRTC stand for and what is it?",
                answer: "WebRTC stands for Web Real-Time Communication. It is an open-source project that provides web browsers and mobile applications with real-time communication capabilities via simple APIs."
            },
            {
                question: "What kind of communication does WebRTC enable?",
                answer: "WebRTC enables peer-to-peer (P2P) communication directly between browsers, allowing for the streaming of audio, video, and arbitrary data without requiring an intermediary server for the data itself."
            },
            {
                question: "What is a STUN/TURN server's role in WebRTC?",
                answer: "A STUN server helps peers discover their public IP addresses to establish a direct connection. If a direct connection fails (due to firewalls or NATs), a TURN server is used to relay the traffic between the peers, ensuring the connection can be established."
            }
        ]
    },
    {
        topic: "React Native",
        qa: [
            {
                question: "What is React Native?",
                answer: "React Native is an open-source framework created by Facebook for building native mobile applications using JavaScript and React. It allows developers to write code once and deploy it on both iOS and Android."
            },
            {
                question: "How does React Native achieve native performance?",
                answer: "React Native uses a 'bridge' to invoke native rendering APIs in Objective-C (for iOS) or Java (for Android). This means your app's UI is rendered using genuine native components, not webviews, providing a true native look, feel, and performance."
            },
            {
                question: "Can you use any web-based library in React Native?",
                answer: "No. You cannot use libraries that depend on HTML or the browser DOM (like a standard charting library). You must use libraries and components specifically designed for the React Native environment, which provides its own set of UI components like `<View>` and `<Text>` instead of `<div>` and `<p>`."
            }
        ]
    },
    {
        topic: "Flutter",
        qa: [
            {
                question: "What is Flutter?",
                answer: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for mobile, web, and desktop from a single codebase, written in the Dart language."
            },
            {
                question: "What is the key difference between Flutter and React Native's rendering approach?",
                answer: "React Native uses a bridge to translate JavaScript components into native platform widgets. Flutter, however, does not use native widgets; it has its own rendering engine (Skia) and draws every pixel on the screen itself, providing a highly consistent UI across all platforms."
            },
            {
                question: "What is the concept of 'everything is a widget' in Flutter?",
                answer: "In Flutter, the entire UI is built by composing widgets. A widget can define a structural element (like a button or menu), a stylistic element (like a font or color), or a layout aspect (like padding). Even the application itself is a widget."
            }
        ]
    },
    {
        topic: "Vue.js",
        qa: [
            {
                question: "What is Vue.js?",
                answer: "Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed from the ground up to be incrementally adoptable, meaning you can use it as a simple library for a small part of a page or as a full-featured framework for complex applications."
            },
            {
                question: "What is a single-file component (SFC) in Vue?",
                answer: "A single-file component is a file with a `.vue` extension that encapsulates the component's template (HTML), logic (JavaScript), and styling (CSS) in one file. This makes components self-contained and easier to manage."
            },
            {
                question: "What is the difference between `v-if` and `v-show`?",
                answer: "`v-if` is a 'real' conditional rendering directive because it ensures the element and its child components are actually destroyed and re-created during toggles. `v-show` always keeps the element in the DOM and simply toggles its CSS `display` property."
            }
        ]
    },
    {
        topic: "Angular",
        qa: [
            {
                question: "What is Angular?",
                answer: "Angular is a comprehensive, platform-and-framework for building single-page client applications using HTML and TypeScript. It is developed and maintained by Google and is known for being a complete, opinionated solution."
            },
            {
                question: "What is dependency injection in Angular?",
                answer: "Dependency Injection (DI) is a core design pattern in Angular where a class receives its dependencies from an external source rather than creating them itself. This makes components more reusable, maintainable, and testable."
            },
            {
                question: "What is the difference between a Component and a Directive?",
                answer: "In Angular, a Component is a directive with a template; it's the main building block for UIs. A Directive is used to add behavior to an existing DOM element (an attribute directive) or to manipulate the DOM layout (a structural directive like `*ngIf`). Essentially, a component is a specific type of directive."
            }
        ]
    }
];