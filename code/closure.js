//console.log("this: " + this);
var closure = (function() {
    var name = 'dmld';

    var that = this;
    //console.log("this: " + this);
    var obj = {
        setName: function(name) {
            that.name = name;
        },

        getName: function() {
            return that.name;
        }
    };

    return obj;
})();

var test = closure;

/* var test = function() {
    console.log("this: " + this);
}; */


console.log(closure.getName());
closure.setName("yaho");
console.log(closure.getName());