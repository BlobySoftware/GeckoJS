'use strict'
console.warn(document.title , "is Powered by GeckoJS© 😉\nVisit: https://blobysoftware.github.io/GeckoJsPage/");
console.info("Try our original Limiters and Ranges (LnR)®❗️");

let dom = document;
let bom = window;
let gJS = Object;
const exec = s => document.execCommand(s);
let errors = {
    err0(){throw new Error("GeckoJS ErrCode 000: Selector is of type Number or Array")},
    err1(){throw new Error("GeckoJS ErrCode 001: No class value")},
    err2(){throw new Error("GeckoJS ErrCode 002: Selector argument is undefined")},
    err3(){throw new Error("GeckoJS ErrCode 003: Event is undefined");},
    err4(){throw new Error("GeckoJS ErrCode 004: Callback is undefined");},
    err5(){throw new Error("GeckoJS ErrCode 005: No property value");},
    err6(){throw new Error("GeckoJS ErrCode 006: Attribute is undefined");},
    err7(){throw new Error("GeckoJS ErrCode 007: Mouseover function is undefined");},
    err8(){throw new Error("GeckoJS ErrCode 008: Mouseout function is undefined");},
    err9(){throw new Error("GeckoJS ErrCode 009: Mouseout Class name is undefined");},
    err10(){throw new Error("GeckoJS ErrCode 010: Class replace name is undefined");}
}
const g = (str, arry) =>{
    const el = document.querySelectorAll(str);
    let a = [];
    if(typeof str !== "object"){
        if(el.length > 1){
            if(!arry){return document.querySelectorAll(str);}
            else{
                if(typeof arry === "object"){
                    if(arry.length <= 1){
                        const l = arry[0];
                        if(l >= el.length){l = el.length-1;}
                        if(l < 0){l = el.length + l;}
                        for(let i = 0;i<l+1;i++){
                            a.push(el[i]);
                        }
                        return a; 
                    }else{
                        //DEF BOTH
                        let [mn, mx] = arry;mx += 1;
                        if(mx < mn){
                            if(mx > 0){
                                mx = arry[0]+1;
                                mn = arry[1];
                            }else{
                                mn = arry[0];
                                mx = el.length+arry[1]+1;
                            }
                        }else if(mx > mn){
                            if(mn < 0){
                                mn = arry[1];
                                mx = el.length+arry[0];
                            }
                        }
                        if(arry[0] == arry[1]){return el[mx-1];}
                        for(mn;mn < mx;mn++){
                            a.push(el[mn]);
                        }
                        return a;
                    }
                }else if(typeof arry === "number"){
                    if(arry >= el.length){arry = el.length-1;}
                    if(arry < 0){
                        if(Math.abs(arry) > el.length-1){arry = 0;}
                        else{arry = el.length + arry;} 
                    }
                return el[arry];
                }else{errors.err0();}
            }
        }else{return document.querySelectorAll(str)[0];}
    }else if(!str){errors.err1();}
    else{
        let l = [];
        str.map(e => {
            let p = document.querySelectorAll(e);
            Array.from(p).map(e => l.push(e));
        })
        return l;
    }
}
gJS.prototype.ajx=function(data, success){
    const xml = new XMLHttpRequest;
    const msg = {
        dataMsg : Object.values(data.data),
        dataKeys : Object.keys(data.data),
        complete : "?"
    }
    msg.dataMsg.map((e,i) => msg.complete += `${msg.dataKeys[i]}=${e}&`);
    xml.open(data.method, data.url, true, data.username, data.password);
    xml.onreadystatechange = success;
    xml.send(msg.complete.substr(0, msg.complete.length - 1));
}
Object.prototype.event=function(event, fn){
    if(!event){errors.err3();}
    else if(event.match(/^(outClick|ouclick|oClick|oclick)$/)){
        document.addEventListener("click", e => {
            const els = e.target;
            let sp = true;
            if(this.length > 1){
                for(let i = 0;i<this.length;i++){
                    if(els == this[i]){
                        sp = false;
                        break;
                    }
                }if(sp){fn(e);}
            }else{
                if(els!=this){fn(e);}
            }
        })
    }else{
        if(!fn){errors.err4();}
        else{
            if(this.length > 1){Array.from(this).map(e => e.addEventListener(event, fn));}
            else{this.addEventListener(event, fn);}
        }
    }
    return this;
}
Object.prototype.css=function(str, value){
    if(!str){
        if(this.length > 1){return Array.from(this).map(e => window.getComputedStyle(e));}
        else{return window.getComputedStyle(this);}
    }else{
        if(str == "get"){
            if(!value){errors.err5();}
            else{
                if(this.length > 1){
                    return Array.from(this).map(e => window.getComputedStyle(e).getPropertyValue(value));
                }else{return window.getComputedStyle(this).getPropertyValue(value);}
            } 
        }else{
            if(this.length > 1){Array.from(this).map(e => e.style.cssText=str);}
            else{this.style.cssText=str;}
        }
    }
    return this;
}
Object.prototype.offset=function(){
    const rect = this.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
Object.prototype.attr=function(str,value){
    if(!str){errors.err6();}
    else{
        if(!value){
            if(this.length > 1){return Array.from(this).map(e => e.getAttribute(str));}
            else{return this.getAttribute(str);}
        }else{
            if(str == "get"){
                if(this.length > 1){return Array.from(this).map(e => e.getAttribute(value));}
                else{return this.getAttribute(value);}
            }else if(str == "has"){
                if(this.length > 1){return Array.from(this).map(e => e.hasAttribute(value));}
                else{return this.hasAttribute(value);}
            }else if(str == "remove"){
                if(this.length > 1){return Array.from(this).map(e => e.removeAttribute(value));}
                else{return this.removeAttribute(value);}  
            }else{   
                if(this.length > 1){Array.from(this).map(e => e.setAttribute(str, value));}
                else{this.setAttribute(str, value);}  
            }
        }
    }
    return this;
}
Object.prototype.hover=function(over, out){
    if(!over){errors.err7();}
    else{
        if(!out){errors.err8();}
        else{
            if(this.length > 1){
                Array.from(this).map(e => {
                    e.addEventListener("mouseover", over);
                    e.addEventListener("mouseout", out);
                });
            }else{
                this.addEventListener("mouseover", over);
                this.addEventListener("mouseout", out);
            }
        }
    }
    return this;
}
Object.prototype.animates=function(css, time, delay=0){
    let csT;
    if(!css){errors.err5();}
    if(!time){csT = `transition:all 0.15s linear;${css}`;}
    else{csT = `transition:all ${time/1000}s linear;${css}`;}
    if(this.length > 1){
        setTimeout(() => {
            Array.from(this).map(e => e.style.cssText=csT);
        }, delay);
    }else{
        setTimeout(() => {
            this.style.cssText =csT;
        }, delay);
    }
    return this;
}
Object.prototype.html=function(str){
    if(!str){
        if(this.length > 1){return Array.from(this).map(e => e.innerHTML);}
        else{return this.innerHTML;}
    }else{
        if(this.length > 1){Array.from(this).map(e => e.innerHTML=str)}
        else{this.innerHTML=str;}
    }
    return this;
}
Object.prototype.text=function(str){
    if(!str){
        if(this.length > 1){return Array.from(this).map(e => e.textContent);}
        else{return this.textContent;}
    }else{
        if(this.length > 1){Array.from(this).map(e => e.textContent=str)}
        else{this.textContent=str;}
    }
    return this;
}
Object.prototype.class=function(str, value, rep){
    if(!str){
        if(this.length > 1){return Array.from(this).map(e => e.className)}
        else{return this.className;}
    }else{
        if(str == "remove"){
            if(!value){errors.err9();}
            else{
                if(this.length > 1){Array.from(this).map(e => e.classList.remove(value))}
                else{this.classList.remove(value);}
            } 
        }else if(str == "replace"){
            if(!value){errors.err9();}
            else{
                if(!rep){errors.err10();}
                else{
                    if(this.length > 1){Array.from(this).map(e => e.classList.replace(value, rep));}
                    else{this.classList.replace(value, rep);}
                }
            } 
        }else if(str == "toggle"){
            if(!value){errors.err9();}
            else{
                if(this.length > 1){Array.from(this).map(e => e.classList.toggle(value));}
                else{this.classList.toggle(value);}
            } 
        }
        else if(str == "contains"){
            if(!value){errors.err9();}
            else{
                if(this.length > 1){Array.from(this).map(e => e.classList.contains(value));}
                else{this.classList.contains(value);}
            } 
        }
        else{
            if(this.length > 1){Array.from(this).map(e => e.classList.add(str));}
            else{this.classList.add(str);}
        }
    }
    return this;
}
Object.prototype.find=function(str){
    if(!str){errors.err0();}
    else{
        let arry = [];
        let se = str.toLowerCase();
        if(se.charAt(0) == "#" || se.charAt(0) == "."){
            se = se.substr(1, se.length);
        }
        if(this.length > 1){
            Array.from(this).map(s => {
                s.childNodes.map(p =>{
                    if(p.localName == se || p.id == se || p.className == se){arry.push(s.childNodes[0]);}
                })
            })
            if(arry.length > 1){return arry;}
            else{return arry[0];}
        }else{
            Array.from(this.childNodes).map(s => {
                if(s.localName == se){arry.push(s);}
            })
            if(arry.length > 1){return arry;}
            else{return arry[0];}
        }
    }
}
Object.prototype.toArray=function(){
    const keys = Object.keys(this);
    const vals = Object.values(this);
    let arry = [];
    if(keys.length){
        keys.map((e, i) =>{
            arry.push(e);
            arry.push(vals[i]);
        })
    }else{
        arry.push(keys[0]);
        arry.push(vals[0]);
    }
    return arry;
}
Object.prototype.objArray=function(){
    return Array.from(this);
}
Object.prototype.toString=function(){
    var str = "";
    var keys = Object.keys(this);
    var vals = Object.values(this);
    if(keys.length){
        keys.map((e, i) => str += `${e}:${vals[i]}, `);
        str = str.substr(0, str.length-2);
    }else{str = `${keys[0]}:${vals[0]}`;}
    return str;
}
/*------------------------------------------------*/
/*----------------------Functions-------------------*/
//Returns random number
function randomRange(min, max){
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

/*----------------------STRINGS-------------------*/
//Returns bolean of how much substrings are in a string
String.prototype.searchRepeat=function(rpt, str){
    var txt = this.toLowerCase();
    var st = str.toLowerCase();
    var count = 0;
    for(var i = 0;i < txt.length;i++){
        if(txt.charAt(i) == st){
            count++;
        }
    }
    if(count == rpt){
        return true;
    }else{
        return false;
    }
}
//How much repeat substring in a string
String.prototype.getRepeat=function(str){
    var txt = this.toLowerCase();
    var st = str.toLowerCase();
    var count = 0;
    for(var i = 0;i < txt.length;i++){
        if(txt.charAt(i) == st){
            count++;
        }
    }
    return count;
}
//Converts string into int variable
String.prototype.toInt = function(){
    return Math.max(this);
}

//Converts string into Array
String.prototype.toArray = function(str){
    var arry = [];
    if(str == true){
        return this.split(" ");
    }else{
        for(var i = 0 ; i < this.length ;i++){
            arry.push(this.charAt(i));
        }
        return arry;
    }
}
//String to object
String.prototype.toObject = function(str){
    var l = this.split(" ");
    if(str == undefined){
        var obj = {};
      for(var i =0 ;i<l.length;i++){
        obj[l[i]] = l[i+1];
        i++;
      }
      return obj
    }else if(str == true){
        return Object.assign({}, l);
    }
}

//Returns the position of a last substring found
String.prototype.lastIndexOf = function (str){
    var txt = this.toLowerCase();
    var st = str.toLowerCase();
    for(var i = 0;i < txt.length;i++){
        if( txt.charAt(txt.length - i) == st ){
            return this.length-i;
        }
    }
}

//Capitalize an element
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//Returns the position of a specifc substring in string position
String.prototype.getSearchPosition = function(str, index){
    var count = 0;
    var txt = this.toLowerCase();
    var st = str.toLowerCase();
    for(var i = 0; i < txt.length; i++){
        if(txt.charAt(i) == st){
            count++;
            if(count == index){
                return i;
            }
        }
    }
}
//From RGB string to HEX code
String.prototype.toHex = function() {
      var parts = this.substring(this.indexOf("(")).split(","),
          r = parseInt(parts[0].substring(1).trim() , 10),
          g = parseInt(parts[1].trim(), 10),
          b = parseInt(parts[2].trim(), 10)
          if(r == 0){
              r = "00";
          }
          if (g == 0){
              g = "00";
          }
          if (b == 0){
              b = "00";
          }
          var hex = "#"+r.toString(16)+g.toString(16)+b.toString(16);
          return hex;
}

//From HEX string to RGB code
String.prototype.toRGB = function() {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(this)){
        c= this.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return '('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
}


//Replace a character in a specific index of a string
String.prototype.replaceAt = function(index, replace) {
    return this.substr(0, index) + replace + this.substr(index+replace.length);
}
//Replace all string by other
String.prototype.replaceAll = function(str, rep){
    return this.split(str).join(rep);
}
//Cut a part of a string
String.prototype.cut = function(cutStart, cutEnd){
    return this.substr(0,cutStart) + this.substr(cutEnd);
}
//Search and replace a character in a specific index of a string
String.prototype.replaceIndex = function(search, SearchIndex, replace){
    var count = -1;
    var st = search.toLowerCase();
    var txt = this.toLowerCase();
    for(var i = 0;i < txt.length;i++){
        if(txt.charAt(i) == st){
            count++;
            if(count == SearchIndex){
                var resp = this.replaceAt(i, replace);
                return resp;
            }
        }
    }
}

//String includes an Array?
String.prototype.includeArray = function(array, strict){
    var respTS = false;
    for(var e = 0; e < array.length;e++){
        var arrC = this.toLowerCase();
        if(strict){
            if(arrC == array[e]){
                respTS = true;
                break;
            }
        }else if(strict == false || strict == undefined || strict == null){
            if(arrC.includes(array[e])){
                respTS = true;
                break;
            }
        }
    }
    return respTS;
}


/*------------------------------------------------*/

/*----------------------Numbers-------------------*/
//Return square root of a number default 2
Number.prototype.root = function(e){
    if(e == undefined){
        return  Math.sqrt(this);
    }else{
        return Math.pow(this, 1/e);
    }
}
//Return number elevate to an exponent default 2
Number.prototype.pow = function(e){
    if(e == undefined){
        return  Math.pow(this, 2);
    }else{
        return Math.pow(this, e);
    }
}
//Converts number into Array
Number.prototype.toArray = function(){ 
    var str = this.toString();
    var arry = [];
    for(var i = 0 ; i < str.length ;i++){
        arry.push(str.charAt(i));
    }
   return arry.map(Number);
}
Number.prototype.toObject = function(){
    var str = this.toString();
    var arry = [];
    for(var i = 0 ; i < str.length ;i++){
        arry.push(str.charAt(i));
    }
    return Object.assign({},arry.map(Number));
}

/*------------------------------------------------*/
/*----------------------Arrays-------------------*/
//Converts array in Int variable
Array.prototype.toInt = function(){
    return Math.max(this);
}
//Combine two arrays
Array.prototype.combine = function(arry){
    return [...this, ...arry];
}
//Array to Object
Array.prototype.toObject = function(str){
    if(str == undefined){
        var obj = {};
      for(var i =0 ;i<this.length;i++){
        obj[this[i]] = this[i+1];
        i++;
      }
      return obj
    }else if(str == true){
        return Object.assign({}, this);
    }
}
//Converts array in String variable
Array.prototype.toString = function(){
    var tl =  this.map(String);
    return tl.join("");
}
//Random the order of the elements in array
Array.prototype.randomize = function(){
   for(var i = 0; i < this.length ; i++){
       var current = this[i];
       var rd = (Math.floor(Math.random() * (this.length)));
       var prev = this[rd];
        this[i] = prev;
        this[rd] = current;
   }
   return this;
}

//Return the same array with the operated values
Array.prototype.operation = function(sign, e){
    var r = this.map(Number);
    for(var i = 0; i < r.length; i++){
        if(sign == "+" || sign == "plus" || sign == "add"){
            r[i]=r[i]+e;
        }else if(sign == "-" || sign == "dif" || sign == "minus"){
            r[i]=r[i]-e;
        }else if(sign == "*" || sign == "x" || sign == "mult"){
            r[i]=r[i]*e;
        }else if(sign == "/" || sign == "div" || sign == "parts"){
            r[i]=r[i]/e;
        }else if(sign == "^" || sign == "elev" || sign == "to" || sign == "pow"){
            r[i]= Math.pow(r[i], e);
        }else if(sign == "|" || sign == "root" || sign == "rad" || sign == "sqrt"){
            if(e == undefined){
                r[i]= Math.pow(r[i], 1/2);
            }else{
                r[i]= Math.pow(r[i], 1/e);
            }
        }
        else if(sign == "%" || sign == "mod" || sign == "resd"){
            r[i]=r[i]%e;
        }
        else if(sign == "." || sign == "concat" || sign == "ct"){
            this[i]=this[i]+e;
            return this;
        }
    }
    return r;
}

//Get the max value of an Array(list of numbers)
Array.prototype.max = function(){
    return Math.max(...this.map(Number));
}
//Get the min value of an Array(list of numbers)
Array.prototype.min = function(){
    return Math.min(...this.map(Number));
}

