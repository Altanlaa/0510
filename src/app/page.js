  /*
  * @author Altanla <altan0225@gmail.com> 
  */
  'use client';
  import Link from "next/link";
  //import Image from "next/image";
  import { Navbar,
        NavbarBrand,
        NavbarCollapse,
        NavbarLink,
        NavbarToggle,
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup,
        Carousel,
        Button,
        DarkThemeToggle } from "flowbite-react";

  //import Card from "../components/Card";
  import AutoSizeImage from "./components/AutoSizeImage";
  import Card from '@/app/components/Card';
  import { useState,useEffect } from 'react';

  export default function Home() {
    const [items,setItems]=useState([]);

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch('api/items');
        const data = await response.json();
        console.log(data);
        setItems(data);
      }
      fetchData();
    },[]);

    return (
      <>
      <div className="bg-cyan-400">{/*also-> bg-[#ff00ff] */}
      <div className="container mx-auto">{/* mx-auto = 置中 */}
      <Navbar fluid className="bg-cyan-400">

        <NavbarBrand as={Link} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <AutoSizeImage src="https://www.yuntech.edu.tw/images/website_png/Group_638.png" width={200} height={200} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          {/* <img src="/vercel.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold text-red-400">Yuntech tail</span>
          {/* font-semibold 半粗? dark:text-red-400 黑暗模式 */}
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink disabled href="#" className="text-purple-900 hover:text-green-900 hover:border-b-2 ">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500">point</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-purple-900">
          <span className="px-2 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">about us</span>
          </NavbarLink>
          <NavbarLink href="#" className="px-2 py-2 text-purple-900 ">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">transpotation</span>
          </NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle></DarkThemeToggle>
      </Navbar>  
      </div> 
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <AutoSizeImage src="/banner/ban-1.jpg"  alt="copyright of kim huynh" />
          <AutoSizeImage src="/banner/ban-2.jpg"  alt="copyright of Kenneth Lu" />
          <AutoSizeImage src="/banner/ban-3.jpg" alt="copyright of Quinn Dombrowski" />
          <AutoSizeImage src="/banner/ban-4.jpg" alt="copyright  of Quinn Dombrowski" />
          <AutoSizeImage src="https://flowbite.com/docs/images/carousel/carousel-5.svg" width={200} height={200} alt="..." />
        </Carousel>
      </div>

      {/* <div className="bg-white py-16">
      <div className="container mx-auto ,grid grid-cols-4 gap-8">
      {items.map(items=>
      <Card className="max-w-sm"
        imgAlt={items.Picture.PictureDescription1}
        imgSrc={items.Picture.PictureUrl1}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {items.ScenicSpotName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {items.PictureDescription1 }
        </p>
        <Button>
          watch it
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
        )}
      </div>
      </div> */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          { items.map((item, index) => 
            <Card item={item} key={index} />
    
           )}
        </div>
      </div>

        <Footer container>
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </Footer>
        
      </>
    );
  } 
