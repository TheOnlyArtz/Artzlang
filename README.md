# Artzlang
A programming language compiling to JavaScript ☻

## Example
test.js
```js
dec test = "This is a string :D";

func dec <param1, param2> {
  kick "hello";
}
```
compiles to:
```js
let test = "This is a string :D";

function dec (param1, param2) {
  return "hello";
}
```