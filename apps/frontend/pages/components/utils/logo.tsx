import React from "react";
import Image from "next/image";
import { Badge } from "components/ui/badge";
import Link from "next/link";

interface LogoProps{
  size: string;
}
class Logo extends React.Component<LogoProps> {
  
  render() {
    const size = this.props.size
    let content: JSX.Element | null = null;
    if (size === "sm") {
      content = (
        <Link href={"/"}>
          <div className="flex max-w-sm  items-center  justify-between gap-2">
            <Image
              className="h-10 w-10"
              src="/logo.svg"
              alt="logo"
              height={10}
              width={10}
            />
            <div>
              <Badge variant="secondary">Beta</Badge>
            </div>
          </div>
        </Link>
      );
    } else if (size === "xl") {
      content = (
        <Link href={"/"}>
          <div className="flex max-w-sm  items-center  justify-center gap-2">
            <Image
              className=" h-20 w-20"
              src="/logo.svg"
              alt="logo"
              height={30}
              width={30}
            />
            
          </div>
        </Link>
      );
    }

    return (
    <> {content}</>
     
    );
  }
}

export default Logo;
