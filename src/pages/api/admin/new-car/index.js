import { supabase } from "@/lib/supabase";
import Joi from "joi";

const carSchema = Joi.object({
    img: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    capacity: Joi.number().required(),
    power: Joi.number().required(),
    type: Joi.string().required(),
    year: Joi.number().min(1950).max(2024).required(),
    color: Joi.string().required(),
    price: Joi.number().required(),
    upkeep: Joi.number().min(1950).max(2024).required(),
    transmission: Joi.string().required(),
    description: Joi.string().min(1).max(500).required(),
  });

export default async function newCarHandler(req, res) {
  if (req.method === "POST") {
    const { error, value } = carSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { data, error: insertionError } = await supabase
      .from("cars")
      .insert(value);

    if (!insertionError) {
      res.status(200).json(data);
    } else {
      res.status(500).json(insertionError);
    }
  }
}