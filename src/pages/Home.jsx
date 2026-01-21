import CreateWishForm from '@/components/CreateWishForm';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';

const Home = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery();

  return (
    <div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl ">
              <img src={'cake.svg'} width={85} height={85} />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            Birthday Wisher
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            Send magical birthday wishes to your loved ones — just with a link.
          </div>

          {isDesktop ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Create a Birthday Wish</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px] p-6 bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-foreground">
                    Create a Birthday Wish 🎂
                  </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <CreateWishForm />
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">Create a Birthday Wish</Button>
              </DrawerTrigger>
              <DrawerContent className="bg-white">
                <DrawerHeader className="text-left">
                  <DrawerTitle>Create a Birthday Wish 🎂</DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className="px-4 mb-6">
                  <CreateWishForm />
                </div>
              </DrawerContent>
            </Drawer>
          )}

          <div className="mt-16 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Free to use
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              No sign-up required
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
