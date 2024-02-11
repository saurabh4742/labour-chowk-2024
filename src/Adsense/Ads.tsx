import React, { useEffect, useState } from 'react';

interface CustomWindow extends Window {
    adsbygoogle?: Array<unknown>;
}

declare let window: CustomWindow;

const AdSenseComponent: React.FC = () => {
  const [key, setKey] = useState<number>(0);
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [key]);

  const refreshAd = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div onClick={refreshAd}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-format="fluid"
           data-ad-layout-key="-gw-3+16-3z+5c"
           data-ad-client="ca-pub-2053678960981791"
           data-ad-slot="9088806319">
      </ins>
    </div>
  );
};

export default AdSenseComponent;
