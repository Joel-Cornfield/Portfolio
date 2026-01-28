/**
 * Downloads a file by fetching it as a blob and creating a download link
 * This is more reliable across browsers and platforms, especially for PDFs on macOS
 */
export const downloadFile = async (filePath, fileName) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download error:', error);
    alert('Failed to download file. Please try again.');
  }
};
