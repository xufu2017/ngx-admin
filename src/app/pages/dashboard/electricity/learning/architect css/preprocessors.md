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
