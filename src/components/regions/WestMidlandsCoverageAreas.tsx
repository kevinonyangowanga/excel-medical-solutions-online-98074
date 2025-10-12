
import { MapPin } from "lucide-react";

const WestMidlandsCoverageAreas = () => {
  const areas = [
    "Birmingham", "Wolverhampton", "Coventry", "Dudley", "Walsall", "West Bromwich",
    "Solihull", "Sutton Coldfield", "Stoke-on-Trent", "Worcester", "Hereford",
    "Shrewsbury", "Telford", "Kidderminster", "Redditch", "Bromsgrove", "Tamworth",
    "Burton upon Trent", "Cannock", "Stafford", "Lichfield", "Nuneaton", "Rugby",
    "Warwick", "Leamington Spa", "Stratford-upon-Avon"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            West Midlands Coverage Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive event medical services across all major West Midlands towns and cities, 
            from Birmingham to the surrounding counties.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {areas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
              <MapPin className="h-4 w-4" style={{ color: '#006400' }} />
              <span className="text-sm font-medium text-gray-700">{area}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't see your area listed? We cover the entire West Midlands region - 
            <span className="font-semibold"> contact us for availability in your location.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WestMidlandsCoverageAreas;
