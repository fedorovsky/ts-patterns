// Chain of Responsibility Pattern
// Only the first rule whose predicate returns true will handle the input

// Define allowed log types (can be extended)
type LogType = 'info' | 'warn' | 'error' | string;

// Define the structure of the log data
interface LogData {
  type: LogType;
  message: string;
}

// Define the structure of each handler in the chain
interface Handler {
  predicate: (data: LogData) => boolean; // condition to check if handler should process the data
  handler: (data: LogData) => void;      // actual function to handle the data
}

// List of handlers that form the chain of responsibility
const handlers: Handler[] = [
  {
    predicate: (data) => data.type === 'error',
    handler: (data) => console.error('❌ ERROR:', data.message),
  },
  {
    predicate: (data) => data.type === 'warn',
    handler: (data) => console.warn('⚠️ WARNING:', data.message),
  },
  {
    predicate: (data) => data.type === 'info',
    handler: (data) => console.log('ℹ️ INFO:', data.message),
  },
  {
    // Fallback handler if none of the above match
    predicate: () => true,
    handler: (data) => console.log('🔄 UNKNOWN TYPE:', data),
  },
];

// Function to process a log entry using the first matching handler
function handleLog(data: LogData): void {
  for (const { predicate, handler } of handlers) {
    if (predicate(data)) {
      handler(data);
      break; // stop the chain after the first match
    }
  }
}

// Example usage
handleLog({ type: 'info', message: 'Server started' });
// ℹ️ INFO: Server started

handleLog({ type: 'warn', message: 'Low disk space' });
// ⚠️ WARNING: Low disk space

handleLog({ type: 'error', message: 'Unhandled exception' });
// ❌ ERROR: Unhandled exception

handleLog({ type: 'debug', message: 'This is debug info' });
// 🔄 UNKNOWN TYPE: { type: 'debug', message: 'This is debug info' }
