# DOM Example - Forms

- Look at `forms.html` and open it in Chrome.
- Open up Chrome DevTools.
- Do the following in the console:

## Part 1

- Use `.innerHTML` to determine the text in the `<label>` with the ID of
  `foodLabel`.
- Notice that we use `.innerHTML` to retrieve the content that sits
  between the `<label>` and `</label>` tags.

document.getElementsByTagName("label").foodLabel.innerHTML

## Part 2

- Use JavaScript to determine what text is entered into the `<input>`
  with the ID of `foodId`.
- Notice how we can't use `.innerHTML` because there *is* no content
  between the `<input>` tags. There's not even a closing `</input>`
  tag!
- Use `.value` to retrieve the entered favorite food instead.

document.getElementsByTagName("input").foodId.value

## Part 3

- Use JavaScript to determine whether or not the "calm" checkbox is
  selected.
- Can you use `.innerHTML`? Is there any HTML inside of the `<input>`
  tags?
- Can you use `.value`?
- You google how to use JavaScript to determine if an HTML checkbox is
  checked and you realize everything I've told you is a lie.

document.getElementsByTagName("input").calmId.checked

## Questions

- When can we use `.innerHTML` and when can we use `.value`?

You can use .innerHTML when there is an opening and closing HTML tag and you can use .value when there is a value attribute inside the HTML tag

- What do you use when determining if a checkbox is checked?

element selector with .checked added to it will return true or false


