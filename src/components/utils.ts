import { SDK, PLATFORM } from "./types";

import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import Java from "@site/static/img/sdk/logos/java.svg";
import Shopify from "@site/static/img/plugins/platforms/shopify.svg";
import WooCommerce from "@site/static/img/plugins/platforms/woocommerce.svg";
import Magento from "@site/static/img/plugins/platforms/magento.svg";
import BigCommerce from "@site/static/img/plugins/platforms/bigcommerce.svg";

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

export const getPlatformIcon = (icon: PLATFORM | `${PLATFORM}`) =>
  ({
    [PLATFORM.SHOPIFY]: Shopify,
    [PLATFORM.WOOCOMMERCE]: WooCommerce,
    [PLATFORM.MAGENTO]: Magento,
    [PLATFORM.BIGCOMMERCE]: BigCommerce,
  }[icon]);
