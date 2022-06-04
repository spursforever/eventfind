'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [
      {
        userId: 1,
        name: 'FoodieLand Night Market - Berkeley | August 5-7',
        description: 'FoodieLand is the perfect outdoor food event for everyone. A must-attend for foodies, this exclusive festival overlooking the San Francisco Bay is inspired by the Night Markets of Asia. Bring your friends together for late-night sounds, tastes, and scents where you can experience a street festival this summer in the Bay Area.',
        imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F230834389%2F285623250502%2F1%2Foriginal.20210604-004626?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=141071e2ca980bc9fa2f53d3f133e508',
        date: '2022-08-07',
        location: '1100 Eastshore Highway, Berkeley, CA 94710',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'EatBlkCharlotte Food & Culture Festival',
        description: "This is a free, family-friendly event. Feel free to bring your lawn chairs and picnic blankets. If you would like to help further support the Eat Black Charlotte mission, consider giving a donation under the ticket option.",
        imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F282296409%2F74076334835%2F1%2Foriginal.20220510-203157?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1178ad1c5db5d581a97e3987e6fe9df4',
        date: '2022-06-11',
        location: '835 Gesco Street, Charlotte, NC 28208',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Burger Battle Detroit 2022",
        description: "The competition is centered around the votes of our ticket holders. And every ticket holder gets a vote! The top 5 vote getters then move on to the final round where their burgers will be judged by our celebrity judges panel made up of local celebrities, foodies, and food critics.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F86445969%2F145538342592%2F1%2Foriginal.20181211-190341?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C4%2C768%2C384&s=912a9fd7b58f4187f08e963cc4cc1754",
        date: "2022-06-26",
        location: "2934 Russell Street, Detroit, MI 48207",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "VEGAN BBQ PARTY",
        description: "Join us for an epic 4th of July themed:Plant Based Pre-Game Party! This is a cookout you're not going to want to miss - Local vendors will be serving classic BBQ-inspired cuisine (made 100% vegan). From hot dogs and burgers to sweets and treats, you'll want to arrive hungry and ready to grub on the best-of-the-best plant based eats!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F226738029%2F60239943365%2F1%2Foriginal.20220209-035634?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=99752af629be0c38bbdcb682fb42223b",
        date: "2022-07-02",
        location: "32 East Las Olas Boulevard, Fort Lauderdale, FL 33301",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Tech and Startup Networking Mixer",
        description: "Join us to connect with co-founders, coaches or new hires, or even if you would like to practice your elevator pitch. This is a no pressure event that brings in a lot of talent in tech and startup space, you would stand to benefit from the conversations and meaningful connections.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F282894479%2F104075561679%2F1%2Foriginal.20220511-164135?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C252%2C2304%2C1152&s=728cf71b126310f0b90106f5112cbee4",
        date: "2022-06-16",
        location: "93 Bowery, New York, NY 10002",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Philadelphia Job Fair Presented by REFORM Alliance and Hire! Philly",
        description: "The Philadelphia job fair which starts at 10 am EDT and goes until 4 pm EDT is open to the public and aims to serve as a key pathway for economic opportunity for formerly incarcerated people, single parents, and veterans. Representatives of poverty alleviation and workforce development programs will also participate in the event to provide critical services to attendees.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F289880509%2F674263735893%2F1%2Foriginal.20220523-184527?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f969eaa63511faf4e3ab58d52bd589b44",
        date: "2022-06-09",
        location: "3601 South Broad Street, Philadelphia, PA 19148",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "NJ: State of the Market Summit",
        description: "Now I am not saying that a market crash is coming nor is short sales something you should be looking into. This event is instead focus on learning from wholesalers, fix and flip, cashflow, hard money and lenders on what went down during the market correction of 2007 and how we as investors can best position our self to take advantage of it.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F224414439%2F23264811630%2F1%2Foriginal.20220123-101604?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C74%2C2160%2C1080&s=47a5cd1a0a9803a65dae09ddd1ec7a1c",
        date: "2022-06-25",
        location: "650 Terrace Avenue, Hasbrouck Heights, NJ 07604",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "The SHP Christian Foundation Movie Event",
        description: "The Ip Man Series is sponsored by The SHP Christian Foundation. Doors close at 3pm and the program will start on time. There will be a 5-minute message from a local church prior to the film starting. For inquiries, please email bleung@shpfoundation.org or call 650-772-4340.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F264987869%2F798805729713%2F1%2Foriginal.20220412-000450?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=12%2C5%2C1370%2C685&s=6d0ed2dc0633e0a96af44918e0aab58e",
        date: "2022-08-08",
        location: "2215 Broadway, Redwood City, CA 94063",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Landmark Theatres Opening Day at Annapolis Harbour Center",
        description: "You and a Guest are Invited to experience the new Landmark Theatre at Annapolis Harbour Center at an Open House featuring one of our favorite films, the original BACK TO THE FUTURE starring Michael J. Fox and Christopher Lloyd in an epic time traveling adventure!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F294832359%2F491898644023%2F1%2Foriginal.20220531-204512?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=a7da07bbbf0bd6658d31eb1751cacee7",
        date: "2022-06-26",
        location: "2474 Solomons Island Road Unit H-1, Annapolis, MD 21401",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "TOP GUN: MAVERICK - Saturday to Wednesday - 3:30 pm Shows",
        description: "This follow-up to the iconic 1980s classic is being hailed as one of the best sequels of all time with action never before seen on film! After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F297125009%2F108226560687%2F1%2Foriginal.20220604-130810?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=000c82236124420485146e2f65bf9ed9",
        date: "2022-07-22",
        location: "675 Merrimon Avenue, Asheville, NC 28804",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "FREE Jurassic Park Drive-In Movie presented by G&G Smoke Shop",
        description: "Falconwood Park is excited to announce the return of the Drive-in Movies, now FREE TO THE PUBLIC, on our new 50ft screen and remodeled concession building with a fully stocked bar! Gates at 7:00pm (please do not arrive before gates open), Movies at dusk.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F286548349%2F144887471163%2F1%2Foriginal.20220517-211044?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=eefc49977d738644bb8b0bc590985158",
        date: "2022-06-08",
        location: "905 Allied Road, Bellevue, NE 68123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "PRIVACY SATURDAYS at SPACE HTX - RSVP NOW! FREE ENTRY & MORE",
        description: "RSVP NOW! FREE ENTRY, $5 DRINKS, $200 BOTTLES & MORE TIL 11PM w/RSVP. CALL OR TEXT FOR SECTION RESERVATIONS 832.713.8404",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F279991389%2F519606615571%2F1%2Foriginal.20220506-140826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C160%2C1920%2C960&s=f352fb35e31ee7e541ed9e8d71bb081f",
        date: "2022-07-14",
        location: "2401 San Jacinto Street, Houston, TX 77002",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "2023 Dallas Soul Flower Music Fest",
        description: "Welcome to the 2023 Soul Flower Music Fest. This is one of the countries most beautiful events taking place on a very special weekend. Treat your soul to an unforgettable experience at Main Street Garden Park. Soul Flower Music Fest is a one day music Festival featuring National and Local Soul, R&B, Neo Soul and Hip-Hop Artists. In addition to great music, there will be food, games, shopping, contests and great vibes.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F204437499%2F198187202752%2F1%2Foriginal.20210709-205428?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C160%2C960%2C480&s=4cb64271ec1502db567a66998b85fb8f",
        date: "2022-06-18",
        location: "1902 Main Street, Dallas, TX 75201",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Dexta Daps Performing Live in Brooklyn,NY!",
        description: "Dexta Daps makes his highly anticipated return to Brooklyn, New York, with a live band, for what promises to be an unforgettable experience! This is a can’t miss event, we strongly encourage early ticket purchase.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F281733989%2F474377174319%2F1%2Foriginal.20210920-154029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ce185c924bea71b7d5e33a9a4c4846b7",
        date: "2022-08-20",
        location: "3050 Stillwell Avenue, Brooklyn, NY 11224",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Yoga with Goats 2022",
        description: "Lay your mat in the field. Try to pay attention to yoga while baby goats climb on you, push you over and generally cause a ruckus. Join teachers from Hot and Soul Yoga and Synergy Hot Yoga Studios as they teach Yoga with Goats at OASIS tlc!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F260218979%2F240339308396%2F1%2Foriginal.20210128-182057?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=0a2da33d24b5a1b0207c6c996ac221f6",
        date: "2022-10-10",
        location: "89 Sleepy Hollow Road, Red Bank, NJ 07701",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Wounded Veterans Watersports 2022",
        description: "The Lake of the Woods Adaptive Watersports Foundation is excited to bring watersports to wounded veterans and their families. There will be adaptive waterskiing, tubing, pontoon rides, kayaking, and paddleboarding! For the fourth year in a row, we are partnering with Therapeutic Adventures - IndependencePlus Adaptive Sports to bring adaptive paddling!",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F273671719%2F179338427495%2F1%2Foriginal.20191227-193838?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=140%2C482%2C5044%2C2522&s=c77e758a8dd2a6e29b43f30b3e04f743",
        date: "2022-06-18",
        location: "102 Lake of the Woods Way, Locust Grove, VA 22508",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "2022 Loop the Lake Festival",
        description: "Join us on Saturday, June 18, 2022 to celebrate biking in Bemidji. The route starts at the Sanford Event Center and loops around Lake Bemidji. Stops are set up along the way! Enjoy music and food at Bemidji State Park, a quick little snack break at Ruttger's and other stops along the route to take great photos. Registration includes food, music, and photo ops on a scenic route. ",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F150680129%2F269132364738%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C451%2C2546%2C1273&s=db8356b2f6ffe2f910adc137c03419b4",
        date: "2022-06-18",
        location: "1111 Event Center Drive Northeast, Bemidji, MN 56601",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "NEW YORK SUMMER FASHION EXPLOSION (NYSFE) 2022",
        description: "Join us for the 202 2 NYSFE VOL 6 Summer Fashion Explosion. New York Summer Fashion Explosion is an unforgettable experience combines with fashion, art, and music. An all star lined up ready to kick off Summer 2022",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F228792919%2F71252827675%2F1%2Foriginal.20220212-040159?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C271%2C1414%2C707&s=b80e1d2718df7b6f3179a2074f667480",
        date: "2022-06-25",
        location: "Manhattan, New York, NY 10001",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "The Silverfox Squad presents: Love, Fashion & Health Gala Party",
        description: "The entire Silverfox Squad will be in Houston, Tx on Saturday, June 11, 2022, to host the 'Love, Fashion & Health' Gala Party. This event will make headlines, so this is your opportunity to get up and close to hang out with the Silverfox Squad. We're excited to bring the Silverfox Squad to Houston, Tx - so get ready for a night of fun, food, drinks, music, dancing, and adult topics.",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F229170339%2F806302723873%2F1%2Foriginal.20220213-152933?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C282%2C1240%2C620&s=b6d20a845b0f23ea6317400d4e80ee8c",
        date: "2022-06-11",
        location: "5925 Almeda Road, Houston, TX 77004",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Self Love Fashion Show",
        description: "Confidence, Self love and fashion hit the runway while showcasing the importance of loving yourself .",
        imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F269399529%2F910890942203%2F1%2Foriginal.20220419-180535?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C640&s=d9d2dd553c78314ed182f47b8914d53f",
        date: "2022-06-18",
        location: "2844 Logan St., Nashville, TN 37211",
        createdAt: new Date(),
        updatedAt: new Date()
      },      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
