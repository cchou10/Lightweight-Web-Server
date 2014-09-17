// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js",
    "paths": {
      "app": "../js"
    },
    "shim": {
        "main": ["jquery"],
    }
});

// Load the main app module to start the app
requirejs(["main"]);