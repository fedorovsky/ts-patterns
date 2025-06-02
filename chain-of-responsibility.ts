// Chain of Responsibility Pattern
// Only the first rule whose predicate returns true will handle the input

type NotificationData = {
  type: string;
  message: string;
};

type Rule = {
  // The predicate determines whether this rule should handle the data
  predicate: (data: NotificationData) => boolean;

  // The handler is executed if the predicate returns true
  handler: (data: NotificationData) => void;
};

// Sample rule list
const rules: Rule[] = [
  {
    predicate: (data) => data.type === 'error',
    handler: (data) => console.error('ERROR:', data.message),
  },
  {
    predicate: (data) => data.type === 'info',
    handler: (data) => console.log('INFO:', data.message),
  },
  {
    predicate: (data) => data.type === 'debug',
    handler: (data) => console.debug('DEBUG:', data.message),
  },
];

// This function applies the first matching rule only
function handleNotification(data: NotificationData, rules: Rule[]) {
  const rule = rules.find((r) => r.predicate(data)); // Find the first matching rule
  if (rule) {
    rule.handler(data); // Execute its handler
  } else {
    console.warn('No handler found for type:', data.type); // Fallback if none matched
  }
}

// Example usage:
handleNotification({ type: 'info', message: 'Everything is OK' }, rules);
