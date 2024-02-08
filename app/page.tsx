import { WaitlistForm } from "./components/WaitlistForm";

const sampleData = {
  name: "Stephan Gulbal",
  title: "Co-Founder & Chief Innovation Officer",
  location: "Florida, United States",
  about: "Digital transformation: are you ready for exponential change?",
  socials: {
    linkedin: "https://www.linkedin.com/in/stephan-gulbal-0b1b3b1b",
    x: "https://x.com/stephgulb",
  },
  email: "s.gulbal@proximai.com",
  company: {
    name: "Proximai",
    website: "https://proximai.com",
    linkedin: "https://www.linkedin.com/company/7445140971/",
    description:
      "Proxiai is the first Intelligent Solutions and Talent Marketplace in the world. At the forefront of the AI revolution, Proximai unveils the Intelligent Solutions and Talent Marketplace (ISTM) - a groundbreaking platform where AI innovation meets human talent. It's more than just a marketplace; it's a dyna...",
    industry: "Information Services",
    size: 11,
  },
};

export default function Home() {
  return (
    <main>
      <div className="container max-w-4xl mx-auto py-4 px-4 lg:px-0">
        <h1 className="font-bold text-xl">Founders List</h1>
        <div className="h-8"></div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-lg">
            <p>
              Instantly access to
              <span className="bg-lime-400/40 font-bold"> hand-curated </span>
              database of founders and their <strong>socials</strong>,{" "}
              <strong>emails</strong>, and <strong>companies</strong>.
            </p>
            <p>
              Search by <strong>location</strong>, <strong>industry</strong>,{" "}
              <strong>company size</strong> and more.
            </p>
            <p>
              Export to <strong>excel</strong> or <strong>csv</strong>
            </p>
          </div>
          <div className="h-8"></div>
          <div className="flex flex-col gap-1">
            <div>
              Soft-launch at:{" "}
              <time className="font-semibold">14th February 2024</time> with{" "}
              <strong>+1000</strong> entry (only available to waitlist members)
            </div>
            <div>
              Expected total entries by the end of the year:{" "}
              <strong>+100.000</strong>
            </div>
          </div>
        </div>

        <div className="h-16"></div>
        <WaitlistForm />
        <div className="h-16"></div>
        <div>
          <div>
            Sample data <span className="italic">(altered from real data)</span>
          </div>
          <pre className="p-2 rounded-md bg-gray-200 text-wrap w-content">
            {JSON.stringify(sampleData, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}
