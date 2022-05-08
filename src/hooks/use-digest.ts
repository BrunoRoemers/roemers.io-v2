import { useEffect, useState } from "react";

/**
 * Calculate the SHA-1 digest of the given input. Returns null until the calculation is complete.
 */
const useDigest = (input: string) => {
  const [digest, setdigest] = useState(null as string);

  useEffect(() => {
    if (!crypto || !crypto.subtle || !crypto.subtle.digest) {
      console.error('useDigest hook: crypto.subtle.digest(...) method not available');
      return;
    }

    const inBuffer = new TextEncoder().encode(input);
    crypto.subtle.digest('SHA-1', inBuffer).then(outBuffer => {
      const outArray = Array.from(new Uint8Array(outBuffer));
      const outHex = outArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setdigest(outHex);
    });
  }, [input]);

  return [digest];
}

export default useDigest;
