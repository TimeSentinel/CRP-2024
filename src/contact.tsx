import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";

function Contact() {
// contact page content
interface FormData {
    name: string;
    checkbox: boolean;
}

    const { submit } = useWeb3forms<FormData>({
        access_key: "YOUR_ACCESS_KEY_HERE",
        onSuccess: (successMessage, data) => {
            console.log(successMessage, data)
        },
        onError: (errorMessage, data) => {
            console.log(errorMessage, data)
        },
    });

    const { handleSubmit } = useForm<FormData>()

    return (
        <div className="contactContent">
            <h1>Get a Quote / Contact Us</h1>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" name="name" required/>
                    <input type="text" name="company" />
                    <input type="text" name="phone" />
                    <input type="email" name="email" required/>
                    <textarea name="message" required></textarea>

                    <button type="submit">Submit Form</button>
                </form>
                {/*<span>{result}</span>*/}

            </div>
        </div>
    )
}

export default Contact;

