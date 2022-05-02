'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [
      {
        userId: 1,
        categoryId: 1,
        name: 'FoodieLand Night Market',
        description: 'FoodieLand is a foodie-inspired three-day event where family and friends gather together for food and drink, shopping, and entertainment.',
        imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F230834069%2F285623250502%2F1%2Foriginal.20210607-192026?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ae262cd7df5c965d755afd5eeea406cf',
        date: '2022-06-04',
        location: 'Rose Bowl Stadium, Pasadena, CA 91103',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        categoryId: 1,
        name: '626 Night Market: Orange County',
        description: "California's famous 626 Night Market is inspired by the night markets of Asia. 200+ local food, shopping, arts vendors, and live music!",
        imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F249656069%2F37045133340%2F1%2Foriginal.20220317-181353?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1500%2C750&s=42b02a7f61e98d95932d05627de10694',
        date: '2022-06-08',
        location: 'OC Fair & Event Center, Costa Mesa, CA 92606',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        categoryId: 1,
        name: "2022 LONG BEACH SEAFOOD FESTIVAL",
        description: "This event celebrates the region's delicious seafood and unique recipes from local chefs to the finest restaurants throughout Los Angeles and Orange County. This is an all age outdoor event alongside the Lighthouse in Long Beach, California with a stunning view of the ocean and the Queen Mary.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F193104589%2F162681694873%2F1%2Foriginal.20211129-085948?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C6%2C982%2C491&s=ba7af1024a21adfb38f170409c2c6acd",
        date: "2022-05-28",
        location: "SHORELINE AQUATIC PARK, Long Beach, CA 90802",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        categoryId: 2,
        name: "Los Angeles Career Fair",
        description: "Meet Live and In-person and Interview with Local and Nationally Known Employers at The Los Angeles Job Fair & Career Fair",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F168579509%2F72054276821%2F1%2Foriginal.20191120-174005?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=47%2C0%2C1304%2C652&s=1c772e768de9eb88bd245a58b4e7e1b8",
        date: "2022-05-18",
        location: "Hilton Los Angeles Airport, Los Angeles, CA 90045",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        categoryId: 2,
        name: "TECHSPO Los Angeles 2022 Technology Expo (AdTech ~ MarTech)",
        description: "Where Business, Tech and Innovation Collide in LA!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F119227241%2F167645577512%2F1%2Foriginal.20201202-032517?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=097b2d4087fa079a9ef70a32db7733fe",
        date: "2022-07-12",
        location: "Loews Hollywood Hotel, Los Angeles, CA 90028",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        categoryId: 3,
        name: "Batman Returns 30th Anniversary Screening And Q&A",
        description: "Celebrate the 30th anniversary of Batman Returns on June 25th with a screening and Q&A at the Montalbán Theatre in Hollywood.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F245137019%2F247369901443%2F1%2Foriginal.20220310-191823?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=7f467b056129142dbec2806d68d7edc4",
        date: "2022-06-25",
        location: "The Montalbán, Los Angeles, CA 90028",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        categoryId: 3,
        name: "Midnight Madness Comedy Show",
        description: "The night owls looking for drinks and live entertainment, join us every night at Midnight!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F144294007%2F425920946575%2F1%2Foriginal.20210802-165355?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=969ef64b12b66913440bae4e7176aa8b",
        date: "2022-05-29",
        location: "Third Wheel Live, Los Angeles, CA 90029",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        categoryId: 3,
        name: "35mm LORD OF THE RINGS MARATHON @ the Million Dollar Theater",
        description: "A stunning conclusion to a generation's greatest trilogy. Join us at the Million Dollar Theater for a day of cinema and a journey as epic as the imagination. On 35mm!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F261081669%2F232157617677%2F1%2Foriginal.20220405-165450?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2100%2C1050&s=fe8a48f61838813c53bf234d4b11aae4",
        date: "2022-05-28",
        location: "Million Dollar Theater, Los Angeles, CA 90013",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        categoryId: 4,
        name: "Blame It On The Henny Party",
        description: "Get ready for a night of Hip Hop, R&B, Afrobeat, And more! Music from Megan Thee Stallion, Erica Banks, Migos, Kamaiyah, Gucci Mane, Tee Grizzley, City Girls, Roddy Rich, Danileigh, A Boogie Wit Da Hoodie, Future, Drake, DaBaby , G-Eazy, Tory Lanez, Big Sean, Lil Wayne, K Camp, Dojo Cat, Tyga & More!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F268405189%2F228709898406%2F1%2Foriginal.20210622-044619?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d6c50f2ef438fa0df024c199181a06a6",
        date: "2022-05-20",
        location: "Catch One,Los Angeles, CA 90019",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        categoryId: 4,
        name: "Electrify Los Angeles",
        description: "Get ready to BOUNCE & RAGE at Electrify Los Angeles!!!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F264810779%2F238995691457%2F1%2Foriginal.20220411-193013?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C109%2C1920%2C960&s=3e9de815a40f711eac94616e6d468712",
        date: "2022-06-04",
        location: "Catch One,Los Angeles, CA 90019",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        categoryId: 4,
        name: "Music of India and Music of China Ensembles",
        description: "The Music of India Ensemble and The Music of China Ensemble showcase traditional music from these regions on the same stage.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F244435569%2F330654787051%2F1%2Foriginal.20220309-210618?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=153%2C0%2C520%2C260&s=dcedc1fc7e1b7962860ea404ed9f43ed",
        date: "2022-05-13",
        location: "UCLA Schoenberg Hall,Los Angeles, CA 90095-1657",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        categoryId: 5,
        name: "LA FASHION WEEK CASTING BOOT CAMP",
        description: "THIS runway modeling course will train models in basic runway techniques such as posture, stride, confidence, pace and posing.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F165073719%2F169279070478%2F1%2Foriginal.20211011-183305?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1284%2C642&s=2a874b7a9c01479b2bfd381419d5c38e",
        date: "2022-06-12",
        location: "The industry loft, Los Angeles, CA 90038",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        categoryId: 5,
        name: "2022 Woodbury University Fashion Show",
        description: "Join us in celebrating our talented Woodbury fashion design students as we showcase their spectacular collections. Odyssey, an adventurous journey, defines the theme through which our students create design narratives reflecting their personal creative journey and envisioning their next journey into the fashion industry.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F259156919%2F304280111699%2F1%2Foriginal.20220401-235451?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e401f15be477100c00b73cc43650bfb5",
        date: "2022-05-01",
        location: "Petersen Automotive Museum, Los Angeles, CA 90036",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        categoryId: 6,
        name: "International Ride of Silence Thousand Oaks",
        description: "Each year we ride in solemn remembrance of the tragic deaths and serious injuries to cyclists on America’s roads at the hands of motorists.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F275285979%2F533159731899%2F1%2Foriginal.20220428-214635?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C105%2C1920%2C960&s=af77f266c8e9eb76eb59d9194b55a821",
        date: "2022-05-18",
        location: "Pedals & Pints Brewing Company, Thousand Oaks, CA 91360",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        categoryId: 6,
        name: "Santino Bros. Live Pro Wrestling: Play Around, Lay Around",
        description: "Showcasing the brightest homegrown stars of Santino Bros. on Friday June 17th in Cudahy, CA.! Pro Wrestling you're not gonna want to miss!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F269956749%2F304636353054%2F1%2Foriginal.20220420-153301?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=100%2C0%2C1844%2C922&s=940ecc7bd787e06ea8d8aa495411a528",
        date: "2022-06-17",
        location: "Leo P.Turner Community Center, Cudahy, CA 90201",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        categoryId: 6,
        name: "Free Outdoor Total Body Workout Class—Fit in 45 with Ari G",
        description: "Work on cardio, core and strength in a free midday workout at Ivy Station!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F220165279%2F597653179823%2F1%2Foriginal.20211227-234254?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ade7d54b4dae2dc8247a8a3bf3843157",
        date: "2022-07-08",
        location: "Ivy Station, Culver City, CA 90232",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Events', null, {});

  }
};
