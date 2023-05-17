// pages/api/cars/[id].js

import { supabase } from "@/lib/supabase";

export default async function deleteCarHandler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    try {
      const { error } = await supabase.from("cars").delete().eq("id", id);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: `Auto o id ${id} zostało usunięte.` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Nie udało się usunąć auta." });
    }
  }
}
