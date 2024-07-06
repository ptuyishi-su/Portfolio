
import data from "../../data/index.json"


export default function AboutMe () {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7b9d0751-71a9-4dd4-a963-dbb80181e471");
    
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
            <div className="block lg:flex gap-16 justify-between">
                <div className="">
                    <p>Contact Form</p>
                    <form onSubmit={onSubmit}>
                        <div className="block lg:flex gap-5 pb-5 pt-2">
                            <div className=" pb-5 lg:pb-0 sm:w-[100%]">
                                <input type="text" name="name" placeholder="Name" className="inputField"/>
                            </div>
                            <div>
                                <input type="text" name="email" placeholder="Email" className="inputField"/>
                            </div>
                        </div>
                        <div className="pb-5">
                            <input type="text" name="message" placeholder="Message" className="LargeInputField"/>
                        </div>
                        <div>
                            <button className="buttonPrimary" type="submit">
                                <p>Send</p>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-[100%] pt-5 lg:pt-0">
                <iframe className=" h-full w-full rounded-lg"
                    src="https://my.spline.design/llabteksabtabletopbasketball-3ef1c6d39f8db87d429f40e2b1fefc78/"
                ></iframe>
                </div>
            </div>
            
        </section>
    )
}