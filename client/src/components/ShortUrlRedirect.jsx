import { Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShortUrlRedirect() {
  const { urlCode } = useParams();
  const serverBaseUrl = import.meta.env.VITE_APP_URI;

  useEffect(() => {
    let urlCode = window.location.pathname;
    if(urlCode.startsWith("/"))
        urlCode=urlCode.substring(1);
    
    if (urlCode) {
      const url = `${serverBaseUrl}/${urlCode}`;
      window.location.href=url;
    }
  }, [urlCode, serverBaseUrl]);

  return (
    <div>
      <Heading as="h3" size="xl" m={'3% 0% 2% 0%'}>
        Redirecting...
      </Heading>
    </div>
  );
}
