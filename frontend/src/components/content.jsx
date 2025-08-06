import '../css/content.css'

function Content({info = {}}){

    return (
        <div className="content-info">
            <h3>{info.title}</h3>
            <p>{info.text}</p>
        </div>
    );
}

export default Content