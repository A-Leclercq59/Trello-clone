import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
