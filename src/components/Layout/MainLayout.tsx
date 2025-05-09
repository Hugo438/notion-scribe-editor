
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-1 overflow-hidden flex items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
