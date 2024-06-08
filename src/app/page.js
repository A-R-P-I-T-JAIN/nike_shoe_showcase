"use client"
import {Canvas, useFrame} from '@react-three/fiber'
import Nike from '../../Nike'
import { Suspense, useEffect, useRef, useState } from 'react'
import { ContactShadows, OrbitControls, PresentationControls } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import logo from "../assests/logo.png"
import insta from "../assests/insta.png"
import whatsapp from "../assests/whatsapp.png"
import twitter from "../assests/twitter.png"
import airforce from "../assests/airforce.png"
import airmax from "../assests/airmax.png"
import airjordan from "../assests/airjordan.png"
import Image from 'next/image'
import Card from './Components/Card'
import Footer from './Components/Footer'

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const updateSize = () => {
    const width = window.innerWidth;
    setIsSmall(width >= 640 && width < 768);
    setIsMedium(width >= 768 && width < 1024);
    setIsLarge(width >= 1024);
  };

  useEffect(() => {
    updateSize(); // Set initial size

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  let anim = {
    x: isSmall?1.3:isMedium?2:isLarge?2:0.8,//2
    y:1,
    z:-1,
    rx: 0,
    ry: 0.3,
    rz: 0.7
  }

  const NikeShoe = ({anim}) => {
    const ref = useRef();
    useFrame(() => {
      ref.current.position.x = anim.x
      ref.current.position.y = anim.y
      ref.current.position.z = anim.z
      ref.current.rotation.x = anim.rx
      ref.current.rotation.y = anim.ry
      ref.current.rotation.z = anim.rz
    })
    return (
      <group 
      scale={isSmall?0.85:isMedium?0.9:isLarge?1:0.7} 
      ref={ref} >
        <Nike />
      </group>
    )
  }

  useGSAP(() => {
    // var t1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#slope",
    //     markers: {
    //         startColor: "white",
    //         endColor: "yellow"
    //     },
    //     start: "0% 0%",
    //     end: "100% 10%",
    //     scrub: 0.5,
    //   },
    // });
  
    // t1.to(anim,{
    //   x: isSmall?-3:-2,
    //   y: isSmall?-0.2:-0.6,
    //   z:2,
    //   rx: 0,
    //   ry: 3,
    //   rz: 0
    // })
    gsap.to(anim,{
      scrollTrigger: {
        trigger: "#slope",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow"
        // },
        start: "0% 0%",
        end: "100% 10%",
        scrub: 0.5,
      },
      x: isSmall?-3:isMedium?-3:isLarge?-3:-2,
      y: isSmall?-0.2:isMedium?-0.2:isLarge?-0.2:-0.6,
      z:2,
      rx: 0,
      ry: 3,
      rz: 0
    })
    gsap.to("#cont",{
      scrollTrigger: {
        trigger: "#div2",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow"
        // },
        start: "0% 20%",
        end: "0% 5%",
        scrub: 0.5,
      },
      opacity:1
    })
  },[isSmall,isMedium,isLarge])

  useEffect(() => {
    const handleScroll = () => {
      const canvas = document.getElementById('canvas');
      const div2 = document.getElementById('div2');
      const div2Bottom = div2.getBoundingClientRect().bottom;

      if (window.scrollY >= div2Bottom) {
        canvas.style.position = 'absolute';
        canvas.style.top = `${div2Bottom}px`;
      } else {
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="h-screen w-screen">
      <div className="relative w-screen" >
      {/* div 1 */}
      <div className="w-screen h-screen bg-slate-800" >
          <div id='slope lg:slope' className="h-screen w-[75%] bg-black slope flex flex-col justify-center pl-5 sm:pl-7 gap-4 relative" >
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold max-w-[50%]" >Nike.Just Do It.</h1>
              {/* <p className="text-5xl" >.Just Do It</p> */}
              <p className="max-w-[50%] text-xs lg:text-xl font-semibold" >Step into excellence with Nike's latest collection of shoes. Engineered for comfort, style, and performance, our footwear is designed to help you conquer every challenge. Discover your perfect pair today and elevate your game.</p>
              <div className="flex gap-2" >
                <Image src={insta} width={20} height={20} />
                <Image src={twitter} width={20} height={20} />
                <Image src={whatsapp} width={20} height={20} />
              </div>
              <div className="nav absolute top-0 left-0 flex gap-2 sm:gap-6 items-center">
                <Image src={logo} width={isSmall || isLarge || isMedium?100:50} height={isSmall || isLarge || isMedium?60:40} className="pl-2 sm:pl-7" />
                <div className="flex gap-3 items-center" >
                  {/* <p className="text-xs sm:text-xs md:text-xs lg:text-xl" >New Collection</p> */}
                  <p className="text-xs sm:text-xs md:text-xs lg:text-xl" >Sneakers</p>
                  <p className="text-xs sm:text-xs md:text-xs lg:text-xl" >Sports</p>
                </div>
              </div>
          </div>
      </div>


      {/* div 2 */}
      <div id="div2" className="w-screen h-screen bg-slate-800 flex justify-end" >
          <div id='cont' className="w-[60%] h-full flex flex-col items-center justify-center pr-1 sm:pr-9 gap-3 text-white opacity-0" >
              <h1 className=" text-sm sm:text-2xl md:text-4xl font-bold" >Premium Craftsmanship</h1>
              <p className="max-w-[70%] text-xs font-semibold mb-20" >Crafted with precision, Nike shoes feature premium materials designed for durability and performance. From breathable mesh to responsive foam cushioning, every element is chosen to enhance your comfort and agility. Discover the superior quality that makes Nike a leader in footwear innovation.</p>
          </div>
      </div>

      {/* canvas */}
      <div id="canvas" className=' fixed top-0 left-0 w-screen h-screen' >
      <Canvas className=" bg-transparent w-full h-full absolute" shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.6} />
        <directionalLight />
        {/* <OrbitControls /> */}
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Suspense fallback={null}>
            <NikeShoe 
            anim={anim}
             />
          </Suspense>
        </PresentationControls>
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={4}
        />
        {/* <Environment preset="lobby" /> */}
      </Canvas>
      </div>
      </div>

      {/* div 3 */}
      <div className="w-screen min-h-screen bg-white text-black flex flex-col items-center gap-8 sm:gap-28 py-6" >
        <h1 className=" text-2xl sm:text-4xl md:text-6xl my-4" >New Collection</h1>
        <div className="flex flex-col md:flex-row gap-10" >
          <Card img={airforce} name="Nike Air Force" mrp="11,999" isSmall={isSmall} isLarge={isLarge} />
          <Card img={airmax} name="Nike Air Max" mrp="10,999" isSmall={isSmall} isLarge={isLarge} />
          <Card img={airjordan} name="Nike Air Jordan" mrp="8,999" isSmall={isSmall} isLarge={isLarge} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
