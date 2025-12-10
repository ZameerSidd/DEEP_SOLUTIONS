
// const getAssetPath = (path: string) => {
//   const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AL_SAKB/';
//   // const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/';
//   return `${baseUrl}${path}`;
// };

const getAssetPath = (path: string) => {
  let baseUrl = 'https://deepsecc.com';
  if (window.location.hostname === 'localhost') {
    baseUrl = 'http://localhost:3000/DEEP_SOLUTIONS';
  }

  return `${baseUrl}${path}`;
};

//

// Carousel Hero Images
export const allImages = {
  logo: getAssetPath("/images/logo.png"),
  industriesImage: getAssetPath("/images/industriesImage.jpeg"),
  ndtImage: getAssetPath("/images/ndtImage.jpeg"),
  fabricationImage: getAssetPath("/images/fabricationImage.jpeg"),
  heroImage: getAssetPath("/images/heroImage.jpeg"),
};