# Rules and Selectors

## Selectors

### Unversal Selector
*:focus {

  outline: 1px dotted grey;

}
### Type Selector
p {
  padding: 0.5rem;
}

### Class Selector | ID Selector | Attribute Selector

/* Matches password input fields */
input[type="password"] {
  color: red;
}


/* Strikes out any quotes cited from Wikipedia */
blockquote[cite*="wikipedia.org"] {
 text-decoration: line-through;
}


/* Underlines any element with a title attribute containing
   the word "continue" with any Capitalization.
*/

[title*="continue"] i {
  text-decoration: underline;
}

### Attribute Selector Equivalents

Basic Selector    Attribute Selector

Select by ID              #contactForm          [id=contactForm]
Select by Class           .outline              [class~="outline"]

### Combinators

Descendant 
  {
    Combinator: " " (space)
    Example:    nav a
    Description: All anchor tags inside of a nav element
  }

Child
  {
    Combinator: ">" 
    Example:    nav > ul > li
    Description: First list items inside a navigation list, ignoring any items after the first level
  }
  
Sibling
  {
    Combinator: "~" 
    Example:    p ~ p
    Description: All paragraphs (after the first) that share the same parent element
  }
  
Adjacent Sibling
  {
    Combinator: "+" 
    Example:    h2 + p
    Description: All paragraphs that immediately follow an <h2> tag on the same hierarchy
  }

## Pseudo Elements
Pseudo elements allow you to select elements that do not exist within the HTML document, but show on the screen visually. 
Both ::first-letter and ::first-line select a portion of text within an element

While the effect of ::first-letter could be reproduced by adding a <span> tag around the desired letters, for fluid layouts there is actually no other way to select the entire first line of a text block than ::first-line. This is because this rule is applied after the layout has been calculated so that the browser knows which words should be affected by the rule


input[type=text]::placeholder {
  font-family: cursive;
}

::selection {
  background-color: cornflowerblue;
  color: white;
}

::backdrop {
  background: cornflowerblue;
}

Have you selected text on a web site and noticed that the selection highlight was in the site’s brand colors? This can be accomplished with *::selection {background-color: cornflowerblue}.

The background in full-screen browsing mode can be customized using ::backdrop.

## Pseudo Classes
Pseudo classes select elements based upon information that is not available in the HTML document. This may include state or context metadata.
Some of the pseudo classes make it possible to adjust styles based upon user interaction.

•:hover – Match when an element is being hovered over (such as using the mouse)
•:focus – Match an element selected with the keyboard (by tabbing), or with the mouse (by clicking the element)
•:active – Match an element in the process of being activated (such as clicking, while the mouse button is depressed)
•:target – Select an element that has an ID matching the URL’s fragment (the portion after the #)

Displaying tabular data with beautiful formatting is made easy with the positional pseudo classes. Select the first and last rows of a table with tr:first-of-type and tr:last-of-type, respectively. Use the same technique to select the first and last columns using <td>. Highlight every other row using tbody > tr:nth-child(even).
Managing forms and showing helpful indicators can use some of the following pseudo classes:

•:in-range, :out-of-range – Numeric value compared to defined range
•:placeholder-shown – If the placeholder text is currently visible
•:invalid, :valid – Checks the validation status of form fields for error and success indicators
•:checked, :indeterminate  – Used to select a checkbox or radio button that is currently selected or if the selected option cannot be determined
•:default – Matches only if this element is the default in a group of elements (such as the default submit button or the default radio option on a form)
•:disabled, :read-only, :read-write – Matches the current status of a form field based on availability to user interaction
•:optional, :required – Matches fields based upon their required status

Another important pseudo class is the :not() selector, which select elements that do not match a list of selectors. While many of the pseudo classes have their inverse state defined (e.g., :optional vs. :required), there are many other scenarios where negation can be useful. For example, you can select every direct child tag of an <article> that is not an <img> by using article > *:not(img) { ... }.
Many of these pseudo classes provide capabilities to CSS that would otherwise require JavaScript involvement in designing the user experience. By leveraging CSS for context-sensitive UI implementation, we keep application and view logic separate, improving the maintainability and performance of our web sites and web applications

## Declarations

// Border adds to the box model dimension and exists between margin and padding. The outline exists outside the border and takes up no space on the box.
The outline property is very useful for highlighting elements on the screen where you do not want the item to reflow. This is commonly used to highlight elements in combination with the :focus  pseudo class

#Percentage

Many CSS properties  will accept a <percentage> or a <length-percentage> (meaning either a length or a percentage). While the rem is the best choice for many purposes, especially those relating to content and accessibility, percentage works relative to any inherited size including font-relative, view-relative, or even absolute units.
  
  
outline: 2px solid black; 

