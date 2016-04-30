/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function()
{
    addScript("/app/bootstrap.js");
    
    function addScript(url)
    {
        document.write('<script type="text/javascript" src="' + url + '?seed=' + Math.random() + '"></script>');
    }
})();