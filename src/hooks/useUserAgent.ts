import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

export function useUserAgent() {
  const [osMessage, setOsMessage] = useState('');
  const [browserName, setBrowserName] = useState<string | undefined>('');

  useEffect(() => {
    const parser = UAParser(navigator.userAgent);
    setBrowserName(parser.browser.name);
    setOsMessage(getOsDesc(parser.os.name));
  }, []);

  return [osMessage, browserName];
}

function getOsDesc(name?: string) {
  if (name == 'iOS') {
    return `are holding your pretty iPhone in your hands. Perhaps feeling less convinced that Apple makes secure products.`;
  }

  if (name?.includes('Android')) {
    return `are holding an Android in your hands. You feel like you'd be better if you bought an iPhone.`;
  }

  if (name?.includes('Windows')) {
    return `are sitting in front of your Windows PC. Only 3 of us are here. Me, you & Mr. Gates.`;
  }

  if (name === 'Mac OS') {
    return `are sitting in front of your Mac. Perhaps feeling less convinced that Apple makes secure products.`;
  }

  if (name === 'Linux') {
    return `are sitting in front of your Linux PC. Feeling you are some sort of hackerman.`;
  }

  return 'Your computer is unconventional.';
}
