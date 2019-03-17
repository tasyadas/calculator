function insert(num) {
  document.form.textview.value = document.form.textview.value+num
}

function hasil() {
  var exp = document.form.textview.value;
  if(exp){
      document.form.textview.value = eval(exp);
  }
}

function c() {
  document.form.textview.value = "";
}

function erase() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length-1);
}

function pow() {
  var exp = document.form.textview.value;
  document.form.textview.value = Math.pow(exp,2);
}

function seper() {
  var exp = document.form.textview.value;
  document.form.textview.value = 1/exp;                        
}