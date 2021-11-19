
    document.getElementById("upper-case").addEventListener("click", function () {
        document.querySelector("textarea").value
            = document.querySelector("textarea").value.toUpperCase();
    });
    document.getElementById("lower-case").addEventListener("click", function () {
        document.querySelector("textarea").value =
            document.querySelector("textarea").value.toLowerCase();
    });
    document.getElementById("proper-case").addEventListener("click", function () {
        document.querySelector("textarea").value =
            document.querySelector("textarea").value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    });
   document.getElementById("sentence-case").addEventListener("click", function () {
        document.querySelector("textarea").value =
            document.querySelector("textarea").value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    });

   document.getElementById("save-text-file").addEventListener("click", function () {
       function download(filename, text) {

           let element = document.createElement('a');
           element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
           element.setAttribute('download', filename);

           element.style.display = 'none';
           document.body.appendChild(element);

           element.click();

           document.body.removeChild(element);
       }
       download("text.txt",document.querySelector("textarea").value);
   });
