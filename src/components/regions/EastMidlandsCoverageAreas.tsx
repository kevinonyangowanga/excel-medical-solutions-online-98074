
const EastMidlandsCoverageAreas = () => {
  const areas = [
    {
      title: "Major Cities",
      cities: ["Nottingham", "Leicester", "Derby", "Lincoln", "Loughborough", "Mansfield", "Chesterfield", "Newark", "Grantham", "Boston"]
    },
    {
      title: "Leicestershire",
      cities: ["Melton Mowbray", "Hinckley", "Coalville", "Ashby-de-la-Zouch", "Wigston", "Oadby", "Market Harborough", "Lutterworth", "Market Bosworth", "Earl Shilton"]
    },
    {
      title: "Nottinghamshire", 
      cities: ["Hucknall", "Arnold", "Carlton", "West Bridgford", "Beeston", "Stapleford", "Kirkby-in-Ashfield", "Sutton-in-Ashfield", "Ollerton", "Southwell"]
    },
    {
      title: "Derbyshire",
      cities: ["Belper", "Heanor", "Ripley", "Ilkeston", "Long Eaton", "Sandiacre", "Eastwood", "Kimberley", "Alfreton", "Clay Cross"]
    },
    {
      title: "Lincolnshire",
      cities: ["Skegness", "Spalding", "Stamford", "Sleaford", "Gainsborough", "Market Rasen", "Louth", "Horncastle", "Mablethorpe", "Woodhall Spa"]
    },
    {
      title: "Northamptonshire",
      cities: ["Corby", "Kettering", "Wellingborough", "Rushden", "Daventry", "Brackley", "Towcester", "Higham Ferrers", "Irthlingborough", "Raunds"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Event Medical Coverage Across East Midlands
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {areas.map((area, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-3">{area.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {area.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EastMidlandsCoverageAreas;
