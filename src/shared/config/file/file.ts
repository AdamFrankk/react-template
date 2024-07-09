export const imageFormats_full = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/svg+xml",
    "image/svg",
  ]
  
  export const imageFormats = imageFormats_full.map((i) => {
    return i.replace("image/", "")
  })
  