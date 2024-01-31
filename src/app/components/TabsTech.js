import { Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

export default function TabsTech({ tabData, size, color }) {
  const [selected, setSelected] = useState("login");
  return (
    <Tabs
      fullWidth
      size={size}
      aria-label="Tabs form"
      selectedKey={selected}
      onSelectionChange={setSelected}
      color={color}
    >
      {tabData.map((tab, index) => {
        return (
          <Tab key={tab.key} title={tab.title}>
            {tab.content}
          </Tab>
        );
      })}
    </Tabs>
  );
}
