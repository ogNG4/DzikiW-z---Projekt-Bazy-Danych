import { supabase } from "@/lib/supabase";
import Joi from "joi";

const contactSchema = Joi.object({
  firstName: Joi.string().min(3).max(18).required(),
  lastName: Joi.string().min(3).max(18).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().min(100000000).max(999999999).required(),
  message: Joi.string().min(1).max(300).required(),
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }
    const { data, error: insertionError } = await supabase
      .from("messages")
      .insert(value);

    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(insertionError);
    }
  }
}