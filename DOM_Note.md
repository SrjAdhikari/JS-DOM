# JavaScript DOM ( Document Object Model )

## What is the DOM?

`DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document.
The DOM represents an HTML document as a tree of nodes. A node represents an HTML element.`

### Let's take a look at this HTML code to better understand the DOM tree structure.

```HTML
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>Learning the DOM</title>
</head>
<body>
   <!--A simple comment-->
   <h1>Learning the <b>DOM</b></h1>
   <p>The DOM is simple.</p>
</body>
</html>
```

### If we now convert this into a DOM tree, we'd get the following :

![](https://www.codeguage.com/static/images/content/js/dom-tree-01.png)

## Tree Terminology

`Root Node : The topmost node is where the tree begins and is called the root/parent node. In the case above, the root is the whole HTML document.`

`Children Node : The nodes on the next level with edges connecting them with the root node are children of the root node.`

`Siblings Node : Nodes with the same parent are siblings. Hence, <html> and the doctype declaration nodes are both siblings of each other.`

`The children of <html> are <head> and <body>. The <body> node has three further children nodes <h1>, <p> and <div>. The <p> node has one single child.`
<br><br>

### A detailed DOM tree representation of the HTML code above :

![](https://www.codeguage.com/static/images/content/js/dom-tree-02.png)

<br><br>

# How to Select Elements in the Document

_[getElementById ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/) - Select an element by id_ <br>
`Syntax : const element = document.getElementById("elementId");`

_[getElementsByName ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/) - Select an element by name_<br>
`Syntax : let elements = document.getElementsByName("elementName");`

_[getElementsByTagName ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/) - Select an element by a tag name_<br>
`Syntax : let elements = document.getElementsByTagName("tagName");`

_[getElementsByClassName ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/) - Select elements by one or more class names_<br>
`Syntax : let elements = rootElement.getElementsByClassName("className");`

_[querySelector ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/) - Select elements by CSS selectors_<br>
`Syntax : let element = parentNode.querySelector("selector");`

_[querySelectorAll ( ) ]() - Select all of the elements that match the CSS selectors_<br>
`Syntax : let element = parentNode.querySelectorAll("selector");`

<br>

# How to Manipulate elements to the Document

_[createElement ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-createelement/) - Create a new element._ <br>
`Syntax : let element = document.createElement("htmlTag");`

_[appendChild ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/) - Append a node to a list of child nodes of a specified parent node._<br>
`Syntax : parentNode.appendChild(childNode);`

_[innerHTML ](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml/) - Get and set the HTML content of an element._<br>
_To get the HTML markup contained within an element._<br>
`Syntax : let content = element.innerHTML;`<br>

_To set the value of innerHTML property._<br>
`Syntax : element.innerHTML = newHTML;`

_[after ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-after/) - Insert a node after an element._<br>
`Syntax : Element.after(node)`<br>
`For example, suppose you have a <h1> element and you want to insert a <p> element after it, you can use the after() method like this : h1.after(p)`<br>

_[append ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-append/) - Insert a node after the last child node of a parent node._<br>
`Syntax : parentNode.append()`

_[prepend ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-prepend/) - Insert a node before the first child node of a parent node._<br>
`Syntax : parentNode.prepend()`

_[replaceChild ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-replacechild/) - Replace a child element by a new element._<br>
`Syntax : parentNode.replaceChild(newChild, oldChild);`

_[removeChild ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-removechild/) - Remove child elements of a node._<br>
`Syntax : let childNode = parentNode.removeChild(childNode);`

_[insertBefore ( ) ](https://www.javascripttutorial.net/javascript-dom/javascript-insertbefore/) - Insert a new node before an existing node as a child node of a specified parent node._<br>
`Syntax : parentNode.insertBefore(newNode, existingNode);`

<br>

# How to Manipulate elements Styles

_[style property](https://www.javascripttutorial.net/javascript-dom/javascript-style/) - Get or set inline styles of an element._<br>
`Syntax : element.style`<br>
`For example, to set the color of an element to red, you use the following code : element.style.color = 'red';`<br>

<br>

# How to Work with Attributes

_[setAttribute ( )](https://www.javascripttutorial.net/javascript-dom/javascript-setattribute/) - Set the value of a specified attribute on a element._<br>
`Syntax : element.setAttribute("name", "value");`

_[getAttribute ( )](https://www.javascripttutorial.net/javascript-dom/javascript-getattribute/) - Get the value of an attribute on an element._<br>
`Syntax : let value = element.getAttribute("name");`

_[removeAttribute ( )](https://www.javascripttutorial.net/javascript-dom/javascript-removeattribute/) - Remove an attribute from a specified element._<br>
`Syntax : element.removeAttribute("name");`

_[hasAttribute ( )](https://www.javascripttutorial.net/javascript-dom/javascript-hasattribute/) - Check if an element has a specified attribute or not._<br>
`Syntax : let result = element.hasAttribute("name");`

<br>

# DOM Event Handlers

`1. addEventListener() method : Register an event handler.`

```Plaintext
The addEventListener() method accepts three arguments: an event name, an event handler function.
For example :
```

```javascript
let btn = document.querySelector("#btn");
btn.addEventListener("click", function (event) {
  alert(event.type); // click
});
```

<br>

`1. removeEventListener() method : Remove an event handler.`

```Plaintext
The removeEventListener() removes an event listener that was added via the addEventListener().
However, you need to pass the same arguments as were passed to the addEventListener().
For example :
```

```javascript
let btn = document.querySelector("#btn");

// add the event listener
let showAlert = function () {
  alert("Clicked!");
};
btn.addEventListener("click", showAlert);

// remove the event listener
btn.removeEventListener("click", showAlert);
```
