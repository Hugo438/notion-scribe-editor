
import { Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Code,
  Quote,
  Undo,
  Redo,
  Link,
  Image,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-slate-200 p-2 flex flex-wrap gap-1 overflow-x-auto">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-slate-200' : ''}
        aria-label="Bold"
      >
        <Bold className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-slate-200' : ''}
        aria-label="Italic"
      >
        <Italic className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'bg-slate-200' : ''}
        aria-label="Underline"
      >
        <Underline className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'bg-slate-200' : ''}
        aria-label="Strike"
      >
        <Strikethrough className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-slate-200 mx-1"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().textAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'bg-slate-200' : ''}
        aria-label="Align Left"
      >
        <AlignLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().textAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'bg-slate-200' : ''}
        aria-label="Align Center"
      >
        <AlignCenter className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().textAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'bg-slate-200' : ''}
        aria-label="Align Right"
      >
        <AlignRight className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().textAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'bg-slate-200' : ''}
        aria-label="Align Justify"
      >
        <AlignJustify className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-slate-200 mx-1"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'bg-slate-200' : ''}
        aria-label="Heading 1"
      >
        <Heading1 className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'bg-slate-200' : ''}
        aria-label="Heading 2"
      >
        <Heading2 className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'bg-slate-200' : ''}
        aria-label="Heading 3"
      >
        <Heading3 className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-slate-200 mx-1"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-slate-200' : ''}
        aria-label="Bullet List"
      >
        <List className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-slate-200' : ''}
        aria-label="Ordered List"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-slate-200 mx-1"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'bg-slate-200' : ''}
        aria-label="Code Block"
      >
        <Code className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-slate-200' : ''}
        aria-label="Blockquote"
      >
        <Quote className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-slate-200 mx-1"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setLink({ href: prompt('URL', 'https://') || '' }).run()}
        className={editor.isActive('link') ? 'bg-slate-200' : ''}
        aria-label="Link"
      >
        <Link className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          const url = prompt('Image URL', 'https://');
          if (url) {
            editor.chain().focus().insertImage({ src: url }).run();
          }
        }}
        aria-label="Image"
      >
        <Image className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-slate-200 mx-1"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        aria-label="Undo"
      >
        <Undo className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        aria-label="Redo"
      >
        <Redo className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MenuBar;
