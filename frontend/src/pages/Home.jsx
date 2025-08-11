import Content from "../components/content";
import {useState} from "react";
import watercolor from "../assets/watercolorproject.jpg";
import inkpen from "../assets/inkpenproject.jpg";
import value from "../assets/valuedrawing.jpg";

function Home() {
    const cont = [
        {
            title: "About Me", 
            text: (
            <>
            I’m a recent Computer Science graduate based in the sunny city of Phoenix, Arizona. In May 2025,
             I earned my Bachelor of Science in Computer Science, graduating summa cum laude from Arizona State 
             University. I also hold an Associate’s degree in Mathematics and Science from GLendale Community College.
            <br/><br/>
            From a young age, I have been passionate about creating. I enjoyed drawing, building with LEGO,
             and crafting from paper. That same creativity now fuels my love for programming and problem solving. 
             This website, built with React, is just one example of how I enjoy experimenting with code and bringing ideas to life.
             <br/><br/>
            I have hands-on experience with a variety of languages, including C++, Java, Python, and C#. Whether I am developing software,
             designing interactive systems or analyzing data, I approach every challenge with curiosity, focus and a drive to keep learning.
            </>
            ),
        },
        {title: "Experience", text: 
            (
            <>
            <a href="https://psyche.ssl.berkeley.edu/get-involved/capstone-projects/capstone-projects-iridium-class/m-type-asteroid-sampling-simulator-asu-a/"> 
            NASA Psyche Educational Simulation</a>
            <br/>
            As part of a collaborative capstone project, I helped develop an educational Unity simulation for NASA’s
             Psyche mission. I worked on rover movement, mission scripting, orbital camera controls, and UI design to 
             create an engaging and interactive experience. This project allowed me to deepen my skills in C# and Unity
              while contributing to a real-world outreach effort.
            <br/>
            <a href="https://missiontopsyche-iridium.github.io/iridium_22a_m-type_sim-asu/"> 
            <u>PLAY IT HERE</u></a>
            <br/><br/>
            React Web Project | Solo <br/>
            I designed and developed this website using React and styled it with custom CSS. Built with Vite, the site serves
             as a home for my portfolio and personal projects.
            </>
            ),
        },
        {title: "Hobbies", text: (
            <>
            Outside of work, I've taken on the hobby of practicing drawing. Whether it's sketching, painting, or 
            digital illustration, 
            I find the process both relaxing and fulfilling. It gives me a chance to express ideas visually, experiment 
            with color and form, and continually challenge myself to improve. Art has become a personal way to unwind while 
            staying inspired and creative.
            </>
        ),
        },
        {title: "Future Plans", text: (
            <> 
            In the near future, I plan to develop two games I have dreamed about making since childhood: a Metroidvania, 
            a genre focused on exploration and unlocking new areas through abilities, and a turn-based RPG, where strategy
             and story take center stage. These projects will give me the opportunity to combine my art and programming skills, 
             and help fulfill my passion for game development and storytelling.
            </>
        ),
    },
    ];

    const art = [watercolor, inkpen, value];

    return (
        <div> 
            {cont.map((item, index) => (
            <div key={index}>
                <Content info={item} />
{/*                 
                {item.title === "Hobbies" && (
                <div className = "content-info">
                    <h3>Art Gallery</h3>
                    <div className = "art-grid">
                        {art.map((src, artIndex) => (
                            <img
                            key={artIndex}
                            src={src}
                            alt={`Art ${artIndex + 1}`}
                            className="art-image"
                            /> 
                        ))}
                    </div>
                </div>
                )}  */}
            </div>
            ))}        
        </div>
    );
}

export default Home