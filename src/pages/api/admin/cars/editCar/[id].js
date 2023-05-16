import { supabase } from "@/lib/supabase";

export default async function editCarHandler(req, res) {
    const { id } = req.query;
    const body = req.body;

    if(req.method === "POST"){
        try{
            const {error} = await supabase.from('cars').update(body).eq('id', id);

        }catch(error){
            console.log(error);
        }
    }

}