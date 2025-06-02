// Rule Pattern
// All rules whose predicate returns true will be executed

type NotificationData = {
  type: string;
  message: string;
};

type Rule = {
  // Predicate to check if this rule applies
  predicate: (data: NotificationData) => boolean;

  // Handler to perform an action if predicate returns true
  handler: (data: NotificationData) => void;
};

// Set of rules that can all be applied
const rules: Rule[] = [
  {
    predicate: (data) => data.type === 'error' || data.message.includes('fail'),
    handler: (data) => console.error('LOG:', data.message),
  },
  {
    predicate: (data) => data.message.length > 10,
    handler: (data) => console.log('Long message:', data.message),
  },
  {
    predicate: (data) => data.message.includes('hello'),
    handler: (data) => console.log('Greeting detected:', data.message),
  },
];

// This function executes all matching rules
function applyRules(data: NotificationData, rules: Rule[]) {
  const matched = rules.filter((rule) => rule.predicate(data)); // Get all matching rules

  if (matched.length === 0) {
    console.warn('No matching rules for message:', data.message); // Fallback if none matched
  }

  matched.forEach((rule) => rule.handler(data)); // Execute all handlers
}

// Example usage:
applyRules({ type: 'error', message: 'hello, something failed badly' }, rules);
