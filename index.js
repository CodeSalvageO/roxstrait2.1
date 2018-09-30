var button = document.getElementById("save5"),
value = button.form.save3.value;
value2 = button.form.save4.value;
button.onclick = function() {
    foo(value);
    foo(value2);
    document.write(value);
    document.write(value2);
}
