
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(rootX, rootY)
{
	var stack = [{ x: rootX, y: rootY }];
	while (stack.length > 0)
	{
		var front = stack.pop();
		var x = front.x;
		var y = front.y;
		if (x === y)
		{
			continue;
		}
		if (typeof x === 'object')
		{
			var c = 0;
			for (var key in x)
			{
				++c;
				if (!(key in y))
				{
					return false;
				}
				if (key === 'ctor')
				{
					continue;
				}
				stack.push({ x: x[key], y: y[key] });
			}
			if ('ctor' in x)
			{
				stack.push({ x: x.ctor, y: y.ctor});
			}
			if (c !== Object.keys(y).length)
			{
				return false;
			}
		}
		else if (typeof x === 'function')
		{
			throw new Error('Equality error: general function equality is ' +
							'undecidable, and therefore, unsupported');
		}
		else
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	var ord;
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}
	else if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b
			? EQ
			: a < b
				? LT
				: GT;
	}
	else if (x.ctor === '::' || x.ctor === '[]')
	{
		while (true)
		{
			if (x.ctor === '[]' && y.ctor === '[]')
			{
				return EQ;
			}
			if (x.ctor !== y.ctor)
			{
				return x.ctor === '[]' ? LT : GT;
			}
			ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
	}
	else if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}
	else
	{
		throw new Error('Comparison error: comparison is only defined on ints, ' +
						'floats, times, chars, strings, lists of comparable values, ' +
						'and tuples of comparable values.');
	}
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
		{
			var name, list;
			if (v.ctor === 'Set_elm_builtin')
			{
				name = 'Set';
				list = A2(
					_elm_lang$core$List$map,
					function(x) {return x._0; },
					_elm_lang$core$Dict$toList(v._0)
				);
			}
			else
			{
				name = 'Dict';
				list = _elm_lang$core$Dict$toList(v);
			}
			return name + '.fromList ' + toString(list);
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		numSteps = step(numSteps, process);
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	var i = 0;
	var is = [];
	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$lazy$Native_Lazy = function() {

function memoize(thunk)
{
    var value;
    var isForced = false;
    return function(tuple0) {
        if (!isForced) {
            value = thunk(tuple0);
            isForced = true;
        }
        return value;
    };
}

return {
    memoize: memoize
};

}();

var _elm_lang$lazy$Lazy$force = function (_p0) {
	var _p1 = _p0;
	return _p1._0(
		{ctor: '_Tuple0'});
};
var _elm_lang$lazy$Lazy$Lazy = function (a) {
	return {ctor: 'Lazy', _0: a};
};
var _elm_lang$lazy$Lazy$lazy = function (thunk) {
	return _elm_lang$lazy$Lazy$Lazy(
		_elm_lang$lazy$Native_Lazy.memoize(thunk));
};
var _elm_lang$lazy$Lazy$map = F2(
	function (f, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p2) {
				var _p3 = _p2;
				return f(
					_elm_lang$lazy$Lazy$force(a));
			});
	});
var _elm_lang$lazy$Lazy$map2 = F3(
	function (f, a, b) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p4) {
				var _p5 = _p4;
				return A2(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b));
			});
	});
var _elm_lang$lazy$Lazy$map3 = F4(
	function (f, a, b, c) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p6) {
				var _p7 = _p6;
				return A3(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c));
			});
	});
var _elm_lang$lazy$Lazy$map4 = F5(
	function (f, a, b, c, d) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p8) {
				var _p9 = _p8;
				return A4(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d));
			});
	});
var _elm_lang$lazy$Lazy$map5 = F6(
	function (f, a, b, c, d, e) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p10) {
				var _p11 = _p10;
				return A5(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d),
					_elm_lang$lazy$Lazy$force(e));
			});
	});
var _elm_lang$lazy$Lazy$apply = F2(
	function (f, x) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p12) {
				var _p13 = _p12;
				return A2(
					_elm_lang$lazy$Lazy$force,
					f,
					_elm_lang$lazy$Lazy$force(x));
			});
	});
var _elm_lang$lazy$Lazy$andThen = F2(
	function (a, callback) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
	});

var _Dandandan$parser$Parser$funP = function (p) {
	var _p0 = p;
	if (_p0.ctor === 'Direct') {
		return _p0._0;
	} else {
		return _elm_lang$lazy$Lazy$force(_p0._0);
	}
};
var _Dandandan$parser$Parser$parse = F2(
	function (p, xs) {
		var _p1 = A2(_Dandandan$parser$Parser$funP, p, xs);
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Result$Err('parse error');
		} else {
			return _elm_lang$core$Result$Ok(
				_elm_lang$core$Basics$fst(_p1._0));
		}
	});
var _Dandandan$parser$Parser$parseAll = F2(
	function (p, xs) {
		var _p2 = A2(_Dandandan$parser$Parser$funP, p, xs);
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Err('parse error');
		} else {
			return _elm_lang$core$Result$Ok(
				A2(_elm_lang$core$List$map, _elm_lang$core$Basics$fst, _p2));
		}
	});
var _Dandandan$parser$Parser$Delayed = function (a) {
	return {ctor: 'Delayed', _0: a};
};
var _Dandandan$parser$Parser$recursively = function (t) {
	return function (_p3) {
		return _Dandandan$parser$Parser$Delayed(
			_elm_lang$lazy$Lazy$lazy(_p3));
	}(
		function (_p4) {
			var _p5 = _p4;
			return _Dandandan$parser$Parser$funP(
				t(
					{ctor: '_Tuple0'}));
		});
};
var _Dandandan$parser$Parser$Direct = function (a) {
	return {ctor: 'Direct', _0: a};
};
var _Dandandan$parser$Parser$succeed = function (b) {
	return _Dandandan$parser$Parser$Direct(
		function (xs) {
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: b, _1: xs}
				]);
		});
};
var _Dandandan$parser$Parser$satisfy = function (p) {
	return _Dandandan$parser$Parser$Direct(
		function (xs) {
			var _p6 = _elm_lang$core$String$uncons(xs);
			if (_p6.ctor === 'Nothing') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p7 = _p6._0._0;
				return p(_p7) ? _elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: _p7, _1: _p6._0._1}
					]) : _elm_lang$core$Native_List.fromArray(
					[]);
			}
		});
};
var _Dandandan$parser$Parser$symbol = function (x) {
	return _Dandandan$parser$Parser$satisfy(
		function (s) {
			return _elm_lang$core$Native_Utils.eq(s, x);
		});
};
var _Dandandan$parser$Parser$empty = _Dandandan$parser$Parser$Direct(
	_elm_lang$core$Basics$always(
		_elm_lang$core$Native_List.fromArray(
			[])));
var _Dandandan$parser$Parser$map = F2(
	function (f, p) {
		return _Dandandan$parser$Parser$Direct(
			function (xs) {
				return A2(
					_elm_lang$core$List$map,
					function (_p8) {
						var _p9 = _p8;
						return {
							ctor: '_Tuple2',
							_0: f(_p9._0),
							_1: _p9._1
						};
					},
					A2(_Dandandan$parser$Parser$funP, p, xs));
			});
	});
var _Dandandan$parser$Parser_ops = _Dandandan$parser$Parser_ops || {};
_Dandandan$parser$Parser_ops['<$'] = F2(
	function (f, p) {
		return A2(
			_Dandandan$parser$Parser$map,
			_elm_lang$core$Basics$always(f),
			p);
	});
var _Dandandan$parser$Parser$or = F2(
	function (p, q) {
		return _Dandandan$parser$Parser$Direct(
			function (xs) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_Dandandan$parser$Parser$funP, p, xs),
					A2(_Dandandan$parser$Parser$funP, q, xs));
			});
	});
var _Dandandan$parser$Parser$choice = A2(_elm_lang$core$List$foldr, _Dandandan$parser$Parser$or, _Dandandan$parser$Parser$empty);
var _Dandandan$parser$Parser$optional = F2(
	function (p, x) {
		return A2(
			_Dandandan$parser$Parser$or,
			p,
			_Dandandan$parser$Parser$succeed(x));
	});
var _Dandandan$parser$Parser$andMap = F2(
	function (q, p) {
		return _Dandandan$parser$Parser$Direct(
			function (xs) {
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$map,
						function (_p10) {
							var _p11 = _p10;
							return A2(
								_elm_lang$core$List$map,
								function (_p12) {
									var _p13 = _p12;
									return {
										ctor: '_Tuple2',
										_0: _p11._0(_p13._0),
										_1: _p13._1
									};
								},
								A2(_Dandandan$parser$Parser$funP, q, _p11._1));
						},
						A2(_Dandandan$parser$Parser$funP, p, xs)));
			});
	});
var _Dandandan$parser$Parser$token = function (xs) {
	var _p14 = _elm_lang$core$String$uncons(xs);
	if (_p14.ctor === 'Nothing') {
		return _Dandandan$parser$Parser$succeed('');
	} else {
		return A2(
			_Dandandan$parser$Parser$andMap,
			_Dandandan$parser$Parser$token(_p14._0._1),
			A2(
				_Dandandan$parser$Parser$map,
				_elm_lang$core$String$cons,
				_Dandandan$parser$Parser$symbol(_p14._0._0)));
	}
};
var _Dandandan$parser$Parser$some = function (p) {
	return A2(
		_Dandandan$parser$Parser$andMap,
		_Dandandan$parser$Parser$many(p),
		A2(
			_Dandandan$parser$Parser$map,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			p));
};
var _Dandandan$parser$Parser$many = function (p) {
	return _Dandandan$parser$Parser$Direct(
		function (xs) {
			var _p15 = A2(_Dandandan$parser$Parser$funP, p, xs);
			if (_p15.ctor === '[]') {
				return A2(
					_Dandandan$parser$Parser$funP,
					_Dandandan$parser$Parser$succeed(
						_elm_lang$core$Native_List.fromArray(
							[])),
					xs);
			} else {
				return A2(
					_Dandandan$parser$Parser$funP,
					_Dandandan$parser$Parser$some(p),
					xs);
			}
		});
};
var _Dandandan$parser$Parser$and = F2(
	function (p, q) {
		return A2(_Dandandan$parser$Parser$andMap, q, p);
	});
var _Dandandan$parser$Parser$separatedBy = F2(
	function (p, s) {
		return A3(
			_elm_lang$core$Basics$flip,
			_Dandandan$parser$Parser$or,
			_Dandandan$parser$Parser$succeed(
				_elm_lang$core$Native_List.fromArray(
					[])),
			A2(
				_Dandandan$parser$Parser$andMap,
				_Dandandan$parser$Parser$many(
					A2(
						_Dandandan$parser$Parser$andMap,
						p,
						A2(
							_Dandandan$parser$Parser$map,
							F2(
								function (x, y) {
									return y;
								}),
							s))),
				A2(
					_Dandandan$parser$Parser$map,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						}),
					p)));
	});
var _Dandandan$parser$Parser_ops = _Dandandan$parser$Parser_ops || {};
_Dandandan$parser$Parser_ops['<*'] = F2(
	function (p, q) {
		return A2(
			_Dandandan$parser$Parser$andMap,
			q,
			A2(_Dandandan$parser$Parser$map, _elm_lang$core$Basics$always, p));
	});
var _Dandandan$parser$Parser_ops = _Dandandan$parser$Parser_ops || {};
_Dandandan$parser$Parser_ops['*>'] = F2(
	function (p, q) {
		return A2(
			_Dandandan$parser$Parser$andMap,
			q,
			A2(
				_Dandandan$parser$Parser$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				p));
	});
var _Dandandan$parser$Parser$andThen = F2(
	function (p, f) {
		return _Dandandan$parser$Parser$Direct(
			function (xs) {
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$map,
						function (_p16) {
							var _p17 = _p16;
							return A2(
								_Dandandan$parser$Parser$funP,
								f(_p17._0),
								_p17._1);
						},
						A2(_Dandandan$parser$Parser$funP, p, xs)));
			});
	});
var _Dandandan$parser$Parser$end = _Dandandan$parser$Parser$Direct(
	function (xs) {
		var _p18 = xs;
		if (_p18 === '') {
			return A2(
				_Dandandan$parser$Parser$funP,
				_Dandandan$parser$Parser$succeed(
					{ctor: '_Tuple0'}),
				xs);
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});

var _Dandandan$parser$Parser_Char$between = F3(
	function (x, y, parser) {
		return A2(
			_Dandandan$parser$Parser_ops['<*'],
			A2(
				_Dandandan$parser$Parser_ops['*>'],
				_Dandandan$parser$Parser$symbol(x),
				parser),
			_Dandandan$parser$Parser$symbol(y));
	});
var _Dandandan$parser$Parser_Char$parenthesized = A2(
	_Dandandan$parser$Parser_Char$between,
	_elm_lang$core$Native_Utils.chr('('),
	_elm_lang$core$Native_Utils.chr(')'));
var _Dandandan$parser$Parser_Char$bracketed = A2(
	_Dandandan$parser$Parser_Char$between,
	_elm_lang$core$Native_Utils.chr('['),
	_elm_lang$core$Native_Utils.chr(']'));
var _Dandandan$parser$Parser_Char$braced = A2(
	_Dandandan$parser$Parser_Char$between,
	_elm_lang$core$Native_Utils.chr('{'),
	_elm_lang$core$Native_Utils.chr('}'));
var _Dandandan$parser$Parser_Char$quoted = A2(
	_Dandandan$parser$Parser_Char$between,
	_elm_lang$core$Native_Utils.chr('\"'),
	_elm_lang$core$Native_Utils.chr('\"'));
var _Dandandan$parser$Parser_Char$singleQuoted = A2(
	_Dandandan$parser$Parser_Char$between,
	_elm_lang$core$Native_Utils.chr('\''),
	_elm_lang$core$Native_Utils.chr('\''));
var _Dandandan$parser$Parser_Char$lower = _Dandandan$parser$Parser$satisfy(_elm_lang$core$Char$isLower);
var _Dandandan$parser$Parser_Char$upper = _Dandandan$parser$Parser$satisfy(_elm_lang$core$Char$isUpper);

var _Dandandan$parser$Parser_Number$fromOk = F2(
	function ($default, result) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			$default,
			_elm_lang$core$Result$toMaybe(result));
	});
var _Dandandan$parser$Parser_Number$sign = function () {
	var min = A2(
		_Dandandan$parser$Parser$map,
		_elm_lang$core$Basics$always(1),
		_Dandandan$parser$Parser$symbol(
			_elm_lang$core$Native_Utils.chr('+')));
	var plus = A2(
		_Dandandan$parser$Parser$map,
		_elm_lang$core$Basics$always(-1),
		_Dandandan$parser$Parser$symbol(
			_elm_lang$core$Native_Utils.chr('-')));
	return A2(
		_Dandandan$parser$Parser$optional,
		A2(_Dandandan$parser$Parser$or, plus, min),
		1);
}();
var _Dandandan$parser$Parser_Number$digit = function () {
	var charToInt = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_Dandandan$parser$Parser$map,
		charToInt,
		_Dandandan$parser$Parser$satisfy(_elm_lang$core$Char$isDigit));
}();
var _Dandandan$parser$Parser_Number$natural = A2(
	_Dandandan$parser$Parser$map,
	A2(
		_elm_lang$core$List$foldl,
		F2(
			function (b, a) {
				return (a * 10) + b;
			}),
		0),
	_Dandandan$parser$Parser$some(_Dandandan$parser$Parser_Number$digit));
var _Dandandan$parser$Parser_Number$integer = A2(
	_Dandandan$parser$Parser$andMap,
	_Dandandan$parser$Parser_Number$natural,
	A2(
		_Dandandan$parser$Parser$map,
		F2(
			function (x, y) {
				return x * y;
			}),
		_Dandandan$parser$Parser_Number$sign));
var _Dandandan$parser$Parser_Number$float = function () {
	var toFloatString = function (_p0) {
		var _p1 = _p0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(_p1._0),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'.',
				_elm_lang$core$String$concat(
					A2(_elm_lang$core$List$map, _elm_lang$core$Basics$toString, _p1._1))));
	};
	var convertToFloat = F3(
		function (sig, $int, digs) {
			return _elm_lang$core$Basics$toFloat(sig) * function (_p2) {
				return A2(
					_Dandandan$parser$Parser_Number$fromOk,
					0.0,
					_elm_lang$core$String$toFloat(
						toFloatString(_p2)));
			}(
				{ctor: '_Tuple2', _0: $int, _1: digs});
		});
	return A2(
		_Dandandan$parser$Parser$andMap,
		A2(
			_Dandandan$parser$Parser_ops['*>'],
			_Dandandan$parser$Parser$symbol(
				_elm_lang$core$Native_Utils.chr('.')),
			_Dandandan$parser$Parser$some(_Dandandan$parser$Parser_Number$digit)),
		A2(
			_Dandandan$parser$Parser$andMap,
			_Dandandan$parser$Parser_Number$integer,
			A2(_Dandandan$parser$Parser$map, convertToFloat, _Dandandan$parser$Parser_Number$sign)));
}();

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				var _p3 = _p2;
				var _p9 = _p3._1;
				var _p8 = _p3._0;
				var _p4 = _p8;
				if (_p4.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					};
				} else {
					var _p7 = _p4._1;
					var _p6 = _p4._0._1;
					var _p5 = _p4._0._0;
					return (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) ? {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A3(leftStep, _p5, _p6, _p9)
					} : ((_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) ? {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					} : {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A4(bothStep, _p5, _p6, rValue, _p9)
					});
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v11_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v11_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v11_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v13 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v14 = _p14._3;
				n = _v13;
				dict = _v14;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v17 = targetKey,
							_v18 = _p15._3;
						targetKey = _v17;
						dict = _v18;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v19 = targetKey,
							_v20 = _p15._4;
						targetKey = _v19;
						dict = _v20;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v23 = _p18._1,
					_v24 = _p18._2,
					_v25 = _p18._4;
				k = _v23;
				v = _v24;
				r = _v25;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v33_6:
	do {
		_v33_5:
		do {
			_v33_4:
			do {
				_v33_3:
				do {
					_v33_2:
					do {
						_v33_1:
						do {
							_v33_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v33_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v33_3;
																		} else {
																			break _v33_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v33_4;
																	} else {
																		break _v33_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	break _v33_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v33_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															} else {
																break _v33_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v33_5;
															} else {
																break _v33_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	break _v33_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v33_4;
															} else {
																break _v33_6;
															}
														default:
															break _v33_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v33_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v33_1;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v33_5;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v33_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v33_3;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v33_4;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										} else {
											break _v33_6;
										}
									}
								} else {
									break _v33_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _avh4$elm_diff$Diff$tokenizeLines = function (s) {
	var tokens = A2(_elm_lang$core$String$split, '\n', s);
	var n = _elm_lang$core$List$length(tokens);
	return _elm_lang$core$Native_Utils.eq(s, '') ? _elm_lang$core$Native_List.fromArray(
		[]) : A2(
		_elm_lang$core$List$indexedMap,
		F2(
			function (i, s) {
				return (_elm_lang$core$Native_Utils.cmp(i, n - 1) < 0) ? A2(_elm_lang$core$Basics_ops['++'], s, '\n') : s;
			}),
		tokens);
};
var _avh4$elm_diff$Diff$val = F3(
	function (row, col, s) {
		return A2(
			_elm_lang$core$Dict$get,
			{ctor: '_Tuple2', _0: row, _1: col},
			s);
	});
var _avh4$elm_diff$Diff$orCrash = function (m) {
	var _p0 = m;
	if (_p0.ctor === 'Just') {
		return _p0._0;
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'Diff',
			{
				start: {line: 114, column: 5},
				end: {line: 119, column: 37}
			},
			_p0)('No options');
	}
};
var _avh4$elm_diff$Diff$bestScore = F2(
	function (ma, mb) {
		var _p2 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (_p2._1.ctor === 'Nothing') {
			return _p2._0;
		} else {
			if (_p2._0.ctor === 'Nothing') {
				return _p2._1;
			} else {
				var _p4 = _p2._1._0._0;
				var _p3 = _p2._0._0._0;
				return (_elm_lang$core$Native_Utils.cmp(_p4, _p3) > 0) ? _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p4, _1: _p2._1._0._1}) : _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p3, _1: _p2._0._0._1});
			}
		}
	});
