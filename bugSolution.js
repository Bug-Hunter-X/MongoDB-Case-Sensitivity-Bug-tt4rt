```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... later in the code ...

if (user.name.toLowerCase() === 'john') {
  // ... some logic ...
}
```
The improved code converts both `user.name` and the comparison string ('john') to lowercase before comparing them.  This ensures that the comparison is case-insensitive, thereby resolving the inconsistency with the case-insensitive MongoDB query.  Alternatively, a case-insensitive comparison method could be used.