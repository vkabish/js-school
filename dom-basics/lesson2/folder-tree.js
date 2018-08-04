(function (document) {
  
  // helpers
  const elHaveClass = (el, className) => el.classList.contains(className);
  const elUnselected = el => elHaveClass(el, 'selected') ? el.classList.remove('selected') : false;
  const elSelected = el => !elHaveClass(el, 'selected') ? el.classList.add('selected') : false;
  const collapseEl = (item) => item.classList.add('collapsed');
  
  // selector elements
  const fs =  document.querySelector('.fs');
  const folderLists = fs.querySelectorAll('.fs__list');
  const allFolders = fs.querySelectorAll('.fs__folder');
  const allFiles = fs.querySelectorAll('.fs__file');
  
  const fsElements = [...allFolders, ...allFiles];
  let multiSelected = [];
  
  // collapse all lists except root/first
  folderLists.forEach((item, index) => index !== 0 ? collapseEl(item) : false);

  const selectElement = function (evt) {
    evt.preventDefault();
    const target = evt.target;
    
    // select
    if (!evt.shiftKey) {
      multiSelected = [];
      fsElements.forEach(elUnselected);
      target.classList.add('selected');
    } 

    // multiselect
    multiSelected.push(target);
    multiSelected.forEach(elSelected);  
  };

  const collapseExpandLists = function (evt) {
    evt.preventDefault();  
    const target = evt.target;
    const nextSibling = target.nextSibling ? target.nextSibling.nextSibling : null; 
    const siblingLists = nextSibling && nextSibling.querySelectorAll('.fs__list');
  
    if (nextSibling && elHaveClass(nextSibling, 'fs__list')) {
      nextSibling.classList.toggle('collapsed');
      
      // collapse siblings
      if (siblingLists) siblingLists.forEach(collapseEl);
    }
  };

  const onClickOutsideFs = (evt) => {
    if (!fsElements.includes(evt.target)) {
      fsElements.forEach(elUnselected);
    }
  };

  const onMouseDown = () => document.addEventListener('mousemove', onMouseMove);
  
  const onMouseMove = (evt) => fsElements.includes(evt.target) ? selectElement(evt) : null;
  
  const onMouseUp = () => document.removeEventListener('mousemove', onMouseMove);

  // events
  fs.addEventListener('click', selectElement);
  fs.addEventListener('dblclick', collapseExpandLists);
  document.addEventListener('click', onClickOutsideFs);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);

})(document);
