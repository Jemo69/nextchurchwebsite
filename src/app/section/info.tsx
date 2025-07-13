

const RCCGPraiseHouseInfo = () => {
  console.log('work to be done in a file RCCGPraiseHouseInfo')
  return (
    <div className="bg-background-50 text-text-500 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Our Services */}
        <div>
          <h2 className="text-2xl font-semibold text-secondary-500 mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li>
              <p><span className="font-semibold">Every Saturday  at 9:00 am</span> - Worship service (onsite and online via Zoom)</p>
            </li>
            <li>
              <p><span className="font-semibold">Every Wednesday at 9:00 am</span> - Word study (online via Zoom)</p>
            </li>
             <li>
              <p><span className="font-semibold">Every Thursday at 9:00 am</span> - Word study (online via Zoom)</p>
            </li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-2xl font-semibold text-secondary-500 mb-4">Our Location</h2>
          <p className="text-primary-600 mb-6">806 Reisterstown Rd, Pikesville, MD 21208, USA</p>

          <h2 className="text-2xl font-semibold text-secondary-500 mb-4">Our Contact Information</h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-text-600">Zoom Information</h3>
            <p className="text-text-500">Zoom ID: 999 599 0340</p>
            <p className="text-text-500">Passcode: g25Nab</p>
          </div>
           <div className="space-y-2 mt-4">
            <h3 className="font-semibold text-text-600">Prayer Dialer</h3>
            <p className="text-text-500">Dial in Number – 6025809563</p>
            <p className="text-text-500">Access Code – 6216756</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RCCGPraiseHouseInfo;
