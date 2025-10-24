### Challenges
[Passing Props](passing-props/readme.md) \
[Conditional Rendering](conditional-rendering/readme.md) \
[Rendering Lists](rendering-lists/readme.md) \
[Pure Components](pure-components/readme.md)

[Todo UI](todo-ui/README.md)

### Questions
a. The key is meant to help keep track of individual elements in an array. This is especially important for when you want to access an element in an array but it got moved from an array operation such as sorting or slicing.

b. The `children` prop represents all child nodes of a jsx element.

c. A pure function is a function that has no side effects, i.e. it doesn't modify any memory outside of its scope, and always gives the same output for each input. A pure component is in the same vein; it should not modify any memory outside of the scope of itself and have a deterministic output agnostic of when exactly it's rendered.

d. Conditional rendering is the concept of rendering elements based on conditions from the data they're made from. It can be implemented effectively in one of 3 ways.

    1. You can use if statements and store the jsx in a variable to render.
    2. You can use the ternary operator to conditionally render inside of jsx.
    3. You can use the && operator to conditionall render inside of jsx while ignoring the falsy condition.
