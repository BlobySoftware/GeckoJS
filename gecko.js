/*----------------------STRINGS-------------------*/

//Returns bolean of how much substrings are in a string
String.prototype.searchRepeat=function(rpt, str){
    var count = 0;
    for(var i = 0;i < this.length;i++){
        if(this.charAt(i) == str){
            count++;
        }
    }
    if(count == rpt){
        return true;
    }else{
        return false;
    }
}

//Returns the position of a last substring found
String.prototype.indexOfLast = function (str){
    for(var i = 0;i < this.length;i++){
        if( this.charAt(this.length - i) == str ){
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
    for(var i = 0; i < this.length; i++){
        if(this.charAt(i) == str){
            count++;
            if(count == index){
                return i;
            }
        }
    }
}



  
//From RGB string to HEX code
function trim (str) {
    return str.replace(/^\s+|\s+$/gm,'');
}
String.prototype.toHex = function() {
      var parts = this.substring(this.indexOf("(")).split(","),
          r = parseInt(trim(parts[0].substring(1)), 10),
          g = parseInt(trim(parts[1]), 10),
          b = parseInt(trim(parts[2]), 10)
          var hexs; 
          hexs = ('#' + r.toString(16) + g.toString(16) + b.toString(16));
          if( r == 0 && g == 0 && b == 0){
            hexs = ('#000000');
          }else if(r == 00){
            hexs = ('#' + "00" + g.toString(16) + b.toString(16));
          }else if(g == 00){
            hexs = ('#' + r.toString(16) + "00" + b.toString(16));
          }else if( b == 00){
            hexs = ('#' + r.toString(16) + g.toString(16) + "00");
          }
          return hexs;
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
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.6)';
    }
}


//Replace a character in a specific index of a string
String.prototype.replaceAt = function(replace, index) {
    return this.substr(0, index) + replace + this.substr(index+replace.length);
}

//Cut a part of a string
String.prototype.cut = function(cutStart, cutEnd){
    return this.substr(0,cutStart) + this.substr(cutEnd);
}

//Search and replace a character in a specific index of a string
String.prototype.replaceIndex = function(search, SearchIndex, replace){
    var count = 0;
    for(var i = 0;i < this.length;i++){
        if(this.charAt(i) == search){
            count++;
            if(count == SearchIndex){
                var resp = this.replaceAt(i, replace);
                return resp;
            }
        }
    }
}

//String includes an Array?
String.prototype.includeArray = function(array){
    var respTS = false;
    for(var e = 0; e < array.length;e++){
        var arrC = this.toLowerCase();
        if(arrC.includes(array[e]) == true){
            respTS = true;
            break;
        }
    }
    return respTS;
}