var _avh4$elm_diff$Diff$score = F3(
	function (add, c, _p5) {
		var _p6 = _p5;
		return {
			ctor: '_Tuple2',
			_0: _p6._0 + add,
			_1: A2(_elm_lang$core$List_ops['::'], c, _p6._1)
		};
	});
var _avh4$elm_diff$Diff$scores = F4(
	function (tl, t, l, _p7) {
		var _p8 = _p7;
		return A2(
			_elm_lang$core$Maybe$map,
			A2(_avh4$elm_diff$Diff$score, _p8._1, _p8._2),
			function () {
				var _p9 = _p8._0;
				switch (_p9.ctor) {
					case 'UseA':
						return t;
					case 'UseB':
						return l;
					default:
						return tl;
				}
			}());
	});
var _avh4$elm_diff$Diff$Removed = function (a) {
	return {ctor: 'Removed', _0: a};
};
var _avh4$elm_diff$Diff$Added = function (a) {
	return {ctor: 'Added', _0: a};
};
var _avh4$elm_diff$Diff$Changed = F2(
	function (a, b) {
		return {ctor: 'Changed', _0: a, _1: b};
	});
var _avh4$elm_diff$Diff$NoChange = function (a) {
	return {ctor: 'NoChange', _0: a};
};
var _avh4$elm_diff$Diff$mergeAll = F2(
	function (next, list) {
		var _p10 = {ctor: '_Tuple2', _0: next, _1: list};
		_v5_8:
		do {
			if ((_p10.ctor === '_Tuple2') && (_p10._1.ctor === '::')) {
				switch (_p10._0.ctor) {
					case 'Added':
						switch (_p10._1._0.ctor) {
							case 'Added':
								return A2(
									_elm_lang$core$List_ops['::'],
									_avh4$elm_diff$Diff$Added(
										A2(_elm_lang$core$Basics_ops['++'], _p10._0._0, _p10._1._0._0)),
									_p10._1._1);
							case 'Removed':
								return A2(
									_elm_lang$core$List_ops['::'],
									A2(_avh4$elm_diff$Diff$Changed, _p10._1._0._0, _p10._0._0),
									_p10._1._1);
							case 'Changed':
								return A2(
									_elm_lang$core$List_ops['::'],
									A2(
										_avh4$elm_diff$Diff$Changed,
										_p10._1._0._0,
										A2(_elm_lang$core$Basics_ops['++'], _p10._0._0, _p10._1._0._1)),
									_p10._1._1);
							default:
								break _v5_8;
						}
					case 'Removed':
						switch (_p10._1._0.ctor) {
							case 'Removed':
								return A2(
									_elm_lang$core$List_ops['::'],
									_avh4$elm_diff$Diff$Removed(
										A2(_elm_lang$core$Basics_ops['++'], _p10._0._0, _p10._1._0._0)),
									_p10._1._1);
							case 'Added':
								return A2(
									_elm_lang$core$List_ops['::'],
									A2(_avh4$elm_diff$Diff$Changed, _p10._0._0, _p10._1._0._0),
									_p10._1._1);
							case 'Changed':
								return A2(
									_elm_lang$core$List_ops['::'],
									A2(
										_avh4$elm_diff$Diff$Changed,
										A2(_elm_lang$core$Basics_ops['++'], _p10._0._0, _p10._1._0._0),
										_p10._1._0._1),
									_p10._1._1);
							default:
								break _v5_8;
						}
					case 'NoChange':
						if (_p10._1._0.ctor === 'NoChange') {
							return A2(
								_elm_lang$core$List_ops['::'],
								_avh4$elm_diff$Diff$NoChange(
									A2(_elm_lang$core$Basics_ops['++'], _p10._0._0, _p10._1._0._0)),
								_p10._1._1);
						} else {
							break _v5_8;
						}
					default:
						if (_p10._1._0.ctor === 'Changed') {
							return A2(
								_elm_lang$core$List_ops['::'],
								A2(
									_avh4$elm_diff$Diff$Changed,
									A2(_elm_lang$core$Basics_ops['++'], _p10._0._0, _p10._1._0._0),
									A2(_elm_lang$core$Basics_ops['++'], _p10._0._1, _p10._1._0._1)),
								_p10._1._1);
						} else {
							break _v5_8;
						}
				}
			} else {
				break _v5_8;
			}
		} while(false);
		return A2(_elm_lang$core$List_ops['::'], next, list);
	});
var _avh4$elm_diff$Diff$UseB = {ctor: 'UseB'};
var _avh4$elm_diff$Diff$UseA = {ctor: 'UseA'};
var _avh4$elm_diff$Diff$UseBoth = {ctor: 'UseBoth'};
var _avh4$elm_diff$Diff$choices = F2(
	function (a, b) {
		return _elm_lang$core$Native_Utils.eq(a, b) ? _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple3',
				_0: _avh4$elm_diff$Diff$UseA,
				_1: 0,
				_2: _avh4$elm_diff$Diff$Removed(a)
			},
				{
				ctor: '_Tuple3',
				_0: _avh4$elm_diff$Diff$UseB,
				_1: 0,
				_2: _avh4$elm_diff$Diff$Added(b)
			},
				{
				ctor: '_Tuple3',
				_0: _avh4$elm_diff$Diff$UseBoth,
				_1: 1,
				_2: _avh4$elm_diff$Diff$NoChange(a)
			}
			]) : _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple3',
				_0: _avh4$elm_diff$Diff$UseA,
				_1: 0,
				_2: _avh4$elm_diff$Diff$Removed(a)
			},
				{
				ctor: '_Tuple3',
				_0: _avh4$elm_diff$Diff$UseB,
				_1: 0,
				_2: _avh4$elm_diff$Diff$Added(b)
			},
				{
				ctor: '_Tuple3',
				_0: _avh4$elm_diff$Diff$UseBoth,
				_1: 0,
				_2: A2(_avh4$elm_diff$Diff$Changed, a, b)
			}
			]);
	});
var _avh4$elm_diff$Diff$best = F5(
	function (tl, t, l, a, b) {
		return _avh4$elm_diff$Diff$orCrash(
			A3(
				_elm_lang$core$List$foldl,
				_avh4$elm_diff$Diff$bestScore,
				_elm_lang$core$Maybe$Nothing,
				A2(
					_elm_lang$core$List$map,
					A3(_avh4$elm_diff$Diff$scores, tl, t, l),
					A2(_avh4$elm_diff$Diff$choices, a, b))));
	});
var _avh4$elm_diff$Diff$calcCell = F3(
	function (_p12, _p11, s) {
		var _p13 = _p12;
		var _p16 = _p13._0;
		var _p14 = _p11;
		var _p15 = _p14._0;
		return A3(
			_elm_lang$core$Dict$insert,
			{ctor: '_Tuple2', _0: _p16, _1: _p15},
			A5(
				_avh4$elm_diff$Diff$best,
				A3(_avh4$elm_diff$Diff$val, _p16 - 1, _p15 - 1, s),
				A3(_avh4$elm_diff$Diff$val, _p16 - 1, _p15, s),
				A3(_avh4$elm_diff$Diff$val, _p16, _p15 - 1, s),
				_p13._1,
				_p14._1),
			s);
	});
var _avh4$elm_diff$Diff$calcRow = F3(
	function (bs, _p17, d) {
		var _p18 = _p17;
		return A3(
			_elm_lang$core$List$foldl,
			_avh4$elm_diff$Diff$calcCell(
				{ctor: '_Tuple2', _0: _p18._0, _1: _p18._1}),
			d,
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				bs));
	});
var _avh4$elm_diff$Diff$initialGrid = F2(
	function (az, bs) {
		return function (d) {
			return A3(
				_elm_lang$core$List$foldl,
				function (a) {
					return A2(
						_avh4$elm_diff$Diff$calcCell,
						a,
						{ctor: '_Tuple2', _0: -1, _1: ''});
				},
				d,
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					az));
		}(
			A3(
				_avh4$elm_diff$Diff$calcRow,
				bs,
				{ctor: '_Tuple2', _0: -1, _1: ''},
				A2(
					_elm_lang$core$Dict$singleton,
					{ctor: '_Tuple2', _0: -1, _1: -1},
					{
						ctor: '_Tuple2',
						_0: 0,
						_1: _elm_lang$core$Native_List.fromArray(
							[])
					})));
	});
var _avh4$elm_diff$Diff$calcGrid = F2(
	function (az, bs) {
		return A3(
			_elm_lang$core$List$foldl,
			_avh4$elm_diff$Diff$calcRow(bs),
			A2(_avh4$elm_diff$Diff$initialGrid, az, bs),
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				az));
	});
var _avh4$elm_diff$Diff$diff = F3(
	function (tokenize, a, b) {
		var bs = tokenize(b);
		var az = tokenize(a);
		return _elm_lang$core$Native_Utils.eq(
			az,
			_elm_lang$core$Native_List.fromArray(
				[])) ? A3(
			_elm_lang$core$List$foldr,
			_avh4$elm_diff$Diff$mergeAll,
			_elm_lang$core$Native_List.fromArray(
				[]),
			A2(_elm_lang$core$List$map, _avh4$elm_diff$Diff$Added, bs)) : (_elm_lang$core$Native_Utils.eq(
			bs,
			_elm_lang$core$Native_List.fromArray(
				[])) ? A3(
			_elm_lang$core$List$foldr,
			_avh4$elm_diff$Diff$mergeAll,
			_elm_lang$core$Native_List.fromArray(
				[]),
			A2(_elm_lang$core$List$map, _avh4$elm_diff$Diff$Removed, az)) : A3(
			_elm_lang$core$List$foldl,
			_avh4$elm_diff$Diff$mergeAll,
			_elm_lang$core$Native_List.fromArray(
				[]),
			A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$Maybe$map,
					function (_p19) {
						var _p20 = _p19;
						return _p20._1;
					},
					A2(
						_elm_lang$core$Dict$get,
						{
							ctor: '_Tuple2',
							_0: -1 + _elm_lang$core$List$length(az),
							_1: -1 + _elm_lang$core$List$length(bs)
						},
						A2(_avh4$elm_diff$Diff$calcGrid, az, bs))))));
	});
var _avh4$elm_diff$Diff$diffChars = _avh4$elm_diff$Diff$diff(
	_elm_lang$core$String$split(''));
var _avh4$elm_diff$Diff$diffLines = _avh4$elm_diff$Diff$diff(_avh4$elm_diff$Diff$tokenizeLines);

var _elm_community$basics_extra$Basics_Extra_ops = _elm_community$basics_extra$Basics_Extra_ops || {};
_elm_community$basics_extra$Basics_Extra_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _elm_community$basics_extra$Basics_Extra$never = function (n) {
	never:
	while (true) {
		var _v0 = n;
		n = _v0;
		continue never;
	}
};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badPrimitive('something custom', value);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: null
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: null };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;
		
			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}
            
			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};
			
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: null,
		eventNode: null
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-insert', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;
            
			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}
            
			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-insert':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$svg$Svg$svgNamespace = A2(
	_elm_lang$virtual_dom$VirtualDom$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _elm_lang$svg$Svg$node = F3(
	function (name, attributes, children) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			name,
			A2(_elm_lang$core$List_ops['::'], _elm_lang$svg$Svg$svgNamespace, attributes),
			children);
	});
var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
var _elm_lang$svg$Svg$missingGlyph = _elm_lang$svg$Svg$node('missingGlyph');
var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
var _elm_lang$svg$Svg$fontFace = _elm_lang$svg$Svg$node('fontFace');
var _elm_lang$svg$Svg$fontFaceFormat = _elm_lang$svg$Svg$node('fontFaceFormat');
var _elm_lang$svg$Svg$fontFaceName = _elm_lang$svg$Svg$node('fontFaceName');
var _elm_lang$svg$Svg$fontFaceSrc = _elm_lang$svg$Svg$node('fontFaceSrc');
var _elm_lang$svg$Svg$fontFaceUri = _elm_lang$svg$Svg$node('fontFaceUri');
var _elm_lang$svg$Svg$hkern = _elm_lang$svg$Svg$node('hkern');
var _elm_lang$svg$Svg$vkern = _elm_lang$svg$Svg$node('vkern');
var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
var _elm_lang$svg$Svg$text$ = _elm_lang$svg$Svg$node('text');
var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');

var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
var _elm_lang$svg$Svg_Attributes$type$ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
var _elm_lang$svg$Svg_Attributes$in$ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var hue$ = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, hue$, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(hue$, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(hue$, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(hue$, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(hue$, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(hue$, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(hue$, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(hue$, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

var _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString = function (color) {
	var _p0 = _elm_lang$core$Color$toRgb(color);
	var red = _p0.red;
	var green = _p0.green;
	var blue = _p0.blue;
	var alpha = _p0.alpha;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'rgba(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(red),
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(green),
					A2(
						_elm_lang$core$Basics_ops['++'],
						',',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(blue),
							A2(
								_elm_lang$core$Basics_ops['++'],
								',',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(alpha),
									')'))))))));
};
var _elm_community$elm_material_icons$Material_Icons_Internal$icon = F3(
	function (path, color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d(path),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});

var _elm_community$elm_material_icons$Material_Icons_Action$zoom_out = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z');
var _elm_community$elm_material_icons$Material_Icons_Action$zoom_in = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z');
var _elm_community$elm_material_icons$Material_Icons_Action$youtube_searched_for = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z');
var _elm_community$elm_material_icons$Material_Icons_Action$work = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$visibility_off = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z');
var _elm_community$elm_material_icons$Material_Icons_Action$visibility = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_week = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_stream = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 18h17v-6H4v6zM4 5v6h17V5H4z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_quilt = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_module = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_list = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_headline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_day = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_column = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_carousel = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_array = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z');
var _elm_community$elm_material_icons$Material_Icons_Action$view_agenda = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z');
var _elm_community$elm_material_icons$Material_Icons_Action$verified_user = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Action$turned_in_not = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z');
var _elm_community$elm_material_icons$Material_Icons_Action$turned_in = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$trending_up = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z');
var _elm_community$elm_material_icons$Material_Icons_Action$trending_flat = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M22 12l-4-4v3H3v2h15v3z');
var _elm_community$elm_material_icons$Material_Icons_Action$trending_down = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z');
var _elm_community$elm_material_icons$Material_Icons_Action$translate = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z');
var _elm_community$elm_material_icons$Material_Icons_Action$track_changes = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z');
var _elm_community$elm_material_icons$Material_Icons_Action$toll = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z');
var _elm_community$elm_material_icons$Material_Icons_Action$today = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z');
var _elm_community$elm_material_icons$Material_Icons_Action$toc = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$thumps_up_down = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$thumb_up = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z');
var _elm_community$elm_material_icons$Material_Icons_Action$thumb_down = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z');
var _elm_community$elm_material_icons$Material_Icons_Action$theaters = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$tab_unselected = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$tab = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z');
var _elm_community$elm_material_icons$Material_Icons_Action$system_update_alt = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$swap_vertical_circle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$swap_vert = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z');
var _elm_community$elm_material_icons$Material_Icons_Action$swap_horiz = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z');
var _elm_community$elm_material_icons$Material_Icons_Action$supervisor_account = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z');
var _elm_community$elm_material_icons$Material_Icons_Action$subject = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z');
var _elm_community$elm_material_icons$Material_Icons_Action$store = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z');
var _elm_community$elm_material_icons$Material_Icons_Action$stars = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z');
var _elm_community$elm_material_icons$Material_Icons_Action$star_rate = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 18 18')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$spellcheck = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z');
var _elm_community$elm_material_icons$Material_Icons_Action$speaker_notes = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$shopping_cart = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$shopping_basket = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z');
var _elm_community$elm_material_icons$Material_Icons_Action$shop_two = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z');
var _elm_community$elm_material_icons$Material_Icons_Action$shop = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_voice = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_remote = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_power = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_phone = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_overscan = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_input_svideo = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_input_hdmi = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_input_composite = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_input_component = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_input_antenna = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_ethernet = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_cell = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_brightness = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_bluetooth = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_backup_restore = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings_application = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z');
var _elm_community$elm_material_icons$Material_Icons_Action$settings = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$search = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z');
var _elm_community$elm_material_icons$Material_Icons_Action$schedule = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$fillOpacity('.9'),
							_elm_lang$svg$Svg_Attributes$d('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$room = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$restore = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z');
var _elm_community$elm_material_icons$Material_Icons_Action$report_problem = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z');
var _elm_community$elm_material_icons$Material_Icons_Action$reorder = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z');
var _elm_community$elm_material_icons$Material_Icons_Action$redeem = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z');
var _elm_community$elm_material_icons$Material_Icons_Action$receipt = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z');
var _elm_community$elm_material_icons$Material_Icons_Action$question_answer = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z');
var _elm_community$elm_material_icons$Material_Icons_Action$query_builder = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z');
var _elm_community$elm_material_icons$Material_Icons_Action$print = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z');
var _elm_community$elm_material_icons$Material_Icons_Action$power_settings_new = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z');
var _elm_community$elm_material_icons$Material_Icons_Action$polymer = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z');
var _elm_community$elm_material_icons$Material_Icons_Action$play_for_work = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z');
var _elm_community$elm_material_icons$Material_Icons_Action$picture_in_picture = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_scan_wifi = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_phone_msg = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_media = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_identity = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_device_information = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_data_setting = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_contact_calendar = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z');
var _elm_community$elm_material_icons$Material_Icons_Action$perm_camera_mic = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z');
var _elm_community$elm_material_icons$Material_Icons_Action$payment = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$pageview = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z');
var _elm_community$elm_material_icons$Material_Icons_Action$open_with = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z');
var _elm_community$elm_material_icons$Material_Icons_Action$open_in_new = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z');
var _elm_community$elm_material_icons$Material_Icons_Action$open_in_browser = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z');
var _elm_community$elm_material_icons$Material_Icons_Action$offline_pin = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$note_add = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z');
var _elm_community$elm_material_icons$Material_Icons_Action$markunread_mailbox = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$loyalty = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z');
var _elm_community$elm_material_icons$Material_Icons_Action$lock_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-5.1c1.71 0 3.1 1.39 3.1 3.1v2H9V6h-.1c0-1.71 1.39-3.1 3.1-3.1zM18 20H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z');
var _elm_community$elm_material_icons$Material_Icons_Action$lock_open = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z');
var _elm_community$elm_material_icons$Material_Icons_Action$lock = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$list = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z');
var _elm_community$elm_material_icons$Material_Icons_Action$launch = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z');
var _elm_community$elm_material_icons$Material_Icons_Action$language = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z');
var _elm_community$elm_material_icons$Material_Icons_Action$label_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z');
var _elm_community$elm_material_icons$Material_Icons_Action$label = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z');
var _elm_community$elm_material_icons$Material_Icons_Action$invert_colors = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z');
var _elm_community$elm_material_icons$Material_Icons_Action$input = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z');
var _elm_community$elm_material_icons$Material_Icons_Action$info_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$info = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$https = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$http = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z');
var _elm_community$elm_material_icons$Material_Icons_Action$hourglass_full = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z');
var _elm_community$elm_material_icons$Material_Icons_Action$hourglass_empty = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z');
var _elm_community$elm_material_icons$Material_Icons_Action$home = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z');
var _elm_community$elm_material_icons$Material_Icons_Action$history = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$opacity('.9'),
							_elm_lang$svg$Svg_Attributes$d('M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$highlight_off = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Action$help_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z');
