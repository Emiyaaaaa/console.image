var r = (a, e, t) => new Promise((o, i) => {
  var c = (n) => {
    try {
      g(t.next(n));
    } catch (s) {
      i(s);
    }
  }, h = (n) => {
    try {
      g(t.throw(n));
    } catch (s) {
      i(s);
    }
  }, g = (n) => n.done ? o(n.value) : Promise.resolve(n.value).then(c, h);
  g((t = t.apply(a, e)).next());
});
function d(a) {
  return r(this, null, function* () {
    const e = new Image();
    e.crossOrigin = "anonymous", e.src = a, yield new Promise((i, c) => {
      e.onload = i, e.onerror = c;
    });
    const t = document.createElement("canvas");
    t.width = e.width, t.height = e.height;
    const o = t.getContext("2d");
    if (o)
      return o.drawImage(e, 0, 0), {
        base64Src: t.toDataURL("image/png"),
        width: e.width,
        height: e.height
      };
    throw new Error("Canvas context is null");
  });
}
function w(a, e) {
  return r(this, null, function* () {
    const t = yield d(a);
    if (typeof (e == null ? void 0 : e.width) == "number") {
      const i = t.width / t.height, c = e.width, h = c * i;
      t.width = c, t.height = h;
    }
    const o = [
      `padding:${t.height}px ${t.width}px`,
      `background:url(${t.base64Src})`,
      "background-repeat:no-repeat",
      "background-size:contain"
    ].join(";");
    console.log("%c ", o);
  });
}
console.image = w;
export {
  w as default
};
