
/*
* v6.controller.DeveloperPageController Class
* This Class generates a DeveloperPageController Object Container
* This Class will be Loadet directly to the Page (Globalspace) there
* can only be one Controller and this one will be loadet in Developer Modus
* @author Rushpuppy - Severin Holm   
*/   
v6.controller.DeveloperPageController = function DeveloperPageController() {
  //****************************************************************************
  // Properties
  //****************************************************************************
  var $this = this;
  
  this.arrElements = new Array();
  this.isDevMode = false;
  
  //****************************************************************************
  // Constructor 
  //****************************************************************************
  /*
  * Constructor Method
  * @constructor  
  * @param void      
  */     
  this.init = function() { 
    // Call Event Manager
    $this.eventManager(); 
  }
  
  //****************************************************************************
  // Methods
  //****************************************************************************  
  /*
  * Register Events to specific Elements
  */  
  this.eventManager = function() {
    // F9 - Dev Menu On and Off Event
    $('body').off();
    $('body').on('keypress', function(objEvent){
      if(objEvent.key == 'F9') {
        if($this.isDevMode){
          $this.isDevMode = false;
          $this.quitDevMode();
        } else {
          $this.isDevMode = true;
          $this.runDevMode();
        }
      } 
     });    
  };

  /*
  * Renders DevMenu
  */    
  this.runDevMode = function() {
    // Add DevMenu Style to editable Bootstrap Elements
    $('.v6-bootstrap.navbar').addClass('v6-devmode');
    $('.v6-bootstrap.container').addClass('v6-devmode');
    $('.v6-bootstrap.row').addClass('v6-devmode');
    $('.v6-bootstrap.col').addClass('v6-devmode');
    $('.v6-bootstrap.panel').addClass('v6-devmode');
    $('.v6-bootstrap.btn-dropdown').addClass('v6-devmode');

    /*
    * DEVMODE For Bootstrap Navbar Element
    */    
    $('.v6-devmode.navbar').each(function() {
      // Add Border to Bootstrap Row
      $(this).addClass('v6-devborder-navbar');  
      
      // Get Element Id
      var strId = $(this).attr('data-id');
      var strContent = $(this).html();
      
      // Generate DevBar
      var strTpl = '';
      strTpl += '<div class="v6-devbar v6-devbar-navbar" data-id="dev-{id}">';
      strTpl += '   <button type="button" class="btn btn-primary pull-right btn-lg v6-dev-btn-save"><span class="glyphicon glyphicon-floppy-save"></span></button>';
      strTpl += '   <button type="button" class="btn btn-primary pull-right btn-lg v6-dev-btn-conf"><span class="glyphicon glyphicon-cog"></span></button>';
      strTpl += '   <button type="button" class="btn btn-primary pull-right btn-lg v6-dev-btn-order"><span class="glyphicon glyphicon-align-justify"></span></button>';
      strTpl += '</div>';
      strTpl += '<div class="v6-devcontainer-L1 v6-devcontainer-navbar">';
      strTpl += '   {container}';
      strTpl += '</div>';  
      
      // Set ID Value into Template
      strTpl = strTpl.replace(/{id}/g, strId);
      strTpl = strTpl.replace(/{container}/g, strContent);
      
      // Render Template to v6-devmode
      $(this).html(strTpl);
      $this.devModeEventManager(strId);
    }); 

    /*
    * DEVMODE For Bootstrap Container Element
    */    
    $('.v6-devmode.container').each(function() {
      // Add Border to Bootstrap Row
      $(this).addClass('v6-devborder-container');  
      
      // Get Element Id
      var strId = $(this).attr('data-id');
      var strContent = $(this).html();
      
      // Generate DevBar
      var strTpl = '';
      strTpl += '<div class="v6-devbar v6-devbar-container" data-id="dev-{id}">';
      strTpl += '   <button type="button" class="btn btn-info pull-right btn-sm v6-dev-btn-conf"><span class="glyphicon glyphicon-cog"></span></button>';
      strTpl += '   <button type="button" class="btn btn-info pull-right btn-sm v6-dev-btn-remove"><span class="glyphicon glyphicon-trash"></span></button>';
      strTpl += '   <button type="button" class="btn btn-info pull-right btn-sm v6-dev-btn-order"><span class="glyphicon glyphicon-align-justify"></span></button>';
      strTpl += '</div>';
      strTpl += '<div class="v6-devcontainer-L1 v6-devcontainer-container">';
      strTpl += '   {container}';
      strTpl += '</div>';  
      
      // Set ID Value into Template
      strTpl = strTpl.replace(/{id}/g, strId);
      strTpl = strTpl.replace(/{container}/g, strContent);
      
      // Render Template to v6-devmode
      $(this).html(strTpl);
      $this.devModeEventManager(strId);
    }); 
    
    /*
    * DEVMODE For Bootstrap GridRow Element
    */    
    $('.v6-devmode.row').each(function() {
      // Add Border to Bootstrap Row
      $(this).addClass('v6-devborder-row');  
      
      // Get Element Id
      var strId = $(this).attr('data-id');
      
      // Generate DevBar
      var strTpl = '';
      strTpl += '<div class="v6-devbar v6-devbar-row" data-id="dev-{id}">';
      strTpl += '   <button type="button" class="btn btn-warning pull-right btn-sm v6-dev-btn-conf"><span class="glyphicon glyphicon-cog"></span></button>';
      strTpl += '   <button type="button" class="btn btn-warning pull-right btn-sm v6-dev-btn-remove"><span class="glyphicon glyphicon-trash"></span></button>';
      strTpl += '   <button type="button" class="btn btn-warning pull-right btn-sm v6-dev-btn-order"><span class="glyphicon glyphicon-align-justify"></span></button>';
      strTpl += '</div>';  
      
      // Set ID Value into Template
      strTpl = strTpl.replace(/{id}/g, strId);
      
      // Render Template to v6-devmode
      $(this).prepend(strTpl);
      $this.devModeEventManager(strId);
    }); 
    
    /*
    * DEVMODE For Bootstrap GridCol Element
    */    
    $('.v6-devmode.col').each(function() {  
      // Get Element Id
      var strId = $(this).attr('data-id');
      var strContent = $(this).html();
      
      // Generate DevBar
      var strTpl = '';
      strTpl += '<div class="v6-devborder v6-devborder-col">';
      strTpl += '   <div class="v6-devbar v6-devbar-col" data-id="dev-{id}">';
      strTpl += '      <button type="button" class="btn btn-success pull-right btn-sm v6-dev-btn-conf"><span class="glyphicon glyphicon-cog"></span></button>';
      strTpl += '      <button type="button" class="btn btn-success pull-right btn-sm v6-dev-btn-remove"><span class="glyphicon glyphicon-trash"></span></button>';
      strTpl += '      <button type="button" class="btn btn-success pull-right btn-sm v6-dev-btn-order"><span class="glyphicon glyphicon-align-justify"></span></button>';
      strTpl += '   </div>';
      strTpl += '   <div class="v6-devcontainer-L2 v6-devcontainer-col">';
      strTpl += '      {container}';
      strTpl += '   </div>';
      strTpl += '</div>';  
      
      // Set ID Value into Template
      strTpl = strTpl.replace(/{id}/g, strId);
      strTpl = strTpl.replace(/{container}/g, strContent);
            
      // Render Template to v6-devmode
      $(this).html(strTpl);
      $this.devModeEventManager(strId);
    });        
   
    /*
    * DEVMODE For Bootstrap Panel Element
    */    
    $('.v6-devmode.panel').each(function() {
      // Get Element Id
      var strId = $(this).attr('data-id');
      var strContent = $(this).html();
      
      // Generate DevBar
      var strTpl = '';
      strTpl += '<div class="v6-devbar v6-devbar-panel" data-id="dev-{id}">';
      strTpl += '   <button type="button" class="btn btn-default pull-right btn-sm v6-dev-btn-conf"><span class="glyphicon glyphicon-cog"></span></button>';
      strTpl += '   <button type="button" class="btn btn-default pull-right btn-sm v6-dev-btn-remove"><span class="glyphicon glyphicon-trash"></span></button>';
      strTpl += '   <button type="button" class="btn btn-default pull-right btn-sm v6-dev-btn-order"><span class="glyphicon glyphicon-align-justify"></span></button>';
      strTpl += '</div>';
      strTpl += '{container}'; 
      
      // Set ID Value into Template
      strTpl = strTpl.replace(/{id}/g, strId);
      strTpl = strTpl.replace(/{container}/g, strContent);
            
      // Render Template to v6-devmode
      $(this).html(strTpl);
      $this.devModeEventManager(strId);
    });
    
    /*
    * DEVMODE For Bootstrap DropDown Element
    */            
    $('.v6-devmode.btn-dropdown').each(function() {
      // Get Element Id
      var strId = $(this).attr('data-id');
          
      // Generate DevBar
      var strTpl = '';
      strTpl += '<div class="v6-dev-dropdown-container v6-devbar" data-id="dev-{id}">'
      strTpl += '   <button type="button" class="btn btn-danger btn-xs v6-dev-btn v6-dev-btn-order"><span class="glyphicon glyphicon-align-justify"></span></button>';
      strTpl += '   <button type="button" class="btn btn-danger btn-xs v6-dev-btn v6-dev-btn-remove"><span class="glyphicon glyphicon-trash"></span></button>';
      strTpl += '   <button type="button" class="btn btn-danger btn-xs v6-dev-btn v6-dev-btn-conf"><span class="glyphicon glyphicon-cog"></span></button>';      
      strTpl += '</div>';
      strTpl = strTpl.replace(/{id}/g, strId);
      
      // Render Template to v6-devmode
      $(this).prepend(strTpl);
      $this.devModeEventManager(strId);
    });
  };

  /*
  * DevMode EventManager
  * @param {string} strId the Id of the Element for Eventmanagement  
  */  
  this.devModeEventManager = function(strId) {
    // Find The Correct Element Object
    for(var i in $this.arrElements) {
      if($this.arrElements[i].prop.id == strId) {
        // Get objElement Reference
        var objElement = $this.arrElements[i];
        
        // Add the Button Events
        $('.v6-devbar[data-id="dev-' + strId + '"]').find('.v6-dev-btn-conf').on('click', function(){objElement.uiBuilder.eventManager('config')});
        $('.v6-devbar[data-id="dev-' + strId + '"]').find('.v6-dev-btn-remove').on('click', function(){objElement.uiBuilder.eventManager('remove')});
        $('.v6-devbar[data-id="dev-' + strId + '"]').find('.v6-dev-btn-order').on('click', function(){objElement.uiBuilder.eventManager('order')});
      }
    }
  };

  /*
  * Quits DevMode
  */    
  this.quitDevMode = function() {
    // Switch Layer2 Content to Layer 1
    $('.v6-devcontainer-L2').each(function(){
      $strContent = $(this).html();
      $objParent = $(this).parent().parent();
      $objParent.append($strContent);            
    });

    // Switch Layer1 Content to the Parent Element
    $('.v6-devcontainer-L1').each(function(){
      $strContent = $(this).html();
      $objParent = $(this).parent();
      $objParent.append($strContent);               
    });
        
    // Delete Border Classes
    $('.v6-bootstrap.navbar').removeClass('v6-devborder-navbar');
    $('.v6-bootstrap.container').removeClass('v6-devborder-container');
    $('.v6-bootstrap.row').removeClass('v6-devborder-row');
    
    // Delete DevMode Classes
    $('.v6-bootstrap.navbar').removeClass('v6-devmode');
    $('.v6-bootstrap.container').removeClass('v6-devmode');
    $('.v6-bootstrap.row').removeClass('v6-devmode');    
    $('.v6-bootstrap.col').removeClass('v6-devmode');
    $('.v6-bootstrap.panel').removeClass('v6-devmode');
    
    // Delete Containers
    $('.v6-devcontainer-L1').remove();
    $('.v6-devbar').remove();
    $('.v6-devborder').remove();        
  };


  /*
  * Renders the UI to the Body Tag
  * @param {array} arrJsonObjects The UI Json Array
  */    
  this.renderUi = function(arrJsonObjects) {
    // Loop Array
    for(var i in arrJsonObjects) {
      // First render the Body Layer (all Element attached to Body);
      if(arrJsonObjects[i].parent == null){
        // Render Body Layer Element
        $this.renderUi_render(arrJsonObjects[i]); 
        
        // Build Childrens recursively (Break-Down Pattern)
        for(var numChild in arrJsonObjects[i].children) {
          var strChildId = arrJsonObjects[i].children[numChild].id;
          $this.renderUi_recursive(strChildId, arrJsonObjects);  
        }      
      }      
    }    
  }; 
  
  /*
  * Helper for the renderUi Method. It is used to add Children
  * Recursively.  
  * @param {string} strChildId The Child Element ID
  * @param {array} arrJsonObjects The Complete Element Json Array  
  */   
  this.renderUi_recursive = function(strChildId, arrJsonObjects) {
    // Get strChildId Element from arrJsonObjects
    var objElement = null;
    for(var i in arrJsonObjects) {
      if(arrJsonObjects[i].id == strChildId) {
        objElement = arrJsonObjects[i] 
        break;
      }  
    }
    
    if(objElement != null) {
      // Render Element
      $this.renderUi_render(objElement);
  
      // Render Childrens (recursively)
      for(var numChild in arrJsonObjects[i].children) {
        var strChildId = arrJsonObjects[i].children[numChild].id;
        $this.renderUi_recursive(strChildId, arrJsonObjects);  
      }    
    }
  };
  
  /*
  * Helper for the renderUi Method. It Renders The HTML
  * @param {object} objElement The Element
  */   
  this.renderUi_render = function(objElement) {
    // Create an Object and Initialize it
    eval('var obj = new ' + objElement.type + '();');
    obj.load(objElement);          
    
    // Push new Object to the Global Page Stack
    $this.arrElements.push(obj);

    // Render HTML
    var strParent = obj.prop.parent;
    var strHtml = obj.render(); 
    
    // Add HTML to DOM
    if(strParent != null){
      $('[data-container=' + strParent + ']').append(strHtml);
    } else {
      $('body').append(strHtml);
    } 
    
    // Call Init Again 
    $this.init();      
  };
 
  
  /*
  * Generates the UI Json Code and returns it
  * @return {array} The UI Json Array
  */    
  this.saveUi = function() {
    // Create Return Array
    var $arrReturn = new Array();

    // Loop G_DEV_PAGE
    for(var i in $this.arrElements) {
      var obj = $this.arrElements[i];
      var objSave = obj.save();
      $arrReturn.push(objSave);
    }
    
    return $arrReturn;
  }

  //****************************************************************************
  $this.init();
}