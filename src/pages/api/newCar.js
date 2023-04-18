import { supabase } from "@/lib/supabase";

export default async function newCarHandler(req, res){
    if(req.method === "POST"){
        const body = req.body;
        const { data, error } = await supabase.from("cars").insert(body);
        if(!error){
            res.status(200).json(data);
        }else{
            res.status(500).json(error);
        }
    }
}