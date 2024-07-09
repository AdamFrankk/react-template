export const downloadFile = (fileId: string, name: string, blob: string) => {
  const link = document.createElement("a");
  link.id = fileId;
  link.href = blob;
  link.download = name;
  // this is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );
  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(blob);
    link.remove();
  }, 100);
};
