// Configure RequieJS
requirejs.config({
    baseUrl: '../../src/module_definitions/run_time/external/umd',
    waitSeconds: 15,
    paths: {
      'jquery' : '../../../../../node_modules/jquery/dist/jquery.min'
    }
});