var _elm_community$elm_material_icons$Material_Icons_Action$help = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z');
var _elm_community$elm_material_icons$Material_Icons_Action$group_work = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$grade = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z');
var _elm_community$elm_material_icons$Material_Icons_Action$gif = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M24 24H0V0h24v24z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$get_app = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z');
var _elm_community$elm_material_icons$Material_Icons_Action$flip_to_front = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$flip_to_back = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$flight_takeoff = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$flight_land = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('c'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('d'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#c'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#d)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$find_replace = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z');
var _elm_community$elm_material_icons$Material_Icons_Action$find_in_page = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z');
var _elm_community$elm_material_icons$Material_Icons_Action$feedback = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z');
var _elm_community$elm_material_icons$Material_Icons_Action$favorite_border = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z');
var _elm_community$elm_material_icons$Material_Icons_Action$favorite = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
var _elm_community$elm_material_icons$Material_Icons_Action$face = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Action$extension = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z');
var _elm_community$elm_material_icons$Material_Icons_Action$explore = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z');
var _elm_community$elm_material_icons$Material_Icons_Action$exit_to_app = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$event_seat = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Action$event = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z');
var _elm_community$elm_material_icons$Material_Icons_Action$eject = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M5 17h14v2H5zm7-12L5.33 15h13.34z');
var _elm_community$elm_material_icons$Material_Icons_Action$done_all = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z');
var _elm_community$elm_material_icons$Material_Icons_Action$done = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z');
var _elm_community$elm_material_icons$Material_Icons_Action$dns = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z');
var _elm_community$elm_material_icons$Material_Icons_Action$description = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z');
var _elm_community$elm_material_icons$Material_Icons_Action$delete = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z');
var _elm_community$elm_material_icons$Material_Icons_Action$dashboard = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z');
var _elm_community$elm_material_icons$Material_Icons_Action$credit_card = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$code = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z');
var _elm_community$elm_material_icons$Material_Icons_Action$class = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z');
var _elm_community$elm_material_icons$Material_Icons_Action$chrome_reader_mode = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z');
var _elm_community$elm_material_icons$Material_Icons_Action$check_circle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z');
var _elm_community$elm_material_icons$Material_Icons_Action$change_history = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z');
var _elm_community$elm_material_icons$Material_Icons_Action$card_travel = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z');
var _elm_community$elm_material_icons$Material_Icons_Action$card_membership = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z');
var _elm_community$elm_material_icons$Material_Icons_Action$card_giftcard = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z');
var _elm_community$elm_material_icons$Material_Icons_Action$camera_enhance = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM12 17l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z');
var _elm_community$elm_material_icons$Material_Icons_Action$cached = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z');
var _elm_community$elm_material_icons$Material_Icons_Action$build = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z');
var _elm_community$elm_material_icons$Material_Icons_Action$bug_report = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$bookmark_border = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z');
var _elm_community$elm_material_icons$Material_Icons_Action$bookmark = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Action$book = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z');
var _elm_community$elm_material_icons$Material_Icons_Action$backup = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z');
var _elm_community$elm_material_icons$Material_Icons_Action$autorenew = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z');
var _elm_community$elm_material_icons$Material_Icons_Action$assignment_turned_in = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Action$assignment_returned = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z');
var _elm_community$elm_material_icons$Material_Icons_Action$assignment_return = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z');
var _elm_community$elm_material_icons$Material_Icons_Action$assignment_late = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z');
var _elm_community$elm_material_icons$Material_Icons_Action$assignment_ind = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z');
var _elm_community$elm_material_icons$Material_Icons_Action$assignment = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$assessment = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z');
var _elm_community$elm_material_icons$Material_Icons_Action$aspect_ratio = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z');
var _elm_community$elm_material_icons$Material_Icons_Action$announcement = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$android = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z');
var _elm_community$elm_material_icons$Material_Icons_Action$alarm_on = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z');
var _elm_community$elm_material_icons$Material_Icons_Action$alarm_off = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z');
var _elm_community$elm_material_icons$Material_Icons_Action$alarm_add = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z');
var _elm_community$elm_material_icons$Material_Icons_Action$alarm = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z');
var _elm_community$elm_material_icons$Material_Icons_Action$add_shopping_cart = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z');
var _elm_community$elm_material_icons$Material_Icons_Action$account_circle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z');
var _elm_community$elm_material_icons$Material_Icons_Action$account_box = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z');
var _elm_community$elm_material_icons$Material_Icons_Action$account_balance_with_wallet = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z');
var _elm_community$elm_material_icons$Material_Icons_Action$account_balance = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z');
var _elm_community$elm_material_icons$Material_Icons_Action$accessibility = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z');
var _elm_community$elm_material_icons$Material_Icons_Action$three_d_rotation = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z');

var _elm_community$elm_material_icons$Material_Icons_Av$web = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z');
var _elm_community$elm_material_icons$Material_Icons_Av$volume_up = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
var _elm_community$elm_material_icons$Material_Icons_Av$volume_off = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z');
var _elm_community$elm_material_icons$Material_Icons_Av$volume_mute = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 9v6h4l5 5V4l-5 5H7z');
var _elm_community$elm_material_icons$Material_Icons_Av$volume_down = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z');
var _elm_community$elm_material_icons$Material_Icons_Av$videocam_off = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z');
var _elm_community$elm_material_icons$Material_Icons_Av$videocam = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z');
var _elm_community$elm_material_icons$Material_Icons_Av$video_library = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z');
var _elm_community$elm_material_icons$Material_Icons_Av$surround_sound = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Av$subtitles = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$stop = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 6h12v12H6z');
var _elm_community$elm_material_icons$Material_Icons_Av$sort_by_alpha = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z');
var _elm_community$elm_material_icons$Material_Icons_Av$snooze = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$skip_previous = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 6h2v12H6zm3.5 6l8.5 6V6z');
var _elm_community$elm_material_icons$Material_Icons_Av$skip_next = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z');
var _elm_community$elm_material_icons$Material_Icons_Av$shuffle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z');
var _elm_community$elm_material_icons$Material_Icons_Av$replay_5 = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Av$replay_30 = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Av$replay = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z');
var _elm_community$elm_material_icons$Material_Icons_Av$replay_10 = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Av$repeat_one = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z');
var _elm_community$elm_material_icons$Material_Icons_Av$repeat = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z');
var _elm_community$elm_material_icons$Material_Icons_Av$recent_actors = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z');
var _elm_community$elm_material_icons$Material_Icons_Av$radio = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z');
var _elm_community$elm_material_icons$Material_Icons_Av$queue_music = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z');
var _elm_community$elm_material_icons$Material_Icons_Av$queue = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$playlist_add = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$play_circle_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Av$play_circle_filled = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z');
var _elm_community$elm_material_icons$Material_Icons_Av$play_arrow = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M8 5v14l11-7z');
var _elm_community$elm_material_icons$Material_Icons_Av$pause_circle_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z');
var _elm_community$elm_material_icons$Material_Icons_Av$pause_circle_filled = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z');
var _elm_community$elm_material_icons$Material_Icons_Av$pause = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 19h4V5H6v14zm8-14v14h4V5h-4z');
var _elm_community$elm_material_icons$Material_Icons_Av$not_interested = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z');
var _elm_community$elm_material_icons$Material_Icons_Av$new_releases = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z');
var _elm_community$elm_material_icons$Material_Icons_Av$movie = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z');
var _elm_community$elm_material_icons$Material_Icons_Av$mic_off = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z');
var _elm_community$elm_material_icons$Material_Icons_Av$mic_none = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z');
var _elm_community$elm_material_icons$Material_Icons_Av$mic = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z');
var _elm_community$elm_material_icons$Material_Icons_Av$loop = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z');
var _elm_community$elm_material_icons$Material_Icons_Av$library_music = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z');
var _elm_community$elm_material_icons$Material_Icons_Av$library_books = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$library_add = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$high_quality = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z');
var _elm_community$elm_material_icons$Material_Icons_Av$hearing = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z');
var _elm_community$elm_material_icons$Material_Icons_Av$hd = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z');
var _elm_community$elm_material_icons$Material_Icons_Av$games = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z');
var _elm_community$elm_material_icons$Material_Icons_Av$forward_5 = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M24 24H0V0h24v24z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Av$forward_30 = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M24 24H0V0h24v24z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Av$forward_10 = F2(
	function (color, size) {
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		var stringSize = _elm_lang$core$Basics$toString(size);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M24 24H0V0h24v24z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});
var _elm_community$elm_material_icons$Material_Icons_Av$fast_rewind = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z');
var _elm_community$elm_material_icons$Material_Icons_Av$fast_forward = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z');
var _elm_community$elm_material_icons$Material_Icons_Av$explicit = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z');
var _elm_community$elm_material_icons$Material_Icons_Av$equalizer = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z');
var _elm_community$elm_material_icons$Material_Icons_Av$closed_caption = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z');
var _elm_community$elm_material_icons$Material_Icons_Av$av_timer = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z');
var _elm_community$elm_material_icons$Material_Icons_Av$album = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z');
var _elm_community$elm_material_icons$Material_Icons_Av$airplay = F2(
	function (color, size) {
		var stringSize = _elm_lang$core$Basics$toString(size);
		var stringColor = _elm_community$elm_material_icons$Material_Icons_Internal$toRgbaString(color);
		return A2(
			_elm_lang$svg$Svg$svg,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$width(stringSize),
					_elm_lang$svg$Svg_Attributes$height(stringSize),
					_elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('a'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$defs,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$path,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$id('c'),
									_elm_lang$svg$Svg_Attributes$d('M0 0h24v24H0V0z')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('b')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#a'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					'clipPath',
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$id('d'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#b)')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$use,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$xlinkHref('#c'),
									_elm_lang$svg$Svg_Attributes$overflow('visible')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))
						])),
					A2(
					_elm_lang$svg$Svg$path,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$d('M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'),
							_elm_lang$svg$Svg_Attributes$clipPath('url(#d)'),
							_elm_lang$svg$Svg_Attributes$fill(stringColor)
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	});

var _elm_community$elm_material_icons$Material_Icons_Content$undo = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z');
var _elm_community$elm_material_icons$Material_Icons_Content$text_format = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z');
var _elm_community$elm_material_icons$Material_Icons_Content$sort = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$send = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M2.01 21L23 12 2.01 3 2 10l15 2-15 2z');
var _elm_community$elm_material_icons$Material_Icons_Content$select_all = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z');
var _elm_community$elm_material_icons$Material_Icons_Content$save = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z');
var _elm_community$elm_material_icons$Material_Icons_Content$report = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z');
var _elm_community$elm_material_icons$Material_Icons_Content$reply_all = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z');
var _elm_community$elm_material_icons$Material_Icons_Content$reply = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z');
var _elm_community$elm_material_icons$Material_Icons_Content$remove_circle_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Content$remove_circle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$remove = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 13H5v-2h14v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$redo = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z');
var _elm_community$elm_material_icons$Material_Icons_Content$markunread = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$mail = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$link = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z');
var _elm_community$elm_material_icons$Material_Icons_Content$inbox = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3H4.99c-1.1 0-1.98.9-1.98 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.34 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z');
var _elm_community$elm_material_icons$Material_Icons_Content$gesture = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z');
var _elm_community$elm_material_icons$Material_Icons_Content$forward = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 8V4l8 8-8 8v-4H4V8z');
var _elm_community$elm_material_icons$Material_Icons_Content$font_download = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z');
var _elm_community$elm_material_icons$Material_Icons_Content$flag = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z');
var _elm_community$elm_material_icons$Material_Icons_Content$filter_list = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$drafts = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z');
var _elm_community$elm_material_icons$Material_Icons_Content$create = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z');
var _elm_community$elm_material_icons$Material_Icons_Content$content_paste = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z');
var _elm_community$elm_material_icons$Material_Icons_Content$content_cut = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z');
var _elm_community$elm_material_icons$Material_Icons_Content$content_copy = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z');
var _elm_community$elm_material_icons$Material_Icons_Content$clear = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');
var _elm_community$elm_material_icons$Material_Icons_Content$block = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Content$backspace = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z');
var _elm_community$elm_material_icons$Material_Icons_Content$archive = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z');
var _elm_community$elm_material_icons$Material_Icons_Content$add_circle_outline = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z');
var _elm_community$elm_material_icons$Material_Icons_Content$add_circle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$add_box = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z');
var _elm_community$elm_material_icons$Material_Icons_Content$add = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z');

var _elm_community$elm_material_icons$Material_Icons_Navigation$unfold_more = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$unfold_less = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$refresh = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$more_vert = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$more_horiz = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$menu = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$fullscreen_exit = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$fullscreen = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$expand_more = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$expand_less = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$close = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$chevron_right = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$chevron_left = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$check = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$cancel = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_forward = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_drop_up = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 14l5-5 5 5z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_drop_down_circle = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_drop_down = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M7 10l5 5 5-5z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_back = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z');
var _elm_community$elm_material_icons$Material_Icons_Navigation$apps = _elm_community$elm_material_icons$Material_Icons_Internal$icon('M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z');

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'maxLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'colSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rowSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

//import Dict, List, Maybe, Native.Scheduler //

var _evancz$elm_http$Native_Http = function() {

function send(settings, request)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var req = new XMLHttpRequest();

		// start
		if (settings.onStart.ctor === 'Just')
		{
			req.addEventListener('loadStart', function() {
				var task = settings.onStart._0;
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// progress
		if (settings.onProgress.ctor === 'Just')
		{
			req.addEventListener('progress', function(event) {
				var progress = !event.lengthComputable
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just({
						loaded: event.loaded,
						total: event.total
					});
				var task = settings.onProgress._0(progress);
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// end
		req.addEventListener('error', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawNetworkError' }));
		});

		req.addEventListener('timeout', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawTimeout' }));
		});

		req.addEventListener('load', function() {
			return callback(_elm_lang$core$Native_Scheduler.succeed(toResponse(req)));
		});

		req.open(request.verb, request.url, true);

		// set all the headers
		function setHeader(pair) {
			req.setRequestHeader(pair._0, pair._1);
		}
		A2(_elm_lang$core$List$map, setHeader, request.headers);

		// set the timeout
		req.timeout = settings.timeout;

		// enable this withCredentials thing
		req.withCredentials = settings.withCredentials;

		// ask for a specific MIME type for the response
		if (settings.desiredResponseType.ctor === 'Just')
		{
			req.overrideMimeType(settings.desiredResponseType._0);
		}

		// actuall send the request
		if(request.body.ctor === "BodyFormData")
		{
			req.send(request.body.formData)
		}
		else
		{
			req.send(request.body._0);
		}

		return function() {
			req.abort();
		};
	});
}


// deal with responses

function toResponse(req)
{
	var tag = req.responseType === 'blob' ? 'Blob' : 'Text'
	var response = tag === 'Blob' ? req.response : req.responseText;
	return {
		status: req.status,
		statusText: req.statusText,
		headers: parseHeaders(req.getAllResponseHeaders()),
		url: req.responseURL,
		value: { ctor: tag, _0: response }
	};
}


function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


function multipart(dataList)
{
	var formData = new FormData();

	while (dataList.ctor !== '[]')
	{
		var data = dataList._0;
		if (data.ctor === 'StringData')
		{
			formData.append(data._0, data._1);
		}
		else
		{
			var fileName = data._1.ctor === 'Nothing'
				? undefined
				: data._1._0;
			formData.append(data._0, data._2, fileName);
		}
		dataList = dataList._1;
	}

	return { ctor: 'BodyFormData', formData: formData };
}


function uriEncode(string)
{
	return encodeURIComponent(string);
}

function uriDecode(string)
{
	return decodeURIComponent(string);
}

return {
	send: F2(send),
	multipart: multipart,
	uriEncode: uriEncode,
	uriDecode: uriDecode
};

}();

var _evancz$elm_http$Http$send = _evancz$elm_http$Native_Http.send;
var _evancz$elm_http$Http$defaultSettings = {timeout: 0, onStart: _elm_lang$core$Maybe$Nothing, onProgress: _elm_lang$core$Maybe$Nothing, desiredResponseType: _elm_lang$core$Maybe$Nothing, withCredentials: false};
var _evancz$elm_http$Http$multipart = _evancz$elm_http$Native_Http.multipart;
var _evancz$elm_http$Http$uriDecode = _evancz$elm_http$Native_Http.uriDecode;
var _evancz$elm_http$Http$uriEncode = _evancz$elm_http$Native_Http.uriEncode;
var _evancz$elm_http$Http$queryEscape = function (string) {
	return A2(
		_elm_lang$core$String$join,
		'+',
		A2(
			_elm_lang$core$String$split,
			'%20',
			_evancz$elm_http$Http$uriEncode(string)));
};
var _evancz$elm_http$Http$queryPair = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_evancz$elm_http$Http$queryEscape(_p1._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_evancz$elm_http$Http$queryEscape(_p1._1)));
};
var _evancz$elm_http$Http$url = F2(
	function (baseUrl, args) {
		var _p2 = args;
		if (_p2.ctor === '[]') {
			return baseUrl;
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				baseUrl,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'?',
					A2(
						_elm_lang$core$String$join,
						'&',
						A2(_elm_lang$core$List$map, _evancz$elm_http$Http$queryPair, args))));
		}
	});
var _evancz$elm_http$Http$Request = F4(
	function (a, b, c, d) {
		return {verb: a, headers: b, url: c, body: d};
	});
var _evancz$elm_http$Http$Settings = F5(
	function (a, b, c, d, e) {
		return {timeout: a, onStart: b, onProgress: c, desiredResponseType: d, withCredentials: e};
	});
var _evancz$elm_http$Http$Response = F5(
	function (a, b, c, d, e) {
		return {status: a, statusText: b, headers: c, url: d, value: e};
	});
