import { useRef } from "react";
import Card from "../components/card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/Copyemailbutton";

const About = () => {
  const grid2Container = useRef();
  return( <section className="c-space section-spacing">
    <h2 className="text-heading">About me </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 ">
        {/*grid1*/}
        <div className="flex items-end grid-default-color grid-1" ><img 
        src="hocine/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:insert-y-10 lg:scale-[2.5]"/>
        <div className="z-10">
          <p>Hi,I'm Hocine Ait amer mezine</p>
          <p className="subtext">I joined the National Higher School of Cybersecurity last year after achieving a score of '18.27' in the baccalaureate, and I am currently in my 'second year of the preparatory cycle'.
</p>

        </div>
        <div className="absolute inset-x-0 pointer-evets-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
         
        {/*grid2*/}
        <div className="flex items-end grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full ">
            <p className="flex items-end text-5xl text-gray-500">The best firewall is awareness</p>
            <Card style={{rotate:"75deg",top:"30%",left:"20%"}} text="web-developer" containerRef={grid2Container}/>
            <Card style={{rotate:"-30deg",top:"60%",left:"45%"}} text="founder of Nex" containerRef={grid2Container}/>
            <Card  style={{rotate:"90deg",bottom:"30%",left:"70%"}} text="AI enthusiast" containerRef={grid2Container}/>
            <Card style={{rotate:"-45deg",top:"55%",left:"0%"}} text="student at NHSCS" containerRef={grid2Container}/>
            <Card style={{rotate:"20deg",top:"10%",left:"38%"}} text="networking enthusiast" containerRef={grid2Container}/>
          </div>
        </div>
        {/*grid3*/}
        <div className="flex items-end grid-default-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headText">zone</p>
            <p className="subtext">I'm actually based in algiers</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
              <Globe/>
          </figure>
        </div>
        {/*grid4*/}
        <div className="flex items-end grid-default-color grid-4">
          <div className="flex flex-col items-center justify-center gab-4 size-full">
            <p className="text-center headtext">do you want to start a project together?</p>
            <CopyEmailButton/>
          </div>
        </div>

    </div>
  </section>
  );
};

export default About;