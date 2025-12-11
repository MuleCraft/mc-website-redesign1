// Utility function to convert page titles to URL-friendly slugs
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Generate route path for a page
export const getRoutePath = (title: string, category?: string): string => {
  const slug = slugify(title);
  if (category) {
    const categorySlug = slugify(category);
    return `/${categorySlug}/${slug}`;
  }
  return `/${slug}`;
};

