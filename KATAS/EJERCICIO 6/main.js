const ElementsRemove = document.querySelectorAll('.fn-remove-me');

ElementsRemove.forEach(Element => Element.parentNode.removeChild(Element));