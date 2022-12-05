Types of Router in the React
BrowserRouter which is mostly used it is the simple and very much used 
HashRouter - This router is similar to the browser router but it justs add the # before the real path

Memory Router - It doesn't change the router in the navbar rather it stores it in a memory



Passing params in the router

<Route to="/books/:id" element={<Books/>}>
where id can be anything


useParams hook is used to get the dynamic routes and is used in the component where we want to use the values passed in the dynamic routes 

 const {id} = useParams();
 
 Behind the scenes if we have two routes which are same like in one we have any dynamic param and in other we have hardcoded param then it will always be rendering the harcoded param
 
 
 nested Routes - 
<Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/books' element={<BookList/>}/>
      <Route path='/books/:id' element={<Books/>}/>
      <Route path='/books/new' element={<NewsBook/>}/> */}

      <Route path='/books'>
      <Route index element={<BookList/>}/>
      <Route path=':id' element={<Books/>}/>
      <Route path='new' element={<NewsBook/>}/>
    </Route>
      <Route path='*' element={<NotFound/>}/>


    </Routes>
	
	Suppose if we have Some routes in any component if we want that when user hits that route it can see the routes use that component rather than coming back again and hitting that route from that component than we can use layout 
	
	
	<Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/books' element={<BookList/>}/>
      <Route path='/books/:id' element={<Books/>}/>
      <Route path='/books/new' element={<NewsBook/>}/> */}

      <Route path='/books' element={<BookLayout/>}>
      <Route index element={<BookList/>}/>
      <Route path=':id' element={<Books/>}/>
      <Route path='new' element={<NewsBook/>}/>
    </Route>
      <Route path='*' element={<NotFound/>}/>


    </Routes>
	
	And in the BookLayout it will look like this 
	
	<Link to='/books/1'>
        Book 1
      </Link>
      <Link to="/books/2">
        Book 2
      </Link>
      <Link to="/books/new">
        New Book
      </Link>
      <Outlet/>
	  
	  
	  
	  useRoutes Hook
	  
	  let element = useRoutes([
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'books',
      element:<BooksList/>
    }
  ])
 