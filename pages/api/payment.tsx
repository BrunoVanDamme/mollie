import createMollieClient, { Payment } from "@mollie/api-client";

import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mollieClient = createMollieClient({ apiKey: "test_dNure62eNuRw45KmMHuwmPuzqCxJSK" });

  // return mollieClient.payments
  //   .create({
  //     amount: {
  //       value: "10.00",
  //       currency: "EUR",
  //     },
  //     description: "My first API payment",
  //     redirectUrl: "https://yourwebshop.example.org/order/123456",
  //     webhookUrl: "https://yourwebshop.example.org/webhook",
  //   })
  //   .then((payment) => {
  //     // Forward the customer to the payment.getCheckoutUrl()
  //   })
  //   .catch((error) => {
  //     // Handle the error
  //   });

  return (async () => {
    try {
      const payment: Payment = await mollieClient.payments.create({
        amount: {
          currency: "EUR",
          value: "10.00", // You must send the correct number of decimals, thus we enforce the use of strings
        },
        description: "My first payment",
        redirectUrl: "https://webshop.example.org/order/12345/",
        webhookUrl: "https://webshop.example.org/payments/webhook/",
        metadata: {
          order_id: "12345",
        },
      });

      console.log(payment);
      res.status(200).json({ name: "John Doe" });
    } catch (error) {
      console.warn(error);
    }
  })();

  // return new Promise<void>((resolve, reject) => {
  //   apiInstance.sendTransacEmail(sendSmtpEmail).then(
  //     function (data: any) {
  //       // console.log("API called successfully. Returned data: " + data);
  //       res.status(201).json({ error: "", data });
  //       resolve();
  //     },
  //     function (error: any) {
  //       // console.error(error);
  //       res.status(400).json({
  //         error: `There was an error sending the transactional mail.`,
  //       });
  //       reject();
  //     }
  //   );
  // });
};
