window.addEventListener("load", function () {
  var input1 = document.getElementById("input1");
  input1.addEventListener("input", function () {
    data.text = this.value;
  });

  var _text = data.text;
  Object.defineProperty(data, "text", {
    get: function () {
      return _text;
    },
    set: function (newValue) {
      if (_text === newValue) {
        return;
      }
      _text = newValue
      input1.value = _text;
    },
  });
});

var data = {
  text: "",
};
