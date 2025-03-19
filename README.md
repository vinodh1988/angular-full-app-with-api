Routing

     http://localhost:4200/
	 http://localhost:4200/studio-------> /studio is resolved in server and if you 
	                               get new pages it is called server side routing
								   and the application becomes multipage
								   
								   /studio is resolved in browser itself without
								   loading new page but generating new content alone
								   client side routing
								   
				Client Side routing with angular
Top level or root level routes
----------------------------------

http://localhost:4200/about
http://localhost:4200/projects

here about and projects are top level routes

http://localhost:4200/projects/ai
http://localhost:4200/projects/budget

   here ai and budget are child routes of main route projects