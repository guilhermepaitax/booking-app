import { PropertySearch } from "./property-search";

export const HeroSection = () => {
  return (
    <section className="w-full bg-accent h-[573px] relative">
      <div className="absolute inset-0 object-cover h-full w-full bg-gradient-to-br from-background via-50% to-accent" />
      <div className="container h-full flex flex-col justify-center items-start relative">
        <div className="mb-12">
          <h2 className="font-black text-3xl md:text-5xl max-w-xl leading-tight">
            Book your property easily!
          </h2>
          <p className="mt-4 md:text-lg text-muted-foreground">
            Find your ideal space effortlessly and embark on your property
            journey today.
          </p>
        </div>
        <PropertySearch />
      </div>
    </section>
  );
};
