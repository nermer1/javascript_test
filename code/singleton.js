var singleton = (function() {
	var instance;
	function init() {
		return {
			list: [
                "haha"
			]
		};
	}
	return {
		getInstance: function() {
			if(!instance) {
				instance = init();
			}
			return instance;
		}
	}
})();

var a = singleton.getInstance();
var b = singleton.getInstance();

console.log(a === b);


var singletonTest = (function() {
    var instance;

    function init() {
        return {
			list: [
                "haha"
			]
		};
    }
    
    return {
        getInstance: function() {
            instance = init();
            return instance;
        }
    }
})();

var c = singletonTest.getInstance();
var d = singletonTest.getInstance();

console.log(c === d);