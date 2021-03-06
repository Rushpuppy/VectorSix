
/*
* v6.ui.bootstrap.Navbar Class
* This Class generates a Navbar Bootstrap Element
* http://getbootstrap.com/components/#navbar
* @author Rushpuppy - Severin Holm   
*/   
v6.ui.bootstrap.Navbar = function Navbar() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
    
  this.prop = {
    id: 'Navbar', 
    type: 'v6.ui.bootstrap.Navbar',
    parent: null,
    children: [],
    text: 'Title', 
    href: '#',
    position: 'none', // top, bottom, static, none
    inverted: true,
  };
  
  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */     
  this.init = function() { 
    // Set the prop.info.id
    var objGuid = new v6.fn.Guid(); 
    $this.prop.id = objGuid.generate();
    
    // Create Ui Builder & Set Fields
    $this.uiBuilder = new v6.ui.UiBuilder();
    $this.uiBuilder.form = ''; 
    $this.uiBuilder.prop = '';  
    $this.uiBuilder.allow = ''; 
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************    
  /*
  * Renders and returns the HTML code this element 
  * @return {string} The rendered HTML Code of the element
  */    
  this.render = function() {
    // Generate the HTML Template
    var strTpl = '';
    strTpl += '<nav data-id="{id}" class="v6-bootstrap navbar navbar-{style} {navbar_position}">';
    strTpl += '   <div class="container-fluid">';
    strTpl += '      <div class="navbar-header">';
    strTpl += '         <a class="navbar-brand" href="{href}">{text}</a>';
    strTpl += '      </div>';
    strTpl += '      <div data-container="{id}" class="collapse navbar-collapse">';
    strTpl += '      </div>';
    strTpl += '   </div>';
    strTpl += '</nav>';

    // Set Values into Template
    strTpl = strTpl.replace(/{id}/g, $this.prop.id);
    strTpl = strTpl.replace(/{href}/g, $this.prop.href);
    strTpl = strTpl.replace(/{text}/g, $this.prop.text);
    
    // Set Style Value into Template    
    var strStyle = "default";
    if($this.prop.inverted) {
      var strStyle = "inverse";  
    }
    strTpl = strTpl.replace(/{style}/g, strStyle);
    
    // Set Position Value into Template
    var strPosition = '';
    switch($this.prop.position){
      case 'top':
        strPosition = 'navbar-fixed-top';
        break;
      case 'bottom':
        strPosition = 'navbar-fixed-bottom';
        break;
      case 'static':
        strPosition = 'navbar-static-top';
        break;     
    }
    strTpl = strTpl.replace(/{navbar_position}/g, strPosition);
    
    // Return Template
    return strTpl;
  } 
  
  /*
  * Loads the Object
  * @param {object} objProp Object String 
  */ 
  this.load = function(objProp) {
    $this.prop = objProp;
    $this.uiBuilder.id = objProp.id;
  }
  
  /*
  * Returns the prop Object
  * @return {object} the $this.prop
  */ 
  this.save = function() {
    return $this.prop;
  }  

  //****************************************************************************
  $this.init();
}