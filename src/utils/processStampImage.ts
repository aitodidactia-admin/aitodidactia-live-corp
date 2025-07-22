import { removeBackground } from './backgroundRemoval';

export const processStampWithBackgroundRemoval = async (imageSrc: string): Promise<string> => {
  try {
    // Create an image element from the source
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Handle CORS
    
    const imageLoaded = new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
    
    img.src = imageSrc;
    const loadedImage = await imageLoaded;
    
    // Remove background
    const processedBlob = await removeBackground(loadedImage);
    
    // Convert blob to data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(processedBlob);
    });
  } catch (error) {
    console.error('Failed to process stamp image:', error);
    // Return original image as fallback
    return imageSrc;
  }
};