'use strict'
console.warn(document.title , "is Powered by GeckoJS© 😉\nVisit: https://blobysoftware.github.io/GeckoJsPage/");
console.info("Try our original Limiters and Ranges (LnR)®❗️");

let gJS = Object;
let err = {
    msg(p){throw new Error(`GeckoJS Error: ${p} is undefined.`)}
}
const _g = (str, arry) =>{
    const el = document.querySelectorAll(str);
    let a = [];
    if(typeof str !== "object"){
        if(el.length > 1){
            if(arry===undefined){return document.querySelectorAll(str);}
            else{
                if(typeof arry === "object"){
                    if(arry.length <= 1){
                        let l = arry[0];
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
                }else{err.msg("Unexpected type or")}
            }
        }else{return document.querySelectorAll(str)[0];}
    }else if(!str){err.msg("Selector query")}
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
    const xml = new XMLHttpRequest();
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
Object.prototype.ev=function(event, fn){
    if(!event){err.msg("Event name");}
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
        if(!fn){err.msg("Function")}
        else{
            if(this.length > 1){Array.from(this).map(e => e.addEventListener(event, fn));}
            else{this.addEventListener(event, fn);}
        }
    }
    return this;
}
Object.prototype.cssm=function(str, value){
    if(!str){
        if(this.length > 1){return Array.from(this).map(e => window.getComputedStyle(e));}
        else{return window.getComputedStyle(this);}
    }else{
        if(str == "get"){
            if(!value){err.msg("Property value")}
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
Object.prototype.offsets=function(){
    const rect = this.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
Object.prototype.attrs=function(str,value){
    if(!str){err.msg("Attribute name")}
    else{
        if(value===undefined){
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
    if(!over){err.msg("Mouseover function")}
    else{
        if(!out){err.msg("Mouseout function")}
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
    if(!css){err.msg("Property")}
    if(time===undefined){csT = `transition:all 0.15s linear;${css}`;}
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
Object.prototype.htmls=function(str){
    if(str===undefined){
        if(this.length > 1){return Array.from(this).map(e => e.innerHTML);}
        else{return this.innerHTML;}
    }else{
        if(this.length > 1){Array.from(this).map(e => e.innerHTML=str)}
        else{this.innerHTML=str;}
    }
    return this;
}
Object.prototype.texts=function(str){
    if(str===undefined){
        if(this.length > 1){return Array.from(this).map(e => e.textContent);}
        else{return this.textContent;}
    }else{
        if(this.length > 1){Array.from(this).map(e => e.textContent=str)}
        else{this.textContent=str;}
    }
    return this;
}
Object.prototype.val=function(str){
    if(str===undefined){
        if(this.length > 1){return Array.from(this).map(e => e.value);}
        else{return this.value;}
    }else{
        if(this.length > 1){Array.from(this).map(e => e.value=str)}
        else{this.value=str;}
    }
    return this;
}
Object.prototype.class=function(str, value, rep){
    if(!str){
        if(this.length > 1){return Array.from(this).map(e => e.className)}
        else{return this.className;}
    }else{
        if(str == "remove"){
            if(!value){err.msg("Class value")}
            else{
                if(this.length > 1){Array.from(this).map(e => e.classList.remove(value))}
                else{this.classList.remove(value);}
            } 
        }else if(str == "replace"){
            if(!value){err.msg("Replace value")}
            else{
                if(!rep){err.msg("New class value")}
                else{
                    if(this.length > 1){Array.from(this).map(e => e.classList.replace(value, rep));}
                    else{this.classList.replace(value, rep);}
                }
            } 
        }else if(str == "toggle"){
            if(!value){err.msg("Class value")}
            else{
                if(this.length > 1){Array.from(this).map(e => e.classList.toggle(value));}
                else{this.classList.toggle(value);}
            } 
        }
        else if(str == "contains"){
            if(!value){err.msg("Class value")}
            else{
                if(this.length > 1){return Array.from(this).map(e => e.classList.contains(value));}
                else{return this.classList.contains(value);}
            } 
        }
        else{
            if(this.length > 1){Array.from(this).map(e => e.classList.add(str));}
            else{this.classList.add(str);}
        }
    }
    return this;
}
Object.prototype.finds=function(str){
    if(!str){err.msg("Selector name")}
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
Object.prototype.toStrings=function(){
    let str = "";
    let keys = Object.keys(this);
    let vals = Object.values(this);
    if(keys.length){
        keys.map((e, i) => str += `${e}:${vals[i]}, `);
        str = str.substr(0, str.length-2);
    }else{str = `${keys[0]}:${vals[0]}`;}
    return str;
}
/*------------------------------------------------*/
/*----------------------Functions-------------------*/
//Returns random number
const randomRange = (min, max) =>{
    if(min===undefined){err.msg("Min");}
    else{
        if(max===undefined){err.msg("Max");}
        else{return (Math.floor(Math.random() * (max - min + 1)) + min);}
    }
}
//Exec command shorcut
const exec = (m,s,v) => document.execCommand(m,s,v);
//Print message in console 
const gprint = (...msg) => console.log(...msg);
//Print message in console with return
const printLn = (...msg) => console.log(...(msg.map(e => `${e}\n`)));
//Print warning in console
const warn = (...msg) => console.warn(...msg);
//Print error in console
const error = (...msg) => console.error(...msg);
/*----------------------STRINGS-------------------*/
//Returns bolean of how much substrings are in a string
String.prototype.searchRepeat=function(rpt, str){
    if(!rpt){err.msg("Number of repeats")}
    else{
        if(str===undefined){err.msg("Character")}
        else{
            const txt = this.toLowerCase();
            const st = str.toLowerCase();
            let count = 0;
            for(let i = 0;i < txt.length;i++){
                if(txt.charAt(i)==st){count++;}
            }
            if(count==rpt){return true;}
            else{return false;}
        }
    }
}
//How much repeat substring in a string
String.prototype.getRepeat=function(str){
    if(str===undefined){err.msg("Character")}
    else{
        const txt = this.toLowerCase();
        const st = str.toLowerCase();
        let count = 0;
        for(let i = 0;i < txt.length;i++){
            if(txt.charAt(i) == st){count++;}
        }
        return count;
    }
}
//Converts string into int variable
String.prototype.toInt=function(){
    return Math.max(this);
}
//Converts string to Array
String.prototype.toArray=function(str=false){
    let arry = [];
    if(str){return this.split(" ");}
    else{
        for(let i = 0 ; i < this.length ;i++){
            arry.push(this.charAt(i));
        }
        return arry;
    }
}
//String to object
String.prototype.toObject=function(str=false){
    const l = this.split(" ");
    if(!str){
        let obj = {};
      for(let i =0 ;i<l.length;i++){
        obj[l[i]] = l[i+1];
        i++;
      }
      return obj
    }else if(str){return Object.assign({}, l);}
}

//Capitalize an element
String.prototype.capitalize=function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
//Returns the position of a specifc substring in string position
String.prototype.getSearchPosition=function(str, index){
    if(str===undefined){err.msg("Character")}
    else{
        if(index===undefined){err.msg("Index")}
        else{
            let count = -1;
            const txt = this.toLowerCase();
            const st = str.toLowerCase();
            for(let i = 0; i < txt.length; i++){
                if(txt.charAt(i) == st){
                    count++;
                    if(count == index){
                        return i;
                    }
                }
            }
        }
    }
}
//From RGB string to HEX code
String.prototype.toHex=function() {
    let parts = this.substring(this.indexOf("(")).split(","),
        r = parseInt(parts[0].substring(1).trim() , 10),
        g = parseInt(parts[1].trim(), 10),
        b = parseInt(parts[2].trim(), 10);
    if(r === 0){r = "00";}
    if(g === 0){g = "00";}
    if (b === 0){b = "00";}
    let hex = "#"+r.toString(16)+g.toString(16)+b.toString(16);
    return hex;
}
//From HEX string to RGB code
String.prototype.toRGB=function() {
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(this)){
        c= this.substring(1).split('');
        if(c.length==3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return '('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
}
//Replace a character in a specific index of a string
String.prototype.replaceAt=function(index, replace) {
    if(index===undefined){err.msg("Index")}
    else{
        if(replace===undefined){err.msg("Character")}
        else{return this.substr(0, index) + replace + this.substr(index+replace.length);}
    }
}
//Replace all string by other
String.prototype.replaceAll=function(str, rep){
    if(str===undefined){err.msg("Character")}
    else{
        if(rep===undefined){err.msg("Replace Character")}
        else{return this.split(str).join(rep);}
    }
}
//Cut a part of a string
String.prototype.cut=function(cutStart, cutEnd){
    if(cutStart===undefined){err.msg("CutStart")}
    else{
        if(cutEnd===undefined){err.msg("CutEnd")}
        else{return this.substr(0,cutStart) + this.substr(cutEnd);}
    }
}
//Search and replace a character in a specific index of a string
String.prototype.replaceIndex=function(search, SearchIndex, replace){
    if(search===undefined){err.msg("Character")}
    else{
        if(SearchIndex===undefined){err.msg("SearchIndex")}
        else{
            if(replace===undefined){err.msg("Replace character")}
            else{
                let count = -1;
                const st = search.toLowerCase();
                const txt = this.toLowerCase();
                for(let i = 0;i < txt.length;i++){
                    if(txt.charAt(i) == st){
                        count++;
                        if(count == SearchIndex){
                            let resp = this.replaceAt(i, replace);
                            return resp;
                        }
                    }
                }
            }
        }
    }
}
/*------------------------------------------------*/

/*----------------------Numbers-------------------*/
//Return square root of a number default 2
Number.prototype.root=function(e){
    if(e===undefined){return  Math.sqrt(this);}
    else{return Math.pow(this, 1/e);}
}
//Return number elevate to an exponent default 2
Number.prototype.pow=function(e){
    if(e===undefined){return  Math.pow(this, 2);}
    else{return Math.pow(this, e);}
}
//Converts number into Array
Number.prototype.toArray=function(){ 
    let str = this.toString();
    let arry = [];
    for(let i = 0 ; i < str.length ;i++){
        arry.push(str.charAt(i));
    }
   return arry.map(Number);
}
//Converts number into Object
Number.prototype.toObject=function(){
    const str = this.toString();
    let arry = [];
    for(let i = 0 ; i < str.length ;i++){
        arry.push(str.charAt(i));
    }
    return Object.assign({},arry.map(Number));
}
/*------------------------------------------------*/
/*----------------------Arrays-------------------*/
//Converts array in Int variable
Array.prototype.toInt=function(){
    return Math.max(this);
}
//Returns boolean if array includes a string
Array.prototype.includeStr=function(str, strict=false){
    if(str===undefined){err.msg("Array")}
    else{
        let state = false;
        for(let i =0;i<this.length;i++){
            if(strict){
                if(this[i] === str){
                    return true;
                }
            }else{
                if(this[i].includes(str)){
                    return true;
                }
            }
        }
        return false;
    }
}
//Combine two arrays
Array.prototype.combine=function(arry){
    if(!arry){err.msg("Array")}
    else{
        return [...this, ...arry]
    }
}
//Array to Object
Array.prototype.toObject = function(str){
    if(str === undefined){
        let obj = {};
      for(let i =0 ;i<this.length;i++){
        obj[this[i]] = this[i+1];
        i++;
      }
      return obj
    }else if(str){
        return Object.assign({}, this);
    }
}
//Converts array in String variable
Array.prototype.toStrings = function(){
    let tl =  this.map(String);
    return tl.join("");
}
//Random the order of the elements in array
Array.prototype.randomize=function(){
    this.map(e => {
        let current = e;
        let td = (Math.floor(Math.random() * (this.length)));
        let prev = this[td];
        e = prev;
        this[td] = current;
    })
   return this;
}
//Return the same array with the operated values
Array.prototype.operation=function(sign, e){
    if(!sign){err.msg("Sign")}
    else{
        let r = this.map(Number);
        r.map((s,i) =>{
            if(sign == "+" || sign == "plus" || sign == "add"){s=s+e;}
            else if(sign == "-" || sign == "dif" || sign == "minus"){s=s-e;}
            else if(sign == "*" || sign == "x" || sign == "mult"){s=s*e;}
            else if(sign == "/" || sign == "div" || sign == "parts"){s=s/e;}
            else if(sign == "^" || sign == "elev" || sign == "to" || sign == "pow"){s= Math.pow(s, e);}
            else if(sign == "|" || sign == "root" || sign == "rad" || sign == "sqrt"){
                if(e===undefined){s= Math.pow(s, 1/2);}
                else{s= Math.pow(s, 1/e);}
            }
            else if(sign == "%" || sign == "mod" || sign == "resd"){s=s%e;}
            else if(sign == "." || sign == "concat" || sign == "ct"){
                this[i]=this[i]+e;
                return this;
            }
        })
      return r;
    }
}
//Get the max value of an Array(list of numbers)
Array.prototype.max=function(){
    return Math.max(...this.map(Number));
}
//Get the min value of an Array(list of numbers)
Array.prototype.min=function(){
    return Math.min(...this.map(Number));
}
