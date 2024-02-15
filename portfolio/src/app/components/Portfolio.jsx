const Portfolio = ( {title, content, link} ) => {
  
  return (
    <>
    
    

      <div class="w-4/6 h-6/6 bg-white border border-gray-200 rounded-lg shadow col-start-1 col-end-3 mb-4">
          {/* <a href="#">
              <img class="rounded-t-lg" src="" alt="" />
          </a> */}
          <div class="p-5">
              <a href="#">
                  {title}
              </a>
              {content}
              <a href={link} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                  Visit
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>

    
    </>
  );
};

export default Portfolio;
