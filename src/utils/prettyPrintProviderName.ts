import { Provider } from "../../typings";

export const prettyPrintProviderName = (
  provider: Provider,
  style?: "Last, First"
): string => {
  if (style === "Last, First")
    return `${provider.lastName}, ${provider.firstName}`;
  else
    return `${provider.prefix ? provider.prefix + " " : ""}${
      provider.firstName
    } ${provider.lastName}`;
};
