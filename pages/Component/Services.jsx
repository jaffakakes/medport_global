import Image from 'next/image';
import Link from 'next/link';

const imageLinks = [
  'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Template.png?alt=media&token=05ed2607-4625-4d00-baa9-1a9cb8b9c8c9',
  'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Frecuitment_process.jpg?alt=media&token=1c173749-ccd6-462a-ad88-cefc3923985b',
  'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2FPrison_Officer.jpg?alt=media&token=cdf8d38f-993a-4bfb-b7ce-0b1a0ec05d60',
  'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Consultancy%2Fscott-graham-5fNmWej4tAA-unsplash.jpg?alt=media&token=239c0801-6138-4868-8cb7-7328b632a22c',
  'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fwiktor-karkocha-WA2uSCbTXkI-unsplash.jpg?alt=media&token=ecaa2372-c20a-4848-816d-9543cea8f2d8',
  'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Ftoptalent.jpg?alt=media&token=09b43ded-87dd-4056-ab68-358ee4dd60c8',
];
const Links = [
  '/ServicePage?service=health-social-care',
  '/ServicePage?service=hr-recruitment',
  '/ServicePage?service=justice-prisons',
  '/ServicePage?service=housing-partnership',
  '/ServicePage?service=consultancy',
  'https://www.eventbrite.com/o/medport-global-67732812853'
];

export default function Services() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-600">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Health and Social Care', 'HR Recruitment', 'Justice and Prisons', 'Consultancy', 'Housing and Partnership', 'Events'].map((service, index) => (
          <Link key={service} href={Links[index]}>
           
              <div className="relative overflow-hidden group shadow-lg rounded bg-white" style={{position: "relative", height: 0, paddingBottom: "50%"}}>
                <Image src={imageLinks[index]} alt={service} layout="responsive" objectFit="cover" width={500} height={300} />
                <div className="absolute inset-0 bg-gray-500 bg-opacity-50 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-0" />
                <h3 className="absolute bottom-0 text-2xl font-bold text-white z-10 p-4">{service}</h3>
              </div>
           
          </Link>
        ))}
      </div>
    </div>
  );
}


