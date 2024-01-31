"use client";
import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import FormCreator from "./FormCreator";
import FormVisitor from "./FormVisitor";
import TabsTech from "../components/TabsTech";

export default function SignUpForm() {
  const [selected, setSelected] = useState("login");
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Card>
        <CardBody>
          <TabsTech
            color={"primary"}
            size={"md"}
            tabData={[
              { key: "creator", title: "Creador", content: <FormCreator /> },
              { key: "visitor", title: "Visitante", content: <FormVisitor /> },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
}
