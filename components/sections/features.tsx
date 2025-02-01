import {FEATURES} from '@/constants';
import FeatureCard from '../feature-card';

export default function Features() {
  return (
    <section className="max-container flex flex-col justify-center items-center gap-10">
      <div className="section-title">FEATURES</div>
      <h1 className="text-style-h1 text-primary text-center font-normal max-w-2xl">
        Find Trends That Matter Using Pro-Tools
      </h1>
      <div className="grid w-full grid-cols-1 xl:grid-cols-3 gap-3">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            title={feature.title}
            description={feature.description}
            index={index}
            key={feature.title}
          />
        ))}
        {/* <FeatureCard title="In-Depth Analysis" description="lalala" index={0} />
        <FeatureCard title="Lalala" description="lalala" index={1} />
        <FeatureCard title="Lalala" description="lalala" index={2} />
        <FeatureCard title="Lalalalalaalallaa" description="lalala" />
        <FeatureCard title="Lalala" description="lalala" /> */}
      </div>
    </section>
  );
}
