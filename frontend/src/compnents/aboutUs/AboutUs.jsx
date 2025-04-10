import React from 'react';
import Navbar from '../navbar/Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <section class="mt-[5rem] h-[150vh] text-xl">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Meet Our Team</h2>
          
      </div> 
      <div class="mb-6 lg:mb-16">
      <div class="items-center rounded-xl shadow sm:flex dark:border-gray-700 mb-6" style={{ background: 'linear-gradient(to right, #D1D5DB, #E5E7EB, #F3F4F6)' }}>
              <a href="#">
                <img class="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://media.licdn.com/dms/image/D4D03AQHNveWmqg3ScA/profile-displayphoto-shrink_800_800/0/1691382068333?e=2147483647&v=beta&t=xWKGao8_bC1HZNz9YaBXG_qTXpv6vb7Vtcu7oNVkGYc" alt="Manan Hingorani" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Manan Hingorani</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Netaji Subhas University of Technology (NSUT)</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Computer Science and Artificial Intelligence (CSAI)</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://www.instagram.com/manan_hingorani/?hl=en" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/manan-hingorani/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://github.com/MananHingorani2003" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                          </a>
                      </li>
                
                  </ul>
              </div>
          </div> 
          <div class="items-center rounded-xl shadow sm:flex dark:border-gray-700 mb-6" style={{ background: 'linear-gradient(to right, #D1D5DB, #E5E7EB, #F3F4F6)' }}>
              <a href="#">
                <img class="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="data:image/jpeg;base64,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" alt="Shreya Ganjoo" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Shreyas Done</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Vishwakarma Institute of Technology (VIT)</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Computer Engineering (CSE)</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://www.instagram.com/shree_1265" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/shreyas-done/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://github.com/Shreyasdone" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                          </a>
                      </li>
                
                  </ul>
              </div>
          </div>  
      </div>  
  </div>
</section>
</>
  )
}

export default AboutUs;



