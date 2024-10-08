import React from 'react';

const RecyclingLocations = () => {
  return (
    <div className="locations-section py-8">
      <h2 className="text-3xl text-center font-bold text-green-700 mb-6">Our Locations</h2>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="location-box bg-opacity-60 bg-black p-4 rounded-lg shadow-lg max-w-xs text-white">
          <p className="text-lg font-semibold text-center text-green-300">Riyadh</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58035.560084095916!2d46.79100582167968!3d24.616014900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa701f5d21889%3A0x6bf6d84139b74474!2zRmlyc3QgU2F1ZGkgUmVjeWNsaW5nIHwg2YXYudmF2YQg2KfZhNij2YjZhCDYp9mE2LPYudmI2K_ZiiDZhNil2LnYp9iv2Kkg2KfZhNiq2K_ZiNmK2LE!5e0!3m2!1sen!2ssa!4v1728235385374!5m2!1sen!2ssa"
            width="100%"
            height="250"
            title='dd'
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded-lg w-full">
            <a href="https://maps.app.goo.gl/m5PBehL51gzNPam16" target="_blank" rel="noopener noreferrer">Take me to Google Maps</a>
          </button>
        </div>

        <div className="location-box bg-opacity-60 bg-black p-4 rounded-lg shadow-lg max-w-xs text-white">
          <p className="text-lg font-semibold text-center text-green-300">Jeddah</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606545.993602452!2d30.82325640000001!3d21.423985800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cb9376ad67b9%3A0x9c7905b2246ea583!2sHadabah%20Recycling%20Co.LTD!5e0!3m2!1sen!2ssa!4v1728235835300!5m2!1sen!2ssa"
            width="100%"
            height="250"
            style={{ border: 0 }}
            title='dddd'
            allowFullScreen
            loading="lazy"
          ></iframe>
          <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded-lg w-full">
            <a href="https://maps.app.goo.gl/yg6VGmFKj1HhMUaF7" target="_blank" rel="noopener noreferrer">Take me to Google Maps</a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default RecyclingLocations;
