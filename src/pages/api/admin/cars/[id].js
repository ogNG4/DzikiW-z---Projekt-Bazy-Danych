// pages/api/cars/[id].js

import { supabase } from "@/lib/supabase";

export default async function deleteCarHandler(req, res) {
  const { id } = req.query;
if(req.method === "DELETE"){
  try {
    // usuń auto o podanym id z bazy danych
    const { error } = await supabase.from("cars").delete().eq("id", id);

    if (error) {
      throw error;
    }

    // zwróć status 200, jeśli auto zostało usunięte pomyślnie
    res.status(200).json({ message: `Auto o id ${id} zostało usunięte.` });
  } catch (error) {
    // zwróć status 500 i błąd, jeśli wystąpił błąd podczas usuwania auta
    console.error(error);
    res.status(500).json({ message: "Nie udało się usunąć auta." });
  }
}
}
