
import { MapPin } from "lucide-react";

const YorkshireCoverageAreas = () => {
  const areas = [
    "Leeds", "Sheffield", "York", "Bradford", "Kingston upon Hull", "Doncaster",
    "Rotherham", "Barnsley", "Wakefield", "Huddersfield", "Halifax", "Grimsby",
    "Scunthorpe", "Dewsbury", "Batley", "Keighley", "Harrogate", "Scarborough",
    "Castleford", "Pontefract", "Brighouse", "Cleckheaton", "Hebden Bridge",
    "Ilkley", "Skipton", "Ripon", "Whitby", "Filey", "Bridlington", "Goole",
    "Selby", "Thirsk", "Malton", "Pickering", "Richmond", "Northallerton"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Yorkshire Coverage Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive event medical services across all major Yorkshire towns and cities, 
            from the Yorkshire Dales to the North Sea coast.
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
            Don't see your area listed? We cover the entire Yorkshire region - 
            <span className="font-semibold"> contact us for availability in your location.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default YorkshireCoverageAreas;
