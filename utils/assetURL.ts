export const assetUrl = (file: string) =>
  `${import.meta.env.BASE_URL}${file.startsWith("/") ? file.slice(1) : file}`;
