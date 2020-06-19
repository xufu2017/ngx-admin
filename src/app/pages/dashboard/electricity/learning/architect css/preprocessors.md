# SCSS
## Nesting
  &:hover { border: dotted 1px cornflowerblue; }
  &:focus { border: solid 1px cadetblue; }
  &:active { border: double 1px darkcyan; }

The ampersand refers back to the parent element, so the hover is placed on the anchor tag when it is a link, or a visited link. Nesting here makes it very clear that the hover, focus, and active selectors are all children of a:link and a:visited.

## Color Functions and Variables

$primary: #AEC5EB;
$accent: #E9AFA3;

button {
  color: $light-text;
  background: $primary;
  border: $border;
  padding: $spacing;
}

## Mixins
Mixins allow developers to create sets of properties and values that can easily be reused throughout the application.

### Simple Mixin
simple mixin to define a set of properties in one place and then include them in another context. The @include property is used to assign the previously defined mixin to the new context – an element in this case – but it could just as easily be included within a class definition.

#### Parameters
Mixins can also take parameters in order to change the outputs of the mixin based on the parameters passed, as shown with the $elevation parameter in Listing 


@mixin card($elevation) {
  background: white;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 1rem;

  $offset: $elevation * 1;
  $blur: $elevation * 2;
  box-shadow: #{$offset}px #{$offset}px #{$blur}px silver;
}

div {
  @include card(3);
}

#### Arguments

Logic can also be added within the mixin. 
@mixin card($elevation) {
  background: white;
  ....
  @if $elevation == 0 {

    border: solid 1px silver;

  } @else {

    $offset: $elevation * 1;

    $blur: $elevation * 2;

    box-shadow: #{$offset}px #{$offset}px #{$blur}px silver;

  }
  
The advantage of using mixins, especially with arguments, is that it allows for DRY code. The code is written once and managed in one place but applied to multiple classes

@mixin message($color) {
  background: lighten($color, 40%);
  border: solid 1px $color;
}

.error {
  @include message(red);
}

#### @extend
Extend, unlike mixins, prevents the duplication of code in the resulting CSS. While a mixin copies the declaration block for each selector it is included within, extend creates a single declaration block and consolidates the selectors.

The advantage of this methodology is in creating base classes for basic styles toward which semantically named classes will be pointed. The code is neither duplicated nor copied and prevents the use of numerous nonsemantic classes on an HTML element. For code maintainability it also means that the style of the elements is controlled in the CSS. If the style coming from extending another rule is no longer wanted, we need only to remove the @extend. By simply adding the class name to the HTML instead of using @extend , we would have had to edit the HTML in order to change look and feel. By using @extend instead of adding the same class name to a multitude of elements, we continue to maintain a separation of concerns. Our elements can have class names that match their purpose, rather than how they display, and we handle the styling via the CSS.

@mixin message($color) {
  background: lighten($color, 40%);
  border: solid 1px $color;
}

.error-message {
  @include message(red);
  @extend .message
}

But the latter allows for only having one class dictating the entire class for the element rather than two. For code maintainability, the power of @extend lies in the ability to declare the entire class in one place without copy-pasting or duplicating the code both in the Sass and also in the compiled CSS 

#### @Import
Imports allow the user to create partial files in which variables, mixins, and reusable code can be placed
Sass imports work similarly to CSS imports in that it copies the SCSS they contain to the style sheet they are being imported by. 
They must therefore be used with caution. It is very easy to bloat code by repeatedly importing an entire theme

Sharing mixins and variables, since they are not copied, but produce an output within a style, is a perfect application of the use of @import, because unlike classes, they do not get copied.

Creating import files to have information accessible from anywhere in the application becomes very interesting when dealing with components because more often than not, such as when using Angular out of the box or creating component in JavaScript and Shadow DOM, the CSS is scoped and therefore in a separate file or area of the application than the rest of the CSS. Adding variables and mixins to a partial – a file to be imported into other files that do not have a use on its own – helps keep the code DRY.

**Note Partials are sometimes denoted by having an underscore at the beginning of their name to separate them from style sheets.**

Another use case of @import is to prevent an application’s CSS style sheet from becoming an unmaintainable megalith of a file. By breaking the CSS into smaller sections to be imported into a main style sheet

@import "_variables"
@import "nav"
@import "carousel"

