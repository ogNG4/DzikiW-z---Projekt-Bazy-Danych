import { supabase } from "@/lib/supabase";

export default async function updateUserHandler(req, res) {
  const { id } = req.query;
  const body = req.body;

  if (req.method === "POST") {
    try {
      const { error } = await supabase
        .from("profiles")
        .update(body)
        .eq("id", id);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update user" });
    }
  }
}
