/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    // our app is within the app folder
    app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/core/src/metadata/directives': 'npm:@angular/core/src/metadata/directives',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // material bundles
      '@angular2-material/core': 'npm:@angular2-material/core/core.umd.js',
      '@angular2-material/button': 'npm:@angular2-material/button/button.umd.js',
      '@angular2-material/card': 'npm:@angular2-material/card/card.umd.js',
      '@angular2-material/input': 'npm:@angular2-material/input/input.umd.js',
      '@angular2-material/toolbar': 'npm:@angular2-material/toolbar/toolbar.umd.js',
      '@angular2-material/list': 'npm:@angular2-material/list/list.umd.js',
      '@angular2-material/grid-list': 'npm:@angular2-material/grid-list/grid-list.umd.js',
      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api'
      // 'angular2-modal': 'npm:angular2-modal',
      // vaadin
      // '@vaadin/angular2-polymer': 'npm:@vaadin/angular2-polymer'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    app: {
      main: './main.js',
        defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
      main: './index.js',
        defaultExtension: 'js'
    },
    '@angular/core/bundles/core.umd.js/src/metadata/directives': {
      main: './directive.js',
      defaultExtension: 'js'
    }
//    'angular2-modal': {
//      main: 'bundles/angular2-modal.umd.js',
//      defaultExtension: 'js'
//    },
//    '@vaadin/angular2-polymer': {
//      main: './index.js',
//        defaultExtension: 'js'
//    }
  };

//  map['angular2-modal/plugins/${plugin}'] = map['angular2-modal'] + '/bundles';
  // packages['angular2-modal/plugins/${plugin}'] =  { defaultExtension: 'js', main: 'angular2-modal.${plugin}.umd' };
//  packages['angular2-modal/plugins/bootstrap'] = { defaultExtension: 'js', main: 'index' };


  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    map: map,
    packages: packages
  });
})(this);
