<div align="center">
  <img src="https://raw.githubusercontent.com/alexsan134/GeckoJS/master/bns.png" width="500">
  </br>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img src="https://img.shields.io/badge/build-success-brightgreen.svg">
  <img src="https://badge.fury.io/js/geckojs.svg">
</div>
<br>
<div align="justify"><h3>JS Library, with the most usually tools in your project, like String to Int convertions, array operations, async functions, promises, callbacks, ES6 implementation, HTTP request, AJAX, data convertions, data parsers, JSON, responsive design, dom manipulation, etc.</h3></div>

## We have 1ms per loop vs 5ms per loop for jQuery

<div align="center"><h1>Installation (Basic and Compressed)</h1></div>


```
npm i geckojs
```
--------------

<dl>
  <dt><h2>Latest Features:</h2></dt>
  <dd>* New event outClick, check if you click outside of an element</dd>
  <dd>* All data convertions (String, Array, Number, Object)</dd>
  <dd>* Most fasted selectors for the elements like querySelectors()</dd>
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
//If you want to select a range: from first element to 7th element with '.class'

var limiter = 7;
g(".class", [limiter]).event("yourEvent", () =>{
  //Do something ...
  
});
```

Select a range of elements in a list with [Max, Min] or [Min, Max] 
it doesn't matter


```javascript
//If you want to select a range: from 3th element to 8th element with '.class'

var min = 3, max = 8;

g(".class", [max, min]).event("yourEvent", () =>{
  //Do something ...
  
});

// OR

g(".class", [min, max]).event("yourEvent", () =>{
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
  
}); //Return from 3th element to 9th element
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



<div align="left"><h3>Methods:</h3></div>

-----------

You dont need to load all the stupid properties in one object, with GeckoJS you just load one method

<dl>
  <dt><h2>Ussually:</h2></dt>
  <dd>* Css, Attr, Class, Events</dd>
  <dd>* Find, HTML, Text</dd>
  <dd>* Animates, Hover</dd>
</dl>



```javascript
g("#myEl").event("click", () =>{
  g("#child").find("strong").css("background:red");
});
```