var _evancz$elm_http$Http$TODO_implement_blob_in_another_library = {ctor: 'TODO_implement_blob_in_another_library'};
var _evancz$elm_http$Http$TODO_implement_file_in_another_library = {ctor: 'TODO_implement_file_in_another_library'};
var _evancz$elm_http$Http$BodyBlob = function (a) {
	return {ctor: 'BodyBlob', _0: a};
};
var _evancz$elm_http$Http$BodyFormData = {ctor: 'BodyFormData'};
var _evancz$elm_http$Http$ArrayBuffer = {ctor: 'ArrayBuffer'};
var _evancz$elm_http$Http$BodyString = function (a) {
	return {ctor: 'BodyString', _0: a};
};
var _evancz$elm_http$Http$string = _evancz$elm_http$Http$BodyString;
var _evancz$elm_http$Http$Empty = {ctor: 'Empty'};
var _evancz$elm_http$Http$empty = _evancz$elm_http$Http$Empty;
var _evancz$elm_http$Http$FileData = F3(
	function (a, b, c) {
		return {ctor: 'FileData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$BlobData = F3(
	function (a, b, c) {
		return {ctor: 'BlobData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$blobData = _evancz$elm_http$Http$BlobData;
var _evancz$elm_http$Http$StringData = F2(
	function (a, b) {
		return {ctor: 'StringData', _0: a, _1: b};
	});
var _evancz$elm_http$Http$stringData = _evancz$elm_http$Http$StringData;
var _evancz$elm_http$Http$Blob = function (a) {
	return {ctor: 'Blob', _0: a};
};
var _evancz$elm_http$Http$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _evancz$elm_http$Http$RawNetworkError = {ctor: 'RawNetworkError'};
var _evancz$elm_http$Http$RawTimeout = {ctor: 'RawTimeout'};
var _evancz$elm_http$Http$BadResponse = F2(
	function (a, b) {
		return {ctor: 'BadResponse', _0: a, _1: b};
	});
var _evancz$elm_http$Http$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _evancz$elm_http$Http$handleResponse = F2(
	function (handle, response) {
		if ((_elm_lang$core$Native_Utils.cmp(200, response.status) < 1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) {
			var _p3 = response.value;
			if (_p3.ctor === 'Text') {
				return handle(_p3._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload('Response body is a blob, expecting a string.'));
			}
		} else {
			return _elm_lang$core$Task$fail(
				A2(_evancz$elm_http$Http$BadResponse, response.status, response.statusText));
		}
	});
var _evancz$elm_http$Http$NetworkError = {ctor: 'NetworkError'};
var _evancz$elm_http$Http$Timeout = {ctor: 'Timeout'};
var _evancz$elm_http$Http$promoteError = function (rawError) {
	var _p4 = rawError;
	if (_p4.ctor === 'RawTimeout') {
		return _evancz$elm_http$Http$Timeout;
	} else {
		return _evancz$elm_http$Http$NetworkError;
	}
};
var _evancz$elm_http$Http$getString = function (url) {
	var request = {
		verb: 'GET',
		headers: _elm_lang$core$Native_List.fromArray(
			[]),
		url: url,
		body: _evancz$elm_http$Http$empty
	};
	return A2(
		_elm_lang$core$Task$andThen,
		A2(
			_elm_lang$core$Task$mapError,
			_evancz$elm_http$Http$promoteError,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request)),
		_evancz$elm_http$Http$handleResponse(_elm_lang$core$Task$succeed));
};
var _evancz$elm_http$Http$fromJson = F2(
	function (decoder, response) {
		var decode = function (str) {
			var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, decoder, str);
			if (_p5.ctor === 'Ok') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload(_p5._0));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			A2(_elm_lang$core$Task$mapError, _evancz$elm_http$Http$promoteError, response),
			_evancz$elm_http$Http$handleResponse(decode));
	});
var _evancz$elm_http$Http$get = F2(
	function (decoder, url) {
		var request = {
			verb: 'GET',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: _evancz$elm_http$Http$empty
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});
var _evancz$elm_http$Http$post = F3(
	function (decoder, url, body) {
		var request = {
			verb: 'POST',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: body
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});

var _user$project$TimeTravel_Internal_Util_Nel$head = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _user$project$TimeTravel_Internal_Util_Nel$findHelp = F2(
	function (f, list) {
		findHelp:
		while (true) {
			var _p2 = list;
			if (_p2.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p3 = _p2._0;
				if (f(_p3)) {
					return _elm_lang$core$Maybe$Just(_p3);
				} else {
					var _v2 = f,
						_v3 = _p2._1;
					f = _v2;
					list = _v3;
					continue findHelp;
				}
			}
		}
	});
var _user$project$TimeTravel_Internal_Util_Nel$toList = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$List_ops['::'], _p5._0, _p5._1);
};
var _user$project$TimeTravel_Internal_Util_Nel$filter = F2(
	function (match, nel) {
		return A2(
			_elm_lang$core$List$filter,
			match,
			_user$project$TimeTravel_Internal_Util_Nel$toList(nel));
	});
var _user$project$TimeTravel_Internal_Util_Nel$filterMap = F2(
	function (match, nel) {
		return A2(
			_elm_lang$core$List$filterMap,
			match,
			_user$project$TimeTravel_Internal_Util_Nel$toList(nel));
	});
var _user$project$TimeTravel_Internal_Util_Nel$find = F2(
	function (f, nel) {
		return A2(
			_user$project$TimeTravel_Internal_Util_Nel$findHelp,
			f,
			_user$project$TimeTravel_Internal_Util_Nel$toList(nel));
	});
var _user$project$TimeTravel_Internal_Util_Nel$Nel = F2(
	function (a, b) {
		return {ctor: 'Nel', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Util_Nel$map = F2(
	function (f, _p6) {
		var _p7 = _p6;
		return A2(
			_user$project$TimeTravel_Internal_Util_Nel$Nel,
			f(_p7._0),
			A2(_elm_lang$core$List$map, f, _p7._1));
	});
var _user$project$TimeTravel_Internal_Util_Nel$concat = F2(
	function (list, _p8) {
		var _p9 = _p8;
		var _p12 = _p9._1;
		var _p11 = _p9._0;
		var _p10 = list;
		if (_p10.ctor === '::') {
			return A2(
				_user$project$TimeTravel_Internal_Util_Nel$Nel,
				_p10._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					_p10._1,
					A2(_elm_lang$core$List_ops['::'], _p11, _p12)));
		} else {
			return A2(_user$project$TimeTravel_Internal_Util_Nel$Nel, _p11, _p12);
		}
	});
var _user$project$TimeTravel_Internal_Util_Nel$cons = F2(
	function ($new, _p13) {
		var _p14 = _p13;
		return A2(
			_user$project$TimeTravel_Internal_Util_Nel$Nel,
			$new,
			A2(_elm_lang$core$List_ops['::'], _p14._0, _p14._1));
	});

var _user$project$TimeTravel_Internal_Parser_AST$Property = F2(
	function (a, b) {
		return {ctor: 'Property', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$Union = F2(
	function (a, b) {
		return {ctor: 'Union', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$Value = function (a) {
	return {ctor: 'Value', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_AST$TupleLiteral = function (a) {
	return {ctor: 'TupleLiteral', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_AST$ListLiteral = function (a) {
	return {ctor: 'ListLiteral', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_AST$StringLiteral = function (a) {
	return {ctor: 'StringLiteral', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_AST$Record = function (a) {
	return {ctor: 'Record', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_AST$PropertyX = F3(
	function (a, b, c) {
		return {ctor: 'PropertyX', _0: a, _1: b, _2: c};
	});
var _user$project$TimeTravel_Internal_Parser_AST$UnionX = F3(
	function (a, b, c) {
		return {ctor: 'UnionX', _0: a, _1: b, _2: c};
	});
var _user$project$TimeTravel_Internal_Parser_AST$ValueX = F2(
	function (a, b) {
		return {ctor: 'ValueX', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$TupleLiteralX = F2(
	function (a, b) {
		return {ctor: 'TupleLiteralX', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$ListLiteralX = F2(
	function (a, b) {
		return {ctor: 'ListLiteralX', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$StringLiteralX = F2(
	function (a, b) {
		return {ctor: 'StringLiteralX', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$RecordX = F2(
	function (a, b) {
		return {ctor: 'RecordX', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Parser_AST$attachId = F2(
	function (id, ast) {
		var _p0 = ast;
		switch (_p0.ctor) {
			case 'Record':
				return A2(
					_user$project$TimeTravel_Internal_Parser_AST$RecordX,
					id,
					A2(_user$project$TimeTravel_Internal_Parser_AST$attachIdToList, id, _p0._0));
			case 'StringLiteral':
				return A2(_user$project$TimeTravel_Internal_Parser_AST$StringLiteralX, id, _p0._0);
			case 'ListLiteral':
				return A2(
					_user$project$TimeTravel_Internal_Parser_AST$ListLiteralX,
					id,
					A2(_user$project$TimeTravel_Internal_Parser_AST$attachIdToList, id, _p0._0));
			case 'TupleLiteral':
				return A2(
					_user$project$TimeTravel_Internal_Parser_AST$TupleLiteralX,
					id,
					A2(_user$project$TimeTravel_Internal_Parser_AST$attachIdToList, id, _p0._0));
			case 'Value':
				return A2(_user$project$TimeTravel_Internal_Parser_AST$ValueX, id, _p0._0);
			case 'Union':
				var _p1 = _p0._0;
				var id$ = A2(
					_elm_lang$core$Basics_ops['++'],
					id,
					A2(_elm_lang$core$Basics_ops['++'], '.', _p1));
				return A3(
					_user$project$TimeTravel_Internal_Parser_AST$UnionX,
					id$,
					_p1,
					A2(_user$project$TimeTravel_Internal_Parser_AST$attachIdToList, id$, _p0._1));
			default:
				var _p2 = _p0._0;
				var id$ = A2(
					_elm_lang$core$Basics_ops['++'],
					id,
					A2(_elm_lang$core$Basics_ops['++'], '.', _p2));
				return A3(
					_user$project$TimeTravel_Internal_Parser_AST$PropertyX,
					id$,
					_p2,
					A2(_user$project$TimeTravel_Internal_Parser_AST$attachId, id$, _p0._1));
		}
	});
var _user$project$TimeTravel_Internal_Parser_AST$attachIdToList = F2(
	function (id, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (index, p) {
					return A2(
						_user$project$TimeTravel_Internal_Parser_AST$attachId,
						A2(
							_elm_lang$core$Basics_ops['++'],
							id,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'.',
								_elm_lang$core$Basics$toString(index))),
						p);
				}),
			list);
	});

var _user$project$TimeTravel_Internal_Parser_Util$equal = _Dandandan$parser$Parser$symbol(
	_elm_lang$core$Native_Utils.chr('='));
var _user$project$TimeTravel_Internal_Parser_Util$comma = _Dandandan$parser$Parser$symbol(
	_elm_lang$core$Native_Utils.chr(','));
var _user$project$TimeTravel_Internal_Parser_Util$notEqual = _Dandandan$parser$Parser$satisfy(
	F2(
		function (x, y) {
			return !_elm_lang$core$Native_Utils.eq(x, y);
		})(
		_elm_lang$core$Native_Utils.chr('=')));
var _user$project$TimeTravel_Internal_Parser_Util$manyChars = function ($char) {
	return A2(
		_Dandandan$parser$Parser$map,
		_elm_lang$core$String$fromList,
		_Dandandan$parser$Parser$many($char));
};
var _user$project$TimeTravel_Internal_Parser_Util$stringChars = _user$project$TimeTravel_Internal_Parser_Util$manyChars(
	_Dandandan$parser$Parser$satisfy(
		function (c) {
			return !_elm_lang$core$Native_Utils.eq(
				c,
				_elm_lang$core$Native_Utils.chr('\"'));
		}));
var _user$project$TimeTravel_Internal_Parser_Util$someChars = function ($char) {
	return A2(
		_Dandandan$parser$Parser$map,
		_elm_lang$core$String$fromList,
		_Dandandan$parser$Parser$some($char));
};
var _user$project$TimeTravel_Internal_Parser_Util$isSpace = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\t')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\r')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\n')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(' '))));
};
var _user$project$TimeTravel_Internal_Parser_Util$noSpace = _Dandandan$parser$Parser$satisfy(
	function (_p0) {
		return _elm_lang$core$Basics$not(
			_user$project$TimeTravel_Internal_Parser_Util$isSpace(_p0));
	});
var _user$project$TimeTravel_Internal_Parser_Util$space = _Dandandan$parser$Parser$satisfy(_user$project$TimeTravel_Internal_Parser_Util$isSpace);
var _user$project$TimeTravel_Internal_Parser_Util$spaces = _user$project$TimeTravel_Internal_Parser_Util$manyChars(_user$project$TimeTravel_Internal_Parser_Util$space);
var _user$project$TimeTravel_Internal_Parser_Util$spaced = function (p) {
	return A2(
		_Dandandan$parser$Parser$and,
		A2(
			_Dandandan$parser$Parser$and,
			A2(
				_Dandandan$parser$Parser$map,
				F3(
					function (_p2, v, _p1) {
						return v;
					}),
				_user$project$TimeTravel_Internal_Parser_Util$spaces),
			p),
		_user$project$TimeTravel_Internal_Parser_Util$spaces);
};

var _user$project$TimeTravel_Internal_Parser_Parser$propertyKey = _Dandandan$parser$Parser$recursively(
	function (_p0) {
		return _user$project$TimeTravel_Internal_Parser_Util$someChars(
			_Dandandan$parser$Parser$satisfy(
				function (c) {
					return _elm_lang$core$Basics$not(
						_user$project$TimeTravel_Internal_Parser_Util$isSpace(c)) && (!_elm_lang$core$Native_Utils.eq(
						c,
						_elm_lang$core$Native_Utils.chr('=')));
				}));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$tag = A2(
	_Dandandan$parser$Parser$and,
	A2(
		_Dandandan$parser$Parser$map,
		F2(
			function (h, t) {
				return _elm_lang$core$String$fromList(
					A2(_elm_lang$core$List_ops['::'], h, t));
			}),
		_Dandandan$parser$Parser_Char$upper),
	_Dandandan$parser$Parser$many(
		_Dandandan$parser$Parser$satisfy(
			function (c) {
				return _elm_lang$core$Char$isUpper(c) || (_elm_lang$core$Char$isLower(c) || (_elm_lang$core$Char$isDigit(c) || _elm_lang$core$Native_Utils.eq(
					c,
					_elm_lang$core$Native_Utils.chr('.'))));
			})));
var _user$project$TimeTravel_Internal_Parser_Parser$function = A2(
	_Dandandan$parser$Parser$and,
	A2(
		_Dandandan$parser$Parser$and,
		A2(
			_Dandandan$parser$Parser$map,
			F3(
				function (_p2, name, _p1) {
					return _user$project$TimeTravel_Internal_Parser_AST$Value(name);
				}),
			_Dandandan$parser$Parser$token('<function')),
		_user$project$TimeTravel_Internal_Parser_Util$manyChars(
			_Dandandan$parser$Parser$satisfy(
				function (c) {
					return !_elm_lang$core$Native_Utils.eq(
						c,
						_elm_lang$core$Native_Utils.chr('>'));
				}))),
	_Dandandan$parser$Parser$symbol(
		_elm_lang$core$Native_Utils.chr('>')));
var _user$project$TimeTravel_Internal_Parser_Parser$floatLiteral = A2(
	_Dandandan$parser$Parser$map,
	function (_p3) {
		return _user$project$TimeTravel_Internal_Parser_AST$Value(
			_elm_lang$core$Basics$toString(_p3));
	},
	_Dandandan$parser$Parser_Number$float);
var _user$project$TimeTravel_Internal_Parser_Parser$intLiteral = A2(
	_Dandandan$parser$Parser$map,
	function (_p4) {
		return _user$project$TimeTravel_Internal_Parser_AST$Value(
			_elm_lang$core$Basics$toString(_p4));
	},
	_Dandandan$parser$Parser_Number$integer);
var _user$project$TimeTravel_Internal_Parser_Parser$stringLiteral = A2(
	_Dandandan$parser$Parser$map,
	_user$project$TimeTravel_Internal_Parser_AST$StringLiteral,
	A2(
		_Dandandan$parser$Parser$and,
		A2(
			_Dandandan$parser$Parser$and,
			A2(
				_Dandandan$parser$Parser$map,
				F3(
					function (_p6, s, _p5) {
						return s;
					}),
				_Dandandan$parser$Parser$symbol(
					_elm_lang$core$Native_Utils.chr('\"'))),
			_user$project$TimeTravel_Internal_Parser_Util$stringChars),
		_Dandandan$parser$Parser$symbol(
			_elm_lang$core$Native_Utils.chr('\"'))));
var _user$project$TimeTravel_Internal_Parser_Parser$expression = _Dandandan$parser$Parser$recursively(
	function (_p7) {
		return A2(_Dandandan$parser$Parser$or, _user$project$TimeTravel_Internal_Parser_Parser$union, _user$project$TimeTravel_Internal_Parser_Parser$expressionWithoutUnion);
	});
var _user$project$TimeTravel_Internal_Parser_Parser$expressionWithoutUnion = _Dandandan$parser$Parser$recursively(
	function (_p8) {
		return A2(
			_Dandandan$parser$Parser$or,
			_user$project$TimeTravel_Internal_Parser_Parser$record,
			A2(
				_Dandandan$parser$Parser$or,
				_user$project$TimeTravel_Internal_Parser_Parser$listLiteral,
				A2(
					_Dandandan$parser$Parser$or,
					_user$project$TimeTravel_Internal_Parser_Parser$tupleLiteral,
					A2(
						_Dandandan$parser$Parser$or,
						_user$project$TimeTravel_Internal_Parser_Parser$function,
						A2(
							_Dandandan$parser$Parser$or,
							_user$project$TimeTravel_Internal_Parser_Parser$floatLiteral,
							A2(_Dandandan$parser$Parser$or, _user$project$TimeTravel_Internal_Parser_Parser$intLiteral, _user$project$TimeTravel_Internal_Parser_Parser$stringLiteral))))));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$listLiteral = _Dandandan$parser$Parser$recursively(
	function (_p9) {
		return A2(
			_Dandandan$parser$Parser$map,
			_user$project$TimeTravel_Internal_Parser_AST$ListLiteral,
			_Dandandan$parser$Parser_Char$bracketed(_user$project$TimeTravel_Internal_Parser_Parser$items));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$items = _Dandandan$parser$Parser$recursively(
	function (_p10) {
		return _user$project$TimeTravel_Internal_Parser_Util$spaced(
			A2(
				_Dandandan$parser$Parser$separatedBy,
				_user$project$TimeTravel_Internal_Parser_Util$spaced(_user$project$TimeTravel_Internal_Parser_Parser$expression),
				_user$project$TimeTravel_Internal_Parser_Util$comma));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$record = _Dandandan$parser$Parser$recursively(
	function (_p11) {
		return A2(
			_Dandandan$parser$Parser$map,
			_user$project$TimeTravel_Internal_Parser_AST$Record,
			_Dandandan$parser$Parser_Char$braced(_user$project$TimeTravel_Internal_Parser_Parser$properties));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$properties = _Dandandan$parser$Parser$recursively(
	function (_p12) {
		return _user$project$TimeTravel_Internal_Parser_Util$spaced(
			A2(_Dandandan$parser$Parser$separatedBy, _user$project$TimeTravel_Internal_Parser_Parser$property, _user$project$TimeTravel_Internal_Parser_Util$comma));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$property = _Dandandan$parser$Parser$recursively(
	function (_p13) {
		return A2(
			_Dandandan$parser$Parser$and,
			A2(
				_Dandandan$parser$Parser$and,
				A2(
					_Dandandan$parser$Parser$and,
					A2(
						_Dandandan$parser$Parser$and,
						A2(
							_Dandandan$parser$Parser$and,
							A2(
								_Dandandan$parser$Parser$and,
								A2(
									_Dandandan$parser$Parser$map,
									F7(
										function (_p18, key, _p17, _p16, _p15, value, _p14) {
											return A2(_user$project$TimeTravel_Internal_Parser_AST$Property, key, value);
										}),
									_user$project$TimeTravel_Internal_Parser_Util$spaces),
								_user$project$TimeTravel_Internal_Parser_Parser$propertyKey),
							_user$project$TimeTravel_Internal_Parser_Util$spaces),
						_user$project$TimeTravel_Internal_Parser_Util$equal),
					_user$project$TimeTravel_Internal_Parser_Util$spaces),
				_user$project$TimeTravel_Internal_Parser_Parser$expression),
			_user$project$TimeTravel_Internal_Parser_Util$spaces);
	});
var _user$project$TimeTravel_Internal_Parser_Parser$tupleLiteral = _Dandandan$parser$Parser$recursively(
	function (_p19) {
		return A2(
			_Dandandan$parser$Parser$map,
			_user$project$TimeTravel_Internal_Parser_AST$TupleLiteral,
			_Dandandan$parser$Parser_Char$parenthesized(_user$project$TimeTravel_Internal_Parser_Parser$items));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$union = _Dandandan$parser$Parser$recursively(
	function (_p20) {
		return A2(
			_Dandandan$parser$Parser$and,
			A2(
				_Dandandan$parser$Parser$map,
				F2(
					function (tag, tail) {
						return A2(_user$project$TimeTravel_Internal_Parser_AST$Union, tag, tail);
					}),
				_user$project$TimeTravel_Internal_Parser_Parser$tag),
			_Dandandan$parser$Parser$many(_user$project$TimeTravel_Internal_Parser_Parser$unionParam));
	});
var _user$project$TimeTravel_Internal_Parser_Parser$unionParam = _Dandandan$parser$Parser$recursively(
	function (_p21) {
		return A2(
			_Dandandan$parser$Parser$and,
			A2(
				_Dandandan$parser$Parser$map,
				F2(
					function (_p22, exp) {
						return exp;
					}),
				_user$project$TimeTravel_Internal_Parser_Util$spaces),
			_user$project$TimeTravel_Internal_Parser_Parser$expressionWithoutUnion);
	});
var _user$project$TimeTravel_Internal_Parser_Parser$parse = function (s) {
	return A2(
		_Dandandan$parser$Parser$parse,
		_user$project$TimeTravel_Internal_Parser_Util$spaced(_user$project$TimeTravel_Internal_Parser_Parser$expression),
		s);
};

var _user$project$TimeTravel_Internal_Util_RTree$root = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _user$project$TimeTravel_Internal_Util_RTree$Node = F2(
	function (a, b) {
		return {ctor: 'Node', _0: a, _1: b};
	});
var _user$project$TimeTravel_Internal_Util_RTree$singleton = function (a) {
	return A2(
		_user$project$TimeTravel_Internal_Util_RTree$Node,
		a,
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _user$project$TimeTravel_Internal_Util_RTree$addChild = F2(
	function ($new, _p2) {
		var _p3 = _p2;
		return A2(
			_user$project$TimeTravel_Internal_Util_RTree$Node,
			_p3._0,
			A2(
				_elm_lang$core$List_ops['::'],
				_user$project$TimeTravel_Internal_Util_RTree$singleton($new),
				_p3._1));
	});
var _user$project$TimeTravel_Internal_Util_RTree$addChildAt = F3(
	function (f, $new, tree) {
		var _p4 = tree;
		var a = _p4._0;
		var list = _p4._1;
		var _p5 = f(a) ? A2(_user$project$TimeTravel_Internal_Util_RTree$addChild, $new, tree) : tree;
		var a$ = _p5._0;
		var list$ = _p5._1;
		return A2(
			_user$project$TimeTravel_Internal_Util_RTree$Node,
			a$,
			A2(
				_elm_lang$core$List$map,
				A2(_user$project$TimeTravel_Internal_Util_RTree$addChildAt, f, $new),
				list$));
	});
var _user$project$TimeTravel_Internal_Util_RTree$sortEachBranchBy = F2(
	function (f, _p6) {
		var _p7 = _p6;
		return A2(
			_user$project$TimeTravel_Internal_Util_RTree$Node,
			_p7._0,
			A2(
				_elm_lang$core$List$sortBy,
				function (_p8) {
					return f(
						_user$project$TimeTravel_Internal_Util_RTree$root(_p8));
				},
				A2(
					_elm_lang$core$List$map,
					_user$project$TimeTravel_Internal_Util_RTree$sortEachBranchBy(f),
					_p7._1)));
	});

var _user$project$TimeTravel_Internal_MsgLike$format = function (msgLike) {
	var _p0 = msgLike;
	switch (_p0.ctor) {
		case 'Message':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'UrlData':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'[Nav] ',
				_elm_lang$core$Basics$toString(_p0._0));
		default:
			return '[Init]';
	}
};
var _user$project$TimeTravel_Internal_MsgLike$Init = {ctor: 'Init'};
var _user$project$TimeTravel_Internal_MsgLike$UrlData = function (a) {
	return {ctor: 'UrlData', _0: a};
};
var _user$project$TimeTravel_Internal_MsgLike$Message = function (a) {
	return {ctor: 'Message', _0: a};
};

var _user$project$TimeTravel_Internal_Model$encodeSetting = function (settings) {
	return A2(
		_elm_lang$core$Json_Encode$encode,
		0,
		_elm_lang$core$Json_Encode$object(
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 'fixedToLeft',
					_1: _elm_lang$core$Json_Encode$bool(settings.fixedToLeft)
				},
					{
					ctor: '_Tuple2',
					_0: 'filter',
					_1: _elm_lang$core$Json_Encode$list(
						A2(
							_elm_lang$core$List$map,
							function (_p0) {
								var _p1 = _p0;
								return _elm_lang$core$Json_Encode$list(
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$core$Json_Encode$string(_p1._0),
											_elm_lang$core$Json_Encode$bool(_p1._1)
										]));
							},
							settings.filter))
				}
				])));
};
var _user$project$TimeTravel_Internal_Model$saveSetting = F2(
	function (save, model) {
		return A2(
			_elm_lang$core$Platform_Cmd$map,
			_elm_community$basics_extra$Basics_Extra$never,
			save(
				{
					type_: 'save',
					settings: _user$project$TimeTravel_Internal_Model$encodeSetting(
						{fixedToLeft: model.fixedToLeft, filter: model.filter})
				}));
	});
var _user$project$TimeTravel_Internal_Model$msgRootOf = F2(
	function (id, history) {
		msgRootOf:
		while (true) {
			var _p2 = A2(
				_user$project$TimeTravel_Internal_Util_Nel$find,
				function (item) {
					return _elm_lang$core$Native_Utils.eq(item.id, id);
				},
				history);
			if (_p2.ctor === 'Just') {
				var _p4 = _p2._0;
				var _p3 = _p4.causedBy;
				if (_p3.ctor === 'Just') {
					var _v3 = _p3._0,
						_v4 = history;
					id = _v3;
					history = _v4;
					continue msgRootOf;
				} else {
					return _elm_lang$core$Maybe$Just(_p4);
				}
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}
	});
var _user$project$TimeTravel_Internal_Model$selectedMsgTree = function (model) {
	var _p5 = model.selectedMsg;
	if (_p5.ctor === 'Just') {
		var _p6 = A2(_user$project$TimeTravel_Internal_Model$msgRootOf, _p5._0, model.history);
		if (_p6.ctor === 'Just') {
			var f = F2(
				function (item, tree) {
					return A3(
						_user$project$TimeTravel_Internal_Util_RTree$addChildAt,
						function (i) {
							return _elm_lang$core$Native_Utils.eq(
								item.causedBy,
								_elm_lang$core$Maybe$Just(i.id));
						},
						item,
						tree);
				});
			return _elm_lang$core$Maybe$Just(
				A2(
					_user$project$TimeTravel_Internal_Util_RTree$sortEachBranchBy,
					function (item) {
						return item.id;
					},
					A3(
						_elm_lang$core$List$foldr,
						f,
						_user$project$TimeTravel_Internal_Util_RTree$singleton(_p6._0),
						_user$project$TimeTravel_Internal_Util_Nel$toList(model.history))));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$TimeTravel_Internal_Model$selectFirstIfSync = function (model) {
	return model.sync ? _elm_lang$core$Native_Utils.update(
		model,
		{
			selectedMsg: _elm_lang$core$Maybe$Just(
				_user$project$TimeTravel_Internal_Util_Nel$head(model.history).id)
		}) : model;
};
var _user$project$TimeTravel_Internal_Model$selectedAndOldAst = function (model) {
	var _p7 = model.selectedMsg;
	if (_p7.ctor === 'Just') {
		var _p10 = _p7._0;
		var newAndOld = A2(
			_user$project$TimeTravel_Internal_Util_Nel$filterMap,
			function (item) {
				return (_elm_lang$core$Native_Utils.eq(item.id, _p10) || _elm_lang$core$Native_Utils.eq(item.id, _p10 - 1)) ? _elm_lang$core$Maybe$Just(item.lazyModelAst) : _elm_lang$core$Maybe$Nothing;
			},
			model.history);
		var _p8 = newAndOld;
		_v8_2:
		do {
			if (((_p8.ctor === '::') && (_p8._0.ctor === 'Just')) && (_p8._0._0.ctor === 'Ok')) {
				if (_p8._1.ctor === '::') {
					if ((_p8._1._0.ctor === 'Just') && (_p8._1._0._0.ctor === 'Ok')) {
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: _p8._1._0._0._0, _1: _p8._0._0._0});
					} else {
						break _v8_2;
					}
				} else {
					var _p9 = _p8._0._0._0;
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p9, _1: _p9});
				}
			} else {
				break _v8_2;
			}
		} while(false);
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$TimeTravel_Internal_Model$selectedMsgAst = function (model) {
	var _p11 = model.selectedMsg;
	if (_p11.ctor === 'Just') {
		var _p12 = A2(
			_user$project$TimeTravel_Internal_Util_Nel$filterMap,
			function (item) {
				return _elm_lang$core$Native_Utils.eq(item.id, _p11._0) ? _elm_lang$core$Maybe$Just(item.lazyMsgAst) : _elm_lang$core$Maybe$Nothing;
			},
			model.history);
		if (((_p12.ctor === '::') && (_p12._0.ctor === 'Just')) && (_p12._0._0.ctor === 'Ok')) {
			return _elm_lang$core$Maybe$Just(_p12._0._0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$TimeTravel_Internal_Model$updateLazyAstHelp = function (item) {
	return _elm_lang$core$Native_Utils.update(
		item,
		{
			lazyMsgAst: function () {
				if (_elm_lang$core$Native_Utils.eq(item.lazyMsgAst, _elm_lang$core$Maybe$Nothing)) {
					var _p13 = item.msg;
					switch (_p13.ctor) {
						case 'Message':
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Result$map,
									_user$project$TimeTravel_Internal_Parser_AST$attachId(''),
									_user$project$TimeTravel_Internal_Parser_Parser$parse(
										_elm_lang$core$Basics$toString(_p13._0))));
						case 'UrlData':
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Result$map,
									_user$project$TimeTravel_Internal_Parser_AST$attachId(''),
									_user$project$TimeTravel_Internal_Parser_Parser$parse(
										_elm_lang$core$Basics$toString(_p13._0))));
						default:
							return _elm_lang$core$Maybe$Just(
								_elm_lang$core$Result$Err(''));
					}
				} else {
					return item.lazyMsgAst;
				}
			}(),
			lazyModelAst: _elm_lang$core$Native_Utils.eq(item.lazyModelAst, _elm_lang$core$Maybe$Nothing) ? _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$core$Result$map,
					_user$project$TimeTravel_Internal_Parser_AST$attachId(''),
					_user$project$TimeTravel_Internal_Parser_Parser$parse(
						_elm_lang$core$Basics$toString(item.model)))) : item.lazyModelAst
		});
};
var _user$project$TimeTravel_Internal_Model$mapHistory = F2(
	function (f, model) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				history: A2(_user$project$TimeTravel_Internal_Util_Nel$map, f, model.history)
			});
	});
var _user$project$TimeTravel_Internal_Model$updateLazyAst = function (model) {
	var _p14 = model.selectedMsg;
	if (_p14.ctor === 'Just') {
		var _p15 = _p14._0;
		return A2(
			_user$project$TimeTravel_Internal_Model$mapHistory,
			function (item) {
				return (_elm_lang$core$Native_Utils.eq(item.id, _p15) || _elm_lang$core$Native_Utils.eq(item.id, _p15 - 1)) ? _user$project$TimeTravel_Internal_Model$updateLazyAstHelp(item) : item;
			},
			model);
	} else {
		return model;
	}
};
var _user$project$TimeTravel_Internal_Model$futureToHistory = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			future: _elm_lang$core$Native_List.fromArray(
				[]),
			history: A2(_user$project$TimeTravel_Internal_Util_Nel$concat, model.future, model.history)
		});
};
var _user$project$TimeTravel_Internal_Model$updateFilter = F2(
	function (msgLike, filterOptions) {
		var str = function () {
			var _p16 = msgLike;
			switch (_p16.ctor) {
				case 'Message':
					return _elm_lang$core$Basics$toString(_p16._0);
				case 'UrlData':
					return '[Nav] ';
				default:
					return '';
			}
		}();
		var _p17 = _elm_lang$core$String$words(str);
		if (_p17.ctor === '::') {
			var _p20 = _p17._0;
			var exists = A2(
				_elm_lang$core$List$any,
				function (_p18) {
					var _p19 = _p18;
					return _elm_lang$core$Native_Utils.eq(_p19._0, _p20);
				},
				filterOptions);
			return exists ? filterOptions : A2(
				_elm_lang$core$List_ops['::'],
				{ctor: '_Tuple2', _0: _p20, _1: true},
				filterOptions);
		} else {
			return filterOptions;
		}
	});
var _user$project$TimeTravel_Internal_Model$selectedItem = function (model) {
	var _p21 = {ctor: '_Tuple2', _0: model.sync, _1: model.selectedMsg};
	if (_p21._0 === true) {
		return _elm_lang$core$Maybe$Just(
			_user$project$TimeTravel_Internal_Util_Nel$head(model.history));
	} else {
		if (_p21._1.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				_user$project$TimeTravel_Internal_Util_Nel$head(model.history));
		} else {
			return A2(
				_user$project$TimeTravel_Internal_Util_Nel$find,
				function (item) {
					return _elm_lang$core$Native_Utils.eq(item.id, _p21._1._0);
				},
				model.history);
		}
	}
};
var _user$project$TimeTravel_Internal_Model$newItem = F4(
	function (id, msg, causedBy, model) {
		return {id: id, msg: msg, causedBy: causedBy, model: model, lazyMsgAst: _elm_lang$core$Maybe$Nothing, lazyModelAst: _elm_lang$core$Maybe$Nothing};
	});
var _user$project$TimeTravel_Internal_Model$updateOnIncomingUserMsg = F4(
	function (transformMsg, update, _p22, model) {
		var _p23 = _p22;
		var _p26 = _p23._1;
		var megLike = _user$project$TimeTravel_Internal_MsgLike$Message(_p26);
		var _p24 = model.history;
		var last = _p24._0;
		var past = _p24._1;
		var _p25 = A2(update, _p26, last.model);
		var newRawUserModel = _p25._0;
		var userCmd = _p25._1;
		var nextItem = A4(_user$project$TimeTravel_Internal_Model$newItem, model.msgId, megLike, _p23._0, newRawUserModel);
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_user$project$TimeTravel_Internal_Model$selectFirstIfSync(
				_elm_lang$core$Native_Utils.update(
					model,
					{
						filter: A2(_user$project$TimeTravel_Internal_Model$updateFilter, megLike, model.filter),
						msgId: model.msgId + 1,
						future: _elm_lang$core$Basics$not(model.sync) ? A2(_elm_lang$core$List_ops['::'], nextItem, model.future) : model.future,
						history: model.sync ? A2(_user$project$TimeTravel_Internal_Util_Nel$cons, nextItem, model.history) : model.history
					})),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Platform_Cmd$map,
					transformMsg,
					A2(
						_elm_lang$core$Platform_Cmd$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(model.msgId),
						userCmd))
				]));
	});
var _user$project$TimeTravel_Internal_Model$urlUpdateOnIncomingData = F4(
	function (transformMsg, urlUpdate, data, model) {
		var msgLike = _user$project$TimeTravel_Internal_MsgLike$UrlData(data);
		var _p27 = model.history;
		var last = _p27._0;
		var past = _p27._1;
		var _p28 = A2(urlUpdate, data, last.model);
		var newRawUserModel = _p28._0;
		var userCmd = _p28._1;
		var nextItem = A4(_user$project$TimeTravel_Internal_Model$newItem, model.msgId, msgLike, _elm_lang$core$Maybe$Nothing, newRawUserModel);
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_user$project$TimeTravel_Internal_Model$selectFirstIfSync(
				_elm_lang$core$Native_Utils.update(
					model,
					{
						filter: A2(_user$project$TimeTravel_Internal_Model$updateFilter, msgLike, model.filter),
						msgId: model.msgId + 1,
						future: _elm_lang$core$Basics$not(model.sync) ? A2(_elm_lang$core$List_ops['::'], nextItem, model.future) : model.future,
						history: model.sync ? A2(_user$project$TimeTravel_Internal_Util_Nel$cons, nextItem, model.history) : model.history
					})),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Platform_Cmd$map,
					transformMsg,
					A2(
						_elm_lang$core$Platform_Cmd$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(model.msgId),
						userCmd))
				]));
	});
var _user$project$TimeTravel_Internal_Model$initItem = function (model) {
	return {id: 0, msg: _user$project$TimeTravel_Internal_MsgLike$Init, causedBy: _elm_lang$core$Maybe$Nothing, model: model, lazyMsgAst: _elm_lang$core$Maybe$Nothing, lazyModelAst: _elm_lang$core$Maybe$Nothing};
};
var _user$project$TimeTravel_Internal_Model$init = function (model) {
	return {
		future: _elm_lang$core$Native_List.fromArray(
			[]),
		history: A2(
			_user$project$TimeTravel_Internal_Util_Nel$Nel,
			_user$project$TimeTravel_Internal_Model$initItem(model),
			_elm_lang$core$Native_List.fromArray(
				[])),
		filter: _elm_lang$core$Native_List.fromArray(
			[]),
		sync: true,
		showModelDetail: false,
		expand: false,
		msgId: 1,
		selectedMsg: _elm_lang$core$Maybe$Nothing,
		showDiff: false,
		fixedToLeft: false,
		expandedTree: _elm_lang$core$Set$empty
	};
};
var _user$project$TimeTravel_Internal_Model$HistoryItem = F6(
	function (a, b, c, d, e, f) {
		return {id: a, msg: b, causedBy: c, model: d, lazyMsgAst: e, lazyModelAst: f};
	});
var _user$project$TimeTravel_Internal_Model$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {future: a, history: b, filter: c, sync: d, showModelDetail: e, expand: f, msgId: g, selectedMsg: h, showDiff: i, fixedToLeft: j, expandedTree: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$TimeTravel_Internal_Model$Settings = F2(
	function (a, b) {
		return {fixedToLeft: a, filter: b};
	});
var _user$project$TimeTravel_Internal_Model$settingsDecoder = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$TimeTravel_Internal_Model$Settings,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'fixedToLeft', _elm_lang$core$Json_Decode$bool),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'filter',
		_elm_lang$core$Json_Decode$list(
			A3(
				_elm_lang$core$Json_Decode$tuple2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_elm_lang$core$Json_Decode$string,
				_elm_lang$core$Json_Decode$bool))));
var _user$project$TimeTravel_Internal_Model$decodeSettings = _elm_lang$core$Json_Decode$decodeString(_user$project$TimeTravel_Internal_Model$settingsDecoder);
var _user$project$TimeTravel_Internal_Model$OutgoingMsg = F2(
	function (a, b) {
		return {type_: a, settings: b};
	});
var _user$project$TimeTravel_Internal_Model$IncomingMsg = F2(
	function (a, b) {
		return {type_: a, settings: b};
	});
var _user$project$TimeTravel_Internal_Model$ToggleModelTree = function (a) {
	return {ctor: 'ToggleModelTree', _0: a};
};
var _user$project$TimeTravel_Internal_Model$ToggleModelDetail = {ctor: 'ToggleModelDetail'};
var _user$project$TimeTravel_Internal_Model$Receive = function (a) {
	return {ctor: 'Receive', _0: a};
};
var _user$project$TimeTravel_Internal_Model$ToggleLayout = {ctor: 'ToggleLayout'};
var _user$project$TimeTravel_Internal_Model$Resync = {ctor: 'Resync'};
var _user$project$TimeTravel_Internal_Model$SelectMsg = function (a) {
	return {ctor: 'SelectMsg', _0: a};
};
var _user$project$TimeTravel_Internal_Model$ToggleFilter = function (a) {
	return {ctor: 'ToggleFilter', _0: a};
};
var _user$project$TimeTravel_Internal_Model$ToggleExpand = {ctor: 'ToggleExpand'};
var _user$project$TimeTravel_Internal_Model$ToggleSync = {ctor: 'ToggleSync'};

var _user$project$TimeTravel_Internal_Update$updateAfterUserMsg = F2(
	function (save, model) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(_user$project$TimeTravel_Internal_Model$saveSetting, save, model)
				]));
	});
var _user$project$TimeTravel_Internal_Update$toggleSet = F2(
	function (a, set) {
		return A2(
			A2(_elm_lang$core$Set$member, a, set) ? _elm_lang$core$Set$remove : _elm_lang$core$Set$insert,
			a,
			set);
	});
var _user$project$TimeTravel_Internal_Update$update = F3(
	function (save, message, model) {
		var _p0 = message;
		switch (_p0.ctor) {
			case 'Receive':
				var _p2 = _p0._0;
				if (_elm_lang$core$Native_Utils.eq(_p2.type_, 'load')) {
					var _p1 = _user$project$TimeTravel_Internal_Model$decodeSettings(_p2.settings);
					if (_p1.ctor === 'Ok') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{fixedToLeft: _p1._0.fixedToLeft, filter: _p1._0.filter}),
							_elm_lang$core$Native_List.fromArray(
								[]));
					} else {
						return A2(
							_elm_lang$core$Debug$log,
							'err decoing',
							A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								_elm_lang$core$Native_List.fromArray(
									[])));
					}
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						_elm_lang$core$Native_List.fromArray(
							[]));
				}
			case 'ToggleSync':
				var nextSync = _elm_lang$core$Basics$not(model.sync);
				var newModel = (nextSync ? _user$project$TimeTravel_Internal_Model$futureToHistory : _elm_lang$core$Basics$identity)(
					_user$project$TimeTravel_Internal_Model$selectFirstIfSync(
						_elm_lang$core$Native_Utils.update(
							model,
							{
								selectedMsg: nextSync ? _elm_lang$core$Maybe$Nothing : model.selectedMsg,
								sync: nextSync,
								showModelDetail: false
							})));
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'ToggleExpand':
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{
						expand: _elm_lang$core$Basics$not(model.expand)
					});
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'ToggleFilter':
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{
						filter: A2(
							_elm_lang$core$List$map,
							function (_p3) {
								var _p4 = _p3;
								var _p6 = _p4._1;
								var _p5 = _p4._0;
								return _elm_lang$core$Native_Utils.eq(_p0._0, _p5) ? {
									ctor: '_Tuple2',
									_0: _p5,
									_1: _elm_lang$core$Basics$not(_p6)
								} : {ctor: '_Tuple2', _0: _p5, _1: _p6};
							},
							model.filter)
					});
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$TimeTravel_Internal_Model$saveSetting, save, newModel)
						]));
			case 'SelectMsg':
				var newModel = _user$project$TimeTravel_Internal_Model$updateLazyAst(
					_elm_lang$core$Native_Utils.update(
						model,
						{
							selectedMsg: _elm_lang$core$Maybe$Just(_p0._0),
							sync: false
						}));
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'Resync':
				var newModel = _user$project$TimeTravel_Internal_Model$futureToHistory(
					_user$project$TimeTravel_Internal_Model$selectFirstIfSync(
						_elm_lang$core$Native_Utils.update(
							model,
							{sync: true, showModelDetail: false})));
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'ToggleLayout':
				var newModel = _elm_lang$core$Native_Utils.update(
					model,
					{
						fixedToLeft: _elm_lang$core$Basics$not(model.fixedToLeft)
					});
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$TimeTravel_Internal_Model$saveSetting, save, newModel)
						]));
			case 'ToggleModelDetail':
				return model.sync ? A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_user$project$TimeTravel_Internal_Model$futureToHistory(
						_user$project$TimeTravel_Internal_Model$selectFirstIfSync(
							_elm_lang$core$Native_Utils.update(
								model,
								{
									showModelDetail: _elm_lang$core$Basics$not(model.showModelDetail),
									sync: false
								}))),
					_elm_lang$core$Native_List.fromArray(
						[])) : A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							showModelDetail: _elm_lang$core$Basics$not(model.showModelDetail)
						}),
					_elm_lang$core$Native_List.fromArray(
						[]));
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							expandedTree: A2(_user$project$TimeTravel_Internal_Update$toggleSet, _p0._0, model.expandedTree)
						}),
					_elm_lang$core$Native_List.fromArray(
						[]));
		}
	});

