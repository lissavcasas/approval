const approval = document.getElementById('Form5cdc4d64ce3ce_approval_request_edit');
const status = document.getElementById('Form5cdd81fb61c35_status_edit');

const checkLabel = (arr, boolean) => {
  console.log(boolean, 'es t o f'); //cuando le da check es true
  const arrElements = Object.values(arr.children);
  arrElements.forEach(option => {
    console.log(option, 'option'); // es cada option
    
    /* if (boolean === 'true') {
      console.log('el estado cambia a en aprobacion');
     }   */  
  });

}

approval.addEventListener('change', () => {
  checkLabel(status, approval.checked)
})

