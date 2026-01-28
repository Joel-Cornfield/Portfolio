/**
 * Downloads a file by fetching it as a blob and creating a download link
 * This is more reliable across browsers and platforms, especially for PDFs on macOS
 */
export const downloadFile = async (filePath, fileName) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      console.error(`Failed to fetch file: ${response.status} ${response.statusText}`);
      alert('Failed to download file. The file may not be available.');
      return;
    }
    
    const blob = await response.blob();
    
    // Verify we got a blob with content
    if (!blob || blob.size === 0) {
      console.error('Downloaded file is empty');
      alert('Failed to download file. The file appears to be empty.');
      return;
    }
    
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
    // Only show alert on actual errors, not network issues during render
    if (error.name !== 'AbortError') {
      alert('Failed to download file. Please try again.');
    }
  }
};
