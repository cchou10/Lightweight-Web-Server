var pages = ['/pages/menu.html', '/pages/head.html', '/pages/rawmaterials.html','/pages/manufacturing.html','/pages/environment.html','/pages/footer.html'],
    $main = $('body'),
    doLoad = function () {
        if(pages.length > 0) {
          // use shift to get the next page off the array
          $.get(pages.shift(), function(content) {
              // append content to .main
              $main.append(content);
              // call do load to get the next entry
              doLoad();
          });
        }
    };
doLoad();
