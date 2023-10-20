import { FC } from "react";
import Image from "next/image";


const Footer: FC = () => (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://dreamMachine.one"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{" "}
        <Image
          src="/DM.png"
          alt="DreamMachine"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
      <>DreamMachine</>
    </div>
  );


  export default Footer;