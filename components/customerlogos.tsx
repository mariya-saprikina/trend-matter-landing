import Image from 'next/image';

const logos = [
  {name: 'Vercel', logo: 'https://dub.co/_static/clients/vercel.svg'},
  {name: 'Prisma', logo: 'https://dub.co/_static/clients/prisma.svg'},
  {name: 'Raycast', logo: 'https://dub.co/_static/clients/raycast.svg'},
  {name: 'hashnode', logo: 'https://dub.co/_static/clients/hashnode.svg'},
  {name: 'Clerk', logo: 'https://dub.co/_static/clients/clerk.svg'},
  {name: 'Perplexity', logo: 'https://dub.co/_static/clients/perplexity.svg'},
  // {name: 'Cal.com', logo: 'https://dub.co/_static/clients/cal.svg'},
  // {name: 'Replicate', logo: 'https://dub.co/_static/clients/replicate.svg'},
  // {name: 'Framer', logo: 'https://dub.co/_static/clients/framer.svg'},
  // {name: 'Tinybird', logo: 'https://dub.co/_static/clients/tinybird.svg'},
  // {name: 'Attio', logo: 'https://dub.co/_static/clients/attio.svg'},
  // {name: 'Appwrite', logo: 'https://dub.co/_static/clients/appwrite.svg'},
];

export default function CustomerLogos() {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
      {logos.map((logo, index) => (
        <div key={index}>
          <Image
            src={logo.logo}
            alt={logo.name}
            width={520}
            height={182}
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
          />
        </div>
      ))}
    </div>
  );
}
