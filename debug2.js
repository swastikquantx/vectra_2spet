const code = `V("div", {className: "w-full", children: [
  c("div", {className: "absolute inset-0"})
]})`;
try {
  eval(code);
  console.log("ok");
} catch(e) {
  console.log("Error:", e);
}
