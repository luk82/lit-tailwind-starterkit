// module.exports = {
//   root: 'demo',
//   build: {
//     outDir: 'dist',
//   },
// };

export default {
  root: './',
  base: './',
  build: {
    rollupOptions: {
      input: 'demo/index.html',
    },
  },
};
