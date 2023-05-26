import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto_Flex } from "next/font/google";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface IProps extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: IProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  console.log({ getLayout, pageProps });
  return (
    <>
      <style jsx global>
        {`
          :root {
            --roboto-flex-font: ${robotoFlex.style.fontFamily};
          }
        `}
      </style>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
