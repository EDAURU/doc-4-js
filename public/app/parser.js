//const
//	HEAD = ["annotation1", "annotation2"],
//	BODY = ["params","x2","x3"],
//	FOOTER = ["pepito", "doritos", "ruffles"];


var Parser = function() {
    var structure = {
    	head: {},
    	body: [],
    	footer: {}
    };

    this.parse = function(text) {
		var comment,
	    	section,
	    	name, argument,
	    	annotations,
	    	regex_comment,
	    	regex_annotation,
	    	regex_control,
	    	match,
	    	i;

		//Regular expression for extracting the content of the block comments of the text
		regex_comment = /\/\*((?:.|\n)*?)\*\//g;
	
		//Regular expression for extracting the annotations below a control annotation
		regex_control = /@([a-z]*?)\s*?\n((?:.|\n)*)/;
	
		//Regular expression for extracting the annotation name, and the annotation argument
		regex_annotation = /@([a-z]*)\s*?((?:.|\n)*?)(?:@|$)/g;
		i=0;

		//Extracting comments from text
		while ((match = regex_comment.exec(text)) !== null) {
	    	comment = match[1];
	    	//Removing posibles '*' next to a line break from the comment
	    	comment = comment.replace(/\n\s*?\*/g, '\n');
	    	match = regex_control.exec(comment);
	    	section = match[1];
	    	annotations = match[2];
	    
	    	while((match = regex_annotation.exec(annotations)) !== null) {
				name = match[1];
				argument = match[2];
				if (section === "head" || section === "footer") {
		    		structure[section][name] = argument;
				}
				else {
		    		if(!structure[section][i]) {
						structure[section][i] = {};
		    		}
		    		structure[section][i][name] = argument;
				}
				regex_annotation.lastIndex = regex_annotation.lastIndex - 1;
	    	}
	    	if (section === "body") {
				i++;
	    	}
		}
		return structure;
    };
};

//testing with node.
//var lol = new Parser();
//console.log(typeof  lol.parse(""));
//console.log(lol.parse());
//console.log(lol.parse("adljasdlkj\ndasjnd\n/**\n*@head \n*@vivafidel asdjkasdlkjas\n*@headuno ansdkjnasdjn\n*/\nasdlkjasldj\n askdjaskjd\n/**\n*@body \n*@bodyuno sdajhdkajsh *\n@bodydos asdkjahdsj\n**/\nasdkjhadkj asdjkj akjsdn\n/**\n*@body  \n*@bodyuno asdkljasdlkj \n*@bodydos adsasdjkandjkn \n**/\nadjlakdj asldkj \n/**\n*@footer\n*@footeruno adsjlkasj laskdj\n*/\ndajldkjaslk \n"));