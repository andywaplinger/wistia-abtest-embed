var clipboard = new Clipboard('.clipboard');
clipboard.on('success', function(e) {
  e.clearSelection();
  toastr.success('Copied to clipboard');
});
