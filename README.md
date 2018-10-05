<div align="center"><img src="https://raw.githubusercontent.com/alexsan134/GickoJS/master/img/bns.png" width="500"></div>
<br>
<div align="justify"><h3>JS Library, with the most usually tools in your project, like String to Int convertions, array operations, async functions, promises, callbacks, ES6 implementation, HTTP request, AJAX, data convertions, data parsers, JSON, responsive design, dom manipulation, etc.</h3></div>

## We have 1ms per loop vs 5ms per loop for jQuery

<div align="center"><h1>Installation (Basic and Compressed) v1.0.4</h1></div>


```
npm i geckojs
```
--------------

<dl>
  <dt><h2>Features:</h2></dt>
  <dd>* All data convertions (String, Array, Number, Object)</dd>
  <dd>* Most fasted selectors for the elements like querySelectors()</dd>
  <dd>* Easy structure (not write more do less lol)</dd>
</dl>

-------------
<div align="center"><h1>Documentation (Summary of Updates)</h1></div>
<div align="left"><h3>Selectors:</h3></div>

Base form:
You can select one element, or list of elements with class

```javascript
g("yourElement").event("yourEvent", () =>{
  //Do something ...
  
})
```

You can select what element you want:

```javascript
//If you want only one element of a list with classes

var number = 2;
g("class", number).event("yourEvent", () =>{
  //Do something ...
  
})
```

And you can select a range of a list with elements

```javascript
//If you want to select a range: from first element to limiter element with '.class'

g(".class", [limiter]).event("yourEvent", () =>{
  //Do something ...
  
});
```

Select range of elements in a list with [Max, Min] or [Min, Max] 
it doesn't matter


```javascript
//If you want to select a range: from min element to max element with '.class'

g(".class", [max, min]).event("yourEvent", () =>{
  //Do something ...
  
});
```
<dl>
  <dt><h2>Feature:</h2></dt>
  <dd>* If you select negative coeficient (-1) is the inverted position of an element</dd>
</dl>

Example:
</br>
10 elements with '.class' 

```javascript
g(".class", [3, -2]).event("yourEvent", () =>{
  //Do something ...
  
}); //Return from 3th element to 8th element
```

<div align="left"><h3>Convertions:</h3></div>

-----------

<div align="left"><h4>Numbers:</h4></div>

String:

```javascript
var n = 3;
n.toString(); // "3"
```

Array:

```javascript
var n = 3343;
n.toArray(); // [3, 3, 4, 3]
```
--------------

<div align="left"><h4>Arrays:</h4></div>

--------------

String:

```javascript
var arry = ["g", "e", "c", "k", "o", 1, "." , 0];
arry.toString(); // "gecko1.0"
```

Number:

```javascript
var arry = ["29", 2, 5, "1"];
arry.toInt(); // 29251
```
---------------

<div align="left"><h4>Strings:</h4></div>

---------------

Number:

```javascript
var str = "153";
arry.toInt(); // 153
```

Array:

```javascript
var str = "gJs1";
arry.toArray(); // ["g", "J", "s", 1]
```

----------------
