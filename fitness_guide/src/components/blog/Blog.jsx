import React, { useState } from 'react';
import './Blog.css';
import { data } from './Blogdata';
import Pagination from './Pagination';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Set how many items you want per page

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + '...';
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='main-container'>
      {currentItems.map((item, index) => (
        <div className='Blog-section' key={index}>
          <div className='BlogImg-div'>
            <img src={item.img} alt="" />
          </div>
          <div className='BlogContent-div'>
            <div className="Blog-title">
              {item.title}
            </div>
            <div className="Blog-Description">
              {truncateText(item.content, 230)}
              <a className='readMore' href={item.link}>Read more</a>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Blog;


















































































// import React from 'react'
// import './Blog.css'
// import { data } from './Blogdata'


// const Blog = () => {
//   return (
//     <div className='main-container'>
//       <div className='Blogsss'>

//       <div className='Blog-section'>
//           <div className='BlogImg-div'>
//               <img src={data[0].img} alt="" />
//           </div>

//           <div className='BlogContent-div'>
//             <div className="Blog-title">
//                 Read fitness Guide Blog 
//             </div>

//             <div className="Blog-Description">
//             This content provides a welcoming introduction, highlights some of the latest articles and featured workouts, and encourages readers to stay engaged. You can further customize the content to match the specific 
//             focus and tone of your fitness guide blog. 
//                 <button id='Read-more'>
//                   Read more... 
//                 </button>         
//             </div>



//           </div>

      
          

//       </div>
// {/* -------------------------------------------------------------------------------- */}


//       <div className='Blog-section'>
//           <div className='BlogImg-div'>
//               <img src={data[1].img} alt="" />
//           </div>

//           <div className='BlogContent-div'>
//             <div className="Blog-title">
//                 {data[0].title} 
//             </div>

//             <div className="Blog-Description">
//             This content provides a welcoming introduction, highlights some of the latest articles and featured workouts, and encourages readers to stay engaged. You can further customize the content to match the specific 
//             focus and tone of your fitness guide blog.
//                 <button id='Read-more'>
//                   Read more... 
//                 </button>  

//             </div>

//             {/* <div className='Blog-link'>
//               <button>
//                 Read more...
//               </button>
                  
//             </div> */}


//           </div>

      
          

//       </div>
// {/* -------------------------------------------------------------------------------- */}

//       <div className='Blog-section'>
//           <div className='BlogImg-div'>
//               <img src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//           </div>

//           <div className='BlogContent-div'>
//             <div className="Blog-title">
//                 Read fitness Guide Blog 
//             </div>

//             <div className="Blog-Description">
//             This content provides a welcoming introduction, highlights some of the latest articles and featured workouts, and encourages readers to stay engaged. You can further customize the content to match the specific 
//             focus and tone of your fitness guide blog. 
//                 <button id='Read-more'>
//                   Read more... 
//                 </button>  
//             </div>

//             {/* <div className='Blog-link'>
//               <button>
//                 Read more...
//               </button>
                  
//             </div> */}


//           </div>

      
          

//       </div>
      












          


//       </div>
      

//     </div>







//   )
// }

// export default Blog
