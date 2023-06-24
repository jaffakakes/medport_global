import Image from 'next/image';

export default function Services() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-600">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Health and Social Care', 'HR Recruitment', 'Justice and Prisons', 'Consultancy', 'Housing and Partnership', 'Events'].map((service) => (
          <div key={service} className="relative overflow-hidden group shadow-lg rounded bg-white">
            <Image src="/Template.png" alt={service} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-0" />
            <h3 className="relative text-2xl font-bold z-10 p-4">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
