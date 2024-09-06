import Link from 'next/link'
import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

export default function BlogPage() {
  return (
    <div>
          <div className='mt-24 '>
         <div className="flex justify-between items-center bg-[#EEF7FF] border-t-2 mt-16 border-b-2 px-4 sm:px-16 ">
       <h2 className="sm:text-[28px] tracking-widest  uppercase font-bold mb-5 py-4 sm:py-8">
       Career
        </h2>
        
       </div>
        <div className="border-b-2 flex items-center gap-3 px-4 py-4 sm:px-16">
        <Link href='/'>
          <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
            Airon solution Ltd.
          </p>
          </Link>
          <FaAngleDoubleRight />
          
            <p className="text-sm text-gray-600 capitalize">
           Blog
            </p>
        
        
        </div>
        
    </div>
        <section class=" light  md:pb-24  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
  <div class="px-4 sm:px-20">
   

    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-8 px-4  lg:border-r-2">
        <img src="https://cdn.easyfrontend.com/pictures/blog/blog_12_1.png" alt="" class="w-full h-auto rounded pt-10" />
        <div class="flex flex-col sm:flex-row items-center justify-between my-12 sm:mr-12">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="mr-2">
              <img
                src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                alt=""
                class="max-w-full h-auto rounded-full border border-btnBorder"
                width="47"
              />
            </div>
            <div>
              <p>By<b> Alan Bell</b></p>
            </div>
            <p class="ml-3 mt-3 sm:mt-0">August 10th, 2020</p>
          </div>
          <div>
            <ul class="mt-3 sm:mt-0">
              <a href="" class="text-lg sm:text-[22px]"><i class="fab fa-facebook mr-3"></i></a>
              <a href="" class="text-lg sm:text-[22px]"><i class="fab fa-instagram mr-3"></i></a>
              <a href="" class="text-lg sm:text-[22px]"><i class="fab fa-linkedin-in mr-3"></i></a>
              <a href="" class="text-lg sm:text-[22px]"><i class="fab fa-twitter mr-3"></i></a>
              <a href="" class="text-lg sm:text-[22px]"><i class="fab fa-whatsapp mr-3"></i></a>
              <a href="" class="text-lg sm:text-[22px]"><i class="fas fa-share-alt mr-3"></i></a>
              <a href="" class="text-lg sm:text-[22px]"><i class="fas fa-bookmark"></i></a>
            </ul>
          </div>
        </div>
        <div>
          <p class="text-[17px] mb-2 opacity-80">
            Teaching is a noble profession. Think about the most respected persons in our society. Yes, they are the
            teachers. If you ask someone about some of his favourite persons, it is most likely to find a teacher of
            him in his answer. So, being a teacher is an amazing thing. Besides, the career prospect in teaching is
            also lucrative. In England and Wales, as a Newly Qualified Teacher (NQT) you’ll earn £24,373 to £30,480
            depending on location Since you have decided to become a teacher, you may be known to all of these.
          </p>
          <p class="text-[17px] mb-2 opacity-80">
            Getting into teaching requires many years of preparation. If you don’t know how to become a teacher, you
            may find the way challenging. So, in this article, I’ll walk you through the steps to becoming a teacher
            in the UK.
          </p>

          <br />
          <h5 class="mb-2 text-xl font-medium opacity-90">7 Steps to becoming a teacher</h5>
          <p class="text-[17px] mb-2 opacity-80">
            Being a teacher is always exciting. It opens a new horizon for us to serve and build the nation in a
            noble way. In order to become a teacher, you have to undertake a number of steps. So let’s get started
            to explore:
          </p>

          <br />
          <h5 class="mb-2 text-xl font-medium opacity-90">1. Decide what type of teacher you want to be</h5>
          <p class="text-[17px] mb-2 opacity-80">
            Teachers can be of several types such as nursery teachers, school teachers, special teachers, professors
            and so on. So, before stepping into the route to become a teacher, decide first what type of teacher you
            want to be. In the UK, the education system is broadly divided into two systems.
          </p>

          <br />
          <h5 class="mb-2 text-xl font-medium opacity-90">2. Decide your preferred subject</h5>
          <p class="text-[17px] mb-2 opacity-80">
            In primary schools, you may be responsible for teaching multiple subjects. But in the secondary schools,
            it’s most likely that you’ll be teaching the subject in which you did your major. So, it’s your choice
            which subject do you want to teach. It’s necessary to decide this because it will keep you on the track
            to become a teacher and step forward to make your preparation.
          </p>

          <br />
          <h5 class="mb-2 text-xl font-medium opacity-90">3. Earn your bachelor degree</h5>
          <p class="text-[17px] mb-2 opacity-80">
            Unlike many other professions, teaching is very strict in its requirements. It’s because we don’t want
            to give the responsibility of educating our children to someone who doesn’t have the proper education
            and credentials. So, getting into teaching requires a minimum degree in the first place. After that, the
            other things come. You need a bachelor degree to become a teacher. There are also other specialized and
            advanced degrees, but you need your bachelor degree before everything.
          </p>
          <p class="text-[17px] mb-2 opacity-80">
            If you want to be a primary teacher, then you’ll need a degree of Bachelor of Education (BEd.) But, if
            you want to be a secondary teacher, you have to do your bachelor in your preferred subject. Your major
            in your degree will determine which subject you’ll be teaching. Earning a bachelor degree will require 3
            to 4 years. However, if you want to be a nursery or pre-school teacher, you don’t need a bachelor degree
            rather a proper license and certification in teaching children.
          </p>
        </div>
      </div>
      <div class="col-span-12  lg:col-span-6 lg:col-start-9 px-4 md:pl-6 lg:pl-0 pt-10">
        <div class="bg-stone-900 bg-opacity-90 dark:bg-[#1E2735] text-white rounded-t-lg py-4 px-3 mb-4">
          <h5 class="text-xl font-medium">Popular Blogs</h5>
        </div>
       
        <div class="flex justify-between items-start gap-4">
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_12_2.png" alt="" class="img-fluid rounded " />
          <div class="ml-3">
            <h6 class="mb-2 text-base font-medium leading-tight">Decide what type of teacher you want to be</h6>
            <div class="flex flex-wrap opacity-50">
              <span class="mr-3">August 10</span>
              <span>By <b>Alan Bell</b></span>
            </div>
          </div>
        </div>
        <hr class="text-blue-600 bg-blue-600 my-6 text-opacity-25" />
      
        <div class="flex justify-between items-start gap-4">
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png" alt="" class="img-fluid rounded" />
          <div class="ml-3">
            <h6 class="mb-2 text-base font-medium leading-tight">Decide what type of teacher you want to be</h6>
            <div class="flex flex-wrap opacity-50">
              <span class="mr-3">August 10</span>
              <span>By <b>Alan Bell</b></span>
            </div>
          </div>
        </div>
        <hr class="text-blue-600 bg-blue-600 my-6 text-opacity-25" />

        <div class="flex justify-between items-start gap-4">
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png" alt="" class="img-fluid rounded" />
          <div class="ml-3">
            <h6 class="mb-2 text-base font-medium leading-tight">Decide what type of teacher you want to be</h6>
            <div class="flex flex-wrap opacity-50">
              <span class="mr-3">August 10</span>
              <span>By <b>Alan Bell</b></span>
            </div>
          </div>
        </div>
        <hr class="text-blue-600 bg-blue-600 my-6 text-opacity-25" />
   
        <div class="flex justify-between items-start gap-4">
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_12_5.png" alt="" class="img-fluid rounded" />
          <div class="ml-3">
            <h6 class="mb-2 text-base font-medium leading-tight">Decide what type of teacher you want to be</h6>
            <div class="flex flex-wrap opacity-50">
              <span class="mr-3">August 10</span>
              <span>By <b>Alan Bell</b></span>
            </div>
          </div>
        </div>
        <hr class="text-blue-600 bg-blue-600 my-6 text-opacity-25" />
   
        <div class="flex justify-between items-start gap-4">
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_12_2.png" alt="" class="img-fluid rounded" />
          <div class="ml-3">
            <h6 class="mb-2 text-base font-medium leading-tight">Decide what type of teacher you want to be</h6>
            <div class="flex flex-wrap opacity-50">
              <span class="mr-3">August 10</span>
              <span>By <b>Alan Bell</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
