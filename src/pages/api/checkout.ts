import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/mock/product";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "APP_USR-710779152861732-020914-9244f5e7f600e047dc31551db0dad06d-2257355231",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const product: IProduct = req.body.product;

    const URL = "https://softcial-dynamic.vercel.app/checkout";

    try {
      const preference: CreatePreferencePayload = {
        items: [
          {
            title: product.title,
            unit_price: product.price,
            quantity: 1,
          },
        ],
        auto_return: "approved",
        back_urls: {
          success: `${URL}`,
          failure: `${URL}`,
        },
        notification_url: `${URL}/api/notify`,
      };

      const response = await mercadopago.preferences.create(preference);

      res.status(200).send({ url: response.body.init_point });
    } catch (error) {}
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default handler;
