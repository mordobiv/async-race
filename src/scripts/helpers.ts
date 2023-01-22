export function createNode(className: string, textContent?: string) {
  const node = document.createElement('div');
  node.className = className;
  if (textContent) node.textContent = textContent;
  return node;
}

export function createButton(buttonName: string) {
  const button = document.createElement('button');
  button.className = `button button__${buttonName}`;
  button.textContent = buttonName;
  return button;
}

export function createImg(src: string, className: string) {
  const imgBlock = createNode(className);
  const img = document.createElement('img');
  img.className = `${className}__img`;
  img.src = src;
  imgBlock.append(img);
  return imgBlock;
}

// export function getTranslateValue(rawValue: string) {
//   if (rawValue) {

//   }
//   return 0;
// }
