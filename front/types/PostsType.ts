// * PostType -------------------------

export interface PostsType {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  excerpt: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
  image: ImageType;
  authors: AuthorsType;
  categories: CategoriesType;
}

// * AuthorsType ------------------------

export interface AuthorsType {
  data: AuthorsData[];
}

export interface AuthorsData {
  id: number;
  attributes: AuthorsAttributes;
}

export interface AuthorsAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  bio: string;
}

// * CategoriesType -----------------------

export interface CategoriesType {
  data: CategoriesData[];
}

export interface CategoriesData {
  id: number;
  attributes: CategoriesDataAttributes;
}

export interface CategoriesDataAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Slug: string;
}

// * ImageType ----------------------------------

export interface ImageType {
  data: ImageData[];
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}
