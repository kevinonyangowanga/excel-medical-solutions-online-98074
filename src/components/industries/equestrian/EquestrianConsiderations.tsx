
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EquestrianConsiderations = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'rgba(210, 244, 6, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Key Considerations When Choosing Equestrian Medical Cover
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Important factors to consider when selecting medical cover for your equestrian event in the UK
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Provider Experience in Equestrian Sector</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Is your medical provider experienced in the equestrian sector? Have they covered similar horse riding events before across the UK?
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Risk Recognition & Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Does your provider recognise the high risk level when considering potential equestrian injuries and respond accordingly?
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Regulation Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Will your provider meet the medical regulations within your specific type of equestrian event as required by British governing bodies?
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Insurance Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Do they have medical malpractice and public liability insurance that meets your expectations and UK requirements?
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Vehicle Suitability for Terrain</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                What vehicles do they use? Are they suitable for your event terrain and cross-country requirements across British countryside?
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">CQC Registration & Regulation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Are they registered and regulated by the Care Quality Commission (CQC) as required for medical services in the UK?
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EquestrianConsiderations;
