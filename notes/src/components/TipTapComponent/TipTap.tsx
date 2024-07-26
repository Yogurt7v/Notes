import "./styles.scss";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { Notes, db } from "../../../db";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

export const MenuBar = () => {
  const { editor } = useCurrentEditor();
  const id = useParams().id;

  useEffect(() => {
    db.notes.get(Number(id)).then((note: Notes | undefined) => {
      if (!note) {
        return;
      }
      editor?.commands.setContent(note.note);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group">
        <div className="button-group-inner">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            Жирный
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            Курсивный
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            Перечёркнутый
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            Выделить текст
          </button>
          <button
            onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            className={
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : ""
            }
          >
            Изменить цвет текста
          </button>
        </div>
        <div className="button-group-inner">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            H3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
          >
            H4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
          >
            H5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
          >
            H6
          </button>
        </div>
        <div className="button-group-inner">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            Неупорядоченный список
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            Упорядоченный список
          </button>
        </div>

        <div className="button-group-inner">
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            Отступ
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            Горизонтальная черта
          </button>
        </div>
        <div className="button-group-inner">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            Undo
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(), //({ types: [ListItem.name] })
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>

<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

export const TipTap = () => {
  // const [status, setStatus] = useState("");
  const [note, setNote] = useState(content);

  const navigate = useNavigate();
  const id = useParams().id;

  async function addNote() {
    try {
      const id = await db.notes.add({
        note: note,
        date: new Date(),
      });

      // setStatus(`New note${id} added`);
      navigate(`/notes/${id}`);
    } catch (error) {
      // setStatus(`Failed to add: ${error}`);
    }
  }

  async function updateNote() {
    try {
      const num = Number(id);
      await db.notes.update(num, {
        note,
      });
      // setStatus(`Note updated`);
      navigate(`/notes/${id}`);
      setNote("");
    } catch (error) {
      // setStatus(`Failed to update: ${error}`);
    }
  }

  return (
    <div>
      {status}
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        onUpdate={({ editor }) => {
          setNote(editor.getHTML());
        }}
      ></EditorProvider>

      <Button onClick={id ? updateNote : addNote}>
        {id ? "Update" : "Add"} Note
      </Button>
    </div>
  );
};