var _user$project$TimeTravel_Internal_Styles$diffOrModelDetailViewContainer = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'position', _1: 'relative'}
	]);
var _user$project$TimeTravel_Internal_Styles$lineBase = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'padding-left', _1: '10px'},
		{ctor: '_Tuple2', _0: 'white-space', _1: 'pre'}
	]);
var _user$project$TimeTravel_Internal_Styles$omittedLine = _user$project$TimeTravel_Internal_Styles$lineBase;
var _user$project$TimeTravel_Internal_Styles$normalLine = _user$project$TimeTravel_Internal_Styles$lineBase;
var _user$project$TimeTravel_Internal_Styles$deletedLine = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(255, 100, 100, 0.15)'}
		]),
	_user$project$TimeTravel_Internal_Styles$lineBase);
var _user$project$TimeTravel_Internal_Styles$addedLine = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(100, 255, 100, 0.15)'}
		]),
	_user$project$TimeTravel_Internal_Styles$lineBase);
var _user$project$TimeTravel_Internal_Styles$subPain = function (fixedToLeft) {
	return _elm_lang$core$Native_List.fromArray(
		[
			{
			ctor: '_Tuple2',
			_0: 'box-shadow',
			_1: fixedToLeft ? 'rgba(0, 0, 0, 0.15) 5px 0px 15px inset' : 'rgba(0, 0, 0, 0.15) -5px 0px 15px inset'
		}
		]);
};
var _user$project$TimeTravel_Internal_Styles$itemBackground = function (selected) {
	return _elm_lang$core$Native_List.fromArray(
		[
			{
			ctor: '_Tuple2',
			_0: 'background-color',
			_1: selected ? 'rgba(0, 0, 0, 0.5)' : ''
		}
		]);
};
var _user$project$TimeTravel_Internal_Styles$modelDetailFlagmentToggle = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'white-space', _1: 'pre'},
		{ctor: '_Tuple2', _0: 'display', _1: 'inline'},
		{ctor: '_Tuple2', _0: 'background-color', _1: '#777'},
		{ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'}
	]);
