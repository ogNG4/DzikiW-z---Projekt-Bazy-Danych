import NewCarForm from "../../components/Admin/Forms/NewCarForm/NewCarForm";
import { useRouter } from "next/router";

export default function NewCar(){
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = {};
        for (let [key, value] of form) {
            formData[key] = value;
        }
        try {
            const response = await fetch("../api/newCar", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('dodano nowy samochód');
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return(
        <>
        <NewCarForm onSubmit={handleSubmit}/>
        </>
    )
}