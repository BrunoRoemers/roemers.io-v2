import { useEffect, useState } from "react";

const _getFragment = () => window.location.hash.substring(1);

const _setFragment = (str: string) => window.location.hash = str;

/**
 * NOTE: the url fragment is the part after the # in the url
 */
const useUrlFragment = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  // internal state
  const [urlFragment, setUrlFragment] = useState(_getFragment());

  // listen for changes to the url
  // NOTE: effect only runs once during lifecycle of the component
  useEffect(() => {
    const eventListener = (event: HashChangeEvent) => setUrlFragment(_getFragment());
    
    window.addEventListener('hashchange', eventListener);
  
    return () => {
      window.removeEventListener('hashchange', eventListener);
    }
  }, [])
  
  // keep the url in sync with the internal state
  // NOTE: efect runs every time urlFragment has changed
  useEffect(() => {
    console.log('update!')
    if (urlFragment && urlFragment.trim()) {
      // set hash
      _setFragment(urlFragment);
    } else if (_getFragment()) {
      // remove hash
      window.history.pushState({}, '', window.location.href.split('#')[0]);
    }
  }, [urlFragment])

  return [urlFragment, setUrlFragment];
}

export default useUrlFragment;
