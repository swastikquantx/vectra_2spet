const acorn = require('acorn');
const code = `
function wc(e,t,n){}
var m=wc, k=wc;
var tm = () => {
  let showAuth = true;
  return k("div", {className: "root"}, [
    m("style", {}),
    k("div", {}, []),
    showAuth && k("div", {className: "fixed"}, [
      k("div", {className: "bg-white"}, [
        k("div", {className: "p-6"}, [
          m("button", {}),
          m("div", {})
        ]),
        k("div", {className: "p-6 flex"}, [
          k("div", {}, []),
          k("div", {}, []),
          m("button", {}),
          m("div", {className: "text-center"}, ["By continuing ", m("a", {}), " and ", m("a", {}), "."])
        ])
      ])
    ])
  ])
}
`;
try {
  acorn.parse(code, { ecmaVersion: 2022 });
  console.log("SUCCESS!");
} catch (e) {
  console.log(e);
}
