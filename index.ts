/**
 * Singleton pattern ensures that a class has only one instance
 * and provides a global point of access to it.
 */
class Singleton {
    /**
     * Holds the sole instance of the class.
     * It remains `undefined` until the first call to `getInstance()`.
     */
    private static instance: Singleton;

    /**
     * Private constructor prevents external instantiation.
     * Any initialization logic (e.g., setting up resources) goes here.
     */
    private constructor() {
        console.log('Singleton created');
    }

    /**
     * Returns the single instance of `Singleton`.
     * - Creates the instance on first invocation (lazy initialization).
     * - On subsequent calls, returns the already created instance.
     *
     * @returns {Singleton} The unique singleton instance.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            // First access — create and store the instance
            Singleton.instance = new Singleton();
        }
        // Return existing instance on every call
        return Singleton.instance;
    }

    /**
     * Example of an instance method.
     * Can be any operation that should only run on the singleton.
     */
    public sayHello(): void {
        console.log('Hello from Singleton!');
    }
}

// ---------------------- Usage Example ----------------------

const s1 = Singleton.getInstance(); // Instantiates the singleton
const s2 = Singleton.getInstance(); // Reuses the same instance

console.log(s1 === s2); // true — both references point to the same object
s1.sayHello();           // Logs: "Hello from Singleton!"
