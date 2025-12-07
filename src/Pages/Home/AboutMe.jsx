
import data from "../../data/index.json"


export default function AboutMe () {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            alert("Form submission error: API key is missing. Please contact the site administrator.");
            return;
        }
        formData.append("access_key", accessKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Message Sent, Thank You", res);
        }
      };

    return (
        <section className=" ">
            <div className=" pb-5">
                <h2>Contact</h2>
            </div>
            <div className="block sm:flex gap-16 justify-between">
                <div className="">
                    <form onSubmit={onSubmit}>
                        <div className="block sm:flex gap-5 pb-5 pt-2">
                            
                            <div className="pb-5 sm:pb-0 sm:w-[100%]">
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="contact-name"
                                    placeholder="Name" 
                                    required 
                                    className="inputField"
                                    autoComplete="name"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="contact-email"
                                    placeholder="Email" 
                                    required 
                                    className="inputField"
                                    autoComplete="email"
                                />
                            </div>
                        </div>
                        <div className="pb-5">
                        <textarea 
                            rows="11" 
                            cols="33" 
                            name="message"
                            id="contact-message"
                            placeholder="Message" 
                            required
                            autoComplete="off"
                        >
                             
                        </textarea>
                        </div>
                        <div>
                            <button className="buttonPrimary hover:" type="submit">
                                <p className="text-black">Send</p>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-[100%] pt-5 sm:pt-0">
                <iframe className=" h-full w-full rounded-lg"
                    src="https://my.spline.design/llabteksabtabletopbasketballcopycopy-58097f58acc18c788a346b37065840c3/">
                </iframe>
                
                </div>
            </div>
            
        </section>
    )
}