function imageUrlsToFileObjects(imageUrls: string[], callback: any) {
    const files: any[] = [];
    let completedRequests = 0;
  
    function checkCompletion() {
      if (completedRequests === imageUrls.length) {
        callback(null, files);
      }
    }
  
    imageUrls.forEach((imageUrl:string, index) => {
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          const file = new File([blob], `image${index + 1}.jpg`, { type: 'image/jpeg' });
  
          files.push(file);
  
          completedRequests++;
  
          checkCompletion();
        })
        .catch(error => {
          console.error(`Error fetching image at index ${index}:`, error);
          completedRequests++;
  
          checkCompletion();
        });
    });
  }

  export { imageUrlsToFileObjects }