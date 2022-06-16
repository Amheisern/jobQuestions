// 1) Using Javascript classes, can you write a class that will contain one method and one getter.
// The method can be called getField and simply return the value of your getter. 
// The getter can return a string of foo. Then, use the newly created class to call the getField method

class Main {
  get field() {
    return 'foo';
  }
  getField() {
    return this.field;
  }
  
}
// 2) Using WebdriverIO, assume there is a page with an input like <input data-field="score" />.
//  How would you set a value of 123 in the input?
//  Then, after you set the value how would you get the value of that same input?
// $(selector).setValue(value, { translateToUnicode })
<input data-field="score" />
// v4
browser.setValue('input[data-field="score"]', 123);
// v7
// Would eb addValue() if element doesn't need to be cleared 
$('input[data-field="score"]').setValue(123);

// v4  
browser.getValue('input[data-field="score"]');
$('input[data-field="score"]').getValue();


// 3) How would you select the text from the following element
//  using Javascript and store it in a variable.
 <div><p class="bar">Foo</p></div>
 document.querySelector('.bar').innerText;
 const bar = document.querySelector('.bar').innerText;