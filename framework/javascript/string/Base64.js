

v6.string.Base64 = function Base64() {
  // Scope
  var $this = this;
  
  // Properties
  this.strKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  
  // Constructor
  this.init = function() {    
  }
  
  // Methods
  this.encode = function(strInput) {
    var strOutput = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < strInput.length) {

        chr1 = strInput.charCodeAt(i++);
        chr2 = strInput.charCodeAt(i++);
        chr3 = strInput.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        strOutput = strOutput +
        $this.strKey.charAt(enc1) + $this.strKey.charAt(enc2) +
        $this.strKey.charAt(enc3) + $this.strKey.charAt(enc4);

    }

    return strOutput;  
  }
  
  this.decode = function(strInput) {
    var strOutput = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
  
    strInput = strInput.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  
    while (i < strInput.length) {
  
        enc1 = $this.strKey.indexOf(strInput.charAt(i++));
        enc2 = $this.strKey.indexOf(strInput.charAt(i++));
        enc3 = $this.strKey.indexOf(strInput.charAt(i++));
        enc4 = $this.strKey.indexOf(strInput.charAt(i++));
  
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
  
        strOutput = strOutput + String.fromCharCode(chr1);
  
        if (enc3 != 64) {
            strOutput = strOutput + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            strOutput = strOutput + String.fromCharCode(chr3);
        }
  
    }
  
    return strOutput;  
  }
  
  // Getter & Setter
  // Empty
  
  // Constructor Caller
  $this.init();
}