export const renderObjectProperties = (obj: Record<string, any>) => {
  const elements = [];
  for (const [key, val] of Object.entries(obj)) {
    elements.push(
      {key, val}
    );
  }
  return elements;
};
