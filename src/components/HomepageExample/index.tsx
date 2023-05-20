import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import CSource from "!!raw-loader!./todolist.c";
import XmlSource from "!!raw-loader!./todolist.xml";
import CssSource from "!!raw-loader!./todolist.css";
import ExamplePreview from "../ExamplePreview";
import { TaskItem } from "../TodoList";

export default function HomepageExample() {
  const list = [
    {
      id: 1,
      name: "Download LCUI source code",
      status: "completed",
    },
    {
      id: 2,
      name: "Build LCUI",
      status: "completed",
    },
    {
      id: 3,
      name: "Read LCUI tutorials",
      status: "active",
    },
    {
      id: 4,
      name: "Create my LCUI application",
      status: "active",
    },
  ] as const;
  return (
    <section>
      <div className="container">
        <h2 className="text--center">Create user interfaces from widgets</h2>
        <p className="text--center description margin-bottom--lg margin-top--lg">
          LCUI lets you build user interfaces out of individual pieces called
          widgets. Create your own LCUI widgets and combine them into entire
          screens, pages, and apps.
        </p>
        <ExamplePreview
          editorContent={
            <Tabs>
              <TabItem value="xml" label="todolist.xml" default>
                <CodeBlock language="xml">{XmlSource}</CodeBlock>
              </TabItem>
              <TabItem value="css" label="todolist.css">
                <CodeBlock language="css">{CssSource}</CodeBlock>
              </TabItem>
              <TabItem value="c" label="todolist.c">
                <CodeBlock language="c">{CSource}</CodeBlock>
              </TabItem>
            </Tabs>
          }
          windowTitle="Todo List"
          windowContent={
            <>
              {list.map((item) => (
                <TaskItem key={item.id} item={item} />
              ))}
            </>
          }
        />
      </div>
    </section>
  );
}
