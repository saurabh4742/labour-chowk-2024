import React, { useEffect, useState } from 'react';

interface CustomWindow extends Window {
    adsbygoogle?: Array<unknown>;
}

declare let window: CustomWindow;

const AdSenseComponent: React.FC = () => {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
