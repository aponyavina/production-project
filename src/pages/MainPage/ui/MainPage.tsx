import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entity/Counter';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
            {/* <Counter /> */}
        </Page>
    );
});

export default MainPage;
