import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { sortOption } = req.query;

  try {
    const { data } = await supabase
      .from("cars")
      .select("*")
      .order(sortOption);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
