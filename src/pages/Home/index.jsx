import { Header } from './../../components/Header';
import { Main } from './../../components/Main';
import { Footer } from './../../components/Footer';
import ContentSmall from '../../components/Cards';
import Costumer from '../../components/Costumer';


export function Home() {
    return (
        <>
            <Header />
            <Main titleWhite={'Sua'} titleYellow={'mudança'} tWhiteSecond={'é'} tWhiteThree={'nosso'} tYellowSecond={'Negócio!'} subtitle={'Desde 1991, estamos carregados de mudança e recomeço pelo Brasil. Conhecemos o peso da dedicação por força de vontade, siga conosco.'} />
            <ContentSmall/>
            <Costumer/>
            <Footer />
        </>
    )
}