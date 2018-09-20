# To arrow, or not to arrow

What is the cost of always using arrow functions in classes, even when not necessary?

## What's the difference?

According to the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions):
>An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target.

I want to focus on the fact an arrow function does not have its own `this`. Instead, `this` from the "lexical context" is used, and it is found via normal variable lookup rules (search the enclosing scope for a value). Now in the context of a class, the fact that the lexical context is used to find `this` means everything "just works" when you start passing method references around (which is very common in React applications) because `this` in the arrow function body is what you expect (the instance of the component).

For example, suppose we have the class

```javascript
class MyClass {
  arrowFunction = () => {
    console.log(this);
  };

  nonArrowFunction() {
    console.log(this);
  }
}
```

Babel compiles this to essentially be

```javascript
function MyClass() {
	var _this = this;

	this.arrowFunction = function () {
		console.log(_this); // the value of `this` is captured in `_this`
	}
}

MyClass.prototype.nonArrowFunction = function () {
	console.log(this);
}
```

Notice that the arrow function is defined in the constructor, and uses the variable `_this` to access the instance of the class. Non-arrow methods are added as prototype methods.
