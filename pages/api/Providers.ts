import type { NextApiRequest, NextApiResponse } from "next";
import { Provider } from "../../typings";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Provider[]>
) {
  const providers: Provider[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      prefix: "Dr.",
      address: {
        line1: "123 Fake St.",
        city: "San Francisco",
        state: "CA",
        zipCode: "94133",
      },
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Doe",
      prefix: "Dr.",
      address: {
        line1: "123 Fake St.",
        city: "San Francisco",
        state: "CA",
        zipCode: "94133",
      },
    },
    {
      id: "3",
      firstName: "Julius",
      lastName: "Hibbert",
      prefix: null,
      address: {
        line1: "123 Fake St.",
        city: "Chicago",
        state: "IL",
        zipCode: "60614",
      },
    },
    {
      id: "5",
      firstName: "Nick",
      lastName: "Rivera",
      prefix: null,
      address: {
        line1: "123 Fake St.",
        city: "Chicago",
        state: "IL",
        zipCode: "60614",
      },
    },
  ];

  res.status(200).json(providers);
}
