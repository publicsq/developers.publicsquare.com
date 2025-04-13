import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/plugin-content-docs/client";
import DocSidebarItem from "@theme/DocSidebarItem";
import { Props } from "@theme/DocSidebarItems";

function DocSidebarItems({ items, ...props }: Props) {
  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
