
import data from "../../data/index.json"


export default function AboutMe () {
    return (
        <section className="my--background--section">
            <div className="my--background--box">
                <div className="my--backgound--content">
                    <div className="my--background--img-text">
                       
                        <div className="description--img--divider">
                            <div className="my--background--description">
                            <div className= "my--background--headline">
                            <h2>Hi, there.</h2>
                        </div>
                                <p className='text-medium'>
                                I am Patrick, a third-year student studying Information Technology with a concentration in Web Development and Project Management at Syracuse University. I explore disciplines related to user design and enjoy projects with dynamic learning opportunities, where I can collaborate with experienced professionals and actively contribute to hands-on project development. I am especially eager to join a cross-functional team and create ethical and inclusive designs. I believe in staying updated with the latest technology and always strive to push the boundaries of my skills. </p>
                                
                                
                            </div>
                            <div className="background--img">
                                <img src="./img/back--img.png" alt="Patrick's profile image smiling with sunset background" height={463} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}