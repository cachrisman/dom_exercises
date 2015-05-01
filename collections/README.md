# DOM Example - Collections

We're going to practice DOM manipulation for collections of elements.

In the first example, we only grabbed elements that had IDs. This
allowed us to work with individual elements.

However, in this example we're going to select groups of elements and
see how to work with them.

- Look at `collections.html` and examine the HTML.
- Also open `collections.js` in Sublime. We're going to write our JavaScript here.
- Open `collections.html` in Chrome.

## Part 1

- Use `.getElementsByTagName` to retrieve all of the `<li>` elements.
- Set `.style.borderBottom` on *each* of them.

## Part 2

- Use `.getElementsByClassName` to retrieve all of the elements with
  the class of `datatype`.
- Turn all of them `red`.
- Hint: you'll need to use the `.style.color` property and loop over each element.

## Part 3
- Use `.querySelectorAll` to retrieve all of the elements with a class
  of `function`.
- Use a loop to change color of each one to `blue`.

## Further Questions

- What are the differences between `.getElementById`,
  `.getElementsByClassName`, `.getElementsByTagName`, and
  `querySelectorAll`?

  .getElementById("name") is equivalent to .querySelector("#name")
  .getElementsByClassName("name") is equivalent to .querySelectorAll(".name")
  .getElementsByTagName("name") is equivalent to .querySelectorAll("name")

- How did you loop over the lists of elements?

for (var i = 0; i < arr.length; i++){
	
}