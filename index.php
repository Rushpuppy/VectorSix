
<html>
  <header>
    <script src="vendor/jquery-1.11.0/jquery-1.11.0.min.js"></script>
  
    <script src="vendor/bootstrap-3.1.1/js/bootstrap.min.js"></script>
    <link href="vendor/bootstrap-3.1.1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
    <link href="vendor/bootstrap-3.1.1/cssbootstrap-theme.min.css/" type="text/css" rel="stylesheet" />
    <script src="framework/javascript/global.php"></script>
    
    <script>
      $(function() {
      
        // Generate The Object that comes from Database
        var arrBootstrap = [{
          id: '1', 
          type: 'v6.ui.bootstrap.Navbar',
          parent: null,
          children: [{id:'2'}],          
          title: {
            text: 'SEVERIN', 
            href: '#'
          },
          position: 'static',
          inverted: false
        },
        {
            id: '2', 
            type: 'v6.ui.bootstrap.NavbarContainer',
            parent: '1',
            children: [{id:'3'}],  
            align: 'left',
            containerType: 'nav'        
        },
        {
          id: '3', 
          type: 'v6.ui.bootstrap.NavbarNav',
          parent: 2,
          children: [],
          active: false,
          text: 'Link',          
          href: '#',
          isDropdown: true
        }        
        ];
 
        // Render Page
        var pageController = new v6.controller.DeveloperPageController()
        pageController.renderUi(arrBootstrap);
        
        // Log Save Page
        console.log(pageController.saveUi());
        
        
      });      
    </script>
  </header>
  <body>
    
  </body>
</html>