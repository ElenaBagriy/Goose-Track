export const setFileUrl = (file, cbSetFileUrl) => {
    if (!file) {
        return cbSetFileUrl(null);
    };
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        cbSetFileUrl(fileReader.result);
    };
  };

//   export const imageChange = e => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     const fileReader = new FileReader();
//     fileReader.onloadend = () => {
//       setPreview(reader.result);
//     };
//     fileReader.readAsDataURL(selectedFile);
//   };