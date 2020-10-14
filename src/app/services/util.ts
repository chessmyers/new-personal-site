import {Document} from 'prismic-javascript/types/documents';

export const linkResolver = (doc: Document) => {
  // Pretty URLs for known types

  if (doc.type === 'main_blog_posts') { return "/post/" + doc.uid; }

  // Fallback for other types, in case new custom types get created
  return "/post/" + doc.id;
};
