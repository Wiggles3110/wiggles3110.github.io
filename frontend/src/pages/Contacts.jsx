import Content from "../components/content";

function Contacts() {
    const contactInfo = {
        title: "Contact Info",
        text: (
            <>
                Email: <a href="mailto:nelsonwill254@gmail.com"> nelsonwill254@gmail.com</a>
                <br/>
                LinkedIn: <a href="https://www.linkedin.com/in/will-nelson-77a414333" target="_blank" rel="noopener noreferrer" > 
                Will Nelson </a>
                <br/>
                GitHub: <a href="https://github.com/Wiggles3110" target="_blank" rel="noopener noreferrer" >
                Wiggles3110</a>

            </>
        ),
    };
    return <Content info ={contactInfo} />
}

export default Contacts