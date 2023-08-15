const textfield = document.getElementById('text-field');
const box1Child = document.getElementById('box-1').children;
const box2Child = document.getElementById('box-2').children;

function styleElement(targetedElement, property, value) {
  if (textfield.style[property] != value) {
    textfield.style[property] = value;
    targetedElement.style.backgroundColor = '#3abff8';
  } else {
    textfield.style[property] = 'initial';
    targetedElement.style.backgroundColor = 'transparent';
  }
}
const box1Properties = ['fontWeight', 'fontStyle', 'textDecoration'];
const box1Values = ['bold', 'italic', 'underline']

for (let i = 0; i < box1Child.length; i++) {
  box1Child[i].addEventListener('click', function() {
    styleElement(box1Child[i], box1Properties[i], box1Values[i])
  })
}

const box2Values = ['left', 'center', 'right', 'justify'];
for (let i = 0; i < box2Child.length; i++) {
  box2Child[i].addEventListener('click', function() {
    styleElement(box2Child[i], 'textAlign', box2Values[i]);
    for (let j = 0; j < box2Child.length; j++) {
      if (i != j) {
        box2Child[j].style.backgroundColor = 'transparent';
      }
    }
  })
}

document.getElementById('font-size').addEventListener('change', function() {
  textfield.style.fontSize = this.value;
})

document.getElementById('text-transform').addEventListener('change', function() {
  textfield.style.textTransform = this.value;
})

document.getElementById('color').addEventListener('input', function(e) {
  textfield.style.color = e.target.value;
})