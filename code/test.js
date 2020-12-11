/*var stringUtilError = (function() {
    return {
        '': '',
        error: function(msg) {
            throw msg;
        }
    }
})();

var typeMessage = (function() {
    return {
        'list': {
            'a_1': '테스트입니다.',
            'a_2': '테스트입니다2.',
        }
    }
})(); */

// 문자열 [Object Type] 을 Type만 반환하는 함수
var type = (function() {
    return {
        getType: function(target) {
            var pattern = new RegExp('.+\\s(\\w+).$');
            var type = Object.prototype.toString.call(target);
            type = type.replace(pattern, '$1').toLowerCase();
            console.log('type is', type);
            return type;
        },
        typeCheck: function(items) {
            // 각 매개변수는 형식이 필요함 ex) { value: 1, type: number }
            for(var index in items) {
                var value = items[index].value;
                var type = items[index].type;
                if(this.getType(value) !== type) this.typeError('typeError: ' + index + ' 번째 파라미터 타입은 ' + type);
            }
        },
        isString: function(target) {
            return (this.getType(target) === 'string');
        },
        isNumber: function(target) {
            return (this.getType(target) === 'number');
        },
        isArray: function(target) {
            return (this.getType(target) === 'array');
        },
        isNull: function(target) {
            return (this.getType(target) === 'null');
        },
        isRegExp: function(target) {
            return (this.getType(target) === 'regexp');
        },
        typeError: function(msg) {
            try { 
                throw new TypeError(msg);
            } catch(e) {
                console.log(e.message);
            }
        }
    }
})();

var prefix = (function() {
    var defaultPattern = new RegExp('^\\[[ㄱ-힇]*\\]\\s?');
    var typeCheck = function(items) {
        type.typeCheck(items);
    }
    return {
        isPrefix: function(str) {
            var items = [{'value': str, 'type': 'string'}];
            typeCheck(items);
            return str.search(defaultPattern) !== -1;
        },
        replacePrefix: function(str, replaceValue) {
            var items = [
                {'value': str, 'type': 'string'},
                {'value': replaceValue, 'type': 'string'},
            ];
            typeCheck(items);
            return str.replace(defaultPattern, replaceValue);
        },
        setPattern: function(pattern) {
            var items = [{'value': pattern, 'type': 'regexp'}];
            typeCheck(items);
            defaultPattern = pattern;
        },
        getPattern: function() {
            return defaultPattern;
        }
    }
})();

var hihi = (function() {
    
})();

var stringUtil = (function() {
    var str, ins, len;
    var validation = function(a, b, c) {
        var items =
        [
            { 
                'value': a,
                'type': 'string'
            },
            { 
                'value': b,
                'type': 'string'
            },
            { 
                'value': c,
                'type': 'number'
            }
        ];
        type.typeCheck(items);
        /* var s = ['', '0', 5];
        str = (!a)? s[0] : a;
        ins = (!b)? s[1] : b;
        len = (!c)? s[2] : c;

        if(str === '') throw '문자 또는 숫자를 입력해주세요.';
        if(typeof(str) === 'number') str = str.toString();
        if(typeof(ins) !== 'string') throw '문자 또는 숫자를 입력해주세요.'; */
    }
    return {
        digit: {
            getPrefix: function(target, insertStr, setlen) {
                var items = validation(target, insertStr, setlen);
                /* while(str.length < setlen) {
                    str = insertStr + str;
                }
                console.log('prefix: ', str);
                return str; */
            },
            getPostfix: function(target, insertStr, setlen) {
                var items = validation(target, insertStr, setlen);
                /* while(str.length < setlen) {
                    str = str + insertStr;
                }
                console.log('postfix: ', str);
                return str; */
            }
        }
    }
})();

var init = (function() {
    //stringUtil.digit.getPrefix("9", 0, 5);
    /* stringUtil.getPostfix("1", 'x', 5); */
    //stringUtil.digit.getPrefix();
    /* try {
        throw new TypeError('??');
    } catch(e) {
        console.log(e.message);
    } */
    //stringUtil.digit.getPostfix('', '', '');
    // var str = '[ㅎㅎ]';
    // console.log(prefix.isPrefix(str));

    // prefix.setPattern(new RegExp('aaa'));
    //type.isString('');

    prefix.isPrefix(1);
})();

// 우편 코드 관련 
/*
AA0000
00000-000
A0A 0A0
A000
000 00
AA0000
000-0000
00000
AAA 0000
00000
00000
0000 AA
00-000
000 00
AA 00000


BN
BR
CA
CH
CZ
HN
JP
KR
MT
MU
NI
NL
PL
SK
SO
*/

/*function haha(pattern, option) {
	var option = (option)? option : '';
	var reg = new RegExp(pattern, option);
	return reg.test(a);
}

var stateCode = {
	'BN' : {
		pattern: '^[a-zA-Z]{2}\\d{4}$',
		maxChars: 6
	},
	'BR' : {
		pattern: '^\\d{5}\\-\\d{3}$',
		maxChars: 9
	},
	'CA' : {
		pattern: '^[a-zA-Z]\\d[a-zA-Z]\\s\\d[a-zA-Z]\\d$',
		maxChars: 7
	},
	'CH' : {
		pattern: '^[a-zA-Z]\\d{3}$',
		maxChars: 4
	},
	'CZ' : {
		pattern: '^\\d{3}\\s\\d{2}$',
		maxChars: 6
	},
	'HN' : {
		pattern: '^[a-zA-Z]{2}\\d{4}$',
		maxChars: 6
	},
	'JP' : {
		pattern: '^\\d{3}\\-\\d{4}$',
		maxChars: 8
	},
	'KR' : {
		pattern: '^\\d{5}$',
		maxChars: 5
	},
	'MT' : {
		pattern: '^[a-zA-Z]{3}\\s\\d{4}',
		maxChars: 8
	},
	'MU' : {
		pattern: '^\\d{5}$',
		maxChars: 5
	},
	'NI' : {
		pattern: '^\\d{5}$',
		maxChars: 5
	},
	'NL' : {
		pattern: '^\\d{4}\\s[a-zA-Z]{2}$',
		maxChars: 7
	},
	'PL' : {
		pattern: '^\\d{2}\\-\\d{3}$',
		maxChars: 6
	},
	'SK' : {
		pattern: '^\\d{3}\\s\\d{2}$',
		maxChars: 6
	},
	'SO' : {
		pattern: '^[a-zA-Z]{2}\\s\\d{5}$',
		maxChars: 8
	}
}

function getChangeTextForm(id) {
    var i, t = 0;
    var text = '';
    var len = id.length;
    var type = {
        'A': [3, 2, 5], // 10자리 xxx-xx-xxxxx 형식 3, 2, 5
        'B': [6, 7] // 13자리 xxxxxx-xxxxxxx 형식 6, 7
    };
    var currentArray;

    if(len === 10) {
        currentArray = type.A;
    } else if(len === 13) {
        currentArray = type.B;
    } else {
        currentArray = [len];
    }

    $.each(currentArray, function(index, item) {
        if(index === 0) {
            t = 0;
        } else {
            t = t + (currentArray[index - 1]);
        }

        if(index === (currentArray.length - 1)) {
            text += id.substring(t, item + t);
        } else {
            text += id.substring(t, item + t) + '-';
        }
    });

    return text;
}*/