
import { MapPin } from "lucide-react";

const LondonSouthEastHero = () => {
  return (
    <section className="py-16 lg:py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            London & South East Medical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional event medical coverage across London and the South East, from major stadiums to prestigious venues. 
            Serving the capital and surrounding counties with qualified paramedics and state-of-the-art medical equipment.
          </p>
          <div className="flex items-center justify-center text-yellow-600 mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Covering Central London, Westminster, Camden, Islington, Hackney, Tower Hamlets, Greenwich, Southwark, Lambeth, Wandsworth, Hammersmith & Fulham, Kensington & Chelsea, Brent, Ealing, Hounslow, Richmond upon Thames, Kingston upon Thames, Merton, Sutton, Croydon, Bromley, Lewisham, Bexley, Havering, Barking & Dagenham, Redbridge, Newham, Waltham Forest, Haringey, Enfield, Barnet, Harrow, Hillingdon, Watford, St Albans, Hertford, Stevenage, Welwyn Garden City, Hemel Hempstead, Luton, Dunstable, Hatfield, Bishops Stortford, Ware, Cheshunt, Potters Bar, Borehamwood, Rickmansworth, Chorleywood, Amersham, Chesham, Beaconsfield, Marlow, High Wycombe, Aylesbury, Slough, Windsor, Maidenhead, Bracknell, Wokingham, Reading, Dartford, Gravesend, Sevenoaks, Tonbridge, Tunbridge Wells, Maidstone, Canterbury, Dover, Folkestone, Ashford, Margate, Ramsgate & Surrounding Areas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LondonSouthEastHero;
