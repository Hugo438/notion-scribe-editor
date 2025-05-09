
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import MenuBar from './MenuBar';

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image,
      Link.configure({
        openOnClick: true,
      }),
      Youtube.configure({
        width: 640,
        height: 480,
        controls: true,
        nocookie: true,
      }),
    ],
    content: `
      <h1>Welcome to your NotionLike Editor!</h1>
      <p>This is a <strong>TipTap</strong> editor with <em>enhanced formatting</em> capabilities.</p>
      <p>Try out the formatting options in the toolbar below:</p>
      <ul>
        <li>Create different levels of headings</li>
        <li>Format your text with <strong>bold</strong>, <em>italic</em>, <u>underline</u>, or <s>strikethrough</s></li>
        <li>Align your text to the left, center, right, or justify it</li>
        <li>Create bullet or numbered lists</li>
        <li>Add code blocks, quotes, links, images, and YouTube videos</li>
      </ul>
      <blockquote>You can add quotes like this one.</blockquote>
      <p>Start typing to create your content...</p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-slate max-w-none focus:outline-none p-5',
      },
    },
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white border border-slate-200 rounded-lg shadow-sm h-full">
      <div className="overflow-auto flex-1">
        <EditorContent editor={editor} className="h-full" />
      </div>
      <div className="sticky bottom-0 w-full bg-white border-t border-slate-200 z-10">
        <MenuBar editor={editor} />
      </div>
    </div>
  );
};

export default TipTapEditor;
