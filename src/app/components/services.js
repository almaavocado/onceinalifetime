const services = [
    {
      id: 1,
      name: 'Choreography',
      imageSrc: '/assets/groupPhoto.png',
      imageAlt: 'Choreography service example.',
      description: 'Custom choreography for the Quinceañera, chambelanes, and family for key dances such as the waltz, entrance, and surprise dance.',
    },
    {
      id: 2,
      name: 'Coordination',
      imageSrc: 'assets/coordination2.png',
      imageAlt: 'Coordination service example.',
      description: 'Directing and giving instructions to ensure each part of the program runs smoothly, from coronación to última muñeca.',
    },
    {
      id: 3,
      name: 'Additional Services',
      imageSrc: 'assets/musicMix.jpg',
      imageAlt: 'Additional services example.',
      description: 'Weekly practices, collaboration with vendors, music mixing, wardrobe advice, and day-of MC services.',
    },
  ];
  
  export default function Services() {
    return (
      <div id="services" className="bg-[#0F1B26] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">Our Services</h2>
          <p className="mt-4 text-lg text-gray-300">
            Celebrate your Quinceañera or Sweet 16 with expert choreography, coordination, and guidance to make your day truly unforgettable.
          </p>
  
          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md hover:shadow-lg"
              >
                <img
                  alt={service.imageAlt}
                  src={service.imageSrc}
                  className="h-56 w-full rounded-md object-cover group-hover:opacity-90"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <p className="mt-2 text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  