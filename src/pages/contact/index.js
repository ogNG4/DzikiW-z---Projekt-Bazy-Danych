
import ContactForm from "../../components/User/ContactForm/ContactForm";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = {};

    for (let [key, value] of form) {
      formData[key] = value;
    }

    try {
      const response = await fetch("../api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <ContactForm onSubmit={handleSubmit}/>
    </>
  );
}