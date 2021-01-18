function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('sarthak joshi'));
console.log(swapcase('Sarthak Joshi'));
console.log(swapcase('sARTHAKjOSHI'));
