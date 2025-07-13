import { Phone, MapPin, Mail, Link } from 'lucide-react'; 
const GetInTouch = () => {
  const contactInfo = [
    { icon: Phone, title: 'Phone', lines: ['+1 (410) 228-7888'] },
    { icon: MapPin, title: 'Address', lines: ['806 Reisterstown Rd', 'Pikesville, MD 21208, USA'] },
    { icon: Mail, title: 'Email', lines: ['info@rccgthepraisehouse.org'], isLink: true, href: 'mailto:info@rccgthepraisehouse.org' },
  ];

  return (
    <section className="mb-16">
      <p className="text-5xl font-semibold text-center mb-10 text-secondary-700">Get In Touch</p> {/* text-secondary-700 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-background-200 p-6 backdrop-filter backdrop-blur-lg rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"> {/* bg-background */}
            <item.icon className="h-10 w-10 mx-auto mb-4 text-primary-500" /> {/* text-accent-500 */}
            <h3 className="text-xl font-semibold text-secondary-600 mb-2">{item.title}</h3>
            <div className="text-secondary-600"> {/* text-secondary-600 */}
              {item.lines.map((line, lineIndex) => (
                item.isLink && lineIndex === 0 ? (
                  <a key={lineIndex} href={item.href} className="text-secondary-600 hover:underline block"> {/* text-primary-600 */}
                    {line}
                  </a>
                ) : (
                  <p key={lineIndex}>{line}</p>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default GetInTouch