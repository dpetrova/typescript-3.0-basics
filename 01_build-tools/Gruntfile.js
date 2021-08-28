module.exports = function (grunt) {
 grunt.initConfig({
  ts: {
   default: {
    //  src: ["src/**/*.ts"],
    //  outDir: "build",
    //  options: {
    //     rootDir: "src"
    // }
    tsconfig: './tsconfig.json' //path to typescript config file
   }
  }
 });
 grunt.loadNpmTasks("grunt-ts");
 grunt.registerTask("default", ["ts"]);
};
