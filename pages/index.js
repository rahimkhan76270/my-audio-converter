import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">do a post request to the endpoint /api/convertBylink <br/>
        and the json payload should be of the type &#123; "url":"url containing the audio file" &#125;
    </div>
  );
}
