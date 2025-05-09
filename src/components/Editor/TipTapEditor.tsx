
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h1>Welcome to your NotionLike Editor!</h1>
      <p>This is a <strong>TipTap</strong> editor with <em>basic formatting</em> capabilities.</p>
      <p>Try out the formatting options in the toolbar above:</p>
      <ul>
        <li>Create headings</li>
        <li>Format your text with <strong>bold</strong> or <em>italic</em></li>
        <li>Add lists like this one</li>
        <li>And much more!</li>
      </ul>
      <blockquote>You can even add quotes like this one.</blockquote>
      <p>Start typing to create your content...</p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-slate max-w-none focus:outline-none p-5',
      },
    },
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      <MenuBar editor={editor} />
      <div className="overflow-auto flex-1">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
};

export default TipTapEditor;
