import React, { useState } from "react";
import { Provider } from "../../typings";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { prettyPrintProviderName, sortStrings } from "../utils";

export const ProviderPanel: React.FunctionComponent<{
  providers: Provider[];
  didChangeProvider: (provider: Provider["id"]) => void;
}> = ({ providers, didChangeProvider }) => {
  const [selectedProvider, setSelectedProvider] = useState<string>();

  return (
    <Menu vertical fluid>
      {providers
        .sort((a, b) => sortStrings(a.lastName, b.lastName))
        .map((provider, ind) => {
          return (
            <Menu.Item
              key={ind}
              onClick={(e, menuItem) => {
                const providerId = menuItem.name;
                if (!providerId) return;
                setSelectedProvider(providerId);
                didChangeProvider(providerId);
              }}
              name={provider.id}
              active={selectedProvider === provider.id}
            >
              {prettyPrintProviderName(provider, "Last, First")}
            </Menu.Item>
          );
        })}
    </Menu>
  );
};
