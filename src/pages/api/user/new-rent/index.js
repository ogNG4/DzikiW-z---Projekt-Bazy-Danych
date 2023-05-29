import { supabase } from "@/lib/supabase";

export default async function newRentHandler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    // Sprawdź, czy istnieje już rezerwacja dla danego samochodu w podanym zakresie dat
    const { data, error } = await supabase
      .from("rents")
      .select()
      .eq("carId", body.carId)
      .lte("startDate", body.endDate)
      .gte("endDate", body.startDate);

    if (error) {
      // Błąd podczas zapytania do bazy danych
      res.status(500).json({ error: "Wystąpił błąd podczas sprawdzania dostępności samochodu." });
      return;
    }

    if (data.length > 0) {
      // Znaleziono już rezerwację w tym zakresie dat
      res.status(400).json({ error: "Wybrany termin jest już zarezerwowany." });
      return;
    }

    // Brak rezerwacji w podanym zakresie dat, można kontynuować proces rezerwacji
    const { data: insertedData, error: insertError } = await supabase.from("rents").insert(body);

    if (!insertError) {
      res.status(200).json(insertedData);
    } else {
      res.status(500).json({ error: "Wystąpił błąd podczas tworzenia rezerwacji." });
    }
  } else {
    res.status(405).json({ error: "Metoda nieobsługiwana" });
  }
}