var _user$project$TimeTravel_Internal_Styles$modelDetailFlagmentToggleExpand = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'position', _1: 'relative'},
			{ctor: '_Tuple2', _0: 'left', _1: '-16px'},
			{ctor: '_Tuple2', _0: 'margin-right', _1: '-14px'}
		]),
	_user$project$TimeTravel_Internal_Styles$modelDetailFlagmentToggle);
var _user$project$TimeTravel_Internal_Styles$modelDetailFlagment = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'white-space', _1: 'pre'},
		{ctor: '_Tuple2', _0: 'display', _1: 'inline'}
	]);
var _user$project$TimeTravel_Internal_Styles$modelViewContainer = _elm_lang$core$Native_List.fromArray(
	[]);
var _user$project$TimeTravel_Internal_Styles$debugViewTheme = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'background-color', _1: '#444'},
		{ctor: '_Tuple2', _0: 'color', _1: '#eee'},
		{ctor: '_Tuple2', _0: 'font-family', _1: 'calibri, helvetica, arial, sans-serif'}
	]);
var _user$project$TimeTravel_Internal_Styles$detailView = F2(
	function (fixedToLeft, opened) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
					{ctor: '_Tuple2', _0: 'width', _1: '320px'},
					{
					ctor: '_Tuple2',
					_0: fixedToLeft ? 'right' : 'left',
					_1: '-320px'
				},
					{ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'}
				]),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$TimeTravel_Internal_Styles$subPain(fixedToLeft),
				_user$project$TimeTravel_Internal_Styles$debugViewTheme));
	});
var _user$project$TimeTravel_Internal_Styles$panelBorder = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'border-bottom', _1: 'solid 1px #666'}
	]);
var _user$project$TimeTravel_Internal_Styles$panel = function (visible) {
	return _elm_lang$core$Native_List.fromArray(
		[
			{
			ctor: '_Tuple2',
			_0: 'padding',
			_1: visible ? '20px' : '0 20px'
		},
			{ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'}
		]);
};
var _user$project$TimeTravel_Internal_Styles$filterView = function (visible) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'background-color', _1: '#333'},
				{ctor: '_Tuple2', _0: 'transition', _1: 'height ease 0.3s, padding ease 0.3s'},
				{
				ctor: '_Tuple2',
				_0: 'height',
				_1: visible ? '' : '0'
			}
			]),
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$TimeTravel_Internal_Styles$panelBorder,
			_user$project$TimeTravel_Internal_Styles$panel(visible)));
};
var _user$project$TimeTravel_Internal_Styles$headerView = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'display', _1: 'flex'},
			{ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'}
		]),
	_user$project$TimeTravel_Internal_Styles$panel(true));
var _user$project$TimeTravel_Internal_Styles$subHeaderView = A2(_elm_lang$core$Basics_ops['++'], _user$project$TimeTravel_Internal_Styles$headerView, _user$project$TimeTravel_Internal_Styles$panelBorder);
var _user$project$TimeTravel_Internal_Styles$modelView = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'height', _1: '150px'},
			{ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'}
		]),
	A2(
		_elm_lang$core$Basics_ops['++'],
		_user$project$TimeTravel_Internal_Styles$panelBorder,
		_user$project$TimeTravel_Internal_Styles$panel(true)));
var _user$project$TimeTravel_Internal_Styles$msgListView = _user$project$TimeTravel_Internal_Styles$panel(true);
var _user$project$TimeTravel_Internal_Styles$msgTreeView = A2(
	_elm_lang$core$Basics_ops['++'],
	_user$project$TimeTravel_Internal_Styles$panel(true),
	_user$project$TimeTravel_Internal_Styles$panelBorder);
var _user$project$TimeTravel_Internal_Styles$detailedMsgView = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'white-space', _1: 'pre'}
		]),
	A2(
		_elm_lang$core$Basics_ops['++'],
		_user$project$TimeTravel_Internal_Styles$panel(true),
		_user$project$TimeTravel_Internal_Styles$panelBorder));
var _user$project$TimeTravel_Internal_Styles$diffView = _user$project$TimeTravel_Internal_Styles$panel(true);
var _user$project$TimeTravel_Internal_Styles$pointer = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'}
	]);
var _user$project$TimeTravel_Internal_Styles$iconButton = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'padding', _1: '10px 10px 6px 10px'},
			{ctor: '_Tuple2', _0: 'border', _1: 'solid 1px #666'},
			{ctor: '_Tuple2', _0: 'border-radius', _1: '3px'}
		]),
	_user$project$TimeTravel_Internal_Styles$pointer);
var _user$project$TimeTravel_Internal_Styles$buttonView = function (left) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		left ? _elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'margin-right', _1: 'auto'}
			]) : _elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'margin-left', _1: '7px'}
			]),
		_user$project$TimeTravel_Internal_Styles$iconButton);
};
var _user$project$TimeTravel_Internal_Styles$toggleModelDetailIcon = A2(
	_elm_lang$core$Basics_ops['++'],
	_elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'right', _1: '20px'},
			{ctor: '_Tuple2', _0: 'top', _1: '20px'},
			{ctor: '_Tuple2', _0: 'position', _1: 'absolute'}
		]),
	A2(_elm_lang$core$Basics_ops['++'], _user$project$TimeTravel_Internal_Styles$iconButton, _user$project$TimeTravel_Internal_Styles$debugViewTheme));
var _user$project$TimeTravel_Internal_Styles$msgView = function (selected) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'white-space', _1: 'nowrap'},
				{ctor: '_Tuple2', _0: 'text-overflow', _1: 'ellipsis'},
				{ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'}
			]),
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$TimeTravel_Internal_Styles$itemBackground(selected),
			_user$project$TimeTravel_Internal_Styles$pointer));
};
var _user$project$TimeTravel_Internal_Styles$msgTreeViewItemRow = function (selected) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'white-space', _1: 'pre'},
				{ctor: '_Tuple2', _0: 'text-overflow', _1: 'ellipsis'},
				{ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'}
			]),
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$TimeTravel_Internal_Styles$itemBackground(selected),
			_user$project$TimeTravel_Internal_Styles$pointer));
};
var _user$project$TimeTravel_Internal_Styles$button = _elm_lang$core$Native_List.fromArray(
	[
		{ctor: '_Tuple2', _0: 'padding', _1: '10px'},
		{ctor: '_Tuple2', _0: 'border', _1: 'solid 1px #666'},
		{ctor: '_Tuple2', _0: 'border-radius', _1: '3px'},
		{ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'}
	]);
var _user$project$TimeTravel_Internal_Styles$zIndex = {modelDetailView: '2147483646', debugView: '2147483646', resyncView: '2147483645'};
var _user$project$TimeTravel_Internal_Styles$debugView = function (fixedToLeft) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'position', _1: 'fixed'},
				{ctor: '_Tuple2', _0: 'width', _1: '250px'},
				{ctor: '_Tuple2', _0: 'top', _1: '0'},
				{
				ctor: '_Tuple2',
				_0: fixedToLeft ? 'left' : 'right',
				_1: '0'
			},
				{ctor: '_Tuple2', _0: 'bottom', _1: '0'},
				{ctor: '_Tuple2', _0: 'z-index', _1: _user$project$TimeTravel_Internal_Styles$zIndex.debugView}
			]),
		_user$project$TimeTravel_Internal_Styles$debugViewTheme);
};
var _user$project$TimeTravel_Internal_Styles$modelDetailView = function (fixedToLeft) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'width', _1: '320px'},
				{ctor: '_Tuple2', _0: 'z-index', _1: _user$project$TimeTravel_Internal_Styles$zIndex.modelDetailView},
				{ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'}
			]),
		_user$project$TimeTravel_Internal_Styles$panel(true));
};
var _user$project$TimeTravel_Internal_Styles$resyncView = function (sync) {
	return _elm_lang$core$Native_List.fromArray(
		[
			{ctor: '_Tuple2', _0: 'z-index', _1: _user$project$TimeTravel_Internal_Styles$zIndex.resyncView},
			{ctor: '_Tuple2', _0: 'position', _1: 'fixed'},
			{ctor: '_Tuple2', _0: 'top', _1: '0'},
			{ctor: '_Tuple2', _0: 'bottom', _1: '0'},
			{ctor: '_Tuple2', _0: 'left', _1: '0'},
			{ctor: '_Tuple2', _0: 'right', _1: '0'},
			{ctor: '_Tuple2', _0: 'background-color', _1: 'rgba(0, 0, 0, 0.15)'},
			{
			ctor: '_Tuple2',
			_0: 'opacity',
			_1: sync ? '0' : '1'
		},
			{
			ctor: '_Tuple2',
			_0: 'pointer-events',
			_1: sync ? 'none' : ''
		},
			{ctor: '_Tuple2', _0: 'transition', _1: 'opacity ease 0.5s'}
		]);
};

var _user$project$TimeTravel_Internal_Icons$toggleModelDetail = A2(_elm_community$elm_material_icons$Material_Icons_Content$content_copy, _elm_lang$core$Color$white, 24);
var _user$project$TimeTravel_Internal_Icons$layout = A2(_elm_community$elm_material_icons$Material_Icons_Action$swap_horiz, _elm_lang$core$Color$white, 24);
var _user$project$TimeTravel_Internal_Icons$filterExpand = function (expanded) {
	return A2(
		expanded ? _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_drop_up : _elm_community$elm_material_icons$Material_Icons_Navigation$arrow_drop_down,
		_elm_lang$core$Color$white,
		24);
};
var _user$project$TimeTravel_Internal_Icons$filter = function (enabled) {
	return A2(
		_elm_community$elm_material_icons$Material_Icons_Content$filter_list,
		enabled ? _elm_lang$core$Color$white : _elm_lang$core$Color$gray,
		24);
};
var _user$project$TimeTravel_Internal_Icons$sync = function ($synchronized) {
	return A2(
		$synchronized ? _elm_community$elm_material_icons$Material_Icons_Av$pause : _elm_community$elm_material_icons$Material_Icons_Av$play_arrow,
		_elm_lang$core$Color$white,
		24);
};

var _user$project$TimeTravel_Internal_MsgTreeView$itemRow = F4(
	function (onSelect, indent, selectedMsg, item) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(
					_user$project$TimeTravel_Internal_Styles$msgTreeViewItemRow(
						_elm_lang$core$Native_Utils.eq(selectedMsg, item.id))),
					_elm_lang$html$Html_Events$onClick(
					onSelect(item.id))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$String$repeat, indent, '    '),
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(item.id),
							A2(
								_elm_lang$core$Basics_ops['++'],
								': ',
								_user$project$TimeTravel_Internal_MsgLike$format(item.msg)))))
				]));
	});
var _user$project$TimeTravel_Internal_MsgTreeView$viewTree = F4(
	function (onSelect, indent, selectedMsg, _p0) {
		var _p1 = _p0;
		return A2(
			_elm_lang$core$List_ops['::'],
			A4(_user$project$TimeTravel_Internal_MsgTreeView$itemRow, onSelect, indent, selectedMsg, _p1._0),
			A2(
				_elm_lang$core$List$concatMap,
				A3(_user$project$TimeTravel_Internal_MsgTreeView$viewTree, onSelect, indent + 1, selectedMsg),
				_p1._1));
	});
var _user$project$TimeTravel_Internal_MsgTreeView$view = F3(
	function (onSelect, selectedMsg, tree) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$msgTreeView)
				]),
			A4(_user$project$TimeTravel_Internal_MsgTreeView$viewTree, onSelect, 0, selectedMsg, tree));
	});

