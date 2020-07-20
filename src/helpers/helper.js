const labelUp = (event) => {
  const labelArray = Array.from(document.querySelectorAll('label'));
  const iconArray = Array.from(document.querySelectorAll('i'));

  labelArray.forEach((label) => {
    iconArray.forEach((icon) => {
      const labelId = label.htmlFor;
      const iconId = icon.id.replace('_i', '');
      const inputId = event.target.id;

      (labelId === inputId) & (iconId === inputId) &&
        event.target.value === '' &&
        label.classList.add('active');
      icon.classList.add('active');
    });
  });
};

const labelDown = (event) => {
  const labelArray = Array.from(document.querySelectorAll('label'));
  const iconArray = Array.from(document.querySelectorAll('i'));

  labelArray.forEach((label) => {
    iconArray.forEach((icon) => {
      const labelId = label.htmlFor;
      const iconId = icon.id.replace('_i', '');
      const inputId = event.target.id;

      (labelId === inputId) & (iconId === inputId) &&
        event.target.value === '' &&
        label.classList.remove('active');
      icon.classList.remove('active');
    });
  });
};

const removeSpecial = (text) => {
  text = text.toLowerCase();                                                         
  text = text.replace(' ', '%20');
  text = text.replace(',', '%2C');
  text = text.replace('/', '%2F');
  text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
  text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
  text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
  text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
  text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
  text = text.replace(new RegExp('[Ç]','gi'), 'c');
  return text;  
}


export { labelUp, labelDown, removeSpecial };
