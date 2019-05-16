const approval = document.getElementById('Form5cdc4d64ce3ce_approval_request_edit');
const status = document.getElementById('Form5cdd81fb61c35_status_edit');

const checkLabel = (select, boolean) => {
  const option = select.options;
  if (boolean) {
    option[2].selected = true
  } else {
    option[1].selected = true
  }
  return boolean
}

approval.addEventListener('change', () => {
  checkLabel(status, approval.checked)
})


