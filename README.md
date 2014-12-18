
# Introduction #
Is a web application that allows API documentation file generation, based on any JavaScript file that contains **Doc 4 JS annotations**. It is designed to ease the burden of documenting libraries, making it easier to disclose them. Still, it can be used by any programming lover or investigator as a didactic way of learning about web applications.

## Doc 4 JS Annotations ##
They allow the application to recognize *metadata* from any code segment submitted for processing. Doc 4 JS has a solid set of annotations that fulfill generic documentation needs for any JavaScript library. These annotations can be related to the section of the library they pretend to document. A JavaScript library can be divided in four sections: *head*, *methods*, *variables* and *observations*.

### Header Annotations ###

> **@head**
	> Marks the beginning of the head section of the library,
> 
> **@author {name}**
	> Makes reference to the author of the library.
	
> **@date {date}**
	> Makes reference to the library's release date.
	
> **@desc {description}**
	> Makes reference to a description about the library.
	
> **@name {name}**
	> Makes reference to the name of the library.


**Example of a Head Documentation**
```javascript
/**
 * @desc A function that allows adding a couple of numbers
 * @param {Integer | Double} a It is the first term.
 * @param {Integer | Double} b It is the second term.
 * @returns {Integer | Double} It is the result of the sum of both terms.
 */
 function add(a, b) { /*Instructions*/}
```

### Body Annotations (Methods)###

> **@body**
	> Marks the beginning of another part of the body section of the library.
	
> **@desc {description}**
	> Makes reference to a description of the method.
	
> **@param {type1 | type2 | ... | typeN} {name} {description}**
	> Makes reference to an argument of the function.
	
> **@returns {type} {description}**
	> Makes reference to the return value of the function.


**Example of a method documentation**
```javascript
/**
 * @desc A function that allows adding a couple of numbers
 * @param {Integer | Double} a It is the first term of the sum
 * @param {Integer | Double} b It is the second term of the sum
 * @returns {Integer | Double} It is the result of the sum of both terms
 */
 function add(a, b) { /*Instructions*/}
```

### Body Annotations (Variables)###

> **@body**
	> Marks the beginning of another part of the body section of the library.
	
> **@var {type} {name} {description}**
	> Makes reference to the private variable that will be documented.


**Example of a variable documentation**
```javascript
/**
 * @var {String} s It is a string that serves no purpose
 */
 var s = “I am a string.”;
```

### Observation Annotations###

> **@foot**
	> Marks the beginning of an observation documentation.
	
> **@changelog {version}**
	> Marks the beginning of a Change log related to a version.
	
> **@change {date} {description}**
	> Makes reference to a change performed on a date (optional).
	
> **@depend {name} {version}**
	> Makes reference to a dependence of a library.


**Example of an observations documentation**
```javascript
/**
 * @changelog {1.0}
 * @change 15/DIC/2014 Added subtracting functionality to the application
 * @change 18/DIC/2014 Added multiplying functionality to the application
 * @depend jQuery 2.1.0
 * @depend Bootstrap 3.3.0
 */
 ```

----
Comments and suggestions
------------------------

Send an email to **lascariopacheco@hotmail.com** or **xbonsx@gmail.com**, or contact us via **GitHub**. We love to know from you!

