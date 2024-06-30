import { SDK } from "../types";

import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import Java from "@site/static/img/sdk/logos/java.svg";

export const getSdkIcon = (icon: SDK | `${SDK}`) =>
  ({
    [SDK.DOT_NET]: DotNet,
    [SDK.GO]: Go,
    [SDK.PYTHON]: Python,
    [SDK.Java]: Java,
    [SDK.NODE]: Node,
    [SDK.REACT]: ReactSvg,
    [SDK.JAVASCRIPT]: JavaScript,
  }[icon]);
