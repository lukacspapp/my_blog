import Image from "next/image";
import BrowserFrame from "../../components/BrowserFrame";
import AnimatedDescription from "../../components/Description/AnimatedDescription";


export default async function page() {
  return (
    <main className="body">
      <AnimatedDescription title={'Github Contributions'} description={''} />
          <BrowserFrame
            href="/github?search=lukacspapp"
            title="Github Contributions"
            containerClassName="relative m-auto h-full w-full max-w-sm sm:max-w-md grayscale-0 group-hover:grayscale-0 sm:grayscale"
          >
            <Image
              src={"/images/github.svg"}
              alt={"github-contributions"}
              width={1920}
              height={1080}
              priority={true}
            />
          </BrowserFrame>
    </main>
  )
}