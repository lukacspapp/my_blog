const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:1337/api' : 'http://localhost:1337/api';

export const graphql = dev ? 'http://localhost:1337/graphql' : 'http://localhost:1337/graphql';
