import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// для тестирования
const BugButton = () => {
    const [error, setError] = useState(false);
    const throwHandler = () => setError(true);
    const { t } = useTranslation('main');

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={throwHandler}
        >
            {t('throw error')}
        </Button>
    );
};

export default BugButton;
