# symbol
/ root element
// select nodes in the document from the current node that match the selection,no matter where they are
. select the current node
.. select the parent of the current node
@ select attributes
* match any element node (select all the elements after)
//form/* select all elements in form(apart from form tag) --> direct childrens

//*[@class='buttonClass']
//*[@class='buttonClass']/..
//*[contains(text(),'click me')]

compound class name not work, only way is xpath

//*[@class='submit'][@class='buttonClass']

//
note typescript reject always use new error

note use of *symbol







