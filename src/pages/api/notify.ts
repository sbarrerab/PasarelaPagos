import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "APP_USR-710779152861732-020914-9244f5e7f600e047dc31551db0dad06d-2257355231",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const topic = query.topic || query.type;

  console.log({ query, topic });
  try {
    if (topic === "payment") {
      const paymentId = query.id || query["data.id"];
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      console.log([payment, paymentStatus]);
      //if(paymentStatus === "aproved"){
        // Insertar en la BD
      //}
    }
  } catch (error) {
    res.send(error);
  }
};

export default handler;
