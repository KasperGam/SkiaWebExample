const baseExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".mjs", ".json"];
const webExtensions = baseExtensions.map((ext) => `.web${ext}`);

export const Extensions = [...webExtensions, ...baseExtensions];
