import { useRef, useState } from "react";
import { db } from "../../../db";
import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import style from "./MarkdownEditor.module.css";
import debounce from "lodash.debounce";
import { Button, Input } from "@mantine/core";

export const MarkdownEditor = () => {
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("Новая заметка");

  const ref = useRef(null);

  async function addNote() {
    try {
      const id = await db.notes.add({
        title,
        note,
        date: new Date(),
      });

      setStatus(`New note${id} added`);
      setNote("");
      setTitle("");
    } catch (error) {
      setStatus(`Failed to add: ${error}`);
    }
  }

  const handleChange = debounce((value) => {
    setNote(value);
  }, 500);

  return (
    <>
      <div className={style.content}>
        <Button onClick={addNote}>Добавить заметку</Button>
        {/* <Button onClick={()=> }>Заголовок</Button> */}
        <Input
          type="text"
          placeholder="Заголовок"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <MDXEditor
          ref={ref}
          markdown={"# Новая заметка"}
          onChange={handleChange}
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            markdownShortcutPlugin(),
          ]}
          contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow=500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
        /> */}
      </div>
    </>
  );
};
