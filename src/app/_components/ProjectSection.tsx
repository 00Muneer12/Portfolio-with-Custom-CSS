import React from 'react'
import './styles/Project.css';
import Image from 'next/image';
import Link from 'next/link';


const ProjectSection = () => {
  return (
    <section className='projects'>
      <h2 className='section-title'>Recent Project</h2>
      <div className="projects-grid">
        <div className="project-card">
          {/* Image Section */}
          <div className='img'>
          <Link href='https://multi-page-custom-css-web.vercel.app/' target='_blank'>
            <Image
            src='/07-MULTI-PAGE-CUSTOMCSS-FASHION-BRAND-WEBSITE.jpeg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>WELCOME TO  <br />FASHION BRAND</h3>
          <p>A dynamic and responsive E-Commerce Website built with Next.js HTML, Typescript Custom CSS</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://multi-page-custom-css-web.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
      
          </div>

        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://hackathon-e-commerce-rouge.vercel.app/' target='_blank'>
            <Image
            src='/09-HACKATHON08-MULTI-PAGE-WEBSITE.jpeg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓔-𝓒𝓸𝓶𝓶𝓮𝓻𝓬𝓮 𝓦𝓮𝓫𝓼𝓲𝓽𝓮</h3>
          <p>Pixel-perfect responsive E-Commerce Website in Next.js HTML Typescript and Tailwind CSS matching the Figma design</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://hackathon-e-commerce-rouge.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        {/* </div> */}

        {/* <div className="project-card">
          {/* Image Section */}
          {/* <div className="img">
          <Link href='https://student-id-cards.vercel.app/' target='_blank'>
            <Image
            src='/02-STUDENT-ID-CARD.jpeg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div> */}
{/* 
          <h3>𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼 <br />𝓘𝓓 𝓒𝓪𝓻𝓭𝓼</h3>
          <p>Discover elegant and stylish collections at Jasmine Sheikh Clothing Brand</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://student-id-cards.vercel.app/' target='_blank'>Go To Live</Link>
            </div> 
   
          </div> */}
          
        </div>

        
      {/* </div> */}
{/* 
        <div className="project-card">
          {/* Image Section */}
          {/* <div className="img">
          <Link href='https://milestone1-static-resume-azure.vercel.app/' target='_blank'>
            <Image
            src='/05-RESUME-BUILDER.jpeg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓓𝔂𝓷𝓪𝓶𝓲𝓬 𝓡𝓮𝓼𝓾𝓶𝓮 𝓑𝓾𝓲𝓵𝓭𝓮𝓻</h3>
          <p>Create a professional customizable resume with ease using our Dynamic Resume Builder</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://milestone1-static-resume-azure.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
    
          </div>
          
        </div> */} 

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://milestone1-static-resume-azure.vercel.app/' target='_blank'>
            <Image
            src='/03-STATIC-RESUME-MILESTONE01.jpeg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓢𝓽𝓪𝓽𝓲𝓬 <br />𝓡𝓮𝓼𝓾𝓶𝓮</h3>
          <p>A static visually appealing resume showcasing your skills and achievements in a clean layout</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://milestone1-static-resume-azure.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default ProjectSection
