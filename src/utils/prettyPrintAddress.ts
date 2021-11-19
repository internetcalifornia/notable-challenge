import { Provider } from "../../typings";

export const prettyPrintAddress = (address: Provider["address"]): string => {
  return `${address.line1}${address.line2 ? `\n${address.line2}` : ""}\n${
    address.city
  }, ${address.state} ${address.zipCode}`;
};
