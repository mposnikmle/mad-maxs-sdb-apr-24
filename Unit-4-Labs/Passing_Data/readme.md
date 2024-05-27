## Objective

Extend the [Hello Frenemy WWW Lab](https://github.com/uprighted-learners/unit-4-hello-frenemy-www/tree/solution) and refactor it to utilize conditional routing and URL parameters.

## Learning

In this lab, we will practice conditionally routing a user and utilizing information passed in the URL. All topics described in Hello Frenemy WWW will be utilized along with the following new ones.

Topics:

- [`document.location` Location Object.](https://developer.mozilla.org/en-US/docs/Web/API/Document/location)
- [`URLSearchParams` interface and the `.get()` method.](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## Achieving

In this lab, when a user enters their name, they will either be told to "Go away!" OR be routed to a new page that greets them by name. Their name should be appended as a parameter in the URL so that the new page can access it.

Your work will result in:

- A simple website that uses conditional logic to determine whether or not a user gets access to a new page.

# Procedure

- [ ] Reuse your code from `hello-frenemy-www` in the existing index.html file and the script.js file

## Refactoring the conditional logic

- [ ] _This change will need to occur at the point in the code the user is greeted by name._
- [ ]   In script.js, remove the change to the "computer-response" `textContent` that greets the user by name.
- [ ] In its place, use the `document.location` Location Object. See the following link for more detail: [MDN Document.location](https://developer.mozilla.org/en-US/docs/Web/API/Document/location)
- [ ] Reassign the value of `document.location` to be a concatenation of `/greeting.html?name=` and the "user-input" element value.
- [ ] Test what occurs now when a user submits the form.

## Getting our URL parameters on the new page

- [ ] In `greeting.html`, create an `<h2>` with the id of "friend-greeting"
- [ ] in `greeting.js`, use a query selector to get reference to the new `<h2>` on `greeting.html`.
- [ ] Create a new variable `params` and assign to it the construction of a  `new URLSearchParams()` whose argument is `document.location.search`.
- [ ] Create a new variable `friendName` and assign to it `params` with the `.get` method whose argument is 'name'.
- [ ] Change the text content of the "friend-greeting" element to concatenate a greeting utilizing `friendName`.

# Review

In this lab, we refactored a previous lab to have new functionality including conditional routing and URL parameter utilization.

The software should:

- Ask the user their name and provide a form for user input.
- Either tell the user to "Go away!" or route them to a new page dependent on conditional logic.
- Pass the user's name as a URL parameter to a new page; the new page should utilize this to greet the user by name.

## Going Further

- Refer to the 'Going Further' on Hello Frenemy WWW and complete those suggestions.
- On `greeting.html`, create a new form that represents a mad lib constructor; it should take a past-tense verb and an adjective. Create a new page (`madlib.html`), and pass the friend's name, the past-tense verb, and an adjective in the URL. The new page should display a sentence that utilizes the friend's name, the verb, and the adjective. ("Julie programmed lazily.")

