import React from "react";
import { Card } from "@site/src/components/shared/Card";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import Java from "@site/static/img/sdk/logos/java.svg";

export const SdkList = ({ type, sdks }: { type?: keyof typeof SDK_TYPES; sdks: (keyof typeof SDKS)[] }) => {
  const SDKS = {
    dotnet: (
      <Card href="/sdks/server-side/dotnet/" img={<DotNet />} className="sdk">
        .NET
      </Card>
    ),
    go: (
      <Card href="/sdks/server-side/go/" img={<Go />} className="sdk">
        Go
      </Card>
    ),
    node: (
      <Card href="/sdks/server-side/node/" img={<Node />} className="sdk">
        Node
      </Card>
    ),
    python: (
      <Card href="/sdks/server-side/python/" img={<Python />} className="sdk">
        Python
      </Card>
    ),
    java: (
      <Card href="/sdks/server-side/java/" img={<Java />} className="sdk">
        Java
      </Card>
    ),
    javascript: (
      <Card href="/sdks/web/javascript/" img={<JavaScript />} className="sdk">
        Javascript
      </Card>
    ),
    react: (
      <Card href="/sdks/web/react/" img={<ReactSvg />} className="sdk">
        React
      </Card>
    ),
  };

  const SDK_TYPES: { [key: string]: (keyof typeof SDKS)[] } = {
    server: ["dotnet", "go", "java", "node", "python"],
    elements: ["javascript", "react"],
    client: ["javascript", "react"],
  };

  return (
    <div className="sdk-column">
      {type && SDK_TYPES[type].map((sdk) => SDKS[sdk])}
      {sdks && sdks.map((sdk) => SDKS[sdk])}
    </div>
  );
};
