const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/components/_variables.sass"
        @import "@/assets/styles/components/_mixins.sass"
        @import "@/assets/styles/components/_media.sass"
        `,
      },
    },
  },
});