var _user$project$TimeTravel_Internal_Parser_Formatter$formatHelp = F4(
	function (formatPlain, formatListed, formatLong, model) {
		var _p0 = model;
		switch (_p0.ctor) {
			case 'Plain':
				return formatPlain(_p0._0);
			case 'Listed':
				return formatListed(_p0._0);
			default:
				return A3(formatLong, _p0._0, _p0._1, _p0._2);
		}
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$formatAsHtml = F3(
	function (transformMsg, expandedTree, model) {
		return A4(
			_user$project$TimeTravel_Internal_Parser_Formatter$formatHelp,
			function (s) {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$modelDetailFlagment)
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(s)
							]))
					]);
			},
			function (list) {
				return A2(
					_elm_lang$core$List$concatMap,
					A2(_user$project$TimeTravel_Internal_Parser_Formatter$formatAsHtml, transformMsg, expandedTree),
					list);
			},
			F3(
				function (id, alt, children) {
					return A2(_elm_lang$core$Set$member, id, expandedTree) ? A2(
						_elm_lang$core$List_ops['::'],
						A2(
							_elm_lang$html$Html$span,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$modelDetailFlagmentToggleExpand),
									_elm_lang$html$Html_Events$onClick(
									transformMsg(id))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(' - ')
								])),
						A2(
							_elm_lang$core$List$concatMap,
							A2(_user$project$TimeTravel_Internal_Parser_Formatter$formatAsHtml, transformMsg, expandedTree),
							children)) : _elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$span,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$modelDetailFlagmentToggle),
									_elm_lang$html$Html_Events$onClick(
									transformMsg(id))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(alt)
								]))
						]);
				}),
			model);
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$formatAsString = function (model) {
	return A4(
		_user$project$TimeTravel_Internal_Parser_Formatter$formatHelp,
		_elm_lang$core$Basics$identity,
		function (_p1) {
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _user$project$TimeTravel_Internal_Parser_Formatter$formatAsString, _p1));
		},
		F3(
			function (_p3, _p2, children) {
				return A2(
					_elm_lang$core$String$join,
					'',
					A2(_elm_lang$core$List$map, _user$project$TimeTravel_Internal_Parser_Formatter$formatAsString, children));
			}),
		model);
};
var _user$project$TimeTravel_Internal_Parser_Formatter$indent = function (context) {
	return A2(_elm_lang$core$String$repeat, context.nest, '  ');
};
var _user$project$TimeTravel_Internal_Parser_Formatter$Context = F3(
	function (a, b, c) {
		return {nest: a, parens: b, wordsLimit: c};
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$Long = F3(
	function (a, b, c) {
		return {ctor: 'Long', _0: a, _1: b, _2: c};
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$Listed = function (a) {
	return {ctor: 'Listed', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_Formatter$Plain = function (a) {
	return {ctor: 'Plain', _0: a};
};
var _user$project$TimeTravel_Internal_Parser_Formatter$joinX = F2(
	function (s, list) {
		var _p4 = list;
		if (_p4.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[_p4._0]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p4._0,
					A2(
						_elm_lang$core$List_ops['::'],
						_user$project$TimeTravel_Internal_Parser_Formatter$Plain(s),
						A2(_user$project$TimeTravel_Internal_Parser_Formatter$joinX, s, _p4._1)));
			}
		}
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$makeModelFromListLike = F7(
	function (canFold, id, indent, wordsLimit, start, end, list) {
		var _p5 = list;
		if (_p5.ctor === '[]') {
			return _user$project$TimeTravel_Internal_Parser_Formatter$Plain(
				A2(_elm_lang$core$Basics_ops['++'], start, end));
		} else {
			var singleLine = _user$project$TimeTravel_Internal_Parser_Formatter$Listed(
				A2(
					_elm_lang$core$List_ops['::'],
					_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
						A2(_elm_lang$core$Basics_ops['++'], start, ' ')),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_user$project$TimeTravel_Internal_Parser_Formatter$joinX, ', ', list),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
								A2(_elm_lang$core$Basics_ops['++'], ' ', end))
							]))));
			var singleLineStr = _user$project$TimeTravel_Internal_Parser_Formatter$formatAsString(singleLine);
			var $long = (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$String$length(singleLineStr),
				wordsLimit) > 0) || A2(_elm_lang$core$String$contains, '\n', singleLineStr);
			return (((!_elm_lang$core$Native_Utils.eq(indent, '')) && canFold) && $long) ? A3(
				_user$project$TimeTravel_Internal_Parser_Formatter$Long,
				id,
				A2(
					_elm_lang$core$Basics_ops['++'],
					start,
					A2(_elm_lang$core$Basics_ops['++'], ' .. ', end)),
				A2(
					_elm_lang$core$List_ops['::'],
					_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
						A2(_elm_lang$core$Basics_ops['++'], start, ' ')),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_user$project$TimeTravel_Internal_Parser_Formatter$joinX,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\n',
								A2(_elm_lang$core$Basics_ops['++'], indent, ', ')),
							list),
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
									A2(_elm_lang$core$Basics_ops['++'], '\n', indent))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TimeTravel_Internal_Parser_Formatter$Plain(end)
								]))))) : ($long ? _user$project$TimeTravel_Internal_Parser_Formatter$Listed(
				A2(
					_elm_lang$core$List_ops['::'],
					_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
						A2(_elm_lang$core$Basics_ops['++'], start, ' ')),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_user$project$TimeTravel_Internal_Parser_Formatter$joinX,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\n',
								A2(_elm_lang$core$Basics_ops['++'], indent, ', ')),
							list),
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
									A2(_elm_lang$core$Basics_ops['++'], '\n', indent))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TimeTravel_Internal_Parser_Formatter$Plain(end)
								]))))) : singleLine);
		}
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext = F2(
	function (c, ast) {
		var _p6 = ast;
		switch (_p6.ctor) {
			case 'RecordX':
				return A7(
					_user$project$TimeTravel_Internal_Parser_Formatter$makeModelFromListLike,
					true,
					_p6._0,
					_user$project$TimeTravel_Internal_Parser_Formatter$indent(c),
					c.wordsLimit,
					'{',
					'}',
					A2(
						_elm_lang$core$List$map,
						_user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext(
							_elm_lang$core$Native_Utils.update(
								c,
								{nest: c.nest + 1})),
						_p6._1));
			case 'PropertyX':
				var _p7 = _p6._1;
				var s = A2(
					_user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext,
					_elm_lang$core$Native_Utils.update(
						c,
						{parens: false, nest: c.nest + 1}),
					_p6._2);
				var str = _user$project$TimeTravel_Internal_Parser_Formatter$formatAsString(s);
				return _user$project$TimeTravel_Internal_Parser_Formatter$Listed(
					A2(
						_elm_lang$core$List_ops['::'],
						_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
							A2(_elm_lang$core$Basics_ops['++'], _p7, ' = ')),
						(A2(_elm_lang$core$String$contains, '\n', str) || (_elm_lang$core$Native_Utils.cmp(
							_elm_lang$core$String$length(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p7,
									A2(_elm_lang$core$Basics_ops['++'], ' = ', str))),
							c.wordsLimit) > 0)) ? _elm_lang$core$Native_List.fromArray(
							[
								_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\n',
									_user$project$TimeTravel_Internal_Parser_Formatter$indent(
										_elm_lang$core$Native_Utils.update(
											c,
											{nest: c.nest + 1})))),
								s
							]) : _elm_lang$core$Native_List.fromArray(
							[s])));
			case 'StringLiteralX':
				return _user$project$TimeTravel_Internal_Parser_Formatter$Plain(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\"',
						A2(_elm_lang$core$Basics_ops['++'], _p6._1, '\"')));
			case 'ValueX':
				return _user$project$TimeTravel_Internal_Parser_Formatter$Plain(_p6._1);
			case 'UnionX':
				var _p9 = _p6._2;
				var _p8 = _p6._1;
				var tailX = A2(
					_elm_lang$core$List$map,
					_user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext(
						_elm_lang$core$Native_Utils.update(
							c,
							{nest: c.nest + 1, parens: true})),
					_p9);
				var joinedTailStr = _user$project$TimeTravel_Internal_Parser_Formatter$formatAsString(
					_user$project$TimeTravel_Internal_Parser_Formatter$Listed(tailX));
				var multiLine = A2(_elm_lang$core$String$contains, '\n', joinedTailStr) || (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$String$length(
						A2(_elm_lang$core$Basics_ops['++'], _p8, joinedTailStr)),
					c.wordsLimit) > 0);
				var s = _user$project$TimeTravel_Internal_Parser_Formatter$Listed(
					multiLine ? A2(
						_elm_lang$core$List_ops['::'],
						_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p8,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\n',
									_user$project$TimeTravel_Internal_Parser_Formatter$indent(
										_elm_lang$core$Native_Utils.update(
											c,
											{nest: c.nest + 1}))))),
						A2(
							_user$project$TimeTravel_Internal_Parser_Formatter$joinX,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\n',
								_user$project$TimeTravel_Internal_Parser_Formatter$indent(
									_elm_lang$core$Native_Utils.update(
										c,
										{nest: c.nest + 1}))),
							tailX)) : A2(
						_user$project$TimeTravel_Internal_Parser_Formatter$joinX,
						' ',
						A2(
							_elm_lang$core$List_ops['::'],
							_user$project$TimeTravel_Internal_Parser_Formatter$Plain(_p8),
							tailX)));
				return (_elm_lang$core$Basics$not(
					_elm_lang$core$List$isEmpty(_p9)) && c.parens) ? _user$project$TimeTravel_Internal_Parser_Formatter$Listed(
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$TimeTravel_Internal_Parser_Formatter$Plain('('),
							s,
							_user$project$TimeTravel_Internal_Parser_Formatter$Plain(
							multiLine ? A2(
								_elm_lang$core$Basics_ops['++'],
								'\n',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_user$project$TimeTravel_Internal_Parser_Formatter$indent(c),
									')')) : ')')
						])) : s;
			case 'ListLiteralX':
				return A7(
					_user$project$TimeTravel_Internal_Parser_Formatter$makeModelFromListLike,
					true,
					_p6._0,
					_user$project$TimeTravel_Internal_Parser_Formatter$indent(c),
					c.wordsLimit,
					'[',
					']',
					A2(
						_elm_lang$core$List$map,
						_user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext(
							_elm_lang$core$Native_Utils.update(
								c,
								{parens: false, nest: c.nest + 1})),
						_p6._1));
			default:
				return A7(
					_user$project$TimeTravel_Internal_Parser_Formatter$makeModelFromListLike,
					false,
					_p6._0,
					_user$project$TimeTravel_Internal_Parser_Formatter$indent(c),
					c.wordsLimit,
					'(',
					')',
					A2(
						_elm_lang$core$List$map,
						_user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext(
							_elm_lang$core$Native_Utils.update(
								c,
								{parens: false, nest: c.nest + 1})),
						_p6._1));
		}
	});
var _user$project$TimeTravel_Internal_Parser_Formatter$makeModel = _user$project$TimeTravel_Internal_Parser_Formatter$makeModelWithContext(
	{nest: 0, parens: false, wordsLimit: 40});

var _user$project$TimeTravel_Internal_DiffView$normalLine = function (s) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$normalLine)
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(s)
			]));
};
var _user$project$TimeTravel_Internal_DiffView$addedLine = function (s) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$addedLine)
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(s)
			]));
};
var _user$project$TimeTravel_Internal_DiffView$deletedLine = function (s) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$deletedLine)
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(s)
			]));
};
var _user$project$TimeTravel_Internal_DiffView$omittedLine = A2(
	_elm_lang$html$Html$div,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$omittedLine)
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text('...')
		]));
var _user$project$TimeTravel_Internal_DiffView$lines = function (s) {
	return A2(
		_elm_lang$core$List$filter,
		F2(
			function (x, y) {
				return !_elm_lang$core$Native_Utils.eq(x, y);
			})(''),
		_elm_lang$core$String$lines(s));
};
var _user$project$TimeTravel_Internal_DiffView$Omit = {ctor: 'Omit'};
var _user$project$TimeTravel_Internal_DiffView$tmpToResult = F4(
	function (additionalLines, next, tmp, result) {
		return _elm_lang$core$Native_Utils.eq(
			result,
			_elm_lang$core$Native_List.fromArray(
				[])) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: A2(
				_elm_lang$core$List_ops['::'],
				next,
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List$take, additionalLines, tmp),
					(_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$List$length(tmp),
						additionalLines) > 0) ? _elm_lang$core$Native_List.fromArray(
						[_user$project$TimeTravel_Internal_DiffView$Omit]) : _elm_lang$core$Native_List.fromArray(
						[])))
		} : ((_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(tmp),
			additionalLines * 2) > 0) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: A2(
				_elm_lang$core$List_ops['::'],
				next,
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List$take, additionalLines, tmp),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Native_List.fromArray(
							[_user$project$TimeTravel_Internal_DiffView$Omit]),
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$List$drop,
								_elm_lang$core$List$length(tmp) - additionalLines,
								tmp),
							result))))
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: A2(
				_elm_lang$core$List_ops['::'],
				next,
				A2(_elm_lang$core$Basics_ops['++'], tmp, result))
		});
	});
var _user$project$TimeTravel_Internal_DiffView$Add = function (a) {
	return {ctor: 'Add', _0: a};
};
var _user$project$TimeTravel_Internal_DiffView$Delete = function (a) {
	return {ctor: 'Delete', _0: a};
};
var _user$project$TimeTravel_Internal_DiffView$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _user$project$TimeTravel_Internal_DiffView$reduceLines = function (list) {
	var additionalLines = 2;
	var _p0 = A3(
		_elm_lang$core$List$foldr,
		F2(
			function (line, _p1) {
				var _p2 = _p1;
				var _p5 = _p2._0;
				var _p4 = _p2._1;
				var _p3 = line;
				switch (_p3.ctor) {
					case 'Normal':
						return {
							ctor: '_Tuple2',
							_0: A2(
								_elm_lang$core$List_ops['::'],
								_user$project$TimeTravel_Internal_DiffView$Normal(_p3._0),
								_p5),
							_1: _p4
						};
					case 'Delete':
						return A4(
							_user$project$TimeTravel_Internal_DiffView$tmpToResult,
							additionalLines,
							_user$project$TimeTravel_Internal_DiffView$Delete(_p3._0),
							_p5,
							_p4);
					case 'Add':
						return A4(
							_user$project$TimeTravel_Internal_DiffView$tmpToResult,
							additionalLines,
							_user$project$TimeTravel_Internal_DiffView$Add(_p3._0),
							_p5,
							_p4);
					default:
						return {ctor: '_Tuple2', _0: _p5, _1: _p4};
				}
			}),
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		list);
	var tmp = _p0._0;
	var result = _p0._1;
	return _elm_lang$core$Native_Utils.eq(
		result,
		_elm_lang$core$Native_List.fromArray(
			[])) ? _elm_lang$core$Native_List.fromArray(
		[]) : ((_elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$List$length(tmp),
		additionalLines) > 0) ? A2(
		_elm_lang$core$List_ops['::'],
		_user$project$TimeTravel_Internal_DiffView$Omit,
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$List$drop,
				_elm_lang$core$List$length(tmp) - additionalLines,
				tmp),
			result)) : A2(_elm_lang$core$Basics_ops['++'], tmp, result));
};
var _user$project$TimeTravel_Internal_DiffView$viewDiff = F2(
	function (old, $new) {
		var changes = A2(_avh4$elm_diff$Diff$diffLines, old, $new);
		var list = A2(
			_elm_lang$core$List$concatMap,
			function (change) {
				var _p6 = change;
				switch (_p6.ctor) {
					case 'NoChange':
						return A2(
							_elm_lang$core$List$map,
							_user$project$TimeTravel_Internal_DiffView$Normal,
							_user$project$TimeTravel_Internal_DiffView$lines(_p6._0));
					case 'Changed':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$List$map,
								_user$project$TimeTravel_Internal_DiffView$Delete,
								_user$project$TimeTravel_Internal_DiffView$lines(_p6._0)),
							A2(
								_elm_lang$core$List$map,
								_user$project$TimeTravel_Internal_DiffView$Add,
								_user$project$TimeTravel_Internal_DiffView$lines(_p6._1)));
					case 'Added':
						return A2(
							_elm_lang$core$List$map,
							_user$project$TimeTravel_Internal_DiffView$Add,
							_user$project$TimeTravel_Internal_DiffView$lines(_p6._0));
					default:
						return A2(
							_elm_lang$core$List$map,
							_user$project$TimeTravel_Internal_DiffView$Delete,
							_user$project$TimeTravel_Internal_DiffView$lines(_p6._0));
				}
			},
			changes);
		var linesView = A2(
			_elm_lang$core$List$map,
			function (line) {
				var _p7 = line;
				switch (_p7.ctor) {
					case 'Normal':
						return _user$project$TimeTravel_Internal_DiffView$normalLine(_p7._0);
					case 'Delete':
						return _user$project$TimeTravel_Internal_DiffView$deletedLine(_p7._0);
					case 'Add':
						return _user$project$TimeTravel_Internal_DiffView$addedLine(_p7._0);
					default:
						return _user$project$TimeTravel_Internal_DiffView$omittedLine;
				}
			},
			_user$project$TimeTravel_Internal_DiffView$reduceLines(list));
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$diffView)
				]),
			linesView);
	});
var _user$project$TimeTravel_Internal_DiffView$view = F2(
	function (oldAst, newAst) {
		return A2(
			_user$project$TimeTravel_Internal_DiffView$viewDiff,
			_user$project$TimeTravel_Internal_Parser_Formatter$formatAsString(
				_user$project$TimeTravel_Internal_Parser_Formatter$makeModel(oldAst)),
			_user$project$TimeTravel_Internal_Parser_Formatter$formatAsString(
				_user$project$TimeTravel_Internal_Parser_Formatter$makeModel(newAst)));
	});

var _user$project$TimeTravel_Internal_View$msgView = F3(
	function (filterOptions, selectedMsg, _p0) {
		var _p1 = _p0;
		var _p7 = _p1.msg;
		var _p6 = _p1.id;
		var str = _user$project$TimeTravel_Internal_MsgLike$format(_p7);
		var visible = _elm_lang$core$Native_Utils.eq(_p7, _user$project$TimeTravel_Internal_MsgLike$Init) || function () {
			var _p2 = _elm_lang$core$String$words(str);
			if (_p2.ctor === '::') {
				return A2(
					_elm_lang$core$List$any,
					function (_p3) {
						var _p4 = _p3;
						return _elm_lang$core$Native_Utils.eq(_p2._0, _p4._0) && _p4._1;
					},
					filterOptions);
			} else {
				return false;
			}
		}();
		var selected = function () {
			var _p5 = selectedMsg;
			if (_p5.ctor === 'Just') {
				return _elm_lang$core$Native_Utils.eq(_p5._0, _p6);
			} else {
				return false;
			}
		}();
		return visible ? _elm_lang$core$Maybe$Just(
			A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$style(
						_user$project$TimeTravel_Internal_Styles$msgView(selected)),
						_elm_lang$html$Html_Events$onClick(
						_user$project$TimeTravel_Internal_Model$SelectMsg(_p6))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p6),
							A2(_elm_lang$core$Basics_ops['++'], ': ', str)))
					]))) : _elm_lang$core$Maybe$Nothing;
	});
