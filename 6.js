function truncate(str, Number) {
  return str.split(" ").slice(0, Number).join(" ");
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
