import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    try {
      const { error } = await supabase
        .from("rents")
        .delete()
        .eq("id", id);
      if (error) {
        throw error;
      }

      res.status(200);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }
}
