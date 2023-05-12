import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { carId, userId, startDate, endDate } = req.body;

    if (!startDate || !endDate) {
      return res.status(400).json({ message: "Invalid rental dates" });
    }

    const rentalData = {
      carId,
      userId,
      startDate,
      endDate,
    };

    try {
      const { data, error } = await supabase.from("rents").insert(rentalData);

      if (error) {
        return res.status(500).json({ message: "Failed to create rental" });
      }

      await supabase
        .from("cars")
        .update({ isRent: true })
        .eq("id", carId);

      return res.status(200).json({ message: "Rental created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to create rental" });
    }
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
