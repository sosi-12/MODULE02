# Day 16: JavaScript Fundamentals

## Files
- `js/tip.js` - TeleBirr Tip & Split Calculator
- `js/fizzbuzz.js` - TeleBirr FizzBuzz loop
- `js/types.js` - Type coercion tests
- `js/expected.txt` - Output for type tests

---

## Review Answers

1. **`const` vs. `let` vs. `var`**: Use `const` by default, `let` for reassignable variables, and avoid `var` due to function-scoping and hoisting bugs.
2. **`"480" + 20`**: Returns `"48020"` (string concatenation). Fix using `Number("480") + 20` to get `500`.
3. **`==` vs. `===`**: `==` converts types before comparing (loose); `===` checks value and type without conversion (strict).
4. **Ternary Refactor**: `const fee = total >= 1000 ? 0 : 60;`
5. **`for...of` vs. `for`**: Use `for...of` to iterate through array values directly; use `for` when index tracking or custom step logic is needed.
6. **Temporal Dead Zone (TDZ)**: The state between entering scope and variable declaration with `let`/`const`. Avoid errors by declaring variables at the top of their scope.