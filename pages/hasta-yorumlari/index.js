
import {Fragment} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import Patience from '@/components/Patience';

export default function PatientComment() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{t.comments + ' Petra Hair Transplant'}</title>
        <meta name="description" content="Petra Hair Transplant, Petra Saç Ekimi, İstanbul Saç Ekimi " />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
        
        <div className={'patient'}>
            <div className={'patientContent'}>
                {t.patientDesc} 
            </div>
            <div className={'patientVideos'}>
                <Patience />
            </div>
        </div>
       
    </Fragment>
    );
};