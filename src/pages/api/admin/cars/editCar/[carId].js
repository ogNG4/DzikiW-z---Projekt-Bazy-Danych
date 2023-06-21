import { supabase } from "@/lib/supabase";
import Joi from "joi";

const carSchema = Joi.object({
  img: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().max(20).required(),
  capacity: Joi.number().max(999999).required().integer().positive(),
  power: Joi.number().max(99999).required().integer().positive(),
  type: Joi.string().required(),
  year: Joi.number().min(1950).max(2024).required().integer().positive(),
  color: Joi.string().required(),
  price: Joi.number().max(999999).required().integer().positive(),
  upkeep: Joi.number().max(999999).required().integer().positive(),
  transmission: Joi.string().required(),
  description: Joi.string().min(1).max(500).required(),
});

export default async function newCarHandler(req, res) {
  if (req.method === "POST") {
    const { carId } = req.query;
    const { error, value } = carSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { data, error: insertionError } = await supabase
      .from("cars")
      .update(value)
      .eq("id", carId);

    if (!insertionError) {
      res.status(200).json(data);
    } else {
      res.status(500).json(insertionError);
    }
  }
}
