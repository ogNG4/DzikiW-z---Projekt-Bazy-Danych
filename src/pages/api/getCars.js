import { supabase } from "@/lib/supabase";

export default async function getCarsHandler(req, res){
    if(req.method === "GET"){
        const { data, error } = await supabase.from("cars").select("*");
        if(!error){
            res.status(200).json(data);
        }else{
            res.status(500).json(error);
        }
    }
}