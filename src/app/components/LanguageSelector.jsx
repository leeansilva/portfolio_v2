import { Button } from '@chakra-ui/react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div>
      <Button onClick={() => switchLanguage('en')}>English</Button>
      <Button onClick={() => switchLanguage('es')}>Español</Button>
    </div>
  );
};

export default LanguageSelector;
