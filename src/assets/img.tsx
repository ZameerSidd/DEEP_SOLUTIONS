
// const getAssetPath = (path: string) => {
//   const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AL_SAKB/';
//   // const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/';
//   return `${baseUrl}${path}`;
// };

const getAssetPath = (path: string) => {
  let baseUrl = 'https://deepsecc.com';
  if (window.location.hostname === 'localhost') {
    baseUrl = 'http://localhost:3000';
  }

  return `${baseUrl}${path}`;
};

//

// Carousel Hero Images
export const allImages = {
  logo: getAssetPath("/images/logo.png"),
  logoSrc: '/images/logo.png',

  new_bg: getAssetPath("/images/new_bg.jpeg"),
  new_bg_src: "/images/new_bg.jpeg",

  industriesImage: getAssetPath("/images/industriesImage.jpeg"),
  industriesImage_src: "/images/industriesImage.jpeg",

  ndtImage: getAssetPath("/images/ndtImage.jpeg"),
  ndtImage_src: "/images/ndtImage.jpeg",
 
  NonDestructiveTesting: getAssetPath("/images/Non-Destructive-Testing.jpeg"),
  NonDestructiveTesting_src: "/images/Non-Destructive-Testing.jpeg",
 
  IndustryApplications: getAssetPath("/images/Industry-Applications.jpeg"),
  IndustryApplications_src: "/images/Industry-Applications.jpeg",
 
  fabricationImage: getAssetPath("/images/fabricationImage.jpeg"),
  fabricationImage_src: "/images/fabricationImage.jpeg",
 
  heroImage: getAssetPath("/images/heroImage.jpeg"),
  heroImage_src: "/images/heroImage.jpeg",
};