var _user$project$TimeTravel_Internal_View$msgListView = F4(
	function (filterOptions, selectedMsg, items, detailView) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					detailView,
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$msgListView)
						]),
					A2(
						_elm_lang$core$List$filterMap,
						A2(_user$project$TimeTravel_Internal_View$msgView, filterOptions, selectedMsg),
						items))
				]));
	});
var _user$project$TimeTravel_Internal_View$modelDetailView = F4(
	function (fixedToLeft, expandedTree, lazyModelAst, userModel) {
		var _p8 = lazyModelAst;
		if ((_p8.ctor === 'Just') && (_p8._0.ctor === 'Ok')) {
			var html = A3(
				_user$project$TimeTravel_Internal_Parser_Formatter$formatAsHtml,
				_user$project$TimeTravel_Internal_Model$ToggleModelTree,
				expandedTree,
				_user$project$TimeTravel_Internal_Parser_Formatter$makeModel(_p8._0._0));
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$style(
						_user$project$TimeTravel_Internal_Styles$modelDetailView(fixedToLeft))
					]),
				html);
		} else {
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$modelView)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(userModel))
					]));
		}
	});
var _user$project$TimeTravel_Internal_View$filterItemView = function (_p9) {
	var _p10 = _p9;
	var _p11 = _p10._0;
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$label,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$input,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$type$('checkbox'),
								_elm_lang$html$Html_Attributes$checked(_p10._1),
								_elm_lang$html$Html_Events$onClick(
								_user$project$TimeTravel_Internal_Model$ToggleFilter(_p11))
							]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						_elm_lang$html$Html$text(_p11)
					]))
			]));
};
var _user$project$TimeTravel_Internal_View$filterView = F2(
	function (visible, filterOptions) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(
					_user$project$TimeTravel_Internal_Styles$filterView(visible))
				]),
			A2(_elm_lang$core$List$map, _user$project$TimeTravel_Internal_View$filterItemView, filterOptions));
	});
var _user$project$TimeTravel_Internal_View$buttonView = F3(
	function (onClickMsg, left, inner) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(
					_user$project$TimeTravel_Internal_Styles$buttonView(left)),
					_elm_lang$html$Html_Events$onClick(onClickMsg)
				]),
			inner);
	});
var _user$project$TimeTravel_Internal_View$detailView = function (model) {
	if (_elm_lang$core$Basics$not(model.sync)) {
		var detailedMsgView = function () {
			var _p12 = _user$project$TimeTravel_Internal_Model$selectedMsgAst(model);
			if (_p12.ctor === 'Just') {
				return A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$detailedMsgView)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							_user$project$TimeTravel_Internal_Parser_Formatter$formatAsString(
								_user$project$TimeTravel_Internal_Parser_Formatter$makeModel(_p12._0)))
						]));
			} else {
				return _elm_lang$html$Html$text('');
			}
		}();
		var diffOrModelDetailView = function () {
			var _p13 = _user$project$TimeTravel_Internal_Model$selectedAndOldAst(model);
			if (_p13.ctor === 'Just') {
				return A2(_user$project$TimeTravel_Internal_DiffView$view, _p13._0._0, _p13._0._1);
			} else {
				return _elm_lang$html$Html$text('');
			}
		}();
		var msgTreeView = function () {
			var _p14 = {
				ctor: '_Tuple2',
				_0: model.selectedMsg,
				_1: _user$project$TimeTravel_Internal_Model$selectedMsgTree(model)
			};
			if (((_p14.ctor === '_Tuple2') && (_p14._0.ctor === 'Just')) && (_p14._1.ctor === 'Just')) {
				return A3(_user$project$TimeTravel_Internal_MsgTreeView$view, _user$project$TimeTravel_Internal_Model$SelectMsg, _p14._0._0, _p14._1._0);
			} else {
				return _elm_lang$html$Html$text('');
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(
					A2(_user$project$TimeTravel_Internal_Styles$detailView, model.fixedToLeft, true))
				]),
			A2(
				_elm_lang$core$List_ops['::'],
				A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$subHeaderView)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A3(
							_user$project$TimeTravel_Internal_View$buttonView,
							_user$project$TimeTravel_Internal_Model$ToggleModelDetail,
							false,
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TimeTravel_Internal_Icons$toggleModelDetail]))
						])),
				function () {
					if (model.showModelDetail) {
						var _p15 = _user$project$TimeTravel_Internal_Model$selectedItem(model);
						if (_p15.ctor === 'Just') {
							var _p16 = _p15._0;
							return A2(
								_elm_lang$core$List_ops['::'],
								A4(_user$project$TimeTravel_Internal_View$modelDetailView, model.fixedToLeft, model.expandedTree, _p16.lazyModelAst, _p16.model),
								_elm_lang$core$Native_List.fromArray(
									[]));
						} else {
							return _elm_lang$core$Native_List.fromArray(
								[]);
						}
					} else {
						return _elm_lang$core$Native_List.fromArray(
							[msgTreeView, detailedMsgView, diffOrModelDetailView]);
					}
				}()));
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _user$project$TimeTravel_Internal_View$headerView = F4(
	function (fixedToLeft, sync, expand, filterOptions) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$style(_user$project$TimeTravel_Internal_Styles$headerView)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A3(
							_user$project$TimeTravel_Internal_View$buttonView,
							_user$project$TimeTravel_Internal_Model$ToggleLayout,
							true,
							_elm_lang$core$Native_List.fromArray(
								[_user$project$TimeTravel_Internal_Icons$layout])),
							A3(
							_user$project$TimeTravel_Internal_View$buttonView,
							_user$project$TimeTravel_Internal_Model$ToggleSync,
							false,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TimeTravel_Internal_Icons$sync(sync)
								])),
							A3(
							_user$project$TimeTravel_Internal_View$buttonView,
							_user$project$TimeTravel_Internal_Model$ToggleExpand,
							false,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$TimeTravel_Internal_Icons$filterExpand(expand)
								]))
						])),
					A2(_user$project$TimeTravel_Internal_View$filterView, expand, filterOptions)
				]));
	});
var _user$project$TimeTravel_Internal_View$resyncView = function (sync) {
	return sync ? _elm_lang$html$Html$text('') : A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$style(
				_user$project$TimeTravel_Internal_Styles$resyncView(sync)),
				_elm_lang$html$Html_Events$onMouseDown(_user$project$TimeTravel_Internal_Model$Resync)
			]),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _user$project$TimeTravel_Internal_View$debugView = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$TimeTravel_Internal_View$resyncView(model.sync),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$style(
						_user$project$TimeTravel_Internal_Styles$debugView(model.fixedToLeft))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A4(_user$project$TimeTravel_Internal_View$headerView, model.fixedToLeft, model.sync, model.expand, model.filter),
						A4(
						_user$project$TimeTravel_Internal_View$msgListView,
						model.filter,
						model.selectedMsg,
						_user$project$TimeTravel_Internal_Util_Nel$toList(model.history),
						_user$project$TimeTravel_Internal_View$detailView(model))
					]))
			]));
};
var _user$project$TimeTravel_Internal_View$userView = F2(
	function (userView, model) {
		var _p17 = _user$project$TimeTravel_Internal_Model$selectedItem(model);
		if (_p17.ctor === 'Just') {
			return userView(_p17._0.model);
		} else {
			return _elm_lang$html$Html$text('Error: Unable to render');
		}
	});
var _user$project$TimeTravel_Internal_View$view = F4(
	function (transformUserMsg, transformDebuggerMsg, userViewFunc, model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html_App$map,
					transformUserMsg,
					A2(_user$project$TimeTravel_Internal_View$userView, userViewFunc, model)),
					A2(
					_elm_lang$html$Html_App$map,
					transformDebuggerMsg,
					_user$project$TimeTravel_Internal_View$debugView(model))
				]));
	});

var _user$project$TimeTravel_Html_App$OptionsWithFlags = F4(
	function (a, b, c, d) {
		return {init: a, view: b, update: c, subscriptions: d};
	});
var _user$project$TimeTravel_Html_App$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _user$project$TimeTravel_Html_App$DebuggerMsg = function (a) {
	return {ctor: 'DebuggerMsg', _0: a};
};
var _user$project$TimeTravel_Html_App$wrap = F2(
	function (_p1, _p0) {
		var _p2 = _p1;
		var _p12 = _p2.outgoingMsg;
		var _p3 = _p0;
		var subscriptions$ = function (model) {
			var item = _user$project$TimeTravel_Internal_Util_Nel$head(model.history);
			return _elm_lang$core$Platform_Sub$batch(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$core$Platform_Sub$map,
						function (c) {
							return _user$project$TimeTravel_Html_App$UserMsg(
								{ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: c});
						},
						_p3.subscriptions(item.model)),
						_p2.incomingMsg(
						function (_p4) {
							return _user$project$TimeTravel_Html_App$DebuggerMsg(
								_user$project$TimeTravel_Internal_Model$Receive(_p4));
						})
					]));
		};
		var view$ = function (model) {
			return A4(
				_user$project$TimeTravel_Internal_View$view,
				function (c) {
					return _user$project$TimeTravel_Html_App$UserMsg(
						{ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: c});
				},
				_user$project$TimeTravel_Html_App$DebuggerMsg,
				_p3.view,
				model);
		};
		var update$ = F2(
			function (msg, model) {
				var _p5 = msg;
				if (_p5.ctor === 'UserMsg') {
					var _p6 = A4(
						_user$project$TimeTravel_Internal_Model$updateOnIncomingUserMsg,
						function (_p7) {
							var _p8 = _p7;
							return _user$project$TimeTravel_Html_App$UserMsg(
								{
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Just(_p8._0),
									_1: _p8._1
								});
						},
						_p3.update,
						_p5._0,
						model);
					var m = _p6._0;
					var c1 = _p6._1;
					var _p9 = A2(_user$project$TimeTravel_Internal_Update$updateAfterUserMsg, _p12, m);
					var m$ = _p9._0;
					var c2 = _p9._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						m$,
						_elm_lang$core$Native_List.fromArray(
							[
								c1,
								A2(_elm_lang$core$Platform_Cmd$map, _user$project$TimeTravel_Html_App$DebuggerMsg, c2)
							]));
				} else {
					var _p10 = A3(_user$project$TimeTravel_Internal_Update$update, _p12, _p5._0, model);
					var m = _p10._0;
					var c = _p10._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						m,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_elm_lang$core$Platform_Cmd$map, _user$project$TimeTravel_Html_App$DebuggerMsg, c)
							]));
				}
			});
		var init$ = function (flags) {
			var _p11 = _p3.init(flags);
			var model = _p11._0;
			var cmd = _p11._1;
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_user$project$TimeTravel_Internal_Model$init(model),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$core$Platform_Cmd$map,
						function (msg) {
							return _user$project$TimeTravel_Html_App$UserMsg(
								{
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Just(0),
									_1: msg
								});
						},
						cmd)
					]));
		};
		return {init: init$, update: update$, view: view$, subscriptions: subscriptions$};
	});
var _user$project$TimeTravel_Html_App$programWithFlagsWithOptions = F2(
	function (options, stuff) {
		return _elm_lang$html$Html_App$programWithFlags(
			A2(_user$project$TimeTravel_Html_App$wrap, options, stuff));
	});
var _user$project$TimeTravel_Html_App$programWithOptions = F2(
	function (options, _p13) {
		var _p14 = _p13;
		return A2(
			_user$project$TimeTravel_Html_App$programWithFlagsWithOptions,
			options,
			{
				init: _elm_lang$core$Basics$always(_p14.init),
				view: _p14.view,
				update: _p14.update,
				subscriptions: _p14.subscriptions
			});
	});
var _user$project$TimeTravel_Html_App$programWithFlags = function (stuff) {
	return A2(
		_user$project$TimeTravel_Html_App$programWithFlagsWithOptions,
		{
			outgoingMsg: _elm_lang$core$Basics$always(_elm_lang$core$Platform_Cmd$none),
			incomingMsg: _elm_lang$core$Basics$always(_elm_lang$core$Platform_Sub$none)
		},
		stuff);
};
var _user$project$TimeTravel_Html_App$beginnerProgram = function (_p15) {
	var _p16 = _p15;
	return _user$project$TimeTravel_Html_App$programWithFlags(
		{
			init: _elm_lang$core$Basics$always(
				{ctor: '_Tuple2', _0: _p16.model, _1: _elm_lang$core$Platform_Cmd$none}),
			view: _p16.view,
			update: F2(
				function (msg, model) {
					return {
						ctor: '_Tuple2',
						_0: A2(_p16.update, msg, model),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				}),
			subscriptions: _elm_lang$core$Basics$always(_elm_lang$core$Platform_Sub$none)
		});
};
var _user$project$TimeTravel_Html_App$program = function (_p17) {
	var _p18 = _p17;
	return _user$project$TimeTravel_Html_App$programWithFlags(
		{
			init: _elm_lang$core$Basics$always(_p18.init),
			view: _p18.view,
			update: _p18.update,
			subscriptions: _p18.subscriptions
		});
};

var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$Main$memberDetailView = function (model) {
	var _p0 = model.selectedMember;
	if (_p0.ctor === 'Just') {
		var _p1 = A2(_elm_lang$core$Dict$get, _p0._0, model.memberDetails);
		if (_p1.ctor === 'Just') {
			var _p2 = _p1._0;
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p2.name)
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p2.tel)
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p2.mail)
							]))
					]));
		} else {
			return _elm_lang$html$Html$text('');
		}
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _user$project$Main$memberItemView = function (name) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(name)
			]));
};
var _user$project$Main$teamDetailView = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(model.team.name)
			]));
};
var _user$project$Main$greeting = function (model) {
	var _p3 = model.user;
	if (_p3.ctor === 'Just') {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(
					A2(_elm_lang$core$Basics_ops['++'], 'Hello, ', _p3._0))
				]));
	} else {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('')
				]));
	}
};
var _user$project$Main$initTeam = {id: '', name: ''};
var _user$project$Main$init = {
	ctor: '_Tuple2',
	_0: {
		user: _elm_lang$core$Maybe$Nothing,
		team: _user$project$Main$initTeam,
		members: _elm_lang$core$Native_List.fromArray(
			[]),
		memberDetails: _elm_lang$core$Dict$empty,
		selectedMember: _elm_lang$core$Maybe$Nothing,
		err: _elm_lang$core$Native_List.fromArray(
			[])
	},
	_1: _elm_lang$core$Platform_Cmd$none
};
var _user$project$Main$initMember = {id: '', name: '', tel: '', mail: ''};
var _user$project$Main$Model = F6(
	function (a, b, c, d, e, f) {
		return {user: a, team: b, members: c, memberDetails: d, selectedMember: e, err: f};
	});
var _user$project$Main$Team = F2(
	function (a, b) {
		return {id: a, name: b};
	});
var _user$project$Main$Member = F4(
	function (a, b, c, d) {
		return {id: a, name: b, tel: c, mail: d};
	});
var _user$project$Main$Error = function (a) {
	return {ctor: 'Error', _0: a};
};
var _user$project$Main$dummyHttp = F2(
	function (sleepTime, msg) {
		return A3(
			_elm_lang$core$Task$perform,
			_elm_lang$core$Basics$always(
				_user$project$Main$Error('UnExpected Error')),
			_elm_lang$core$Basics$identity,
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Process$sleep(
					_elm_lang$core$Basics$toFloat(sleepTime)),
				function (_p4) {
					return _elm_lang$core$Task$succeed(msg);
				}));
	});
var _user$project$Main$MemberDetailLoaded = function (a) {
	return {ctor: 'MemberDetailLoaded', _0: a};
};
var _user$project$Main$getMemberDetail = function (id) {
	return _elm_lang$core$Native_Utils.eq(id, 'Alice') ? A2(
		_user$project$Main$dummyHttp,
		40,
		_user$project$Main$MemberDetailLoaded(
			{id: 'Alice', name: 'Alice', tel: '0156', mail: 'alice@xxx.com'})) : (_elm_lang$core$Native_Utils.eq(id, 'Bob') ? A2(
		_user$project$Main$dummyHttp,
		60,
		_user$project$Main$MemberDetailLoaded(
			{id: 'Bob', name: 'Bob', tel: '5136', mail: 'bob@xxx.com'})) : (_elm_lang$core$Native_Utils.eq(id, 'Chuck') ? A2(
		_user$project$Main$dummyHttp,
		70,
		_user$project$Main$Error('Not Found')) : _elm_lang$core$Platform_Cmd$none));
};
var _user$project$Main$MembersLoaded = function (a) {
	return {ctor: 'MembersLoaded', _0: a};
};
var _user$project$Main$getTeamMembers = function (name) {
	return A2(
		_user$project$Main$dummyHttp,
		50,
		_user$project$Main$MembersLoaded(
			_elm_lang$core$Native_List.fromArray(
				['Alice', 'Bob', 'Chuck'])));
};
var _user$project$Main$TeamDetailLoaded = function (a) {
	return {ctor: 'TeamDetailLoaded', _0: a};
};
var _user$project$Main$getTeamDetail = function (name) {
	return A2(
		_user$project$Main$dummyHttp,
		100,
		_user$project$Main$TeamDetailLoaded(
			{id: '0', name: 'Awesome Team'}));
};
var _user$project$Main$UserLoaded = function (a) {
	return {ctor: 'UserLoaded', _0: a};
};
var _user$project$Main$getUser = A2(
	_user$project$Main$dummyHttp,
	300,
	_user$project$Main$UserLoaded('Elmo'));
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p5 = msg;
		switch (_p5.ctor) {
			case 'Load':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							err: _elm_lang$core$Native_List.fromArray(
								[])
						}),
					_1: _user$project$Main$getUser
				};
			case 'UserLoaded':
				var _p6 = _p5._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							user: _elm_lang$core$Maybe$Just(_p6)
						}),
					_1: _elm_lang$core$Platform_Cmd$batch(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Main$getTeamDetail(_p6),
								_user$project$Main$getTeamMembers(_p6)
							]))
				};
			case 'TeamDetailLoaded':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{team: _p5._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'MembersLoaded':
				var _p7 = _p5._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							members: _p7,
							selectedMember: _elm_lang$core$List$head(_p7)
						}),
					_1: _elm_lang$core$Platform_Cmd$batch(
						A2(_elm_lang$core$List$map, _user$project$Main$getMemberDetail, _p7))
				};
			case 'MemberDetailLoaded':
				var _p8 = _p5._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							memberDetails: A3(_elm_lang$core$Dict$insert, _p8.id, _p8, model.memberDetails)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							err: A2(_elm_lang$core$List_ops['::'], _p5._0, model.err)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});
var _user$project$Main$Load = {ctor: 'Load'};
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Main$greeting(model),
				A2(
				_elm_lang$html$Html$button,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Events$onClick(_user$project$Main$Load)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Load')
					])),
				A2(
				_elm_lang$html$Html$hr,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				_user$project$Main$teamDetailView(model),
				A2(
				_elm_lang$html$Html$hr,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(_elm_lang$core$List$map, _user$project$Main$memberItemView, model.members)),
				A2(
				_elm_lang$html$Html$hr,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				_user$project$Main$memberDetailView(model)
			]));
};
var _user$project$Main$main = {
	main: _user$project$TimeTravel_Html_App$program(
		{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, subscriptions: _user$project$Main$subscriptions})
};

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

