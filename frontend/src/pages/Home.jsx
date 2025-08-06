import Content from "../components/content";


function Home() {
    const cont = [
        {
            title: "About Me", 
            text: (
            <>
            Howdy! I'm Will, a recent Computer Science graduate based in hot city of Phoenix, Arizona. I earned my Bachelor 
            of Science in Computer Science, graduating summa cum laudefrom Arizona State University,
             along with an Associate's degree in Mathematics and Science.
            <br/><br/>
            As a kid, I was always interested in creating new things. I enjoyed creating art, building legos, and crafting out of
            paper. This creativity has led me to my passion for programming and problem solving. One such exapmle is this website,
            which was built using React, and it's just one example of how much I enjoy creating and experimenting with code. 
            I’ve gained hands-on experience across a variety of languages, including C++, Java, Python, and C#.
             <br/><br/>
            Whether I’m writing code, designing interactive systems, or analyzing data, I approach every challenge with curiosity,
             focus, and a commitment to learning.
            <br/><br/>
            Thanks for stopping by!
            </>
            ),
        },
        {title: "Experience", text: 
            (
            <>
            NASA Psyche Educational Simulation<br/>
            As part of a collaborative capstone project, I helped develop an educational Unity simulation for NASA’s
             Psyche mission. I worked on rover movement, mission scripting, orbital camera controls, and UI design to 
             create an engaging and interactive experience. This project allowed me to deepen my skills in C# and Unity
              while contributing to a real-world outreach effort.
            <br/><br/>
            React Web Project | Solo <br/>
            I designed and developed this website using React and styled it with custom CSS. Built with Vite, the site serves
             as a home for my portfolio and personal projects.
            </>
            ),
        },
        {title: "Hobbies", text: "This contains information on my hobbies."},
        {title: "Future Plans", text: "This contains information on my future plans."}
    ];

    return (
        <div> 
        {cont.map((item, index) => (
            <Content key={index} info={item} />
        ))}        
        </div>
    );
}

export default Home